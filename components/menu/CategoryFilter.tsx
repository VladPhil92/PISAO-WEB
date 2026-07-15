"use client";

import { cn } from "@/lib/utils";

export interface Category {
  slug: string;
  nombre: string;
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: Category[];
  active: string | null;
  onChange: (slug: string | null) => void;
}) {
  return (
    <div className="-mx-4 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
      <button
        onClick={() => onChange(null)}
        className={cn(
          "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
          active === null
            ? "border-pisao-gold bg-pisao-gold text-pisao-carbon"
            : "border-pisao-gold/30 text-pisao-cream-muted hover:border-pisao-gold",
        )}
      >
        Todos
      </button>
      {categories.map((c) => (
        <button
          key={c.slug}
          onClick={() => onChange(c.slug)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors",
            active === c.slug
              ? "border-pisao-gold bg-pisao-gold text-pisao-carbon"
              : "border-pisao-gold/30 text-pisao-cream-muted hover:border-pisao-gold",
          )}
        >
          {c.nombre}
        </button>
      ))}
    </div>
  );
}
