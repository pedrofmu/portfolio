import { hero } from "@/lib/data";

export function Navbar() {
  return (
    <header className="pt-10 sm:pt-14">
      <nav aria-label="Principal" className="mx-auto max-w-6xl text-center">
        <p className="font-signature text-text text-[1.9rem] leading-none tracking-tight sm:text-[2.2rem]">
          {hero.name}
        </p>
      </nav>
    </header>
  );
}
