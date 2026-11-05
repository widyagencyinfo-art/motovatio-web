// Motovatio — datos de la web (marcas y modelos). Los precios van aparte, en js/precios.js.
window.MOTOVATIO = {
  nombre: 'Motovatio',
  lema: 'Motos eléctricas y movilidad urbana',
  grupo: 'Grupo PlusAuto',
  web: 'motovatio.com',
  whatsapp: '34624078107',
  telefono: '624 078 107',
  email: 'info@motovatio.com',
  instagram: 'motovatio.sevilla',
  direccion: 'Avda. Cristóbal Colón, 39 · 41701 Dos Hermanas (Sevilla)',
  horario: 'Lunes a viernes, de 10:30 a 13:00 y de 17:30 a 19:30 · Sábados, de 10:30 a 13:00',
  mapa: 'https://www.google.com/maps?q=Avenida+Crist%C3%B3bal+Col%C3%B3n+39+Dos+Hermanas&output=embed',
  plusauto: 'https://plusauto-web.vercel.app',
  plusautoWhatsapp: '34624078107'
};

// tipos (son también los filtros): moto · scooter · ciclomotor (45 km/h) · reparto · nanocar
window.TIPOS = {
  moto:    { n: 'Motos',              corto: 'Moto' },
  scooter: { n: 'Scooters',           corto: 'Scooter' },
  ciclo:   { n: 'Ciclomotores',       corto: 'Ciclomotor' },
  reparto: { n: 'Reparto y trabajo',  corto: 'Reparto' },
  nano:    { n: 'Nanocars',           corto: 'Nanocar' }
};

// las cuatro de «Motos de carretera, con el carnet de coche» de la portada: [id del modelo, etiqueta]
window.DESTACADAS = [["ultraviolette-f77-mach-2-recon", "155 km/h"], ["zero-s-11-kw", "262 km en ciudad"], ["vmoto-stash", "120 km/h"], ["niu-rqi-sport", "La más asequible"]];

