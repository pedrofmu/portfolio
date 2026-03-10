import type { CSSProperties } from "react";

const wrapperStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "linear-gradient(135deg, #f2e7dc 0%, #ead9c8 45%, #d6b995 100%)",
  color: "#1b1b18",
  padding: "64px 72px",
  fontFamily: "sans-serif",
};

const badgeStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "18px",
  fontSize: 28,
  letterSpacing: 6,
  textTransform: "uppercase",
};

const dividerStyle: CSSProperties = {
  width: 88,
  height: 2,
  backgroundColor: "#ab6b3f",
};

const headlineStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  fontSize: 72,
  lineHeight: 1.05,
  fontWeight: 700,
  letterSpacing: -2,
  textTransform: "uppercase",
};

const footerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  gap: 24,
};

const servicesStyle: CSSProperties = {
  display: "flex",
  gap: 18,
  flexWrap: "wrap",
  maxWidth: 760,
  fontSize: 26,
};

const pillStyle: CSSProperties = {
  border: "1px solid rgba(27, 27, 24, 0.16)",
  borderRadius: 999,
  padding: "10px 18px",
  backgroundColor: "rgba(255, 255, 255, 0.45)",
};

export function SeoImage() {
  return (
    <div style={wrapperStyle}>
      <div style={badgeStyle}>
        <span>Pedro FM</span>
        <div style={dividerStyle} />
        <span>Portfolio B2B</span>
      </div>

      <div style={headlineStyle}>
        <span>Sistemas internos</span>
        <span>Automatizacion e IA</span>
        <span>para empresas</span>
      </div>

      <div style={footerStyle}>
        <div style={servicesStyle}>
          <span style={pillStyle}>Software a medida</span>
          <span style={pillStyle}>Integraciones</span>
          <span style={pillStyle}>Automatizaciones</span>
        </div>
        <span style={{ fontSize: 24 }}>pedrofm.dev</span>
      </div>
    </div>
  );
}
