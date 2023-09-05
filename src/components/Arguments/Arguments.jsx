import React from "react";
import classess from "./Arguments.module.css";

const Arguments = () => {
  return (
    <section className={classess.arguments}>
      <hr />
      <h2 className={classess.title}>
        Dlaczego powinieneś wybrać naszą stronę?
      </h2>
      <ul className={classess.list}>
        <li>
          - Przestań tracić czas na tworzenie bazy aby przetestować swoje
          umiejętności
        </li>
        <li>- Nasza usługa jest darmowa</li>
        <li>- Jesteśmy nowi na rynku daj nam się wykazać</li>
      </ul>
    </section>
  );
};

export default Arguments;
