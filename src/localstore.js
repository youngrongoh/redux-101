class LocalStore {
  saveToLocal(name, data) {
    const json = JSON.stringify(data);
    localStorage.setItem(name, json);
    return json;
  }

  loadFromLocal(name) {
    const count = localStorage.length;
    for (let i = 0; i < count; i++) {
      if (name === localStorage.key(i)) {
        break;
      } else if (i === count - 1) {
        throw new Error(`This item is not in the LocalStorage: ${name}`);
      }
    }
    const loaded = localStorage.getItem(name);
    return JSON.parse(loaded);
  }
}

export default LocalStore;
