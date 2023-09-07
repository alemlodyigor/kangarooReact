import Header from "./components/Header/Header";
import "./app.css";
import Content from "./components/Content/Content";
import ContentOptions from "./components/ContentOptions/ContentOptions";
import Arguments from "./components/Arguments/Arguments";
import { useState } from "react";
import { fetchData } from "./components/functions/fetchData";

function App() {
  const [cars, setCars] = useState();
  const [cities, setCities] = useState();
  const [colors, setColors] = useState();
  const [female, setFemale] = useState();
  const [male, setMale] = useState();

  const getData = async () => {
    const carsDb = await fetchData("cars");
    setCars(carsDb);
    const citiesDb = await fetchData("cities");
    setCities(citiesDb);
    const colorsDb = await fetchData("colors");
    setColors(colorsDb);
    const femaleDb = await fetchData("female");
    setFemale(femaleDb);
    const maleDb = await fetchData("male");
    setMale(maleDb);
  };

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
  };

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
