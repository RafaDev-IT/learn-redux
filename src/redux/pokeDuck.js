import axios from 'axios'
//constantes
const datainitial ={
    array:[]
}

//action types
const GET_POKEMONS_SUCCESS ='GET_POKEMONS_SUCCESS'

//reducer
export default function  pokeReducer(state=datainitial, action){
    switch(action.type){
        case GET_POKEMONS_SUCCESS:
            return {...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const getPokemonsAction = ()=> async(dispatch, getState) => {
    try {
        const res = axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0');
        dispatch({
            type:GET_POKEMONS_SUCCESS,
            payload: res.data.results
        })
        //res.data.results
    } catch (error) {
        console.log('error :>> ', error);        
    }
}