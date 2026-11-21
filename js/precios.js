// Motovatio — PRECIOS. Es el único archivo que hay que tocar cuando Jorge manda la foto del A4 de precios:
// se cambia aquí la cifra y cambian a la vez la web y los carteles de la tienda (carteles.html).
//   pvp       = precio guía, en euros, sin ayudas
//   conAyudas = precio final con Plan Auto+ y la deducción del 15 % del IRPF · planAuto / irpf = cuánto es cada ayuda
//   CÓMO SE CALCULA (17-nov-2026, RD 609/2026 Programa Auto+ y LIRPF DA 58.ª): Plan Auto+ máx. 1.100 € en motos L3e (más de 45 km/h y
//   como mucho 10.000 € sin IVA = 12.100 € con IVA) y 1.500 € en cuadriciclos L6e/L7e (Silence S04). De ese máximo: 75 % a todo eléctrico,
//   +15 % si está en la LISTA BLANCA del Ministerio con «Montaje europeo» SÍ, +10 % si además «Contenido europeo en batería» SÍ.
//   Lista blanca del 16-11-2026: Silence (SÍ/SÍ → 100 %); Velca Calima S, Eon, Tramontana S, Vortex y Zero LS1, XE (SÍ/NO → 90 %);
//   el resto, 75 % (825 €). IRPF: 15 % de (pvp − Plan Auto+), compras hasta el 31-12-2026. Ciclomotores (L1e, 45 km/h): NINGUNA de las dos.
//   Para recalcular: node ~/motovatio-bot/scripts/ayudas.mjs (si cambia un pvp o sale otra lista blanca).
// Un modelo sin línea (o con la línea comentada) sale como «Precio a consultar».

// se suma a todas las motos y sale en pequeño debajo de cada precio
window.GASTOS = { eur: 300, txt: 'matriculación, preentrega y transporte', especiales: { 'silence-s04-l6e': 450, 'silence-s04-l6e-vivo': 450, 'silence-s04-l7e-plus': 450, 'silence-s04-customized': 450 } };

