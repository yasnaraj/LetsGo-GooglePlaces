import * as types from './actionTypes';

let initialState = {
    placeList: undefined,
    placeDetail: undefined,
    randomPlace: undefined,
}

export default function reduce(state=initialState, action = {}){
    switch(action.type){
        case types.PLACE_LIST:
            var data = action.placeList;
            var length = data.length;
            var randomNum = Math.floor(Math.random() * length);
            var randomPlace = data[randomNum]; 
            return{...state, randomPlace: randomPlace}
        case types.PLACE_DETAIL:
        return{...state, placeDetail: action.placeDetail}
        default:
        return state;
    }

}

export function GetRandomCity(state){
    var data = state.places.placeList;
    if(data){
        var length = data.length;
        var randomNum = Math.floor(Math.random() * length);
        var randomCity = data[randomNum];
        return randomCity;
    }
}

export function FetchPlaceDetail(state){
    var data = state.places.placeDetail;
    return data;
}