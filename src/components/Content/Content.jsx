import React, { useState } from "react";
import classess from "./Content.module.css";
import Field from "../Field/Field";
import Button from "../UI/Button/Button";

const Content = (props) => {  
  const [fields, setFields] = useState([]);

  const handleAddNewField = () => {
    const newField = {
      id: fields.length + 1,
      name: 'id',
      rowType: 'id',
      dataType: 'INT'
    };
    setFields([...fields, newField]);
  };

  const handleChangeField = (obj) => {
    const [id, name, type, selectedType] = obj;
    const [field] = fields.filter(e => e.id === id);
    const otherfields = fields.filter(e => e.id !== id);
    field.name = name;
    field.rowType = type;
    field.dataType = selectedType;
    otherfields.push(field);
    setFields(otherfields);
    props.onAddContent(fields);
  }

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
          <Field key={e.id} id={e.id} onDelete={() => handleDeleteField(e.id)} onChangeField={handleChangeField} name={e.name} type={e.type} />
        ))}
      </section>
      <Button className={classess.addField} onAction={handleAddNewField}>
        Dodaj kolejną kolumnę
      </Button>
    </section>
  );
};

export default Content;
