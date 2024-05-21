import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/HomePage");
  }

  return (
    <div style={{ backgroundColor: "LightBlue", padding: "10px" }}>
      <h1>Contact Page</h1>
      <p>
        Thank you for your interest in reaching out to us. Your feedback and
        inquiries are important to us, and we are committed to providing you
        with the assistance you need. Please feel free to contact us using the
        information provided below:
      </p>

      <p>Phone: Main: 9008954747 Support: 98806478474 Sales: 108</p>

      <p>
        Email: General Inquiries: nitish111@gmail.com Customer Support:
        nalatawad111@gmail.com Sales: sales@example.com Address: shivaji circle
        mudhol. karanataka, 587313
      </p>

      <p />

      <hr />
      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default Contact;
