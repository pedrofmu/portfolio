export default function Footer() {
  return (
    <footer className="border-t border-[#E7E0D2] bg-[#F3EDE1] px-6 pt-[clamp(48px,7vw,72px)] pb-8 max-[620px]:px-5">
      <div className="mx-auto flex max-w-[1080px] flex-col gap-9">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-8">
          <div className="flex flex-col gap-[10px]">
            <div className="font-display text-[22px] font-extrabold">
              pedrofm<span className="text-brand">.</span>
            </div>
            <p className="m-0 max-w-[280px] text-[14.5px] leading-[1.6] text-[#5C6B64]">
              Desarrollo de software a medida para PYMES. Alcoy, Alicante
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] font-bold tracking-[0.1em] text-[#7A877F] uppercase">
              Contacto
            </div>
            <a href="mailto:hola@pedrofm.dev" className="text-[14.5px] font-semibold no-underline">
              hola@pedrofm.dev
            </a>
            <a href="tel:+34673314676" className="text-[14.5px] font-semibold no-underline">
              +34 673 31 46 76
            </a>
            <a
              href="https://pedrofm.dev"
              target="_blank"
              rel="noopener"
              className="text-[14.5px] font-semibold no-underline"
            >
              pedrofm.dev
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-fern%C3%A1ndez-mu%C3%B1oz-4148a9287/"
              target="_blank"
              rel="noopener"
              className="text-[14.5px] font-semibold no-underline"
            >
              LinkedIn
            </a>
            <div className="mt-1 text-[13.5px] text-[#7A877F]">
              Español · Valencià · English · Français
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[13px] font-bold tracking-[0.1em] text-[#7A877F] uppercase">
              Aviso legal y privacidad
            </div>
            <p className="m-0 text-[12.5px] leading-[1.65] text-[#6B7A72]">
              Responsable: Pedro Fernández Muñoz (Alcoy, Alicante). Este sitio no utiliza
              cookies de seguimiento ni formularios que almacenen datos. Los datos personales
              que me facilites por email, teléfono o WhatsApp se utilizan únicamente para
              responder a tu consulta y preparar una propuesta, conforme al RGPD (UE)
              2016/679 y a la LOPDGDD 3/2018. No se ceden a terceros ni se usan con fines
              publicitarios. Puedes ejercer tus derechos de acceso, rectificación y supresión
              escribiendo a{" "}
              <a href="mailto:hola@pedrofm.dev" className="font-semibold">
                hola@pedrofm.dev
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-[10px] border-t border-[#E2DAC9] pt-5 text-[13px] text-[#7A877F] max-[620px]:flex-col max-[620px]:items-start">
          <div>© 2026 Pedro Fernández Muñoz · Alcoy, Alicante</div>
          <a href="#inicio" className="font-semibold no-underline">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
