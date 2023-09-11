import Header from "./components/Header/Header";
import "./app.css";
import Content from "./components/Content/Content";
import ContentOptions from "./components/ContentOptions/ContentOptions";
import Arguments from "./components/Arguments/Arguments";
import { useEffect, useState } from "react";
import { fetchData, generateFile } from "./components/functions/fetchData";
import { createTableFunction } from "./components/functions/createTable";
import { randomData } from "./components/functions/randomData.js";
import { insert } from "./components/functions/insert";

function App() {
  const [cars, setCars] = useState({ carBrand: [], carModel: [] });
  const [cities, setCities] = useState();
  const [colors, setColors] = useState();
  const [female, setFemale] = useState({
    firstNameFemale: [],
    lastNameFemale: [],
  });
  const [male, setMale] = useState({ firstNameMale: [], lastNameMale: [] });
  const [dbData, setdbData] = useState({});
  let sql = "";

  const data = {
    tableName: "",
    rowsNumber: 0,
    createTable: true,
    tableData: [],
  };

  useEffect(() => {
    setdbData({
      carBrand: cars.carBrand,
      carModel: cars.carModel,
      cities: cities,
      colors: colors,
      firstNameFemale: female.firstName,
      lastNameFemale: female.lastName,
      firstNameMale: male.firstName,
      lastNameMale: male.lastName,
      gender: ["m", "k"],
      country: ["Polska"],
    });
  }, [cars, cities, colors, female, male]);

  const getData = async () => {
    const carsDb = await fetchData("cars");
    const { brand, model } = carsDb;
    const carsObj = {
      carBrand: brand,
      carModel: model,
    };
    setCars(carsObj);

    const citiesDb = await fetchData("cities");
    setCities(citiesDb);

    const colorsDb = await fetchData("colors");
    setColors(colorsDb);

    const femaleDb = await fetchData("female");
    const { firstNameFemale, lastNameFemale } = femaleDb;
    const femaleObj = {
      firstNameFemale: firstNameFemale,
      lastNameFemale: lastNameFemale,
    };
    setFemale(femaleObj);

    const maleDb = await fetchData("male");
    const { firstNameMale, lastNameMale } = maleDb;
    const maleObj = {
      firstNamemale: firstNameMale,
      lastNameMale: lastNameMale,
    };
    setMale(maleObj);
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

    await getData();

    const random = randomData(data, dbData);

    data.tableData = random;
    sql += insert(data);

    generateFile(sql);
  };

  return (
    <>
      <Header />
      <div class="container">
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
