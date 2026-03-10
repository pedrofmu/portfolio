import { ImageResponse } from "next/og";
import { SeoImage } from "@/lib/seo-image";

export const alt =
  "Pedro FM - sistemas internos, automatizacion e IA para empresas";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SeoImage />, size);
}
