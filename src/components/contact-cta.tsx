import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { MotionReveal } from "@/components/motion-reveal";
import { contact } from "@/lib/data";

export function ContactCta() {
  return (
    <section
      id="contacto"
      className="mx-auto mt-32 max-w-5xl px-6 pb-24 text-center sm:mt-44 sm:pb-28"
      aria-labelledby="contact-title"
    >
      <MotionReveal>
        <Image
          src="/border-decorations/cta-decorative-motiv.svg"
          alt=""
          aria-hidden="true"
          width={885}
          height={1219}
          className="mx-auto h-24 w-20"
        />
      </MotionReveal>

      <MotionReveal delay={0.06}>
        <h2
          id="contact-title"
          className="font-display text-text text-[clamp(2.5rem,6vw,4.8rem)] leading-[0.9] font-medium tracking-[-0.04em] uppercase"
        >
          {contact.title.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
      </MotionReveal>

      <MotionReveal delay={0.12}>
        <p className="text-text mx-auto mt-5 max-w-2xl text-[1.15rem] leading-[1.3] tracking-[-0.01em] sm:text-[1.24rem]">
          {contact.description.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
      </MotionReveal>

      <MotionReveal className="mt-9" delay={0.17}>
        <CtaButton href={contact.href}>{contact.cta}</CtaButton>
      </MotionReveal>
    </section>
  );
}