window.PRECIOS = {
  // Silence
  'silence-s01': { pvp: 4190, conAyudas: 2627, planAuto: 1100, irpf: 464, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S01 L3e
  'silence-s01plus': { pvp: 4990, conAyudas: 3307, planAuto: 1100, irpf: 584, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S01+ L3e
  'silence-s02-l1e': { pvp: 2990 }, // S02 L1e
  'silence-s02-l3e': { pvp: 3490, conAyudas: 2032, planAuto: 1100, irpf: 359, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S02 L3e
  'silence-s04-l6e': { pvp: 8900, conAyudas: 6290, planAuto: 1500, irpf: 1110, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S04 Nanocar L6e · 1 batería
  'silence-s04-l6e-vivo': { pvp: 10500, conAyudas: 7650, planAuto: 1500, irpf: 1350, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S04 Nanocar L6e Vivo · 2 baterías
  'silence-s04-l7e-plus': { pvp: 11800, conAyudas: 8755, planAuto: 1500, irpf: 1545, ayudaTxt: 'con Plan Auto+ e IRPF' }, // S04 Nanocar L7e Plus · 2 baterías

  // Velca
  'velca-vortex': { pvp: 7290, conAyudas: 5355, planAuto: 990, irpf: 945, ayudaTxt: 'con Plan Auto+ e IRPF' },                                         // Vortex
  'velca-nude-lite': { pvp: 3990, conAyudas: 2690, planAuto: 825, irpf: 475, ayudaTxt: 'con Plan Auto+ e IRPF' },                                      // Nude Lite
  'velca-nude': { pvp: 5990, conAyudas: 4390, planAuto: 825, irpf: 775, ayudaTxt: 'con Plan Auto+ e IRPF' },                                           // Nude
  'velca-calima-s': { pvp: 3690, conAyudas: 2295, planAuto: 990, irpf: 405, ayudaTxt: 'con Plan Auto+ e IRPF' },                                       // Calima S
  'velca-tramontana-s': { pvp: 3790, conAyudas: 2380, planAuto: 990, irpf: 420, ayudaTxt: 'con Plan Auto+ e IRPF' },                                   // Tramontana S MY26
  'velca-one': { pvp: 6290, conAyudas: 4645, planAuto: 825, irpf: 820, ayudaTxt: 'con Plan Auto+ e IRPF' },                                            // One
  'velca-one-lite': { pvp: 5390, conAyudas: 3880, planAuto: 825, irpf: 685, ayudaTxt: 'con Plan Auto+ e IRPF' },                                       // One Lite
  'velca-eon': { pvp: 7490, conAyudas: 5525, planAuto: 990, irpf: 975, ayudaTxt: 'con Plan Auto+ e IRPF' },                                            // Eon
  'velca-boraplus': { pvp: 1990 },                                       // Bora+
  'velca-calima-50': { pvp: 2790 },                                      // Calima 50

  // Next
  'next-mojito': { pvp: 3499, conAyudas: 2273, planAuto: 825, irpf: 401, ayudaTxt: 'con Plan Auto+ e IRPF' },                                          // Mojito
  'next-nx-plus': { pvp: 3499, conAyudas: 2273, planAuto: 825, irpf: 401, ayudaTxt: 'con Plan Auto+ e IRPF' },                                         // NX Plus
  'next-nx2': { pvp: 6499, conAyudas: 4823, planAuto: 825, irpf: 851, ayudaTxt: 'con Plan Auto+ e IRPF' },                                             // NX2
  'next-nx1': { pvp: 1899 },                                             // NX1
  'next-nx-plus-ls': { pvp: 2199 },                                      // NX Plus LS

  // NIU
  'niu-rqi-sport': { pvp: 3999, conAyudas: 2698, planAuto: 825, irpf: 476, ayudaTxt: 'con Plan Auto+ e IRPF' },                                        // RQi Sport
  'niu-nqi-gts': { pvp: 2699, conAyudas: 1593, planAuto: 825, irpf: 281, ayudaTxt: 'con Plan Auto+ e IRPF' },                                          // NQi GTS
  'niu-nqix-300': { pvp: 3599, conAyudas: 2358, planAuto: 825, irpf: 416, ayudaTxt: 'con Plan Auto+ e IRPF' },                                         // NQiX 300
  'niu-nqix-500': { pvp: 4599, conAyudas: 3208, planAuto: 825, irpf: 566, ayudaTxt: 'con Plan Auto+ e IRPF' },                                         // NQiX 500
  'niu-nqi-sport': { pvp: 1999 },                                        // NQi Sport
  'niu-nqix-150': { pvp: 2799 },                                         // NQiX 150
  'niu-fqix-150': { pvp: 2499 },                                         // FQiX 150
  'niu-xqi3-street': { pvp: 3499 }, // XQi3 Street (web oficial de NIU España, «desde 3.499 €», 13-nov)

  // Zero
  'zero-s-11-kw': { pvp: 17280 },                                        // S 11 kW
  'zero-ds-11-kw': { pvp: 17960 },                                       // DS 11 kW
  'zero-xe': { pvp: 6715, conAyudas: 4866, planAuto: 990, irpf: 859, ayudaTxt: 'con Plan Auto+ e IRPF' },                                              // XE
  'zero-ls1': { pvp: 5275, conAyudas: 3642, planAuto: 990, irpf: 643, ayudaTxt: 'con Plan Auto+ e IRPF' },                                             // LS1
  'zero-xb': { pvp: 4680 },                                              // XB

  // Ultraviolette
  'ultraviolette-f77-mach-2-recon': { pvp: 9990, conAyudas: 7790, planAuto: 825, irpf: 1375, ayudaTxt: 'con Plan Auto+ e IRPF' },                       // F77 Mach 2 Recon
  'ultraviolette-f77-superstreet-recon': { pvp: 10390, conAyudas: 8130, planAuto: 825, irpf: 1435, ayudaTxt: 'con Plan Auto+ e IRPF' },                 // F77 SuperStreet Recon

  // Vmoto
  'vmoto-tc-max': { pvp: 3950, conAyudas: 2656, planAuto: 825, irpf: 469, ayudaTxt: 'con Plan Auto+ e IRPF' },                                         // TC Max
  'vmoto-stash': { pvp: 7200, conAyudas: 5419, planAuto: 825, irpf: 956, ayudaTxt: 'con Plan Auto+ e IRPF' },                                          // Stash
  'vmoto-cpx': { pvp: 4095, conAyudas: 2780, planAuto: 825, irpf: 491, ayudaTxt: 'con Plan Auto+ e IRPF' },                                            // CPX
  'vmoto-cpx-explorer': { pvp: 5475, conAyudas: 3953, planAuto: 825, irpf: 698, ayudaTxt: 'con Plan Auto+ e IRPF' },                                   // CPX Explorer
  'vmoto-tc': { pvp: 2995 },                                             // TC
  'vmoto-tsx': { pvp: 2995 },                                            // TSX
  'vmoto-cu': { pvp: 1795 },                                             // CU
  'vmoto-citi': { pvp: 2995 },                                           // CITI
  // --- gama completa (13-nov-2026, webs oficiales) ---
  'zero-srf': { pvp: 21090 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-srf)
  'zero-srf-edicion-20-aniversario': { pvp: 23090 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-srf)
  'zero-dsrx': { pvp: 21600 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-dsrx)
  'zero-dsrx-black-forest': { pvp: 24650 }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-dsrx)
  'zero-ls3': { pvp: 6925, conAyudas: 5185, planAuto: 825, irpf: 915, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://www.zeromotorcycles.com/es-es/model/zero-ls3)
  'niu-fqix-300': { pvp: 2999, conAyudas: 1848, planAuto: 825, irpf: 326, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-300)
  'niu-fqix-500-2-baterias': { pvp: 4699, conAyudas: 3293, planAuto: 825, irpf: 581, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-500)
  'niu-fqix-500-3-baterias': { pvp: 5548, conAyudas: 4015, planAuto: 825, irpf: 708, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-500)
  'niu-fqix-razer-city-scout': { pvp: 2599 }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-Razer)
  'niu-fqix-razer-road-warrior': { pvp: 3099, conAyudas: 1933, planAuto: 825, irpf: 341, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://global.niu.com/es/product/FQiX-Razer)
  'vmoto-citi-2-baterias': { pvp: 3865 }, // gama completa 13-nov (https://vmoto.com/es/models/citi-2)
  // --- gama completa (13-nov-2026, webs oficiales) ---
  'silence-s04-customized': { pvp: 8900, conAyudas: 6290, planAuto: 1500, irpf: 1110, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://www.silence.eco/es/s04-customized)
  'velca-nude-lite-2-baterias': { pvp: 4990, conAyudas: 3540, planAuto: 825, irpf: 625, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://www.velcamotor.com/velca-nude)
  'next-mojito-powerpack': { pvp: 4399, conAyudas: 3038, planAuto: 825, irpf: 536, ayudaTxt: 'con Plan Auto+ e IRPF' }, // gama completa 13-nov (https://wearenextmotors.com/products/mojito)
  'next-nx1-powerpack': { pvp: 2499 }, // gama completa 13-nov (https://wearenextmotors.com/products/nx1)
  'next-nx-plus-ls-2-baterias': { pvp: 2999 }, // gama completa 13-nov (https://wearenextmotors.com/products/nxplusls)

  // Nerva (17-nov-2026, PVP de la marca)
  'nerva-exe-ii': { pvp: 7290, conAyudas: 5495, planAuto: 825, irpf: 970, ayudaTxt: 'con Plan Auto+ e IRPF' },
  'nerva-exe': { pvp: 5990, conAyudas: 4390, planAuto: 825, irpf: 775, ayudaTxt: 'con Plan Auto+ e IRPF' },
  'nerva-lift': { pvp: 4690, conAyudas: 3285, planAuto: 825, irpf: 580, ayudaTxt: 'con Plan Auto+ e IRPF' },
  'nerva-cargo': { pvp: 5590, conAyudas: 4050, planAuto: 825, irpf: 715, ayudaTxt: 'con Plan Auto+ e IRPF' },
};
