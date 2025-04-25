import "./Logo.css"
// Remove the direct import and use a public URL approach instead
// import logoImage from "../assets/pravasa-logo.png"

const Logo = () => {
  return (
    <div className="logo">
      <img src="/pravasa-logo.png" alt="Pravasa Immigration" />
    </div>
  )
}

export default Logo
