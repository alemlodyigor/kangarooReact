import Header from "./components/Header/Header";
import "./app.css";
import Content from "./components/Content/Content";
import ContentOptions from "./components/ContentOptions/ContentOptions";
import Arguments from "./components/Arguments/Arguments";
import { useEffect, useState } from "react";
import { generateFile, getData } from "./components/functions/fetchData";
import { createTableFunction } from "./components/functions/createTable";
import { randomData } from "./components/functions/randomData.js";
import { insert } from "./components/functions/insert";

function App() {
  let sql = "";

  const data = {
    tableName: "",
    rowsNumber: 0,
    createTable: true,
    tableData: [],
  };

  const handleAddTableDetails = (object) => {
    const { tableName, rowsNumber, createTable } = object;
    data.tableName = tableName;
    data.rowsNumber = rowsNumber;
    data.createTable = createTable;
  };

  const handleAddTableContent = (array) => {
    data.tableData = array;
  };

  const handleGenerate = async () => {
    if (data.createTable) sql += createTableFunction(data);

    const dbData = await getData();

    const random = randomData(data, dbData);

    // data.tableData = random;
    // sql += insert(data);

    // generateFile(sql);
  };

  return (
    <>
      <Header />
      <div className="container">
        <main>
          <Content onAddContent={handleAddTableContent} />
          <hr />
          <ContentOptions
            onAddTable={handleAddTableDetails}
            onGenerate={handleGenerate}
          />
          <Arguments />
        </main>
      </div>
    </>
  );
}

export default App;
