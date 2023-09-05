import React from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import classess from "./Field.module.css";

const Field = () => {
  return (
    <div className={classess.container}>
      <Input type="text" value="id" className={classess.input} />
      <select name="type" className={classess.select}>
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
        <option value="marka_samochodu">Marka samochodu</option>
        <option value="model_samochodu">Model samochodu</option>
        <option value="kolor">Kolor</option>
      </select>
      <Button className={classess.delete}>X</Button>
    </div>
  );
};

export default Field;
