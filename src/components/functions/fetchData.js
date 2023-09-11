import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const fetchData = async (dbname) => {
  try {
    const docRef = doc(db, "data", dbname);
    const docDoc = await getDoc(docRef);
    return docDoc.data();
  } catch (error) {
    console.log("error", error);
  }
};

export const generateFile = (query) => {
  const link = document.createElement("a");
  const complete = query;
  const file = new Blob([complete], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = "database.sql";
  link.click();
  URL.revokeObjectURL(link.href);
};

export const getData = async () => {
  const cars = await fetchData("cars");

  const { city } = await fetchData("cities");

  const { color } = await fetchData("colors");

  const female = await fetchData("female");

  const male = await fetchData("male");

  const dbData = {
    carBrand: cars.brand,
    carModel: cars.model,
    cities: city,
    colors: color,
    firstNameFemale: female.name,
    lastNameFemale: female.last_name,
    firstNameMale: male.name,
    lastNameMale: male.last_name,
    gender: ["M", "K"],
    country: ["Polska"],
  };

  return dbData;
};
