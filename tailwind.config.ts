const config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "webcore-pink": "#ff5ca8",
        "webcore-blue": "#4da3ff",
        "webcore-ink": "#160f1c",
        "webcore-panel": "#f6f3fb",
        "webcore-border": "#6f63a8",
      },
      fontFamily: {
        sans: ['Tahoma', 'Verdana', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Tahoma', 'Verdana', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      boxShadow: {
        window: 'inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.55), 0 18px 40px rgba(22,15,28,0.18)',
        button: 'inset 1px 1px 0 rgba(255,255,255,0.95), inset -1px -1px 0 rgba(70,58,96,0.55)',
      },
      borderRadius: {
        windows: '12px',
      },
      backgroundImage: {
        'webcore-gradient': 'linear-gradient(135deg, #ff5ca8 0%, #4da3ff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
