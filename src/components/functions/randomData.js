import faker from "faker";

export const randomData = (data, dbData) => {
  const { rowsNumber, tableName } = data;
  const tableData = data.tableData;
  console.log('tableData', tableData);
  const randomData = [];

  if (!tableData || tableData.length === 0) return;

  const dataGenerators = {
    car: getRandomCar,
    firstNameMale: getRandomFirstNameMale,
    lastNameMale: getRandomLastNameMale,
    firstNameFemale: getRandomFirstNameFemale,
    lastNameFemale: getRandomLastNameFemale,
    birthDate: getRandomBirthDate,
    city: getRandomCity,
    ccNumber: getRandomCC,
    gender: getGender,
    carBrand: getRandomCarBrand,
    carModel: getRandomCarModel,
    color: getRandomColor,
    country: getCountry,
  };

  tableData.forEach(e => {
    console.log(e);
    const {name, rowType} = e;
    if(rowType === 'id') return;

    for(let i = 0; i < rowsNumber; i++) {
      rowType === 'city';
      
      const dataGenerator = dataGenerators(rowType);

      if(dataGenerator) {
        const randomValue = dataGenerator(dbData[rowType]);
        randomData.push( {name : randomValue});
      }
    }
  })

  return randomData;
};

const randomIndex = (data) => {
  return Math.floor(Math.random() * data.length);
}

const getRandomCar = (carsData) => {
  const index = randomIndex(carsData);

  return carsData[index];
}

const getRandomCity = (citiesData) => {
  const index = randomIndex(citiesData);

  return citiesData[index];
}

const getRandomCC = () => {
  const cardNumber = faker.finance.creditCardNumber();
  return cardNumber;
};

const getRandomBirthDate = () => {
  const startYear = 1923;
  const endYear = 2023;
  const birthYear = faker.random.number({ min: startYear, max: endYear });
  const birthMonth = faker.random.number({ min: 1, max: 12 });
  const birthDay = faker.random.number({ min: 1, max: 28 });

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);

  return birthDate.toLocaleDateString();
};

const getRandomFirstNameMale = (firstNameMaleData) => {
  const index = randomIndex(firstNameMaleData);

  return firstNameMaleData[index];
}
const getRandomLastNameMale = (lastNameMaleData) => {
  const index = randomIndex(lastNameMaleData);

  return lastNameMaleData[index];
}
const getRandomFirstNameFemale = (firstNameFemaleData) => {
  const index = randomIndex(firstNameFemaleData);

  return firstNameFemaleData[index];
}
const getRandomLastNameFemale = (lastNameFemaleData) => {
  const index = randomIndex(lastNameFemaleData);

  return lastNameFemaleData[index];
}
const getRandomCarBrand = (carBrandData) => {
  const index = randomIndex(carBrandData);

  return carBrandData[index];
}
const getRandomCarModel = (carModelData) => {
  const index = randomIndex(carModelData);

  return carModelData[index];
}
const getRandomColor = (colorsData) => {
  const index = randomIndex(colorsData);

  return colorsData[index];
}
const getCountry = (countryData) => {
  const index = randomIndex(countryData);

  return countryData[index];
}
const getGender = (genderData) => {
  const index = randomIndex(genderData);
  
  return genderData[index];
}