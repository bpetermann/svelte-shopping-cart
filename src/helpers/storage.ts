export const getStoreArray = (store: string) => {
  return localStorage.getItem(store)
    ? localStorage.getItem(store).split(', ')
    : [];
};

export const updateStore = (store: string, items: string[], item?: string) => {
  if (!item) {
    localStorage.setItem(store, items.join(', '));
  } else {
    localStorage.setItem(
      store,
      items.join(', ').concat(items.length ? `, ${item}` : `${item}`)
    );
  }
};

export const removeStore = (store: string) => {
  localStorage.removeItem(store);
};
