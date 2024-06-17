const currentDate = new Date();
  
const day = ('0' + currentDate.getDate()).slice(-2);
const month = ('0' + (currentDate.getMonth() + 1)).slice(-2)
const year = currentDate.getFullYear().toString().slice(-2)
const hours = ('0' + currentDate.getHours()).slice(-2)
const minutes = ('0' + currentDate.getMinutes()).slice(-2)

const FullDateInfo = `${day}.${month}.${year} (${hours}:${minutes})`;

module.exports = FullDateInfo