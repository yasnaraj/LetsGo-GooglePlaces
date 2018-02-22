import * as types from './actionTypes';

export function GetPlacesList(query){
    return async(dispatch, getState) =>{
        try{
            const _google = window.google;
            var request = {
                query: query
            };

            const service = new _google.maps.places.PlacesService(document.createElement('div'));
            service.textSearch(request, function callback(result, status){
                if(status==="OK"){
                    var placeList = result;
                    dispatch({type: types.PLACE_LIST, placeList});
                }else{
                    alert(status);
                }
            }); 
            }
            catch(error){
                console.log(error);
            }
    }
}

export function GetPlaceDetail(placeId){
    return async(dispatch, getState) =>{
        try{
            const _google = window.google;
            var request = {
                placeId: placeId
            };

            const service = new _google.maps.places.PlacesService(document.createElement('div'));
            service.getDetails(request, function callback(result, status){
                if(status==="OK"){
                    var placeDetail = result;
                    dispatch({type: types.PLACE_DETAIL, placeDetail});
                }else{
                    alert(status);
                }
            }); 
        }
        catch(error){
            console.log(error);
        }
    }
}