export const initializeStore = () => {
  const store = setupStore();
  const persistor = persistStore(store);
  return { store, persistor };
};
