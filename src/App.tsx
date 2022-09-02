import * as React from "react";
import { Routes, Route } from "react-router-dom";

import ReactLogo from "./assets/logo.svg";

import styles from "./styles.module.css";

type Props = {};

export default function App({}: Props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className={styles.container}>
            <h1 className={styles.mainHeader}>Hello Home</h1>
            <ReactLogo className={styles.logo} />
          </div>
        }
      />
      <Route path="/about" element={<h1>Hello About</h1>} />
    </Routes>
  );
}
