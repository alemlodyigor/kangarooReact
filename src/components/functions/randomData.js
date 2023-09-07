import faker from "faker";

export const randomData = (props) => {}
export const generateCreditCardNumber = () => {
    const cardNumber = faker.finance.creditCardNumber();
    return cardNumber;
}

export const generateBirthDate = () => {
    const startYear = 1923;
    const endYear = 2023;
    const birthYear = faker.random.number({min: startYear, max: endYear});
    const birthMonth = faker.random.number({min: 1, max: 12});
    const birthDay = faker.random.number({min: 1, max: 28});

    const birthDate = new Date(birthYear, birthMonth -1, birthDay);
    
    return birthDate.toLocaleDateString();
}