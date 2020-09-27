import client from './client';

//모든 place 조회
export const getAllPlace = (roomId) =>
    client.get(`https://cddf7de2026a.ngrok.io/api/room/place/all/place/${roomId}`, {withCredentials: true});

