import React, { useState } from "react";
import classess from "./ContentOptions.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const ContentOptions = (props) => {
  const [rowsNumber, setRowsNumber] = useState(10);
  const [tableName, setTableName] = useState("");
  const [createTable, setCreateTable] = useState(true);

  const handleRowsNumber = (e) => {
    setRowsNumber(+e.target.value);
    handleChangeDetails();
  };

  const handleTableName = (e) => {
    setTableName(e.target.value);
    handleChangeDetails();
  };

  const handleCreateTable = () => {
    createTable === true ? setCreateTable(false) : setCreateTable(true);
    handleChangeDetails();
  };

  const handleChangeDetails = () => {
    const obj = {
      tableName: tableName,
      rowsNumber: rowsNumber,
      createTable: createTable,
    };
    props.onAddTable(obj);
  };

  return (
    <section className={classess.options}>
      <div className={classess.box}>
        <label htmlFor="rows-number">Liczba wierszy:</label>
        <Input
          type="number"
          id="rows-number"
          className={classess.input}
          value={rowsNumber}
          onAction={handleRowsNumber}
        />
      </div>
      <div className={classess.container}>
        <label htmlFor="tablename">Nazwa Tabeli:</label>
        <Input
          type="text"
          id="tablename"
          className={classess.input}
          placeholder="nazwa"
          value={tableName}
          onAction={handleTableName}
        />
      </div>
      <div className={classess.container}>
        <input
          type="checkbox"
          id="create"
          checked={createTable}
          onChange={handleCreateTable}
        />
        <label htmlFor="create">Stworzyć tabelę?</label>
      </div>
      <Button
        id="download_data"
        className={classess.confirm}
        onAction={props.onGenerate}
      >
        Pobierz bazę danych
      </Button>
    </section>
  );
};

export default ContentOptions;
