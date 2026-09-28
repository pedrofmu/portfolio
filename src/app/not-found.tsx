import Link from "next/link";

/**
 * 404 propio. Sin él, Next exporta su página por defecto y en el <head> se
 * mezclan su título y su `noindex` con el título, el `index, follow` y el
 * canonical del layout.
 */
export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-[linear-gradient(180deg,#FDFBF6_0%,#F5EFE3_100%)] px-6 text-center">
      <div className="max-w-[520px]">
        <p className="mb-4 text-[13px] font-bold tracking-[0.105em] text-brand uppercase">
          Error 404
        </p>
        <h1 className="m-0 font-display text-[clamp(2.2rem,6vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.04em] text-[#171915] text-balance">
          Esta página no existe
        </h1>
        <p className="mt-5 text-[17px] leading-[1.6] text-[#4F5852]">
          Puede que el enlace esté mal escrito o que la página ya no esté. Todo lo que
          busques sobre software a medida para tu pyme está en la página principal.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-[13px] bg-brand px-7 py-[15px] text-[16px] font-bold text-cream no-underline shadow-[0_12px_30px_rgba(15,114,99,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-brand-dark hover:text-cream"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
