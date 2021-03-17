function getRandomString(length: number) {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

function getDataFromLocalStorage(key: string) {
  const items = localStorage.getItem(key);
  return items;
}

function setDataToLocalStorage(key: string, data: Array<[]>) {
  localStorage.setItem(key, JSON.stringify(data));
}

export {
  getRandomString,
  getDataFromLocalStorage,
  setDataToLocalStorage
};