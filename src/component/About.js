import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/HomePage");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "LightPink",
        padding: "10px",
      }}
    >
      <h1>About</h1>
      <p>
        our product management company dedicated to helping businesses thrive in
        the digital age. With a focus on innovation, collaboration, and
        excellence, we specialize in delivering tailored solutions that drive
        growth, efficiency, and success.
      </p>
      <p>
        We envision a future where every business has access to innovative and
        reliable software solutions that propel them towards their goals.
        Through our expertise and passion for technology, we strive to be the
        catalyst for positive change and digital transformation.
      </p>

      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default About;
