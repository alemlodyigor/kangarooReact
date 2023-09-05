import React, { useState } from "react";
import classess from "./Content.module.css";

import Field from "../Field/Field";
import Button from "../UI/Button/Button";

const Content = () => {
  const [fields, setFields] = useState([]);

  const handleAddNewField = () => {
    const newField = {
      id: fields.length + 1,
    };
    setFields([...fields, newField]);
  };

  const handleDeleteField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  return (
    <section className={classess.content}>
      <div className={classess.header}>
        <h3>Nazwa kolumny</h3>
        <h3>Typ danych</h3>
        <h3>Usuń</h3>
      </div>
      <section className={classess.body}>
        {fields.map((e) => (
          <Field key={e.id} onDelete={() => handleDeleteField(e.id)} />
        ))}
      </section>
      <Button className={classess.addField} onAction={handleAddNewField}>
        Dodaj kolejną kolumnę
      </Button>
    </section>
  );
};

export default Content;
