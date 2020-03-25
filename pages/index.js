import StandardComponent from '../components/component';

const Home = () => (
  <StandardComponent description="Christian Church and Mission">
    <main>
      Planning missions to, prayer for, explorations of South Africa, Namibia,
      Wales, Malaysia...
    </main>

    <a href="support" className="card">
      <h3>Support &rarr;</h3>
      <p>Online donations</p>
      <img src="moonscape.jpg" />
    </a>

    <a href="contact" className="card">
      <h3>Contact &rarr;</h3>
      <p>Contact information</p>
      <img src="dune_cycles.jpg" />
    </a>

    <style jsx>{`
      main {
        width: 85%;
        align-items: center;
      }

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

      .card img {
        width: 300px;
      }
    `}</style>
  </StandardComponent>
);

export default Home;
