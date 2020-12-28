export const useLocalStorageGetter = () => {
    return localStorage.getItem('memes') ? localStorage.getItem('memes').split(',') : [];
}