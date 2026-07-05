namespace Gentelelle.Components.Users;

public sealed record UserManagementItem(
    string Name,
    string Email,
    string Initials,
    string AvatarClass,
    string Role,
    string RoleClass,
    string Status,
    string StatusClass,
    string LastActive,
    string Joined,
    bool IsPending = false);
