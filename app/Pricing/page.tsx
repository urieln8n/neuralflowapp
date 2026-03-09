export default function PricingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0f",
        color: "white",
        padding: "80px"
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "40px" }}>
        Pricing
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap"
        }}
      >

        <div
          style={{
            background: "#111118",
            padding: "30px",
            borderRadius: "12px",
            width: "250px"
          }}
        >
          <h2>Starter</h2>
          <p>$19 / month</p>
          <p>Basic automation</p>
        </div>

        <div
          style={{
            background: "#111118",
            padding: "30px",
            borderRadius: "12px",
            width: "250px"
          }}
        >
          <h2>Pro</h2>
          <p>$49 / month</p>
          <p>Unlimited automations</p>
        </div>

        <div
          style={{
            background: "#111118",
            padding: "30px",
            borderRadius: "12px",
            width: "250px"
          }}
        >
          <h2>Enterprise</h2>
          <p>$199 / month</p>
          <p>AI Agents + automation</p>
        </div>

      </div>
    </div>
  )
}