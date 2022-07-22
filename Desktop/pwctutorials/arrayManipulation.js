//Array of objects
const customerAccountInformation = [
{
id: 1,
accountNumber: "123456789",
fullName: "John Ogbe",
Address: "26 Obafemi Awolowo road",
makeDebit: true,
},
{
    id: 2,
    accountNumber: "1234567434",
    fullName: "Oluwakemi Samuel",
    Address: "28 Awolowo road",
    makeDebit: false,
},
{
  id: 3,
  accountNumber: "123456744",
  fullName: "Nola Bayo",
  Address: "44 Awolowo road",
  makeDebit: false  
}
];

const customerAccountInformationid = customerAccountInformation.map((Information) => Information.id);

const customerAccountInformationaccountNumber = customerAccountInformation.map((Information) => Information.accountNumber);

const customerAccountInformationfullName = customerAccountInformation.map((Information => Information.fullName));

const customerAccountInformationAddress = customerAccountInformation.map((Information) => Information.Address);

const customerAccountInformationmakeDebit = customerAccountInformation.map((Information) => Information);

console.log(customerAccountInformation);

console.log(customerAccountInformationaccountNumber);

console.log(customerAccountInformationfullName);

console.log(customerAccountInformationAddress);

console.log(customerAccountInformationmakeDebit);


