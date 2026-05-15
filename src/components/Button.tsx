import type { ButtonHTMLAttributes, CSSProperties } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const baseStyle: CSSProperties = {
  appearance: "none",
  border: "1px solid rgba(70, 58, 96, 0.65)",
  borderRadius: 12,
  fontFamily: 'Tahoma, Verdana, "Segoe UI", system-ui, sans-serif',
  fontWeight: 700,
  letterSpacing: "0.04em",
  padding: "0.8rem 1rem",
  cursor: "pointer",
  boxShadow:
    "inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.55)",
};

const variants: Record<ButtonVariant, CSSProperties> = {
  primary: {
    color: "#fff",
    background: "linear-gradient(135deg, #ff5ca8 0%, #4da3ff 100%)",
  },
  secondary: {
    color: "#160f1c",
    background: "linear-gradient(180deg, #ffffff 0%, #dde8ff 100%)",
  },
  ghost: {
    color: "#160f1c",
    background: "rgba(255,255,255,0.55)",
  },
};

export function Button({ variant = "primary", style, type = "button", ...props }: ButtonProps) {
  return <button type={type} {...props} style={{ ...baseStyle, ...variants[variant], ...style }} />;
}
