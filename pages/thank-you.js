import StandardComponent from "../components/component";
import Image from "next/image";

const Thankyou = () => (
  <StandardComponent
    title="Thank you"
    hero="Thank you"
    description="Thank you for donating!"
  >
    <a href="https://www.facebook.com/johnleon.rusk" className="card">
      <Image
        src="/finduson_facebook.png"
        alt="Facebook logo"
        width="436"
        height="81"
      />
    </a>

    <Image src="/agave.jpg" alt="Agave photo" width="800" height="600" />

    <style jsx>{`
      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
    `}</style>
  </StandardComponent>
);

export default Thankyou;
