import { ADD_DONATION } from './actions';

const initialState = {
    donations: [],
};

export const donationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DONATION:
            return { ...state, donations: [...state.donations, action.payload] };
        default:
            return state;
    }
};