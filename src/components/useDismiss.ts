"use client";

import { useEffect, type RefObject } from "react";

/**
 * Cierra un desplegable abierto: Escape cierra y devuelve el foco al botón; un
 * clic o foco fuera de `rootRef`, también cierra. Lo usan el menú de móvil y
 * el selector de idioma, que pueden estar uno al lado del otro: abrir uno
 * cierra el otro.
 */
export function useDismiss(
  open: boolean,
  setOpen: (open: boolean) => void,
  rootRef: RefObject<HTMLElement | null>,
  buttonRef: RefObject<HTMLButtonElement | null>,
) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onOutside = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onOutside);
    document.addEventListener("focusin", onOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onOutside);
      document.removeEventListener("focusin", onOutside);
    };
  }, [open, setOpen, rootRef, buttonRef]);
}
