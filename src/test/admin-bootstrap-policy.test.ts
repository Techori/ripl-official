import { describe, expect, it } from "vitest";
import { INITIAL_SUPER_ADMIN_EMAIL, isInitialSuperAdminEmail } from "@/lib/admin-bootstrap-policy";

describe("initial Super Admin bootstrap access", () => {
  it("accepts only the requested Super Admin email", () => {
    expect(INITIAL_SUPER_ADMIN_EMAIL).toBe("harsh@rishishwarindustry.in");
    expect(isInitialSuperAdminEmail("harsh@rishishwarindustry.in")).toBe(true);
  });

  it("normalizes case and surrounding spaces without allowing another email", () => {
    expect(isInitialSuperAdminEmail("  HARSH@RISHISHWARINDUSTRY.IN ")).toBe(true);
    expect(isInitialSuperAdminEmail("other@rishishwarindustry.in")).toBe(false);
  });
});