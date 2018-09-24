export const getLocal = (key) =>{
  try {
    const serialized=localStorage.getItem(key);
    if(serialized === null){
      return undefined;
    }
    return JSON.parse(serialized);
  } catch (e) {
    return undefined;
  }
}

export const setLocal = (key, data) =>{
  try {
      const serialized = JSON.stringify(data);
      localStorage.setItem(key,serialized);
  } catch (e) {
    //Ignore
  }
}
