export const useLocalStorageSetter = (...items) => {
  let memes = localStorage.getItem('memes');
  items.forEach(item => {
    memes = memes + `${item},`;
  });
  localStorage.setItem('memes', memes);
};
