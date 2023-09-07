import React, { useEffect, useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classess from "./Field.module.css";

const Field = (props) => {
  const id = props.id;
  const [name, setName] = useState(props.name);
  const [type, setType] = useState('');

  const changeField = () => {
    props.onChangeField([id, name, type]);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
    changeField();
  };

  useEffect(() => {
    changeField();
  }, [type]);

  const handleChangeType = (e) => {
    setType(e.target.value);
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
        <option value="id">id</option>
        <option value="first_name_male">Imię (męskie)</option>
        <option value="last_name_male">Nazwisko (męskie)</option>
        <option value="first_name_female">Imię (żeńskie)</option>
        <option value="last_name_female">Nazwisko (żeńskie)</option>
        <option value="gender_m">Płeć (M)</option>
        <option value="gender_f">Płeć (K)</option>
        <option value="birth_date">Data urodzenia</option>
        <option value="card_number">Numer karty</option>
        <option value="city">Miasto</option>
        <option value="country">Kraj (Polska)</option>
        <option value="car_brand">Marka samochodu</option>
        <option value="car_model">Model samochodu</option>
        <option value="color">Kolor</option>
      </select>
      <Button className={classess.delete} onAction={props.onDelete}>
        X
      </Button>
    </div>
  );
};

export default Field;
