import * as React from "react";
import { Link } from "gatsby";
import links from "../components/links/link";
import { BrowserRouter as Router, Route } from "react-router-dom";
import prestations from "../components/prestations/prestations";
import representation from "../components/representation/representation";
import mention from "../components/mention/mention";

const IndexPage = () => {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <a href="index.html">Jean Michel alias "LA MICH"</a>
        </h1>
        <h2>Je suis un clown Passioné</h2>

        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </div>
    </header>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
