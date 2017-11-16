import {getData, getDataSuccess, getDataFailure} from "./view.actions";
import dummyData from './apiData'

export function fetchData() {
    /*return (dispatch) => {
        dispatch()
        getPeople()
            .then((data) => {
                dispatch(getDataSuccess(data))
            })
            .catch((err) => console.log('err:', err))
    }*/
    return (dispatch) => {
        dispatch(getData())
            dummyData()
        /*fetch('http://localhost:3000/fetchData',{
            method: 'get',
            credentials:'include',
            headers : {
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(response => response.json())*/
            .then(data => {
                console.log('data fetch>>>>>>>>>>>>>>>>>>>>>>>>>>>',data);
                dispatch(getDataSuccess(data));       //success
            })
            .catch(err => {
                dispatch(getDataFailure(err));          //failure
            })
    }
}