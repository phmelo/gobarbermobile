// import localStorage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarbermobile',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'],
    },

    reducers,
  );

  return persistedReducer;
};
