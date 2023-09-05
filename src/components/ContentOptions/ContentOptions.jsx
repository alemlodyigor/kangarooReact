import React from "react";
import classess from "./ContentOptions.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const ContentOptions = () => {
  return (
    <section className={classess.options}>
      <div className={classess.box}>
        <label>Liczba wierszy:</label>
        <Input
          type="number"
          id="rows-number"
          className={classess.input}
          value="10"
        />
      </div>
      <div className={classess.container}>
        <label for="">Nazwa Tabeli:</label>
        <Input
          type="text"
          id="tablename"
          className={classess.input}
          placeholder="nazwa"
        />
      </div>
      <div className={classess.container}>
        <input type="checkbox" id="create" checked />
        <label for="create">Stworzyć tabelę?</label>
      </div>
      <Button id="download_data" className={classess.confirm}>
        Pobierz bazę danych
      </Button>
    </section>
  );
};

export default ContentOptions;
