import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contacto" };

export default function ContactoPage() {
  return (
    <>
      <PageHero eyebrow="Escríbenos" title="Contacto" />
      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <div className="text-pisao-cream-muted space-y-2">
          <p>{siteConfig.location.label}</p>
          <p>{siteConfig.location.address}</p>
          <p>{siteConfig.contact.phone}</p>
          <p>{siteConfig.contact.email}</p>
        </div>
        <div className="bg-pisao-carbon-soft aspect-video overflow-hidden rounded-xl">
          {/* TODO: iframe de Google Maps con siteConfig.location.googleMapsEmbedUrl */}
          <iframe
            title="Ubicación PISÁO Gastrobar"
            src={siteConfig.location.googleMapsEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </Container>
    </>
  );
}
