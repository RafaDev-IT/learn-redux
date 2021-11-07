import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getPokemonsAction} from '../redux/pokeDuck'
const Pokemones = () => {
    const dispatch = useDispatch();
    const pokemones= useSelector(store=>store.pokemons.array);
    console.log(`pokemones`, pokemones)
    return (
        <div>
            Lista de pokemones
            <button onClick={()=>dispatch(getPokemonsAction())}>
                Get pokemones
            </button>
            <ul>
                {pokemones.map(item=>(
                    <li key={item.name}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemones
