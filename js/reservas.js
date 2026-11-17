/* Motovatio · RESERVAS online (17-nov-2026)
   Cuando Jorge tenga su cuenta de Stripe, se pegan aquí los dos «Payment Links» (Stripe → Enlaces de pago):
     moto     = enlace de 300 € (cualquier moto del catálogo)
     novedad  = enlace de 500 € (las de Novedades, reserva anticipada)
   Mientras estén vacíos, el botón de pagar abre WhatsApp con la reserva ya escrita (no se pierde ninguna). */
window.RESERVAS = {
  moto: { eur: 300, stripe: 'https://buy.stripe.com/bJe5kCgKe9De1X3dSCfbq00' },
  novedad: { eur: 500, stripe: 'https://buy.stripe.com/bJe8wObpUcPq6dj5m6fbq01' }
};
