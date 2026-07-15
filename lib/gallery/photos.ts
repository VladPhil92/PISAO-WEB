export interface GalleryPhoto {
  slug: string;
  alt: string;
  categoria: "comida" | "terraza";
}

/**
 * Fotografía real de PISÁO. Los archivos viven en /public/gallery/,
 * optimizados a JPEG desde los originales entregados por el cliente.
 */
export const galleryPhotos: GalleryPhoto[] = [
  {
    slug: "patacon-especial",
    alt: "Patacón cargado con queso y hojuelas crocantes",
    categoria: "comida",
  },
  {
    slug: "patacon-mixto",
    alt: "Patacón con chorizo, carne, guacamole y cebolla encurtida",
    categoria: "comida",
  },
  {
    slug: "patacon-chicharron",
    alt: "Patacón con chicharrón, hierbas y cebolla encurtida",
    categoria: "comida",
  },
  {
    slug: "patacon-pollo",
    alt: "Patacón con pollo desmechado, tomate y encurtidos",
    categoria: "comida",
  },
  {
    slug: "patacon-carne-guacamole",
    alt: "Patacón con carne desmechada, guacamole y queso",
    categoria: "comida",
  },
  {
    slug: "patacones-trio",
    alt: "Trío de patacones con queso y cebolla encurtida",
    categoria: "comida",
  },
  {
    slug: "patacones-cerdo",
    alt: "Patacones con cerdo, queso y cebolla",
    categoria: "comida",
  },
  {
    slug: "patacones-bowl",
    alt: "Bowl de patacones con salsas y queso costeño",
    categoria: "comida",
  },
  {
    slug: "hamburguesa-clasica",
    alt: "Hamburguesa PISÁO con queso derretido",
    categoria: "comida",
  },
  {
    slug: "hamburguesa-vegetales",
    alt: "Hamburguesa con lechuga, tomate y cebolla morada",
    categoria: "comida",
  },
  {
    slug: "hamburguesa-patacon-chips",
    alt: "Hamburguesa cortada a la mitad con chips de patacón",
    categoria: "comida",
  },
  {
    slug: "bolitas-rellenas",
    alt: "Bolitas rellenas sobre hoja de plátano",
    categoria: "comida",
  },
  {
    slug: "postre-platano-flambeado",
    alt: "Plátano flambeado con helado",
    categoria: "comida",
  },
  {
    slug: "pisao-kids",
    alt: "Bowl PISÁO Kids con tostones y tiras de pollo",
    categoria: "comida",
  },
  {
    slug: "terraza-cervezas",
    alt: "Cervezas artesanales en la terraza panorámica al atardecer",
    categoria: "terraza",
  },
  {
    slug: "terraza-atardecer",
    alt: "Vista de la terraza de PISÁO al atardecer sobre Cartagena",
    categoria: "terraza",
  },
];
