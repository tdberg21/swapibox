

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// const dateCleaner = (date) => {
//   let splitDate = date.split('-');
//   return splitDate[0];
// };



export default generateRandomNumber;