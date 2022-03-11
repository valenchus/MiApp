import "./App.css";

import Header from "./components/Header/Header";
import Characters from "./components/Characters/Characters";
import { Fragment } from "react";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <Fragment>
        <Characters />
      </Fragment>

      <Header />
    </div>
  );
}
