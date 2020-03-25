import Layout from './layout';

const StandardComponent = ({ description, title, hero, children }) => (
  <Layout
    title={title ? title : 'Desert Dove'}
    hero={hero ? hero : 'Welcome to Desert Dove'}>
    <p className="description">{description}</p>

    <div className="grid">{children}</div>

    <style jsx>{`
      .description {
        width: 85%;
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

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </Layout>
);

export default StandardComponent;
