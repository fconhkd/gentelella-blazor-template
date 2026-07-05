namespace Gentelelle.Components.Dashboard;

public sealed record StatItem(
    string Label,
    string Value,
    string Delta,
    string Detail,
    string Icon,
    string Color);

public sealed record ActivityItem(
    string Initials,
    string Lead,
    string Text,
    string Time,
    string Color);

public sealed record OrderItem(
    string Order,
    string CustomerInitials,
    string Customer,
    string Product,
    string Amount,
    string Status,
    string StatusClass,
    string Date,
    string AvatarColor);

public sealed record StorageSegment(string Label, string Value, string WidthClass, string ColorClass);

public sealed record DeviceSegment(string Label, string Percent, string ColorClass);

public sealed record VisitorLocation(string Code, string Name, string Percent, string WidthClass);

public sealed record TaskItem(string Text, string Date, bool Done, string? PriorityClass = null);

public sealed record AppVersionItem(string Version, string Percent, string WidthClass, string ColorClass);
