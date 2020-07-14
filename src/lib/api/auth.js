import client from './client';

//Login
export const login = (user) =>
    client.post('https://api.prosody-tts.com/api/auth-token/', user);

//register
export const register = (user) =>
    client.post('https://api.prosody-tts.com/api/member/buyer/', user);

//changePassword
export const changePassword = (password) =>
    client.post('https://api.prosody-tts.com/api/member/change-password/', password);