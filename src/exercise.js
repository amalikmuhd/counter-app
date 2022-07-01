const address = {
  street: "Abubakar Crescent",
  city: "Abuja",
  zipCode: "109104",
};

const showAddress = (address) => {
  console.log(`${address.street} ${address.city} ${address.zipCode}`);
};

showAddress(address);
