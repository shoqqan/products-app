import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { setupStore } from '@/app/store.ts';

export function withRedux(component: () => ReactNode) {
  const store = setupStore();
  const persistor = persistStore(store);
  return function () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>{component()}</PersistGate>
      </Provider>
    );
  };
}
