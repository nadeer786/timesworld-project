import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
// import mailReducer from './slices/mail';
import country from "./slices/country";

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

// export const productPersistConfig = {
//   key: 'product',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: ['sortBy', 'checkout'],
// };

const rootReducer = combineReducers({
  country: country,
  //   product: persistReducer(productPersistConfig, productReducer),
});

export default rootReducer;
