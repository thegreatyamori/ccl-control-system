export const cultos = [
  { id: 1, dia: "Jueves", hora: "07H00 PM", isFull: false },
  { id: 2, dia: "Viernes", hora: "06H00 PM", isFull: false },
  { id: 3, dia: "Viernes", hora: "07H45 PM", isFull: false },
  { id: 4, dia: "Sábado", hora: "10H30 AM", isFull: false },
  { id: 5, dia: "Sábado", hora: "05H00 PM", isFull: true },
  { id: 6, dia: "Sábado", hora: "07H00 PM", isFull: true },
  { id: 7, dia: "Domingo", hora: "07H00 AM", isFull: false },
  { id: 8, dia: "Domingo", hora: "08H45 AM", isFull: false },
  { id: 9, dia: "Domingo", hora: "10H30 AM", isFull: true },
  { id: 10, dia: "Domingo", hora: "12H15 AM", isFull: false },
];

export const header = [
  {
    width: 100,
    label: "Asiento 🪑",
    dataKey: "id",
  },
  {
    width: 400,
    label: "Nombres 📃",
    dataKey: "nombres",
  },
  {
    width: 100,
    label: "Edad ⌛",
    dataKey: "edad",
  },
  {
    width: 100,
    label: "Culto 📅",
    dataKey: "culto",
  },
  {
    width: 200,
    label: "Dia 📆",
    dataKey: "dia",
  },
  {
    width: 200,
    label: "Hora ⏰",
    dataKey: "hora",
  },
  {
    width: 300,
    label: "Código QR 🔗",
    dataKey: "codigo",
  },
];

export const qr = {
  typeNumber: 0,
  errorCorrectionLevel: "M",
  mode: "Byte",
  multiByte: "UTF-8",
};

export const labelData = [
  {
    gridSize: 6,
    label: "N° Asiento",
    key: "id",
    pos: 0,
  },
  {
    gridSize: 6,
    label: "N° Culto",
    key: "culto",
    pos: 3,
  },
  {
    gridSize: 12,
    label: "Nombres",
    key: "nombres",
    pos: 1,
  },
  {
    gridSize: 12,
    label: "Edad",
    key: "edad",
    pos: 2,
  },
  {
    gridSize: 6,
    label: "Día",
    key: "dia",
    pos: 4,
  },
  {
    gridSize: 6,
    label: "Hora",
    key: "hora",
    pos: 5,
  },
];
