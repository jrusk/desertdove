import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title, hero }) => {
  const dt = new Date();
  const year = dt.getFullYear();
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="hero">
        <h1 className="title">{hero}</h1>
      </div>
      <main>{children}</main>

      <footer>
        <div className="center">
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="/support" legacyBehavior>
            <a>Support</a>
          </Link>
          &nbsp;|&nbsp;
          <Link href="/contact" legacyBehavior>
            <a>Contact</a>
          </Link>
        </div>
        <div className="center">
          <small>
            Copyright &copy; {year + " "}
            <a href="https://desertdove.org">Desert Dove</a>. All rights
            reserved.
          </small>
        </div>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
        }

        .center {
          text-align: center;
          width: 100%;
        }

        .hero {
          width: 100%;
          min-height: 150px;
          border-top: 1px solid #eaeaea;
          display: flex;
          color: white;
          justify-content: center;
          align-items: center;
          background: url(/background.jpg) center no-repeat;
        }

        .title a {
          width: 100%;
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Layout;
