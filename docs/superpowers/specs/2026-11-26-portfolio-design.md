# Portfolio de Unai Sayago — diseño

Fecha: 2026-11-26
Estado: pendiente de aprobación

## Intención

Una web personal que consiga una primera entrevista como desarrollador junior en Zaragoza. El mensaje no es "sé tecnologías": es **"he construido y desplegado algo que se puede probar"**. La prueba principal es HelpDesk Lite, un ITSM en producción con 175 tests en verde.

## Objetivos

- Que un reclutador técnico entienda en 10 segundos qué haces y dónde verlo.
- Que la evidencia (demo viva, repos, números reales) esté a un clic.
- Que se pueda mandar como enlace en una candidatura y funcione en móvil.

## No objetivos

- Blog, formulario de contacto con backend, panel de administración.
- Vender servicios como freelance.
- Animaciones que demuestren dominio de una librería.

## Anti-objetivos

- Parecer una plantilla de IA: degradados, tarjetas idénticas, "passionate developer".
- Prometer lo que no hay: nada de cifras inventadas ni tecnologías sin proyecto detrás.
- Sacrificar velocidad o accesibilidad por efecto.

## Restricciones

- Contenido real y verificable; MASTERS 3 se declara "en desarrollo".
- Español e inglés completos.
- Sin backend: sitio estático.
- Despliegue en Netlify; el dominio se decide al final y no cambia nada.

## Enfoques considerados

- **HTML/CSS plano** — máxima defensa en entrevista, cero mantenimiento. Descartado: no aporta React al CV, que es uno de los objetivos del señor.
- **Astro** — bueno si hubiera colección de proyectos en Markdown. Descartado: tres proyectos no lo justifican.
- **Next.js** — sobredimensionado para una página sin servidor. Descartado.
- **Vite + React + TypeScript** — elegido. Compila a estático, arranca en segundos y añade React con prueba real al CV.

## Dirección visual

Referencias: `javii.tools` (escala y confianza tipográfica) y `javii.es` (titular a dos tonos, badge de disponibilidad). Se descarta su decoración de formas y su discurso de producto.

Concepto: **ficha con registro**. Cada proyecto lleva código, estado y línea de evidencia. La estética es oscura, tipográfica y sobria; el color solo aparece donde significa algo.

### Tokens

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#101010` | fondo |
| `--ink` | `#fafafa` | texto principal |
| `--body` | `#c9c9c9` | párrafos |
| `--muted` | `#8f8f8f` | metadatos |
| `--rule` | `rgba(250,250,250,.13)` | líneas |
| `--ok` | `#34d399` | estado cerrado |
| `--wip` | `#f0b429` | estado en desarrollo |
| `--tone-2` | `#8a8a8a` | primera línea del titular |

Tipografía: **Archivo** (400/500/600/700) para todo el texto, **IBM Plex Mono** (400/500) para códigos, metadatos y cifras.
Escala: hero `clamp(46px, 11vw, 148px)` con tracking `-0.055em` y `line-height: .9`; títulos de sección `clamp(28px, 4.2vw, 46px)` con `-0.035em`; cuerpo 17px/1.55; mono 12–13.5px.

### Estructura

1. **Nav fija en píldora**: nombre, Proyectos, Stack, Trayectoria, conmutador ES/EN.
2. **Hero centrado**: badge de disponibilidad con pulso, titular a dos tonos, párrafo, dos botones (demo / email), franja de cifras.
3. **Banda de captura** de HelpDesk Lite en marco de navegador.
4. **Proyectos**: tres registros con código, nombre, estado, descripción, stack y enlace.
5. **Con qué trabajo**: seis áreas en tres columnas, más la nota honesta sobre cloud.
6. **Trayectoria**: siete filas con fechas en mono.
7. **Idiomas y certificados**: dos columnas, lenguas y certificados con emisor y año.
8. **Cierre**: correo a tamaño de cartel y enlaces.

## Movimiento

- Entrada del hero en cascada, 720 ms, saltos de 70 ms, `cubic-bezier(.23,1,.32,1)`, `translateY(14px)` + opacidad.
- Revelado al scroll: 16 px y opacidad, 550 ms, con `IntersectionObserver` y desfase de 70 ms entre hermanos.
- Banda de captura: `clip-path` de 100 % a 0 en 900 ms. Se observa **la caja padre**, no el elemento recortado: en Chromium un `clip-path` recortado cuenta como 0 % visible y el revelado nunca dispara.
- Nav que se solidifica a partir de 40 px de scroll.
- Hover solo bajo `@media (hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion`: sin desplazamientos, solo opacidad; el pulso del badge se queda estático.

## Internacionalización

Diccionario tipado propio en TypeScript (`es`, `en`), sin librería. Idioma inicial por `navigator.language`, elección persistida en `localStorage`, `document.documentElement.lang` actualizado. Los nombres propios, el stack y los enlaces no se traducen.

## Criterios de aceptación

- Funciona a 360 px de ancho sin scroll horizontal.
- Contraste AA en todo el texto; foco de teclado visible en todos los enlaces.
- Ambas lenguas completas, sin cadenas en el idioma equivocado.
- Ningún enlace muerto: demo y repos responden.
- LCP por debajo de 2 s en 4G simulada; sin saltos de layout (dimensiones fijas de la captura).
- `prefers-reduced-motion` respetado en los cuatro momentos.

## Pendiente

- Captura de MASTERS 3 desde el móvil del señor.
- Redacción final del copy en inglés.
- Decidir dominio propio (no bloquea el despliegue).
