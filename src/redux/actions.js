export const ADD_DONATION = 'ADD_DONATION';

export const addDonation = (donation) => ({
    type: ADD_DONATION,
    payload: donation,
});