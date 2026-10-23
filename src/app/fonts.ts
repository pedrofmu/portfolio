import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";

// En un módulo aparte porque hay varios layouts raíz (`/`, `/[lang]` y el 404
// global) y next/font solo deja declararlas una vez.

export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const instrument = Instrument_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const fontVariables = `${bricolage.variable} ${instrument.variable}`;
