# Gentelella Blazor Template

Template administrativo em Blazor Web App baseado no visual do Gentelella v4.

O projeto adapta o tema Gentelella para componentes Razor, com layout administrativo responsivo, sidebar, topbar, menu de usuario, dashboard, paginas de administracao e uma tabela dinamica interativa.

## Recursos

- Layout admin com sidebar recolhivel, topbar fixa, breadcrumb e alternancia de tema.
- Dashboard inicial com cards, graficos SVG, listas, atividades e tabela de pedidos.
- Menu suspenso do usuario com links para perfil, configuracoes e logoff.
- Pagina de perfil inspirada no template original do Gentelella.
- Pagina de configuracoes com navegacao lateral e secoes de conta, notificacoes, privacidade e aparencia.
- Pagina de login dedicada com layout de autenticacao.
- Pagina de gerenciamento de usuarios em `/users`.
- Tabela dinamica de weather em `/weather`, com busca, ordenacao, paginacao, page size, refresh e export CSV.
- Assets do Gentelella servidos localmente em `wwwroot/gentelella`.

## Stack

- .NET 10
- ASP.NET Core Razor Components
- Blazor Web App com Interactive Server Components
- Gentelella v4
- Bootstrap assets estaticos

## Requisitos

- .NET SDK 10.0 ou superior
- Git

Verifique o SDK instalado:

```powershell
dotnet --version
```

## Como executar

Restaure e rode o projeto:

```powershell
dotnet restore src\Gentelelle.csproj
dotnet run --project src\Gentelelle.csproj --launch-profile http
```

Acesse:

```text
http://localhost:5086
```

Tambem existe o perfil HTTPS:

```powershell
dotnet run --project src\Gentelelle.csproj --launch-profile https
```

URLs do perfil HTTPS:

```text
https://localhost:7184
http://localhost:5086
```

## Build

```powershell
dotnet build src\Gentelelle.csproj
```

## Rotas principais

| Rota | Pagina |
| --- | --- |
| `/` | Dashboard |
| `/weather` | Dynamic table de weather |
| `/users` | Gerenciamento de usuarios |
| `/profile` | Perfil do usuario |
| `/settings` | Configuracoes |
| `/login` | Login |

## Estrutura

```text
src/
  Components/
    Dashboard/          Componentes do dashboard inicial
    Layout/             Shell Gentelella: sidebar, topbar, auth layout e menu do usuario
    Pages/              Paginas roteaveis da aplicacao
    Users/              Modelos e tabela da pagina de usuarios
    App.razor           Documento raiz e referencias de CSS/JS
    Routes.razor        Configuracao do router
  wwwroot/
    gentelella/         CSS, JS, favicon e licenca do Gentelella
    lib/bootstrap/      Assets estaticos do Bootstrap
    app.css             Ajustes especificos do template Blazor
  Program.cs            Configuracao do pipeline ASP.NET Core
  Gentelelle.csproj     Projeto web .NET
```

## Desenvolvimento

O layout principal fica em:

```text
src\Components\Layout\MainLayout.razor
```

Os componentes de navegacao ficam em:

```text
src\Components\Layout\GentelellaSidebar.razor
src\Components\Layout\GentelellaTopbar.razor
src\Components\Layout\UserAccountMenu.razor
```

Para adicionar uma nova pagina:

1. Crie um arquivo `.razor` em `src\Components\Pages`.
2. Adicione a diretiva `@page "/sua-rota"`.
3. Inclua o link correspondente em `GentelellaSidebar.razor`.
4. Se necessario, atualize o breadcrumb em `GentelellaTopbar.razor`.

## Assets e licencas

Os arquivos do Gentelella ficam em `src\wwwroot\gentelella`, incluindo a licenca original em:

```text
src\wwwroot\gentelella\LICENSE.txt
```

## Status

Este repositorio funciona como ponto de partida para paineis administrativos em Blazor. A base visual ja esta montada; os dados usados nas paginas atuais sao mockados e podem ser substituidos por servicos, APIs ou banco de dados conforme a necessidade do produto.
