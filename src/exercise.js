const address = {
  street: "Abubakar Crescent",
  city: "Abuja",
  zipCode: "1091054",
};

const showAddress = (address) => {
  console.log(`${address.street} ${address.city} ${address.zipCode}`);
};

showAddress(address);
