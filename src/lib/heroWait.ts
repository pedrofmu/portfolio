/**
 * Espera de la carga. Mientras `<html>` lleva `data-hero-wait` se ve la
 * pantalla de carga (`body::before`, en globals.css) y el hero, ya pintado
 * debajo, tiene sus animaciones detenidas en el primer fotograma. Al quitar el
 * atributo la carga se desvanece y todo el hero arranca en el mismo fotograma.
 *
 * Los scripts van en línea y ponen el atributo antes del primer pintado. Sin
 * JS no se pone y la página se ve como siempre.
 */

/** Lo emite el hero en `document` cuando React lo ha hidratado. */
export const HERO_HYDRATED_EVENT = "hero:hydrated";

/** Tope de la espera: con un script bloqueado o sin red, la página se ve igual. */
const MAX_WAIT_MS = 6000;

const SET = `var r=document.documentElement,done=0,show=function(){if(!done){done=1;r.removeAttribute("data-hero-wait")}};r.setAttribute("data-hero-wait","");setTimeout(show,${MAX_WAIT_MS});`;

/**
 * Página de un idioma. Espera a que el hero esté listo y se pueda usar:
 * 1. su HTML ha llegado entero (ya existe lo que va detrás) y sus fuentes han
 *    cargado: con mala conexión el HTML llega a trozos y el navegador pinta lo
 *    que tiene, cada cresta y cada bloque de texto a su ritmo;
 * 2. React lo ha hidratado: el menú, el selector de idioma y la tira de casos
 *    responden desde el primer momento.
 * Después deja pasar dos fotogramas, para que el hero se pinte ya con sus
 * fuentes bajo la carga (los filtros de tinta son lo más caro de la página) y
 * no durante la animación.
 *
 * `fonts`: las fuentes del hero, en la sintaxis de `document.fonts.load`.
 */
export function heroWaitScript(fonts: string[]) {
  return `(function(){${SET}var n=0,ready=function(){if(++n===2)requestAnimationFrame(function(){requestAnimationFrame(show)})};document.addEventListener(${JSON.stringify(HERO_HYDRATED_EVENT)},ready,{once:true});(function wait(){var h=document.getElementById("inicio");if(!h||!(h.nextElementSibling||document.readyState!=="loading"))return requestAnimationFrame(wait);try{Promise.all(${JSON.stringify(fonts)}.map(function(f){return document.fonts.load(f)})).then(ready,ready)}catch(e){ready()}})()})()`;
}

/**
 * `/`, que redirige al idioma del visitante: la carga se ve desde aquí y
 * sigue, sin cortes, en la página de destino. `redirect` es el JS que navega.
 * Si la navegación no llega, al tope de la espera se ve el selector de idioma.
 */
export function redirectWaitScript(redirect: string) {
  return `(function(){${SET}${redirect}})()`;
}
