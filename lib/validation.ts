export const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export type PartnerField = "name" | "email" | "company" | "app" | "want";

export type PartnerSubmission = {
  name: string;
  email: string;
  company: string;
  size: string;
  app: string;
  want: string;
};

export type FieldErrors = Partial<Record<PartnerField, true>>;

export const emptyPartnerSubmission: PartnerSubmission = {
  name: "",
  email: "",
  company: "",
  size: "",
  app: "",
  want: "",
};

/** Shared by the form and the route handler so both agree on what is valid. */
export function validatePartner(values: PartnerSubmission): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = true;
  if (!EMAIL_RE.test(values.email.trim())) errors.email = true;
  if (!values.company.trim()) errors.company = true;
  if (!values.app) errors.app = true;
  if (!values.want.trim()) errors.want = true;
  return errors;
}

export function isValidEmail(value: string) {
  return EMAIL_RE.test(value.trim());
}

/** Narrow an unknown JSON body into the submission shape. */
export function readPartnerSubmission(body: unknown): PartnerSubmission {
  const raw = (body ?? {}) as Record<string, unknown>;
  const str = (key: string) =>
    typeof raw[key] === "string" ? (raw[key] as string) : "";
  return {
    name: str("name"),
    email: str("email"),
    company: str("company"),
    size: str("size"),
    app: str("app"),
    want: str("want"),
  };
}
