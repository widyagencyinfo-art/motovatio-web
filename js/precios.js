// Motovatio — PRECIOS. Es el único archivo que hay que tocar cuando Jorge manda la foto del A4 de precios:
// se cambia aquí la cifra y cambian a la vez la web y los carteles de la tienda (carteles.html).
//   pvp       = precio guía, en euros, sin ayudas
//   conAyudas = precio final con ayudas (sale con * y el pvp tachado) · ayudaTxt = de dónde sale ese precio
// Un modelo sin línea (o con la línea comentada) sale como «Precio a consultar».

// se suma a todas las motos y sale en pequeño debajo de cada precio
window.GASTOS = { eur: 300, txt: 'matriculación, preentrega y transporte' };

window.PRECIOS = {
  // Silence
  'silence-s01': { pvp: 4190, conAyudas: 2627, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S01 L3e
  'silence-s01plus': { pvp: 4990, conAyudas: 3307, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S01+ L3e
  'silence-s02-l1e': { pvp: 2990, conAyudas: 2542, ayudaTxt: 'con la deducción del IRPF' }, // S02 L1e
  'silence-s02-l3e': { pvp: 3490, conAyudas: 2032, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S02 L3e
  'silence-s04-l6e': { pvp: 8900, conAyudas: 6290, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S04 Nanocar L6e · 1 batería
  'silence-s04-l6e-vivo': { pvp: 10500, conAyudas: 7650, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S04 Nanocar L6e Vivo · 2 baterías
  'silence-s04-l7e-plus': { pvp: 11800, conAyudas: 8755, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S04 Nanocar L7e Plus · 2 baterías

  // Velca
  'velca-vortex': { pvp: 7290 },                                         // Vortex
  'velca-nude-lite': { pvp: 3990 },                                      // Nude Lite
  'velca-nude': { pvp: 5990 },                                           // Nude
  'velca-calima-s': { pvp: 3690 },                                       // Calima S
  'velca-tramontana-s': { pvp: 3790 },                                   // Tramontana S MY26
  'velca-one': { pvp: 6290 },                                            // One
  'velca-eon': { pvp: 7490 },                                            // Eon
  'velca-boraplus': { pvp: 1990 },                                       // Bora+
  'velca-calima-50': { pvp: 2790 },                                      // Calima 50

  // Next
  'next-mojito': { pvp: 3499 },                                          // Mojito
  'next-nx-plus': { pvp: 3499 },                                         // NX Plus
  'next-nx2': { pvp: 6499 },                                             // NX2
  'next-nx1': { pvp: 1899 },                                             // NX1
  'next-nx-plus-ls': { pvp: 2199 },                                      // NX Plus LS

  // NIU
  'niu-rqi-sport': { pvp: 3999 },                                        // RQi Sport
  'niu-nqi-gts': { pvp: 2699 },                                          // NQi GTS
  'niu-nqix-300': { pvp: 3599 },                                         // NQiX 300
  'niu-nqix-500': { pvp: 4599 },                                         // NQiX 500
  'niu-nqi-sport': { pvp: 1999 },                                        // NQi Sport
  'niu-nqix-150': { pvp: 2799 },                                         // NQiX 150
  'niu-fqix-150': { pvp: 2499 },                                         // FQiX 150
  'niu-xqi3-street': { pvp: 3499 }, // XQi3 Street (web oficial de NIU España, «desde 3.499 €», 13-nov)

  // Zero
  'zero-s-11-kw': { pvp: 17280 },                                        // S 11 kW
  'zero-ds-11-kw': { pvp: 17960 },                                       // DS 11 kW
  'zero-xe': { pvp: 6715 },                                              // XE
  'zero-ls1': { pvp: 5275 },                                             // LS1
  'zero-xb': { pvp: 4680 },                                              // XB

  // Ultraviolette
  'ultraviolette-f77-mach-2-recon': { pvp: 9990 },                       // F77 Mach 2 Recon
  'ultraviolette-f77-superstreet-recon': { pvp: 10390 },                 // F77 SuperStreet Recon

  // Vmoto
  'vmoto-tc-max': { pvp: 3950 },                                         // TC Max
  'vmoto-stash': { pvp: 7200 },                                          // Stash
  'vmoto-cpx': { pvp: 4095 },                                            // CPX
  'vmoto-cpx-explorer': { pvp: 5475 },                                   // CPX Explorer
  'vmoto-tc': { pvp: 2995 },                                             // TC
  'vmoto-tsx': { pvp: 2995 },                                            // TSX
  'vmoto-cu': { pvp: 1795 },                                             // CU
  'vmoto-citi': { pvp: 2995 },                                           // CITI
  // --- gama completa (13-nov-2026, webs oficiales) ---
  'zero-srf': { pvp: 21090 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-srf)
  'zero-srf-edicion-20-aniversario': { pvp: 23090 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-srf)
  'zero-dsrx': { pvp: 21600 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-dsrx)
  'zero-dsrx-black-forest': { pvp: 24650 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-dsrx)
  'zero-ls3': { pvp: 6925 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-ls3)
  'niu-fqix-300': { pvp: 2999 }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-300)
  'niu-fqix-500-2-baterias': { pvp: 4699 }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-500)
  'niu-fqix-500-3-baterias': { pvp: 5548 }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-500)
  'niu-fqix-razer-city-scout': { pvp: 2599 }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-Razer)
  'niu-fqix-razer-road-warrior': { pvp: 3099 }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-Razer)
  'vmoto-citi-2-baterias': { pvp: 3865 }, // gama completa 13-nov (https://vmoto.com/es/models/citi-2)
  // --- gama completa (13-nov-2026, webs oficiales) ---
  'silence-s04-customized': { pvp: 8900, conAyudas: 6290, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://www.silence.eco/es/s04-customized)
  'velca-nude-lite-2-baterias': { pvp: 4990 }, // gama completa 13-nov (https://www.velcamotor.com/velca-nude)
  'next-mojito-powerpack': { pvp: 4399 }, // gama completa 13-nov (https://wearenextmotors.com/products/mojito)
  'next-nx1-powerpack': { pvp: 2499 }, // gama completa 13-nov (https://wearenextmotors.com/products/nx1)
  'next-nx-plus-ls-2-baterias': { pvp: 2999 }, // gama completa 13-nov (https://wearenextmotors.com/products/nxplusls)
};
