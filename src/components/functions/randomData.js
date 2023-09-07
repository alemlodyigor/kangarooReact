import faker from "faker";

export const randomData = (props) => {}
export const generateCreditCardNumber = () => {
    const cardNumber = faker.finance.creditCardNumber();
    return cardNumber;
}

