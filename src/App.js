import React from "react";
import { Link } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Link to="/01">01</Link>
      <Link to="/02">02</Link>
      <Link to="/03">03</Link>
    </div>
  );
}

export default App;
