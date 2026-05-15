interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavProps {
  brand?: string;
  items: NavItem[];
}

const navStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  flexWrap: "wrap" as const,
  padding: "14px 18px",
  border: "2px solid #6f63a8",
  borderRadius: 16,
  background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(233,242,255,0.92) 100%)",
  boxShadow:
    "inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.55), 0 12px 28px rgba(22,15,28,0.12)",
};

const brandStyle = {
  fontFamily: 'Tahoma, Verdana, "Segoe UI", system-ui, sans-serif',
  fontWeight: 800,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: "#160f1c",
};

const listStyle = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap" as const,
  margin: 0,
  padding: 0,
  listStyle: "none",
};

const linkStyle = (active?: boolean) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.55rem 0.9rem",
  borderRadius: 999,
  border: "1px solid rgba(70, 58, 96, 0.45)",
  textDecoration: "none",
  color: active ? "#fff" : "#160f1c",
  background: active
    ? "linear-gradient(135deg, #ff5ca8 0%, #4da3ff 100%)"
    : "linear-gradient(180deg, #ffffff 0%, #edf2ff 100%)",
  boxShadow:
    "inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.55)",
  fontFamily: 'Tahoma, Verdana, "Segoe UI", system-ui, sans-serif',
  fontSize: 14,
  fontWeight: 700,
});

export function Nav({ brand = "printyour.fit", items }: NavProps) {
  return (
    <nav style={navStyle}>
      <div style={brandStyle}>{brand}</div>
      <ul style={listStyle}>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} aria-current={item.active ? "page" : undefined} style={linkStyle(item.active)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
