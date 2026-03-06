import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { contact } from "@/lib/data";

export function ContactCta() {
  return (
    <section
      id="contacto"
      className="mx-auto min-h-[38rem] max-w-[77rem] px-6 pt-16 pb-24 text-center sm:px-8 lg:min-h-[42rem] lg:pt-25 lg:pb-28"
      aria-labelledby="contact-title"
    >
      <Image
        src="/border-decorations/cta-decorative-motiv.svg"
        alt=""
        aria-hidden="true"
        width={900}
        height={1500}
        className="mx-auto h-24 w-20 mb-7"
      />

      <h2
        id="contact-title"
        className="font-display text-text text-[clamp(2.5rem,6vw,4.8rem)] leading-[1] font-light uppercase"
      >
        {contact.title.split("\n").map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>

      <p className="text-text mx-auto mt-8 max-w-2xl text-[1.15rem] sm:text-[1.24rem]">
        {contact.description.split("\n").map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>

      <div className="mt-12">
        <CtaButton href={contact.href}>{contact.cta}</CtaButton>
      </div>
    </section>
  );
}
