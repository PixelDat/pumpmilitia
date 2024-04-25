import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage using AsyncStorage for React Native
import thunk from "redux-thunk";

// Reducers
import authReducer from "./features/authSlice";
// import appReducer from "./app";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'] // Only auth will be persisted
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    // app: persistReducer({ key: 'app', storage: AsyncStorage, whitelist: ['balanceHidden'] }, appReducer)
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
