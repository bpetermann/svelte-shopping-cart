export const getStoreArray = (store: string) => {
  return localStorage.getItem(store)
    ? localStorage.getItem(store).split(', ')
    : [];
};

export const updateStore = (store: string, items: string[], item: string) => {
  localStorage.setItem(
    store,
    items.join(', ').concat(items.length ? `, ${item}` : `${item}`)
  );
};
