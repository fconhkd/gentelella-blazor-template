(() => {
  const root = document.documentElement;
  const body = document.body;
  const mobileQuery = window.matchMedia('(max-width: 768px)');

  const getSidebar = () => document.querySelector('.sidebar');
  const getBackdrop = () => document.querySelector('[data-sidebar-backdrop]');

  const setMobileSidebar = (open) => {
    const sidebar = getSidebar();
    const backdrop = getBackdrop();
    if (!sidebar || !backdrop) {
      return;
    }

    sidebar.classList.toggle('open', open);
    body.classList.toggle('sidebar-open', open);
    backdrop.hidden = !open;
  };

  const toggleSidebar = () => {
    if (mobileQuery.matches) {
      setMobileSidebar(!getSidebar()?.classList.contains('open'));
      return;
    }

    body.classList.toggle('sidebar-rail');
  };

  const toggleTheme = () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);

    try {
      localStorage.setItem('theme', next);
    } catch (error) {
    }
  };

  const closeUserMenus = (exceptMenu) => {
    document.querySelectorAll('[data-user-menu]').forEach((menu) => {
      if (menu === exceptMenu) {
        return;
      }

      const panel = menu.querySelector('[data-user-menu-panel]');
      const button = menu.querySelector('[data-user-menu-button]');
      if (panel) {
        panel.hidden = true;
      }
      if (button) {
        button.setAttribute('aria-expanded', 'false');
      }
      menu.classList.remove('open');
    });
  };

  const toggleUserMenu = (button) => {
    const menu = button.closest('[data-user-menu]');
    const panel = menu?.querySelector('[data-user-menu-panel]');
    if (!menu || !panel) {
      return;
    }

    const shouldOpen = panel.hidden;
    closeUserMenus(menu);
    panel.hidden = !shouldOpen;
    button.setAttribute('aria-expanded', String(shouldOpen));
    menu.classList.toggle('open', shouldOpen);
  };

  document.addEventListener('click', (event) => {
    const userMenuButton = event.target.closest('[data-user-menu-button]');
    if (userMenuButton) {
      event.preventDefault();
      toggleUserMenu(userMenuButton);
      return;
    }

    if (!event.target.closest('[data-user-menu]')) {
      closeUserMenus();
    }

    const sidebarToggle = event.target.closest('[data-sidebar-toggle]');
    if (sidebarToggle) {
      event.preventDefault();
      toggleSidebar();
      return;
    }

    if (event.target.closest('[data-sidebar-backdrop]')) {
      setMobileSidebar(false);
      return;
    }

    const themeToggle = event.target.closest('[data-theme-toggle]');
    if (themeToggle) {
      event.preventDefault();
      toggleTheme();
      return;
    }

    const navToggle = event.target.closest('.nav-toggle');
    if (navToggle) {
      const tree = navToggle.closest('.nav-tree');
      const nextExpanded = !tree.classList.contains('open');
      tree.classList.toggle('open', nextExpanded);
      navToggle.setAttribute('aria-expanded', String(nextExpanded));
      return;
    }

    const chartTab = event.target.closest('.chart-tab');
    if (chartTab) {
      chartTab.parentElement.querySelectorAll('.chart-tab').forEach((tab) => tab.classList.remove('active'));
      chartTab.classList.add('active');
      return;
    }

    const toggle = event.target.closest('.toggle');
    if (toggle) {
      toggle.classList.toggle('on');
      return;
    }

    const todoToggle = event.target.closest('.todo-cb');
    if (todoToggle) {
      todoToggle.classList.toggle('done');
      const row = todoToggle.closest('.todo-row');
      row?.classList.toggle('done');

      const card = todoToggle.closest('.card');
      const counter = card?.querySelector('[data-todo-counter]');
      if (counter) {
        const rows = card.querySelectorAll('.todo-row');
        const done = card.querySelectorAll('.todo-row.done');
        counter.textContent = `${rows.length - done.length} of ${rows.length} remaining`;
      }
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeUserMenus();
    }
  });

  mobileQuery.addEventListener('change', () => {
    if (!mobileQuery.matches) {
      setMobileSidebar(false);
    }
  });
})();
