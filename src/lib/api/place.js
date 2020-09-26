import client from './client';

//모든 place 조회
export const getAllPlace = (roomId) =>
    client.get(`https://5921a5bf4bf7.ngrok.io/api/room/place/all/place/${roomId}`, {withCredentials: true});

