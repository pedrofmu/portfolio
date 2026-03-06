import Image from "next/image";
import { hero } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[42rem] max-w-[77rem] flex-col items-center justify-center px-6 pt-12 pb-16 text-center sm:px-8 lg:min-h-[46rem] lg:pt-16 lg:pb-20">
      <div className="mx-auto w-fit">
        <Image
          src="/border-decorations/hero-decorative-motiv-2.svg"
          alt=""
          aria-hidden="true"
          width={1033}
          height={588}
          className="mx-auto mb-2 h-14 w-24"
        />
      </div>
      <h1 className="font-display text-text mb-5 text-[clamp(2.8rem,8vw,5.7rem)] leading-[1.1] font-light uppercase">
        {hero.title.split("\n").map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <div>
        <Image
          src="/border-decorations/hero-decorative-motiv-3.svg"
          alt=""
          aria-hidden="true"
          width={835}
          height={877}
          className="h-11 w-14"
        />
      </div>

      <div className="relative mx-auto mt-8 w-fit">
        <p className="font-body text-text text-[clamp(1.16rem,2.15vw,1.65rem)] leading-[1.35]">
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
          width={1500}
          height={400}
          className="mx-auto mt-3 h-10 w-56 sm:w-64"
        />
      </div>
    </section>
  );
}
