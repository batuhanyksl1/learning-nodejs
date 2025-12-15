export const Roles = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];

export const RoleHierarchy: Record<Role, number> = {
  [Roles.ADMIN]: 3,
  [Roles.MODERATOR]: 2,
  [Roles.USER]: 1,
};
