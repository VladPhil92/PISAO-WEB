import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = { title: "Galería" };

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        eyebrow="PISÁO en imágenes"
        title="Galería"
        description="Fotografía de alto contraste de la terraza, la cocina y la experiencia PISÁO."
      />
      <Container className="grid grid-cols-2 gap-3 py-16 sm:grid-cols-3 lg:grid-cols-4">
        {/* TODO: integrar feed de Instagram + galería propia */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="bg-pisao-carbon-soft aspect-square rounded-lg"
          />
        ))}
      </Container>
    </>
  );
}
