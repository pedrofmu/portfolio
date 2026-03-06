import Image from "next/image";
import { MotionReveal } from "@/components/motion-reveal";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <MotionReveal
      className="relative mx-auto mt-14 max-w-6xl px-6 text-center sm:mt-16"
      delay={0.05}
    >
      <div className="mx-auto w-fit">
        <Image
          src="/border-decorations/hero-decorative-motiv-2.svg"
          alt=""
          aria-hidden="true"
          width={1033}
          height={588}
          className="mx-auto h-14 w-24"
        />
      </div>
      <h1 className="font-display text-text text-[clamp(2.8rem,8vw,5.7rem)] leading-[0.93] font-medium tracking-[-0.04em] uppercase">
        {hero.title.split("\n").map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <div className="relative mx-auto mt-8 w-fit">
        <div className="absolute top-[-1.2rem] -left-14">
          <Image
            src="/border-decorations/hero-decorative-motiv-3.svg"
            alt=""
            aria-hidden="true"
            width={835}
            height={877}
            className="h-11 w-14"
          />
        </div>
        <p className="font-body text-text text-[clamp(1.16rem,2.15vw,1.65rem)] leading-[1.35] tracking-[-0.02em]">
          {hero.subtitle.split("\n").map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <Image
          src="/border-decorations/hero-decorative-motiv-1.svg"
          alt=""
          aria-hidden="true"
          width={1369}
          height={346}
          className="mx-auto mt-3 h-10 w-56 sm:w-64"
        />
      </div>
    </MotionReveal>
  );
}
