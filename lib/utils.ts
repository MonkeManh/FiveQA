import { clsx, type ClassValue } from "clsx";
import React, {
  cloneElement,
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(
  value: string,
  onComplete?: () => void
): string {
  const digits = value.replace(/\D/g, "");

  const truncatedDigits = digits.slice(0, 10);

  if (truncatedDigits.length === 10 && onComplete) {
    setTimeout(onComplete, 0);
  }

  if (truncatedDigits.length <= 3) {
    return truncatedDigits;
  } else if (truncatedDigits.length <= 6) {
    return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(3)}`;
  } else {
    return `(${truncatedDigits.slice(0, 3)}) ${truncatedDigits.slice(
      3,
      6
    )}-${truncatedDigits.slice(6, 10)}`;
  }
}

export function calculateAgeFromDate(
  dateStr: string
): { value: number; unit: string } | null {
  const birthDate = new Date(dateStr);
  const now = new Date();
  if (isNaN(birthDate.getTime())) return null;

  const diffMs = now.getTime() - birthDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 31) {
    return { value: diffDays, unit: "day" };
  } else if (diffDays < 365) {
    return { value: Math.floor(diffDays / 30), unit: "month" };
  } else {
    return {
      value:
        now.getFullYear() -
        birthDate.getFullYear() -
        (now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() &&
          now.getDate() < birthDate.getDate())
          ? 1
          : 0),
      unit: "year",
    };
  }
}

export function replacePronounInNode(
  node: ReactNode,
  replacement1: string,
  replacement2: string,
  inputValue?: string
): ReactNode {
  if (typeof node === "string") {
    return node
      .replace(/\*\*pronoun\*\*/gi, replacement1)
      .replace(/\*\*pronoun2\*\*/gi, replacement2)
      .replace(/\*\*input\*\*/gi, inputValue || "");
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => {
      const replacedChild = replacePronounInNode(
        child,
        replacement1,
        replacement2,
        inputValue
      );
      if (isValidElement(replacedChild) && replacedChild.key == null) {
        return cloneElement(replacedChild, { key: index });
      }
      return replacedChild;
    });
  }

  if (isValidElement(node)) {
    const element = node as ReactElement<any>;

    const newChildren = replacePronounInNode(
      element.props.children,
      replacement1,
      replacement2,
      inputValue
    );
    return cloneElement(element, { ...element.props, children: newChildren });
  }

  return node;
}

export function processQuestionText(text: React.ReactNode): string {
  if (typeof text === "string") return text;
  if (React.isValidElement(text)) {
    let content = "";
    const element = text as React.ReactElement<{ children?: React.ReactNode }>;

    if (element.props.children) {
      React.Children.forEach(
        element.props.children,
        (child: React.ReactNode) => {
          if (typeof child === "string") {
            content += child;
          } else if (React.isValidElement(child)) {
            content += processQuestionText(child);
          }
        }
      );
    }
    return content;
  }
  return "";
}


function styleObjToString(style: Record<string, unknown>) {
  return Object.entries(style)
    .filter(([, v]) => v != null && v !== false)
    .map(([k, v]) => {
      // camelCase to kebab-case
      const prop = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
      return `${prop}:${String(v)}`;
    })
    .join(";");
}

function isFragmentElement(el: ReactElement): boolean {
  // Comparing directly to React.Fragment is the supported way.
  return el.type === Fragment;
}

export function reactNodeToHtml(node: ReactNode): string {
  if (node == null || node === false) return "";
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToHtml).join("");

  if (isValidElement(node)) {
    const element = node as ReactElement<any>;
    const { type, props } = element;

    // ✅ Fragment support without symbol comparisons
    if (isFragmentElement(element)) {
      return reactNodeToHtml(props?.children);
    }

    if (typeof type === "string") {
      const attrs = Object.entries(props ?? {})
        .filter(([k, v]) => k !== "children" && v != null && typeof v !== "function")
        .map(([k, v]) => {
          const name = k === "className" ? "class" : k === "htmlFor" ? "for" : k;
          if (name === "style" && typeof v === "object") {
            const css = Object.entries(v as Record<string, unknown>)
              .filter(([, val]) => val != null && val !== false)
              .map(([prop, val]) =>
                `${prop.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}:${String(val)}`
              )
              .join(";");
            return css ? `style="${css.replace(/"/g, "&quot;")}"` : "";
          }
          if (typeof v === "boolean") return v ? name : "";
          return `${name}="${String(v).replace(/"/g, "&quot;")}"`;
        })
        .filter(Boolean)
        .join(" ");

      const open = attrs ? `<${type} ${attrs}>` : `<${type}>`;
      const inner = reactNodeToHtml(props?.children);
      const close = `</${type}>`;
      return open + inner + close;
    }

    // Custom components: serialize children only
    return reactNodeToHtml(props?.children);
  }

  return "";
}