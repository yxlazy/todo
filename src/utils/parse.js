export function getKeyValue(key) {
  return sessionStorage.getItem(key);
}

export function setKeyValue(key, value) {
  sessionStorage.setItem(key, value);
}

export function getUser(key) {
  let username = sessionStorage.getItem(key);

  try {
    username = JSON.parse(username).username;
  } catch (error) { 
    console.log(error)
  }

  return username;
}

export function setUser(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}