import Head from 'next/head';

import Layout from '../components/layout';

const Home = () => (
  <Layout>
    <p className="description">Church, etc. and so forth...</p>

    <div className="grid">
      <a href="support" className="card">
        <h3>Support &rarr;</h3>
        <p>Support us.</p>
      </a>

      <a href="contact" className="card">
        <h3>Learn &rarr;</h3>
        <p>Learn more.</p>
      </a>

      <a href="contact" className="card">
        <h3>Contact &rarr;</h3>
        <p>Contact...</p>
      </a>

      <a href="contact" className="card">
        <h3>Stuff &rarr;</h3>
        <p>Stuff...</p>
      </a>
    </div>

    <style jsx>{`
      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
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

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
