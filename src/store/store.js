import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { jsonServerApi } from './jsonServerApi';

const store = configureStore({
    reducer: { 
        [jsonServerApi.reducerPath]: jsonServerApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonServerApi.middleware),
});

setupListeners(store.dispatch);

export default store;