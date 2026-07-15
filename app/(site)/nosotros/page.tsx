import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Nosotros" };

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra historia"
        title="Nosotros"
        description="La historia, filosofía y equipo detrás de PISÁO Gastrobar."
      />

      <Container className="space-y-16 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl">
            <Image
              src="/gallery/patacon-especial.jpg"
              alt="Patacón insignia de PISÁO"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-pisao-gold text-2xl">
              Nuestra historia
            </h2>
            <p className="text-pisao-cream-muted mt-3">
              PISÁO nace como La Casa del Patacón: cocina caribeña contemporánea
              con carácter urbano, pensada para compartir en la Terraza
              Panorámica del C.C. Mall Plaza Cartagena. Muy pronto vamos a
              compartir acá la historia completa detrás de la marca.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-pisao-gold text-2xl">
              La terraza panorámica
            </h2>
            <p className="text-pisao-cream-muted mt-3">
              {siteConfig.location.label}, en {siteConfig.location.address}:
              vista abierta sobre Cartagena, atardeceres largos y el ambiente
              relajado que define a PISÁO.
            </p>
          </div>
          <div className="relative order-1 aspect-4/3 overflow-hidden rounded-xl lg:order-2">
            <Image
              src="/gallery/terraza-atardecer.jpg"
              alt="Atardecer en la Terraza Panorámica de PISÁO"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-2xl">
          <h2 className="font-display text-pisao-gold text-2xl">El equipo</h2>
          <p className="text-pisao-cream-muted mt-3">
            Detrás de cada patacón hay un equipo de cocina y sala dedicado a que
            la experiencia en PISÁO se sienta cuidada de principio a fin.
            Próximamente presentamos acá a las personas detrás de la marca.
          </p>
        </div>
      </Container>
    </>
  );
}
