import client from './client';

//모든 place 조회
export const getAllPlace = (roomId) =>
    client.get(`https://77b4d7613725.ngrok.io/api/room/place/all/place/${roomId}`, {withCredentials: true});

//그룹에다가 플레이스 추가하기
export const addPlaceToGroup = (add_place) =>
    client.post('https://77b4d7613725.ngrok.io/api/room/place', add_place,{withCredentials: true});

//그룹에다가 플레이스 추가하기
export const deletePlaceFromGroup = (roomPlaceId) =>
    client.delete(`https://77b4d7613725.ngrok.io/api/room/place/${roomPlaceId}`,{withCredentials: true});