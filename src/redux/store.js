import { configureStore } from '@reduxjs/toolkit';
import { donationReducer } from './reducers';

const store = configureStore({
    reducer: {
        donations: donationReducer,
    },
});

export default store;