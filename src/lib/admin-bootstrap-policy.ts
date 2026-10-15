export const INITIAL_SUPER_ADMIN_EMAIL = "harsh@rishishwarindustry.in";

export function isInitialSuperAdminEmail(email: string): boolean {
  return email.trim().toLowerCase() === INITIAL_SUPER_ADMIN_EMAIL;
}