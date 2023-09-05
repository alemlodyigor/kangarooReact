import React from "react";
import classess from "./Content.module.css";

import Field from "../Field/Field";
import Button from "../UI/Button/Button";

const Content = () => {
  return (
    <section className={classess.content}>
      <div className={classess.header}>
        <h3>Nazwa kolumny</h3>
        <h3>Typ danych</h3>
        <h3>Usuń</h3>
      </div>
      <section className={classess.body}>
        <Field />
      </section>
      <Button className={classess.addField}>Dodaj kolejną kolumnę</Button>
    </section>
  );
};

export default Content;
