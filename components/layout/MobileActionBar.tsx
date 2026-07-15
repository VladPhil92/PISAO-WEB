import { Button } from "@/components/ui/Button";

/**
 * Barra de acción fija solo en mobile/tablet (el header ya muestra
 * "Reservar"/"Pedir Ahora" de forma persistente desde `lg:`). Sin esto,
 * los CTA principales solo eran alcanzables abriendo el menú hamburguesa.
 */
export function MobileActionBar() {
  return (
    <div
      className="border-pisao-gold/15 bg-pisao-carbon/95 supports-backdrop-blur:bg-pisao-carbon/80 fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t p-3 backdrop-blur lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <Button href="/reservas" variant="outline" className="flex-1">
        Reservar
      </Button>
      <Button href="/menu" variant="primary" className="flex-1">
        Pedir Ahora
      </Button>
    </div>
  );
}
