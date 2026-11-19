export default function Marquee() {
  const items = [
    "SEO & ORGANIC",
    "PERFORMANCE MEDIA",
    "CONVERSION CRO",
    "WEB DEVELOPMENT",
    "BRAND IDENTITY",
    "MARKETING AUTOMATION",
    "CONTENT STRATEGY",
    "GOOGLE ADS"
  ];

  return (
    <div className="mq" aria-hidden="true">
      <p>ENGINEERED FOR SCALE · TRUSTED BY AMBITIOUS BRANDS</p>
      <div className="tr">
        {/* Repeat 3 times to ensure infinite smooth marquee loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </div>
  );
}
