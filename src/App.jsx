import Header from "./components/Header/Header";
import "./app.css";
import Content from "./components/Content/Content";
import ContentOptions from "./components/ContentOptions/ContentOptions";
import Arguments from "./components/Arguments/Arguments";
import { useState } from "react";

function App() {
  const [tableContent, setTableContent] = useState([]);

  const data = {
    tableName: "",
    rowsNumber: 0,
    createTable: true,
    tableData: [],
  };

  const handleAddTableData = (object) => {
    const { tableName, rowsNumber, createTable } = object;
    data.tableName = tableName;
    data.rowsNumber = rowsNumber;
    data.createTable = createTable;
  };

  const handleAddTableContent = (array) => {
    data.tableData = array;
    console.log(data.tableData);
  }

  return (
    <>
      <Header />
      <div class="container">
        <main>
          <Content onAddContent={handleAddTableContent} />
          <hr />
          <ContentOptions onAddTable={handleAddTableData} />
          <Arguments />
        </main>
      </div>
    </>
  );
}

export default App;