// Marcas y modelos. Datos de las webs de los fabricantes: Silence, Velca y Next el 6-oct-2026 (_ia/modelos.json);
// NIU, Zero, Ultraviolette y Vmoto el 13-oct-2026 (_ia/nuevas-*.json). Cada modelo lleva:
//   lic: 'B' = carnet de coche con 3 años o A1 · 'AM' = ciclomotor · 'Bsolo' = solo carnet de coche
//   potNom / potPico = potencia nominal y pico en kW (pot = cifra que el fabricante da sin decir cuál es)
//   vmaxNota / autoNota = la letra pequeña de la velocidad y de la autonomía, tal como la da el fabricante
window.MARCAS = [
 {
  "slug": "silence",
  "nombre": "Silence",
  "origen": "Barcelona",
  "oficial": true,
  "frase": "La batería se saca y sube a casa contigo.",
  "texto": "Su batería tiene asa y ruedas, como una maleta: la sacas, te la llevas y la cargas en cualquier enchufe. No hace falta garaje ni punto de carga.",
  "modelos": [
   {
    "id": "silence-s01",
    "n": "S01",
    "version": "L3e",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 110,
    "auto": 133,
    "autoNota": "WMTC",
    "potNom": 7,
    "potPico": 9,
    "extraible": true,
    "bat": "5,6 kWh · extraíble",
    "carga": "La batería se saca con ruedas, tipo trolley, y se enchufa en cualquier toma (cargador de 600 W integrado): 7-9 h en casa. También se puede cambiar por una cargada en una Battery Station.",
    "destacado": "La batería se saca como una maleta con ruedas y se carga en cualquier enchufe.",
    "extras": [
     "Marcha atrás",
     "Hueco para dos cascos integrales",
     "3 modos de conducción (Eco, City, Sport)",
     "Freno combinado"
    ],
    "img": "img/modelos/silence-s01.webp"
   },
   {
    "id": "silence-s01plus",
    "n": "S01+",
    "version": "L3e",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 110,
    "auto": 133,
    "autoNota": "WMTC",
    "potNom": 7.5,
    "potPico": 11,
    "extraible": true,
    "bat": "5,6 kWh · extraíble",
    "carga": "La batería se saca con ruedas, tipo trolley, y se enchufa en cualquier toma (cargador de 600 W integrado): 7-9 h en casa. También se puede cambiar por una cargada en una Battery Station.",
    "destacado": "La S01 deportiva: suspensión Öhlins y más empuje, con el mismo carnet de coche.",
    "extras": [
     "Suspensión Öhlins",
     "Hueco para dos cascos integrales",
     "3 modos de conducción (Eco, City, Sport)",
     "Frenos de disco lobulados con frenada combinada"
    ],
    "img": "img/modelos/silence-s01plus.webp"
   },
   {
    "id": "silence-s02-l1e",
    "n": "S02",
    "version": "L1e",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 152,
    "autoNota": "WMTC",
    "potNom": 2.9,
    "potPico": 4,
    "extraible": true,
    "bat": "5,6 kWh · extraíble",
    "carga": "La batería se saca con ruedas, tipo trolley, y se enchufa en cualquier toma (cargador de 600 W integrado): 7-9 h en casa. También se puede cambiar por una cargada en una Battery Station.",
    "destacado": "Ciclomotor con 152 km homologados y batería que se saca como una maleta.",
    "extras": [
     "Suelo plano",
     "Hueco para un casco",
     "3 modos de conducción (Eco, City, Sport)",
     "Frenos ABS o CBS"
    ],
    "img": "img/modelos/silence-s02-l1e.webp"
   },
   {
    "id": "silence-s02-l3e",
    "n": "S02",
    "version": "L3e",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 85,
    "auto": 138,
    "autoNota": "WMTC",
    "potNom": 4,
    "potPico": 6.3,
    "extraible": true,
    "bat": "5,6 kWh · extraíble",
    "carga": "La batería se saca con ruedas, tipo trolley, y se enchufa en cualquier toma (cargador de 600 W integrado): 7-9 h en casa. También se puede cambiar por una cargada en una Battery Station.",
    "destacado": "La Silence de entrada con carnet de coche: 85 km/h y 138 km homologados.",
    "extras": [
     "Suelo plano",
     "Hueco para un casco",
     "3 modos de conducción (Eco, City, Sport)",
     "Frenos ABS o CBS"
    ],
    "img": "img/modelos/silence-s02-l3e.webp"
   },
   {
    "id": "silence-s04-l6e",
    "n": "S04 Nanocar",
    "version": "L6e · 1 batería",
    "titular": "S04 de 45 km/h",
    "tipo": "nano",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 80,
    "autoNota": "WMTC",
    "potNom": 6,
    "potPico": 8,
    "extraible": true,
    "bat": "5,6 kWh · extraíble",
    "carga": "La batería se saca con ruedas y se carga en cualquier enchufe en 7-9 h, o se cambia por una cargada en una Battery Station.",
    "destacado": "Un coche de dos plazas que se conduce desde los 15 años con el carnet de ciclomotor.",
    "extras": [
     "Aire acondicionado",
     "Maletero de hasta 247 litros",
     "Volante multifunción",
     "3 modos de conducción (Eco, City, Sport)"
    ],
    "img": "img/modelos/silence-s04-nanocar.webp"
   },
   {
    "id": "silence-s04-l6e-vivo",
    "n": "S04 Nanocar",
    "version": "L6e Vivo · 2 baterías",
    "titular": "S04 de 45 km/h, doble batería",
    "tipo": "nano",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 162,
    "autoNota": "WMTC",
    "potNom": 6,
    "potPico": 10.6,
    "extraible": true,
    "bat": "11,2 kWh · extraíble",
    "carga": "Las dos baterías se sacan con ruedas y se cargan en cualquier enchufe en 7-9 h, o se cambian por otras cargadas en una Battery Station.",
    "destacado": "El mismo nanocar de 45 km/h con dos baterías: 162 km homologados.",
    "extras": [
     "Aire acondicionado",
     "Maletero de hasta 247 litros",
     "Volante multifunción",
     "3 modos de conducción (Eco, City, Sport)"
    ],
    "img": "img/modelos/silence-s04-nanocar.webp"
   },
   {
    "id": "silence-s04-l7e-plus",
    "n": "S04 Nanocar",
    "version": "L7e Plus · 2 baterías",
    "titular": "S04 de 85 km/h",
    "tipo": "nano",
    "lic": "Bsolo",
    "carnet": "Carnet de coche (B)",
    "vmax": 85,
    "auto": 157,
    "autoNota": "WMTC",
    "potNom": 14,
    "potPico": 21.8,
    "extraible": true,
    "bat": "11,2 kWh · extraíble",
    "carga": "Las dos baterías se sacan con ruedas y se cargan en cualquier enchufe en 7-9 h, o se cambian por otras cargadas en una Battery Station.",
    "destacado": "Con dos baterías y más motor: llega a 85 km/h y ya vale para vías rápidas.",
    "extras": [
     "Aire acondicionado",
     "Maletero de hasta 247 litros",
     "Volante multifunción",
     "3 modos de conducción (Eco, City, Sport)"
    ],
    "img": "img/modelos/silence-s04-nanocar.webp"
   }
  ]
 },
 {
  "slug": "velca",
  "nombre": "Velca",
  "origen": "España",
  "frase": "Toda la gama se lleva con el carnet de coche o con el AM.",
  "texto": "Una de las gamas más amplias: ciclomotores para empezar, scooters de ciudad, un GT de viaje, una custom y su primera naked.",
  "modelos": [
   {
    "id": "velca-vortex",
    "n": "Vortex",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 130,
    "auto": 180,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 8,
    "potPico": 13,
    "bat": "8,2 kWh · fija, se carga en la moto",
    "carga": "Batería integrada; cargador rápido de 25 A a bordo: unas 4,5 h en un enchufe doméstico.",
    "destacado": "Una custom eléctrica de 130 km/h que puedes llevar con el carnet de coche.",
    "extras": [
     "ABS en las dos ruedas",
     "Pantalla TFT de 5\" con Bluetooth y wifi",
     "Alarma y arranque en remoto",
     "Homologada para dos personas"
    ],
    "img": "img/modelos/velca-vortex.webp"
   },
   {
    "id": "velca-nude-lite",
    "n": "Nude Lite",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 90,
    "auto": 80,
    "autoNota": "con una batería",
    "autoHasta": true,
    "potNom": 4,
    "potPico": 9.5,
    "bat": "2,88 kWh",
    "destacado": "Una naked eléctrica con pantalla de 7 pulgadas, arranque por NFC y marcha atrás.",
    "extras": [
     "Pantalla TFT a color de 7\"",
     "Arranque sin llave por NFC",
     "Marcha atrás",
     "Alarma"
    ],
    "img": "img/modelos/velca-nude-lite.webp"
   },
   {
    "id": "velca-nude",
    "n": "Nude",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 126,
    "auto": 130,
    "autoNota": "con dos baterías",
    "autoHasta": true,
    "potNom": 9.5,
    "potPico": 15,
    "extraible": true,
    "bat": "5,76 kWh · extraíble",
    "carga": "Trae dos baterías extraíbles que se cargan en un enchufe doméstico (el fabricante no da el tiempo).",
    "destacado": "Naked de 126 km/h con ABS, control de tracción y cámaras delante y detrás.",
    "extras": [
     "ABS delante y detrás",
     "Control de tracción (TCS)",
     "Cámaras delantera y trasera",
     "Marcha atrás y control de crucero"
    ],
    "img": "img/modelos/velca-nude.webp"
   },
   {
    "id": "velca-calima-s",
    "n": "Calima S",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 95,
    "auto": 130,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "pot": 5.0,
    "extraible": true,
    "bat": "4,32 kWh · extraíble",
    "carga": "Batería extraíble de 22 kg; se carga en 5,5 h con cargador externo en un enchufe normal.",
    "destacado": "Lleva ABS en las dos ruedas y la batería se saca para cargarla en casa o en la oficina.",
    "extras": [
     "ABS en ambas ruedas",
     "Velocidad de crucero",
     "Arranque sin llave (keyless)",
     "3 modos de conducción"
    ],
    "img": "img/modelos/velca-calima-s.webp"
   },
   {
    "id": "velca-tramontana-s",
    "n": "Tramontana S",
    "version": "MY26",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 95,
    "auto": 130,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "pot": 5.0,
    "extraible": true,
    "bat": "4,32 kWh · extraíble",
    "carga": "Se carga en cualquier enchufe en 5,5 h, sacando la batería (22 kg) o directamente en la moto.",
    "destacado": "Aire clásico con ABS y control de tracción de serie, y batería que se saca para cargarla.",
    "extras": [
     "ABS en ambas ruedas",
     "Control de tracción (TCS)",
     "Velocidad de crucero",
     "3 modos de conducción"
    ],
    "img": "img/modelos/velca-tramontana-s.webp"
   },
   {
    "id": "velca-one",
    "n": "One",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 130,
    "auto": 220,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 7,
    "potPico": 12,
    "bat": "8,2 kWh · fija, se carga en la moto",
    "carga": "Batería integrada; cargador interno con enchufe normal (Schuko): 4,5 h de 0 a 100 %.",
    "destacado": "Scooter GT con Apple CarPlay y Android Auto que se conduce con el carnet de coche.",
    "extras": [
     "Apple CarPlay y Android Auto",
     "Marcha atrás",
     "ABS en ambas ruedas",
     "Velocidad de crucero"
    ],
    "img": "img/modelos/velca-one.webp"
   },
   {
    "id": "velca-eon",
    "n": "Eon",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 140,
    "auto": 290,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 11,
    "potPico": 18,
    "bat": "13 kWh · fija, se carga en la moto",
    "carga": "Batería integrada con toma Tipo 2 y cargador regulable de hasta 3,3 kW: del 20 al 80 % en 2 h. También vale un enchufe normal.",
    "destacado": "Maxiscooter que anuncia 290 km de autonomía y se conduce con el carnet de coche.",
    "extras": [
     "Apple CarPlay y Android Auto",
     "ABS y control de tracción",
     "Velocidad de crucero y marcha atrás",
     "Hueco para un casco integral"
    ],
    "img": "img/modelos/velca-eon.webp"
   },
   {
    "id": "velca-boraplus",
    "n": "Bora+",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 75,
    "autoNota": "con una batería",
    "autoHasta": true,
    "pot": 2.0,
    "extraible": true,
    "bat": "1,8 kWh · extraíble",
    "carga": "Batería extraíble de 11 kg que se carga en casa en 5-6 h.",
    "destacado": "El ciclomotor de entrada de Velca: la batería pesa 11 kg y se sube a casa para cargarla.",
    "extras": [
     "Alarma y mando a distancia",
     "USB",
     "Neumáticos Michelin City Grip 2",
     "Homologado para dos personas"
    ],
    "img": "img/modelos/velca-boraplus.webp"
   },
   {
    "id": "velca-calima-50",
    "n": "Calima 50",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 150,
    "autoNota": "con dos baterías",
    "autoHasta": true,
    "pot": 3.0,
    "extraible": true,
    "bat": "1,87 kWh · extraíble",
    "carga": "Batería extraíble de 18 kg que se carga en 5-6 h.",
    "destacado": "Ciclomotor robusto con neumáticos Michelin, arranque sin llave y batería que se saca.",
    "extras": [
     "Arranque sin llave (keyless)",
     "Alarma",
     "USB y guantera delantera",
     "Frenos combinados CBS"
    ],
    "img": "img/modelos/velca-calima-50.webp"
   }
  ]
 },
 {
  "slug": "next",
  "nombre": "Next",
  "origen": "Alicante",
  "frase": "Del primer ciclomotor al maxiscooter.",
  "texto": "Una gama fácil de entender: ciclomotores para empezar, scooters urbanos con dos baterías y un maxiscooter para ir más lejos.",
  "modelos": [
   {
    "id": "next-mojito",
    "n": "Mojito",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 90,
    "auto": 200,
    "autoNota": "con dos baterías",
    "autoHasta": true,
    "potNom": 3.5,
    "potPico": 4.6,
    "extraible": true,
    "bat": "extraíble",
    "carga": "Batería extraíble de 22 kg que se carga en un enchufe normal en 2 h 50 min.",
    "destacado": "Estilo retro con marcha atrás y control de crucero, y la batería se saca para cargarla.",
    "extras": [
     "Marcha atrás",
     "Control de crucero",
     "3 modos de conducción",
     "Hueco para el casco bajo el asiento"
    ],
    "img": "img/modelos/next-mojito.webp"
   },
   {
    "id": "next-nx-plus",
    "n": "NX Plus",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 90,
    "auto": 220,
    "autoNota": "con dos baterías",
    "autoHasta": true,
    "potNom": 4,
    "potPico": 4.8,
    "extraible": true,
    "bat": "3,6 kWh · extraíble",
    "carga": "Dos baterías extraíbles de 13 kg que se cargan en un enchufe normal en 4 h.",
    "destacado": "Dos baterías extraíbles de serie y preparada para llevar baúl de reparto.",
    "extras": [
     "Pantalla a color de 8,5\"",
     "3 modos de conducción",
     "Frenos combinados CBS",
     "Hueco bajo el asiento para un casco"
    ],
    "img": "img/modelos/next-nx-plus.webp"
   },
   {
    "id": "next-nx2",
    "n": "NX2",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 130,
    "auto": 200,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 10,
    "potPico": 15,
    "bat": "8,64 kWh · fija, se carga en la moto",
    "carga": "Batería fija con cargador interno y conector Tipo 2: carga completa en 4 h 45 min.",
    "destacado": "15 kW de pico y 130 km/h con el carnet de coche: Next la vende como la más potente de su categoría.",
    "extras": [
     "Frenos ABS",
     "Marcha atrás",
     "Control de crucero",
     "Hueco bajo el asiento para un casco jet"
    ],
    "img": "img/modelos/next-nx2.webp"
   },
   {
    "id": "next-nx1",
    "n": "NX1",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 65,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 0.8,
    "potPico": 1.7,
    "extraible": true,
    "bat": "1,2 kWh · extraíble",
    "carga": "Batería extraíble de 9 kg que se carga en un enchufe normal en 4 h 30 min.",
    "destacado": "El Next de entrada: la batería pesa 9 kg y se sube a casa para cargarla.",
    "extras": [
     "Alarma y mando a distancia",
     "Puerto USB",
     "Modos Eco y Speed",
     "Admite baúl de reparto"
    ],
    "img": "img/modelos/next-nx1.webp"
   },
   {
    "id": "next-nx-plus-ls",
    "n": "NX Plus LS",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 250,
    "autoNota": "con dos baterías",
    "autoHasta": true,
    "potNom": 1.2,
    "potPico": 2,
    "extraible": true,
    "bat": "1,8 kWh · extraíble",
    "carga": "Baterías extraíbles de 13 kg que se cargan en un enchufe normal en 4 h.",
    "destacado": "Ciclomotor con marcha atrás y sitio para dos baterías extraíbles.",
    "extras": [
     "Marcha atrás",
     "Pantalla a color de 8,5\" con control de crucero",
     "Hueco bajo el asiento para un casco",
     "Alarma y mando a distancia"
    ],
    "img": "img/modelos/next-nx-plus-ls.webp"
   }
  ]
 },
 {
  "slug": "niu",
  "nombre": "NIU",
  "origen": "China",
  "frase": "Scooters conectados, con baterías que se sacan.",
  "texto": "Scooters con mucha tecnología: pantalla con navegación, llave en el móvil y app con localización. En todos, las baterías se sacan y se cargan en casa. Y una deportiva, la RQi Sport, que se lleva con el carnet de coche.",
  "modelos": [
   {
    "id": "niu-rqi-sport",
    "n": "RQi Sport",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 110,
    "auto": 105,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 7.5,
    "potPico": 8.7,
    "extraible": true,
    "bat": "5,2 kWh en dos baterías · extraíbles",
    "carga": "Las dos baterías se sacan y se cargan en un enchufe normal: unas 4 horas cada una.",
    "destacado": "Moto deportiva eléctrica con carnet de coche: 110 km/h, 0-50 km/h en 2,9 s y frenos Brembo con ABS.",
    "extras": [
     "Frenos Brembo con ABS de doble canal",
     "Control de tracción (TCS)",
     "Neumáticos Pirelli en llanta de 17\"",
     "Pantalla TFT de 6,8\""
    ],
    "img": "img/modelos/niu-rqi-sport.webp"
   },
   {
    "id": "niu-nqi-gts",
    "n": "NQi GTS",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 80,
    "auto": 120,
    "autoNota": "con las dos baterías de serie",
    "autoHasta": true,
    "potNom": 2.0,
    "potPico": 4.1,
    "extraible": true,
    "bat": "4 kWh en dos baterías · extraíbles",
    "carga": "Las dos baterías se sacan y se cargan en casa: 3 horas cada una.",
    "destacado": "El NIU de carnet de coche para empezar: 80 km/h y dos baterías extraíbles de serie.",
    "extras": [
     "2 baterías extraíbles de serie",
     "NIU Link Crown con pantalla TFT de 5\"",
     "Control de tracción (TCS) y Auto Hold",
     "Llave NFC y navegación en pantalla"
    ],
    "img": "img/modelos/niu-nqi-gts.webp"
   },
   {
    "id": "niu-nqix-300",
    "n": "NQiX 300",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 80,
    "auto": 110,
    "autoNota": "WMTC",
    "potNom": 4.0,
    "potPico": 4.1,
    "extraible": true,
    "bat": "4 kWh en dos baterías · extraíbles",
    "carga": "Las dos baterías se sacan y se cargan en un enchufe de casa: 3 horas cada una.",
    "destacado": "El 125 de NIU para el día a día: 80 km/h, 100-110 km WMTC y ABS con radar trasero.",
    "extras": [
     "ABS de 2 canales y control de tracción (TCS)",
     "Radar trasero de ángulo muerto",
     "Pantalla TFT de 5\" con navegación",
     "28,5 L bajo el asiento"
    ],
    "img": "img/modelos/niu-nqix-300.webp",
    "autoHasta": true
   },
   {
    "id": "niu-nqix-500",
    "n": "NQiX 500",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 100,
    "auto": 105,
    "autoNota": "WMTC",
    "potNom": 9.0,
    "potPico": 9.9,
    "extraible": true,
    "bat": "4 kWh en dos baterías · extraíbles (admite una tercera)",
    "carga": "Las dos baterías se sacan y se cargan en un enchufe de casa: 3 horas cada una.",
    "destacado": "El tope de gama que aún se lleva con carnet de coche: 100 km/h, 9 kW continuos y 0-50 km/h en 2,8 s.",
    "extras": [
     "ABS de 2 canales y control de tracción (TCS)",
     "Detección de ángulo muerto (BSD)",
     "Pantalla TFT de 5\" con navegación",
     "Admite una tercera batería"
    ],
    "img": "img/modelos/niu-nqix-500.webp",
    "autoHasta": true
   },
   {
    "id": "niu-nqi-sport",
    "n": "NQi Sport",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 65,
    "autoNota": "con una batería",
    "autoHasta": true,
    "potNom": 1.8,
    "potPico": 3.8,
    "extraible": true,
    "bat": "2 kWh · extraíble (admite una segunda)",
    "carga": "La batería se saca y se carga en casa en 3 horas.",
    "destacado": "El NIU de entrada: ciclomotor para carnet AM que con una segunda batería pasa de unos 65 a 130 km.",
    "extras": [
     "NIU Link Crown con pantalla TFT de 5\"",
     "Control de tracción (TCS) y Auto Hold",
     "Llave NFC y navegación en pantalla",
     "Marcha atrás asistida"
    ],
    "img": "img/modelos/niu-nqi-sport.webp"
   },
   {
    "id": "niu-nqix-150",
    "n": "NQiX 150",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 60,
    "autoNota": "con una batería",
    "potNom": 3.5,
    "potPico": 3.8,
    "extraible": true,
    "bat": "2 kWh · extraíble (admite una segunda)",
    "carga": "La batería se saca y se carga en cualquier enchufe de casa en 3 horas.",
    "destacado": "El ciclomotor más equipado de NIU: ABS, control de tracción y radar trasero, con opción de segunda batería para llegar a 110 km.",
    "extras": [
     "ABS de 2 canales y control de tracción (TCS)",
     "Radar trasero de ángulo muerto",
     "Pantalla TFT de 5\" con navegación",
     "Llave NFC, Apple Wallet y app con GPS"
    ],
    "img": "img/modelos/niu-nqix-150.webp",
    "autoHasta": true
   },
   {
    "id": "niu-fqix-150",
    "n": "FQiX 150",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 60,
    "autoNota": "con una batería",
    "autoHasta": true,
    "potNom": 3.3,
    "potPico": 3.8,
    "extraible": true,
    "bat": "2 kWh · extraíble (admite una segunda)",
    "carga": "La batería se saca y se carga en casa en 3 horas.",
    "destacado": "El ciclomotor de diseño afilado de NIU: faro en X, radar trasero y 31 L bajo el asiento, donde cabe un casco integral.",
    "extras": [
     "Radar trasero de ángulo muerto",
     "Pantalla TFT de 5\" con NIU Link Crown",
     "Frenos de disco con CBS y control de tracción",
     "31 L bajo el asiento"
    ],
    "img": "img/modelos/niu-fqix-150.webp"
   },
   {
    "id": "niu-xqi3-street",
    "n": "XQi3",
    "version": "Street",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 90,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 3.5,
    "potPico": 8.0,
    "extraible": true,
    "bat": "2,3 kWh · extraíble",
    "carga": "La batería se saca y se recarga en cualquier enchufe en unas 5 horas.",
    "destacado": "Moto de campo ligera (76 kg) que se matricula y se lleva con carnet AM: 45 km/h en carretera y suspensión KKE regulable.",
    "extras": [
     "Suspensión KKE regulable delante y detrás",
     "Frenos de disco en las dos ruedas",
     "Pantalla TFT con desbloqueo NFC y Bluetooth",
     "Neumáticos de tacos de 19\""
    ],
    "img": "img/modelos/niu-xqi3-street.webp"
   }
  ]
 },
 {
  "slug": "zero",
  "nombre": "Zero",
  "origen": "California (EE. UU.)",
  "frase": "Motos grandes que se llevan con el carnet de coche.",
  "texto": "Solo hacen motos eléctricas, desde 2006. Sus S y DS de 11 kW nominales se conducen con el A1 o con el carnet de coche y entregan 45 kW de pico. La gama se completa con dos trail ligeras de batería extraíble y un scooter.",
  "modelos": [
   {
    "id": "zero-s-11-kw",
    "n": "S",
    "version": "11 kW",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 139,
    "auto": 262,
    "autoNota": "en ciudad",
    "autoHasta": true,
    "potNom": 11,
    "potPico": 45,
    "bat": "15,6 kWh · fija, se carga en la moto",
    "carga": "Cargador integrado de 3,3 kW: del 20 al 80 % en 2,5 horas. Con el cargador rápido opcional de 6 kW, en 53 minutos.",
    "destacado": "La naked de Zero que se lleva con el carnet de coche: 262 km de autonomía en ciudad y 139 km/h de punta.",
    "extras": [
     "Control de estabilidad Bosch",
     "Suspensión Showa regulable",
     "Pantalla TFT a color y app",
     "5 modos de conducción y control de crucero"
    ],
    "img": "img/modelos/zero-s-11-kw.webp",
    "vmaxNota": "110 km/h sostenidos"
   },
   {
    "id": "zero-ds-11-kw",
    "n": "DS",
    "version": "11 kW",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 139,
    "auto": 249,
    "autoNota": "en ciudad",
    "autoHasta": true,
    "potNom": 11,
    "potPico": 45,
    "bat": "15,6 kWh · fija, se carga en la moto",
    "carga": "Cargador integrado de 3,3 kW: del 20 al 80 % en 2,5 horas. Con el cargador rápido opcional de 6 kW, en 53 minutos.",
    "destacado": "La trail de Zero para carnet de coche: 249 km de autonomía en ciudad y suspensiones de 190 mm para carretera y pista.",
    "extras": [
     "Control de estabilidad Bosch con modo todoterreno",
     "Suspensión Showa con 190 mm de recorrido",
     "Neumáticos Pirelli Scorpion Trail II",
     "Transmisión por correa, sin marchas"
    ],
    "img": "img/modelos/zero-ds-11-kw.webp",
    "vmaxNota": "105 km/h sostenidos"
   },
   {
    "id": "zero-xe",
    "n": "XE",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 85,
    "auto": 100,
    "autoNota": "a 50 km/h constantes",
    "autoHasta": true,
    "potPico": 15.5,
    "extraible": true,
    "bat": "4,3 kWh · extraíble",
    "carga": "Se carga en la moto o sacando la batería, en un enchufe normal: del 0 al 95 % en 5 horas.",
    "destacado": "Trail ligera de 101 kg con batería que se saca en segundos y 635 Nm en la rueda trasera.",
    "extras": [
     "Suspensión totalmente regulable",
     "Control de tracción desconectable",
     "3 modos, control de crucero y marcha atrás",
     "Pantalla TFT a color"
    ],
    "img": "img/modelos/zero-xe.webp"
   },
   {
    "id": "zero-ls1",
    "n": "LS1",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 99,
    "auto": 112,
    "autoNota": "en ciudad",
    "autoHasta": true,
    "potPico": 8.4,
    "extraible": true,
    "bat": "4,4 kWh en dos baterías · extraíbles",
    "carga": "Se enchufa el scooter o se sacan las baterías para cargarlas en casa: del 20 al 80 % en 2,8 horas.",
    "destacado": "El scooter de Zero: 99 km/h, dos baterías que se sacan y hueco bajo el asiento para el casco o una tercera batería.",
    "extras": [
     "ABS y control de tracción",
     "Pantalla TFT a color de 5\"",
     "Hueco bajo el asiento para un casco",
     "Bloqueo antirrobo con el llavero"
    ],
    "img": "img/modelos/zero-ls1.webp",
    "vmaxNota": "85 km/h sostenidos"
   },
   {
    "id": "zero-xb",
    "n": "XB",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 75,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potPico": 7.5,
    "extraible": true,
    "bat": "2,4 kWh · extraíble",
    "carga": "Se carga en la moto o sacando la batería, en un enchufe normal: del 0 al 95 % en 2,5 horas.",
    "destacado": "Ciclomotor con forma de moto de campo: 63 kg, batería que se saca en segundos y se lleva con el AM o el carnet de coche.",
    "extras": [
     "Suspensión totalmente regulable",
     "Control de tracción desconectable",
     "3 modos, control de crucero y marcha atrás",
     "Pantalla TFT a color"
    ],
    "img": "img/modelos/zero-xb.webp"
   }
  ]
 },
 {
  "slug": "ultraviolette",
  "nombre": "Ultraviolette",
  "origen": "India",
  "frase": "Una deportiva de 155 km/h con el carnet de coche.",
  "texto": "La F77 es una deportiva eléctrica de 9,5 kW nominales, así que se lleva con el A1 o con el carnet de coche, y entrega 30 kW de pico. Viene con ABS Bosch, control de tracción y 231 km de autonomía en ciudad.",
  "modelos": [
   {
    "id": "ultraviolette-f77-mach-2-recon",
    "n": "F77 Mach 2",
    "version": "Recon",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 155,
    "auto": 231,
    "autoNota": "WMTC en ciudad",
    "potNom": 9.5,
    "potPico": 30,
    "bat": "10,3 kWh · fija, se carga en la moto",
    "carga": "Cargador portátil de 3 kW incluido, para un enchufe normal: del 20 al 80 % en 2,5 horas.",
    "destacado": "La versión deportiva de la F77: 30 kW de pico y 155 km/h con el A1 o el carnet de coche, y 231 km de autonomía en ciudad.",
    "extras": [
     "ABS Bosch de doble canal y control de estabilidad",
     "Control de tracción de 4 niveles",
     "Pantalla TFT de 5\" con conexión y app",
     "Sensores de presión de neumáticos y ayuda en pendiente"
    ],
    "img": "img/modelos/ultraviolette-f77-mach-2-recon.webp",
    "vmaxNota": "probada por la marca; 139 km/h de homologación"
   },
   {
    "id": "ultraviolette-f77-superstreet-recon",
    "n": "F77 SuperStreet",
    "version": "Recon",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 155,
    "auto": 231,
    "autoNota": "WMTC en ciudad",
    "potNom": 9.5,
    "potPico": 30,
    "bat": "10,3 kWh · fija, se carga en la moto",
    "carga": "Cargador portátil de 3 kW incluido, para un enchufe normal: del 20 al 80 % en 2,5 horas.",
    "destacado": "La versión de calle de la F77: la misma mecánica de 30 kW de pico y 231 km de autonomía en ciudad, con el A1 o el carnet de coche.",
    "extras": [
     "ABS Bosch de doble canal y control de estabilidad",
     "Control de tracción de 4 niveles",
     "Pantalla TFT de 5\" con conexión y app",
     "Sensores de presión de neumáticos y ayuda en pendiente"
    ],
    "img": "img/modelos/ultraviolette-f77-superstreet-recon.webp",
    "vmaxNota": "probada por la marca; 144 km/h de homologación"
   }
  ]
 },
 {
  "slug": "vmoto",
  "nombre": "Vmoto",
  "origen": "Australia",
  "frase": "Café racer, naked y scooters con batería extraíble.",
  "texto": "Antes se llamaba Super Soco. Tiene motos de aire clásico y deportivo para carnet AM y para carnet de coche, y scooters de rueda alta. En casi todas, la batería se saca para cargarla en casa.",
  "modelos": [
   {
    "id": "vmoto-tc-max",
    "n": "TC Max",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 95,
    "auto": 92,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 3.9,
    "potPico": 5.1,
    "extraible": true,
    "bat": "3,2 kWh · extraíble",
    "carga": "La batería se saca y se carga en un enchufe normal en unas 5 horas.",
    "destacado": "La café racer de Vmoto en versión 125: 95 km/h, motor central con correa y batería extraíble.",
    "extras": [
     "Motor central con transmisión por correa",
     "Frenos de disco con frenada combinada (CBS)",
     "Horquilla invertida",
     "Llantas de 17 pulgadas"
    ],
    "img": "img/modelos/vmoto-tc-max.webp"
   },
   {
    "id": "vmoto-stash",
    "n": "Stash",
    "tipo": "moto",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 120,
    "auto": 80,
    "autoNota": "homologados",
    "potNom": 9.0,
    "potPico": 15.0,
    "bat": "7,2 kWh · fija, se carga en la moto",
    "carga": "Se enchufa la moto a una toma normal: 5 horas con el cargador de serie.",
    "destacado": "La moto grande de Vmoto que se lleva con carnet de coche: 120 km/h, 9 kW nominales y batería de 7,2 kWh.",
    "extras": [
     "ABS Bosch",
     "Control de tracción (TCS)",
     "Iluminación LED",
     "Motor central con transmisión por cadena"
    ],
    "img": "img/modelos/vmoto-stash.webp"
   },
   {
    "id": "vmoto-cpx",
    "n": "CPX",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 90,
    "auto": 105,
    "autoNota": "con dos baterías",
    "potNom": 4.0,
    "potPico": 5.4,
    "extraible": true,
    "bat": "4,4 kWh en dos baterías · extraíbles",
    "carga": "Las baterías se sacan para cargarlas: entre 2 y 3,5 horas cada una, según el cargador.",
    "destacado": "El scooter 125 de Vmoto para el día a día: 90 km/h y 105 km con sus dos baterías extraíbles.",
    "extras": [
     "3 modos de conducción",
     "Frenos de disco con frenada combinada (CBS)",
     "2 baterías extraíbles",
     "Rueda delantera de 16 pulgadas"
    ],
    "img": "img/modelos/vmoto-cpx.webp"
   },
   {
    "id": "vmoto-cpx-explorer",
    "n": "CPX Explorer",
    "tipo": "scooter",
    "lic": "B",
    "carnet": "Carnet de coche (B) con 3 años, o A1",
    "vmax": 105,
    "auto": 160,
    "autoNota": "con dos baterías",
    "autoHasta": true,
    "potNom": 7.0,
    "potPico": 8.0,
    "extraible": true,
    "bat": "6,6 kWh en dos baterías · extraíbles",
    "carga": "Las baterías se sacan para cargarlas: entre 3 y 5 horas cada una, según el cargador.",
    "destacado": "El scooter más rutero de Vmoto con carnet de coche: 105 km/h, 7 kW nominales y 6,6 kWh en dos baterías extraíbles.",
    "extras": [
     "ABS con discos de 240 y 220 mm",
     "2 baterías extraíbles de 3,3 kWh",
     "Admite carga rápida a 6,6 kW",
     "Rueda delantera de 16 pulgadas"
    ],
    "img": "img/modelos/vmoto-cpx-explorer.webp"
   },
   {
    "id": "vmoto-tc",
    "n": "TC",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 103,
    "autoNota": "con dos baterías",
    "potNom": 2.5,
    "potPico": 3.0,
    "extraible": true,
    "bat": "3,4 kWh en dos baterías · extraíbles",
    "carga": "Las baterías se sacan y se cargan en un enchufe normal: 3 horas cada una.",
    "destacado": "Café racer de aspecto clásico que se lleva con carnet AM: 45 km/h y hasta 103 km con dos baterías extraíbles.",
    "extras": [
     "Frenos de disco con frenada combinada (CBS)",
     "Horquilla invertida",
     "Monoamortiguador central",
     "Llantas de 17 pulgadas"
    ],
    "img": "img/modelos/vmoto-tc.webp"
   },
   {
    "id": "vmoto-tsx",
    "n": "TSX",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 103,
    "autoNota": "con dos baterías",
    "potNom": 2.5,
    "potPico": 3.0,
    "extraible": true,
    "bat": "3,4 kWh en dos baterías · extraíbles",
    "carga": "Se carga en la moto o sacando las baterías: 3 horas cada una.",
    "destacado": "Naked de aire deportivo para carnet AM: 45 km/h, 138 Nm de par y 3 modos de conducción.",
    "extras": [
     "3 modos de conducción",
     "Frenos de disco con frenada combinada (CBS)",
     "Horquilla invertida",
     "Llantas de 17 pulgadas"
    ],
    "img": "img/modelos/vmoto-tsx.webp"
   },
   {
    "id": "vmoto-cu",
    "n": "CU",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 65,
    "autoNota": "según el fabricante",
    "autoHasta": true,
    "potNom": 2.2,
    "potPico": 2.4,
    "extraible": true,
    "bat": "1,7 kWh · extraíble",
    "carga": "Se carga en la moto o sacando la batería: 5,5 horas.",
    "destacado": "El scooter de entrada de Vmoto: el más barato de la gama, 64 kg sin batería y asiento a 750 mm.",
    "extras": [
     "Freno delantero de disco de 180 mm",
     "Doble amortiguador trasero hidráulico",
     "Ruedas de 12 pulgadas"
    ],
    "img": "img/modelos/vmoto-cu.webp"
   },
   {
    "id": "vmoto-citi",
    "n": "CITI",
    "tipo": "ciclo",
    "lic": "AM",
    "carnet": "AM (desde los 15 años) o carnet de coche",
    "vmax": 45,
    "auto": 70,
    "autoNota": "con una batería",
    "autoHasta": true,
    "potNom": 3.0,
    "potPico": 3.3,
    "extraible": true,
    "bat": "2,2 kWh · extraíble (admite una segunda)",
    "carga": "La batería se saca para cargarla: entre 2 y 3,5 horas, según el cargador.",
    "destacado": "Scooter de rueda alta para ciudad: 45 km/h y hasta 127 km si se le pone la segunda batería.",
    "extras": [
     "Rueda alta: 16 pulgadas delante y 14 detrás",
     "Frenos de disco con frenada combinada (CBS)",
     "Admite segunda batería",
     "Admite carga rápida a 6,6 kW"
    ],
    "img": "img/modelos/vmoto-citi.webp"
   }
  ]
 }
];

// visores de fotos oficiales (color × ángulo): la Silence S02 en la página de Silence y el S04 en la de nanocars
window.VISOR = {
  silence: {
    nombre: 'Silence S02', base: 'img/silence/s02-', alto: 1050, inicio: 1,
    colores: [{ id: 'mint', n: 'Menta', hex: '#9FD9C4' }, { id: 'grey', n: 'Gris', hex: '#6B7178' }, { id: 'white', n: 'Blanco', hex: '#F1F2F3' }],
    angulos: [1, 6, 12, 18, 24, 30]
  },
  nano: {
    nombre: 'Silence S04', base: 'img/silence/s04-', alto: 788, inicio: 0,
    colores: [{ id: 'white', n: 'Blanco', hex: '#F1F2F3' }],
    angulos: [4, 7, 10, 16, 22, 25, 31, 34]
  }
};
