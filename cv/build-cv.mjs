/**
 * Genera el CV final a partir del PDF original del señor:
 *   1. dibuja la foto recortada (25 × 33,3 mm) en la esquina superior derecha,
 *   2. añade la sección PROYECTOS en el hueco libre del pie de página.
 *
 * No toca el texto original: el documento sigue siendo vectorial y seleccionable.
 *
 * Uso: node cv/build-cv.mjs [entrada.pdf] [salida.pdf]
 */
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { readFile, writeFile } from "node:fs/promises";

const SRC = process.argv[2] ?? "C:/Users/unais/Downloads/CV-unai-sayago.pdf";
const OUT = process.argv[3] ?? "cv/cv-unai-sayago.pdf";
const PHOTO = "cv/foto-cv.jpg";

const MM = 72 / 25.4;
const mm = (v) => v * MM;

// Colores medidos sobre el propio PDF del señor.
const INK = rgb(0x2d / 255, 0x23 / 255, 0x85 / 255); // encabezados y reglas
const BODY = rgb(0x3a / 255, 0x38 / 255, 0x46 / 255); // texto corrido

const PHOTO_W = mm(25);
const PHOTO_TOP = mm(11);
const PHOTO_RIGHT = mm(21);

const MARGIN_L = mm(19);
const MARGIN_R = mm(19);

// Texto de la sección. Editar aquí y volver a ejecutar.
const PROJECTS = [
  {
    name: "HelpDesk Lite",
    rest: " — ITSM con FastAPI, PostgreSQL y Docker · 175 tests · demo pública · 2026",
  },
  {
    name: "Apsis",
    rest: " — NASA Space Apps 2026: simulador de misiones espaciales · equipo de 4 · 2026",
  },
  {
    name: "MASTERS 3",
    rest: " — simulador de liga de fútbol para Android con Kotlin y Jetpack Compose · 2025-2026",
  },
];

const pdf = await PDFDocument.load(await readFile(SRC));
const page = pdf.getPages()[0];
const { width, height } = page.getSize();

// ---------- foto ----------
const jpg = await pdf.embedJpg(await readFile(PHOTO));
const photoH = PHOTO_W * (4 / 3);
page.drawImage(jpg, {
  x: width - PHOTO_RIGHT - PHOTO_W,
  y: height - PHOTO_TOP - photoH,
  width: PHOTO_W,
  height: photoH,
});

// ---------- proyectos ----------
const regular = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);

const HEAD_SIZE = 8.6;
const LINE_SIZE = 8.2;
const TRACK = 0.85; // espaciado entre letras del encabezado

// Encabezado, letra a letra para imitar el tracking del original.
let hx = MARGIN_L;
const headingY = height - mm(254);
for (const ch of "PROYECTOS") {
  page.drawText(ch, { x: hx, y: headingY, size: HEAD_SIZE, font: bold, color: INK });
  hx += bold.widthOfTextAtSize(ch, HEAD_SIZE) + TRACK;
}

// Regla bajo el encabezado, igual que el resto de secciones.
page.drawLine({
  start: { x: MARGIN_L, y: height - mm(256.5) },
  end: { x: width - MARGIN_R, y: height - mm(256.5) },
  thickness: 0.6,
  color: INK,
});

// Tres líneas: nombre en negrita, resto en redonda.
let lineY = height - mm(261.5);
for (const project of PROJECTS) {
  page.drawText(project.name, { x: MARGIN_L, y: lineY, size: LINE_SIZE, font: bold, color: BODY });
  const offset = bold.widthOfTextAtSize(project.name, LINE_SIZE);
  page.drawText(project.rest, {
    x: MARGIN_L + offset,
    y: lineY,
    size: LINE_SIZE,
    font: regular,
    color: BODY,
  });
  lineY -= mm(4.8);
}

await writeFile(OUT, await pdf.save());
console.log(`OK · foto ${(PHOTO_W / MM).toFixed(1)}mm + ${PROJECTS.length} proyectos · ${OUT}`);
