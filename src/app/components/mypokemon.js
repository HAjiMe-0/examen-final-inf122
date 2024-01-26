"use client"
import Image from "next/image"
import style from "./mypokemon.module.css"
import { useEffect, useState } from "react"

function Mypokemon (){
    const[pokemon,setPokemon]= useState("/vercel.svg")
    const[id,setId]=useState("000")
    const[estado,setEstado]= useState("esperando")
    const[type,setType]=useState("type")
    const[height,setHeight]=useState("Height")
    const[weight, setWeight]=useState("weight")
    const[abilities,setAbilities]=useState("abilities")
    const[hp,setHp]=useState("HP")
    const[attack,setAttack]=useState("attack")
    const[defense,setDefense]=useState("defense")
    const[speed,setSpeed]=useState("speed")
    const url ="https://pokeapi.co/api/v2/pokemon/2";
    useEffect(()=> {fetch(url)
        .then(res=>res.json())
        .then(data=>{
            //Pokemon
            setPokemon(data.sprites.front_default),
            setEstado(data.species.name)
            //id
            setId(data.id)
            //type
            setType(data.types[0].type.name + ", "+ data.types[1].type.name)
            //height
            setHeight(data.height)
            //weight
            setWeight(data.weight)
            //habilidades
            setAbilities(data.abilities[0].ability.name+ ", "+ data.abilities[1].ability.name)
            //hp
            setHp(data.stats[0].base_stat)
            //attack
            setAttack(data.stats[1].base_stat)
            //defense
            setDefense(data.stats[2].base_stat)
            //speed
            setSpeed(data.stats[5].base_stat)
        });
        
    },[]);
    return(
        <div className={style.contenedor}>
            <h1 className={style.title}>My Pokemon</h1>
            <h1 className={style.name}>{estado}</h1>
            <h1 className={style.id}>#{id}</h1>
            <Image src={pokemon} alt="pokemon" width={400} height={400} />
            <div className={style.about}>
            <h1>About</h1>

            <h2 className={style.type}>Type:  {type}</h2>
            <h2>Height: {height/10} m</h2>
            <h2>Weight: {weight/10} kg</h2>
            <h2 className={style.habilities}>Habilities: {abilities}</h2>

            <h1>Stats</h1>

            <h2>HP: {hp} </h2>
            <h2>Attack: {attack} </h2>
            <h2>Defense: {defense} </h2>
            <h2>Speed: {speed}</h2>
            </div>


        </div>
    )
}
export default Mypokemon;