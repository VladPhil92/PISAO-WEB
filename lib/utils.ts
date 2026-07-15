import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatCurrency(amount: number | string, currency = "COP") {
  const value = typeof amount === "string" ? Number(amount) : amount;
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

const DIACRITICS_REGEX = /[̀-ͯ]/g;

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
