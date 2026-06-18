import { ImageResponse } from "next/og";

export const alt = "Luna Llena Unisex Beauty Salon · City of Orange, NJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px",
          background:
            "radial-gradient(620px 620px at 78% 16%, rgba(228,169,75,0.42), rgba(200,134,47,0.10) 45%, transparent 70%), linear-gradient(180deg, #1C1411 0%, #251A15 100%)",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 70,
            right: 96,
            width: 240,
            height: 240,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 38% 34%, #FFF3DC 0%, #F2CE86 28%, #E4A94B 54%, #C8862F 80%, #9A6420 100%)",
            boxShadow: "0 0 90px 24px rgba(228,169,75,0.5)",
            display: "flex",
          }}
        />
        <div
          style={{
            color: "#E4A94B",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          Salón de belleza unisex · Orange, NJ
        </div>
        <div
          style={{
            color: "#F4ECDD",
            fontSize: 92,
            lineHeight: 1.0,
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Te ves preciosa</span>
          <span style={{ color: "#E4A94B", fontStyle: "italic" }}>bajo esta luz.</span>
        </div>
        <div
          style={{
            color: "#C9B69A",
            fontSize: 30,
            marginTop: 26,
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          Luna Llena · Cuts, color, braids and blowouts for everyone
        </div>
      </div>
    ),
    { ...size }
  );
}
