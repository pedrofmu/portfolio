import { hero } from "@/lib/data";

export function Navbar() {
  return (
    <header className="pt-10 sm:pt-14">
      <nav aria-label="Principal" className="mx-auto max-w-6xl text-center">
        <p className="font-signature text-text text-[1.5rem] leading-none sm:text-[2rem]">
          {hero.name}
        </p>
      </nav>
    </header>
  );
}
