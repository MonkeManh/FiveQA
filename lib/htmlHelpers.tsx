"use client";
import { ReactNode, StrictMode } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

export function reactNodeToString(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);

  const doc = document.implementation.createHTMLDocument("");
  const mount = doc.createElement("div");
  doc.body.appendChild(mount);

  const root = createRoot(mount);
  try {
    flushSync(() => root.render(<StrictMode>{node}</StrictMode>));
    return mount.innerHTML.trim();           // <-- HTML, not textContent
  } finally {
    root.unmount();
    mount.remove();
  }
}