import StandardComponent from "../components/component";
import Image from "next/image";

const Support = () => (
  <StandardComponent
    description="You can send checks or pay online using the PayPal Donate button below."
    title="Support"
    hero="Suport us"
  >
    <div className="card" style={{ width: "400px" }}>
      <h3>Pay online with PayPal</h3>
      <br />
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="JUBNREC2FR3V4" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
      </form>
    </div>
    <div className="card" style={{ width: "400px" }}>
      <h3>Mailing Address</h3>
      <p>1302 Goodnight Trail</p>
      <p>Fritch, TX 79036</p>
      <p>United States</p>
      <br />
      <small>Make checks payable to Desert Dove</small>
    </div>

    <Image src="/monsoon.jpg" alt="Monsoon photo" width="800" height="600" />

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

export default Support;
