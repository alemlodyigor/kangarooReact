import React, { useEffect, useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classess from "./Field.module.css";

const Field = (props) => {
  const id = props.id;
  const [name, setName] = useState(props.name);
  const [type, setType] = useState("");
  const [selectedDataType, setSelectedDataType] = useState('');

  useEffect(() => {
    changeField();
  }, [type, name]);

  const changeField = () => {
    props.onChangeField([id, name, type, selectedDataType]);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
    const selectedOption = e.target.options[e.target.selectedIndex];
    const attributes = selectedOption.getAttribute("data-type");
    setSelectedDataType(attributes);
  };

  return (
    <div className={classess.container}>
      <Input
        type="text"
        className={classess.input}
        value={name}
        onAction={handleChangeName}
      />
      <select
        name="type"
        className={classess.select}
        onChange={handleChangeType}
        value={type}
      >
        <option disabled selected></option>
        <option value="id" data-type="INT">
          id
        </option>
        <option value="first_name_male" data-type="VARCHAR(50)">
          Imię (męskie)
        </option>
        <option value="last_name_male" data-type="VARCHAR(50)">
          Nazwisko (męskie)
        </option>
        <option value="first_name_female" data-type="VARCHAR(50)">
          Imię (żeńskie)
        </option>
        <option value="last_name_female" data-type="VARCHAR(50)">
          Nazwisko (żeńskie)
        </option>
        <option value="gender_m" data-type="VARCHAR(1)">
          Płeć (M)
        </option>
        <option value="gender_f" data-type="VARCHAR(1)">
          Płeć (K)
        </option>
        <option value="birth_date" data-type="VARCHAR(50)">
          Data urodzenia
        </option>
        <option value="card_number" data-type="VARCHAR(24)">
          Numer karty
        </option>
        <option value="city" data-type="VARCHAR(50)">
          Miasto
        </option>
        <option value="country" data-type="VARCHAR(50)">
          Kraj (Polska)
        </option>
        <option value="car_brand" data-type="VARCHAR(50)">
          Marka samochodu
        </option>
        <option value="car_model" data-type="VARCHAR(50)">
          Model samochodu
        </option>
        <option value="color" data-type="VARCHAR(50)">
          Kolor
        </option>
      </select>
      <Button className={classess.delete} onAction={props.onDelete}>
        X
      </Button>
    </div>
  );
};

export default Field;
