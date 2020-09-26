import client from './client';

//Social Login
export const socialLogin = (accessToken) =>
    client.post('https://5921a5bf4bf7.ngrok.io/v1/signin', accessToken, {withCredentials: true});

//Sign Up
export const signUp = (user) => 
    client.post('https://5921a5bf4bf7.ngrok.io/v1/signup', user, {withCredentials: true});

//Get User info
export const getUser = () =>
    client.get('https://5921a5bf4bf7.ngrok.io/v1/user',{withCredentials: true});

//logout
export const logout = () =>
    client.get('https://5921a5bf4bf7.ngrok.io/v1/logout',{withCredentials: true});

//유저 정보 변경
export const editProfile = (userInfo) =>
    client.put('https://5921a5bf4bf7.ngrok.io/v1/user', userInfo, {withCredentials: true});

//유저 프사 변경
export const editProfileImage = (formData) =>
    client.put('https://5921a5bf4bf7.ngrok.io/v1/image/user', formData, {withCredentials: true});