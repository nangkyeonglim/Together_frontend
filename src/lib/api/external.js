import client from './client';


//Social Login
export const findPlaceImage = (data) =>
    client.get(`v1/search/image?query=${data.query}&filter=${data.filter}`);

//Sign Up
export const signUp = (user) =>
    client.post('v1/signup', user);