/* Motovatio · Novedades y reservas anticipadas (modelos que aún no han llegado).
   Datos de Silence, 13-nov-2026. Aparte de data.js para que no entren en catálogo, filtros ni carteles. */
window.NOVEDADES = {
  senal: 500,
  modelos: [
    {
      id: 'x47', nombre: 'Ultraviolette X-47 Venom Recon+', corto: 'X-47 Venom', etiqueta: 'Novedad · Silence',
      frase: 'La aventura eléctrica de 39,7 CV con carnet A1.',
      txt: 'Radar de 77 GHz, cámaras delantera y trasera, pantalla táctil de 7" y 134 km de autonomía combinada. La distribuye Silence.',
      img: 'img/novedades/x47-negra.webp',
      fondo: '#d3d3d4',
      colores: [
        { n: 'Negra (Shadow)', hex: '#16181a', img: 'img/novedades/x47-negra.webp' },
        { n: 'Blanca (Airstrike)', hex: '#f1f1ee', img: 'img/novedades/x47-blanca.webp' },
        { n: 'Roja (Turbo Red)', hex: '#c8202a', img: 'img/novedades/x47-roja.webp' },
        { n: 'Amarilla (Afterburner)', hex: '#f2c200', img: 'img/novedades/x47-amarilla.webp' }
      ],
      precio: [['Negra', 8450], ['Otros colores', 8750]],
      precioNota: 'Precio de lanzamiento',
      llegada: 'Finales de febrero de 2027',
      datos: [
        ['Carnet', 'A1'],
        ['Potencia', '29,6 kW pico (39,7 CV)'],
        ['Velocidad', '139 km/h reales'],
        ['0-100 km/h', '5,9 s'],
        ['Autonomía', '235 km ciudad · 134 km combinada'],
        ['Batería', '11 kWh · garantía 5 años'],
        ['Peso y asiento', '206 kg · asiento a 838 mm']
      ],
      wa: 'Hola, quiero reservar con 500 € una unidad de la Ultraviolette X-47 Venom antes de que llegue. ¿Cómo lo hacemos?'
    },
    {
      id: 's02-paddock', nombre: 'Silence S02 Paddock · Ducati Corse', corto: 'S02 Paddock', etiqueta: 'Edición especial · Silence',
      frase: 'El S02 vestido de Ducati Corse.',
      txt: 'Edición Rosso Ducati del scooter urbano de Silence, con batería extraíble. Se conduce con carnet B desde los 3 años de carnet.',
      img: 'img/modelos/silence-s02-l3e.webp',
      fondo: '#f4f5f5',
      precio: [['PVP España', 4290]],
      precioNota: 'Precio de venta recomendado',
      llegada: 'Finales de enero de 2027',
      datos: [
        ['Categoría', 'L3e'],
        ['Velocidad', '85 km/h'],
        ['Potencia', '6 kW'],
        ['Autonomía', '138 km'],
        ['Peso', '91 kg sin batería']
      ],
      wa: 'Hola, quiero reservar con 500 € una unidad del Silence S02 Paddock (Ducati Corse) antes de que llegue. ¿Cómo lo hacemos?'
    },
    {
      id: 's06-max-dual', nombre: 'Silence S06 Max Dual', corto: 'S06 Max Dual', etiqueta: 'Novedad · Silence',
      frase: 'Dos baterías y 11 kW para viajar más lejos.',
      txt: 'La versión grande del S06: dos baterías y más potencia.',
      img: null,
      precio: [['PVP España', 7400]],
      precioNota: 'Precio de venta recomendado',
      llegada: 'Primeras unidades a finales de 2027',
      datos: [
        ['Baterías', '2'],
        ['Potencia', '11 kW']
      ],
      wa: 'Hola, quiero reservar con 500 € una unidad del Silence S06 Max Dual antes de que llegue. ¿Cómo lo hacemos?'
    },
    {
      id: 's06-max-single', nombre: 'Silence S06 Max Single', corto: 'S06 Max Single', etiqueta: 'Novedad · Silence',
      frase: 'La S06 Max con una batería.',
      txt: 'Misma moto con una sola batería: más ligera y más ajustada de precio. Silence aún no ha publicado precio ni fecha.',
      img: null,
      precio: null,
      precioNota: 'Precio a confirmar',
      llegada: 'Fecha a confirmar',
      datos: [
        ['Baterías', '1'],
        ['Potencia', '7 kW (9 kW pico)']
      ],
      wa: 'Hola, quiero reservar con 500 € una unidad del Silence S06 Max Single antes de que llegue. ¿Cómo lo hacemos?'
    }
  ],
  aviso: 'Silence S01: disponible en stock en Motovatio. Antes del verano Silence la renueva por completo.'
};
