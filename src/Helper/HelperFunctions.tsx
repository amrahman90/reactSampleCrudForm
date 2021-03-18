const getRandomString = (length: number): string => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

const getDataFromLocalStorage = (key: string): string | null => {
  const items = localStorage.getItem(key);
  return items;
}

const setDataToLocalStorage = (key: string, data: Array<[]>): void => {
  localStorage.setItem(key, JSON.stringify(data));
}

export {
  getRandomString,
  getDataFromLocalStorage,
  setDataToLocalStorage
};