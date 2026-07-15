import type { MenuCardProduct } from "@/components/menu/MenuCard";

/**
 * Datos de ejemplo únicamente para desarrollo local sin base de datos
 * conectada. En producción, /app/menu debe leer de Prisma
 * (`prisma.categoria.findMany({ include: { productos: true } })`).
 *
 * Estos nombres/precios son ficticios y NO deben usarse como el menú
 * real. Cuando llegue la carta real (nombres, categorías, precios),
 * reemplazar este archivo por completo o cargar los datos vía seed.
 *
 * Ya hay fotografía real de producto lista para usar en `imagenUrl`
 * (ej. `/gallery/patacon-especial.jpg`) — ver `lib/gallery/photos.ts`
 * para el listado completo de slugs disponibles (patacones,
 * hamburguesas, etc.). Solo falta mapear cada foto a su plato real
 * una vez se defina la carta oficial.
 */
export const categoriasPlaceholder = [
  { id: "cat-entradas", nombre: "Entradas", slug: "entradas" },
  { id: "cat-fuertes", nombre: "Fuertes", slug: "fuertes" },
  { id: "cat-cocteles", nombre: "Cócteles", slug: "cocteles" },
  { id: "cat-postres", nombre: "Postres", slug: "postres" },
];

export const productosPlaceholder: (MenuCardProduct & {
  categoriaSlug: string;
})[] = [
  {
    id: "prod-1",
    nombre: "Ceviche caribeño",
    slug: "ceviche-caribeno",
    descripcion:
      "Pescado blanco, leche de tigre de coco, camote y chicharrón de plátano.",
    precio: 38000,
    imagenUrl: null,
    disponible: true,
    categoriaSlug: "entradas",
  },
  {
    id: "prod-2",
    nombre: "Arepa de huevo PISÁO",
    slug: "arepa-de-huevo-pisao",
    descripcion:
      "Versión gourmet del clásico cartagenero con salsa de ají amazónico.",
    precio: 22000,
    imagenUrl: null,
    disponible: true,
    categoriaSlug: "entradas",
  },
  {
    id: "prod-3",
    nombre: "Mero a la brasa",
    slug: "mero-a-la-brasa",
    descripcion:
      "Mero fresco del Caribe, arroz de coco, patacón y ensalada tropical.",
    precio: 68000,
    imagenUrl: null,
    disponible: true,
    categoriaSlug: "fuertes",
  },
  {
    id: "prod-4",
    nombre: "Piña Colada PISÁO",
    slug: "pina-colada-pisao",
    descripcion: "Ron añejo, piña asada, coco y un toque de vainilla.",
    precio: 32000,
    imagenUrl: null,
    disponible: true,
    categoriaSlug: "cocteles",
  },
];
