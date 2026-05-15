import { Button } from "./components/Button";
import { GlitchHeader } from "./components/GlitchHeader";
import { Input } from "./components/Input";
import { Nav } from "./components/Nav";
import { Window } from "./components/Window";

const navItems = [
  { label: "dashboard", href: "#dashboard", active: true },
  { label: "measurements", href: "#measurements" },
  { label: "styles", href: "#styles" },
  { label: "export", href: "#export" },
];

export default function App() {
  return (
    <main className="app-shell">
      <div className="page-frame">
        <Nav brand="printyour.fit" items={navItems} />

        <section className="hero-grid" id="dashboard">
          <GlitchHeader
            title="print your fit"
            subtitle="Webcore UI for fit-aware garment tools, with beveled 90s windows, hot pink accents, and electric blue highlights."
          />

          <Window
            title="Control Panel"
            subtitle="System fonts, chrome edges, and bright motion-friendly color blocks"
            footer={<span style={{ color: "rgba(22, 15, 28, 0.72)", fontSize: 13 }}>Built to feel like a glossy desktop app from the best part of the 90s.</span>}
          >
            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Button variant="primary">Generate Fit</Button>
                <Button variant="secondary">Save Preset</Button>
                <Button variant="ghost">Preview Block</Button>
              </div>

              <div style={{ display: "grid", gap: 14 }} id="measurements">
                <Input label="Bust" placeholder='36"' hint="Enter the fullest circumference." />
                <Input label="Waist" placeholder='28"' hint="Use relaxed, natural waist measurement." />
              </div>
            </div>
          </Window>
        </section>

        <section className="feature-grid" id="styles">
          <Window title="Palette" subtitle="Hot pink, electric blue, and soft panel chrome">
            <div className="swatch-row">
              <div className="swatch swatch--pink">#ff5ca8</div>
              <div className="swatch swatch--blue">#4da3ff</div>
              <div className="swatch swatch--panel">beveled window</div>
            </div>
          </Window>

          <Window title="Typography" subtitle="Tahoma and other familiar system faces">
            <p style={{ margin: 0, maxWidth: 52 + "ch", color: "#160f1c" }}>
              The interface stays crisp and nostalgic by leaning on system fonts, high-contrast panel borders,
              and clean spacing that feels native to classic desktop software.
            </p>
          </Window>
        </section>

        <Window
          title="Export"
          subtitle="A compact example of how the new components fit together"
          className="export-window"
          footer={<span style={{ color: "rgba(22, 15, 28, 0.72)", fontSize: 13 }}>Ready for the rest of the print-your-fit experience.</span>}
        >
          <div id="export" style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Button variant="primary">Download PDF</Button>
              <Button variant="secondary">Share Draft</Button>
            </div>
            <p style={{ margin: 0, color: "#160f1c" }}>
              This updated start screen highlights the reusable Window, Button, Input, Nav, and GlitchHeader components.
            </p>
          </div>
        </Window>
      </div>
    </main>
  );
}
