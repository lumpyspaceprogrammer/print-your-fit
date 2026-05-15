import type { ReactNode } from "react";

interface WindowProps {
  title: string;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const shellStyle = {
  border: "2px solid #6f63a8",
  borderRadius: 16,
  overflow: "hidden",
  background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(244,241,250,0.98) 100%)",
  boxShadow:
    "inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.55), 0 18px 40px rgba(22,15,28,0.18)",
};

const titleBarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  padding: "12px 14px",
  color: "#fff",
  background: "linear-gradient(135deg, #ff5ca8 0%, #4da3ff 100%)",
  borderBottom: "2px solid rgba(22, 15, 28, 0.18)",
};

const controlStyle = {
  display: "flex",
  gap: 6,
};

const dotStyle = (color: string) => ({
  width: 11,
  height: 11,
  borderRadius: 999,
  background: color,
  boxShadow: "inset 1px 1px 0 rgba(255,255,255,0.75)",
});

const bodyStyle = {
  padding: 18,
};

const footerStyle = {
  padding: "0 18px 18px",
};

export function Window({ title, subtitle, children, footer, className }: WindowProps) {
  return (
    <section className={className} style={shellStyle}>
      <header style={titleBarStyle}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.04em" }}>{title}</div>
          {subtitle ? (
            <div style={{ marginTop: 4, fontSize: 12, opacity: 0.92 }}>{subtitle}</div>
          ) : null}
        </div>
        <div style={controlStyle} aria-hidden="true">
          <span style={dotStyle("#ff5ca8")} />
          <span style={dotStyle("#ffd666")} />
          <span style={dotStyle("#4da3ff")} />
        </div>
      </header>
      <div style={bodyStyle}>{children}</div>
      {footer ? <div style={footerStyle}>{footer}</div> : null}
    </section>
  );
}
