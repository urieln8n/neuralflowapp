export default function AutomationsPage() {

  const automations = [
    {
      name: "Lead Capture AI",
      description: "Automatically capture and qualify leads from your website using AI."
    },
    {
      name: "Appointment Reminder",
      description: "Send automatic reminders to customers before their appointments."
    },
    {
      name: "Customer Support Bot",
      description: "AI chatbot that answers customer questions 24/7."
    },
    {
      name: "Client Onboarding",
      description: "Automate onboarding emails and setup for new clients."
    },
    {
      name: "Sales Follow Up",
      description: "Automatically follow up with leads who didn't respond."
    }
  ]

  return (
    <main style={{
      padding: "40px",
      background: "#0f0f0f",
      minHeight: "100vh",
      color: "white"
    }}>

      <h1 style={{
        fontSize: "36px",
        marginBottom: "10px"
      }}>
        AI Automations
      </h1>

      <p style={{
        opacity: 0.7,
        marginBottom: "40px"
      }}>
        Install powerful AI automations for your business
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
        gap: "20px"
      }}>

        {automations.map((auto, i) => (

          <div key={i} style={{
            background: "#1a1a1a",
            borderRadius: "12px",
            padding: "20px",
            border: "1px solid #333"
          }}>

            <h3 style={{marginBottom:"10px"}}>
              {auto.name}
            </h3>

            <p style={{
              fontSize:"14px",
              opacity:0.7,
              marginBottom:"20px"
            }}>
              {auto.description}
            </p>

            <button style={{
              background:"#7c3aed",
              border:"none",
              padding:"10px 16px",
              borderRadius:"8px",
              color:"white",
              cursor:"pointer"
            }}>
              Install
            </button>

          </div>

        ))}

      </div>

    </main>
  )
}