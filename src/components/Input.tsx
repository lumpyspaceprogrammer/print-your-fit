import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

const labelStyle = {
  display: "grid",
  gap: 8,
  color: "#160f1c",
  fontFamily: 'Tahoma, Verdana, "Segoe UI", system-ui, sans-serif',
  fontWeight: 700,
  letterSpacing: "0.03em",
};

const inputStyle = {
  width: "100%",
  borderRadius: 10,
  border: "1px solid rgba(70, 58, 96, 0.55)",
  background: "linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%)",
  boxShadow:
    "inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.45)",
  color: "#160f1c",
  fontFamily: 'Tahoma, Verdana, "Segoe UI", system-ui, sans-serif',
  fontSize: 16,
  padding: "0.85rem 0.95rem",
  outline: "none",
};

const hintStyle = {
  marginTop: 4,
  fontSize: 12,
  fontWeight: 400,
  color: "rgba(22, 15, 28, 0.7)",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, style, ...props },
  ref,
) {
  return (
    <label style={labelStyle}>
      <span>{label}</span>
      <input ref={ref} {...props} style={{ ...inputStyle, ...style }} />
      {hint ? <span style={hintStyle}>{hint}</span> : null}
    </label>
  );
});
