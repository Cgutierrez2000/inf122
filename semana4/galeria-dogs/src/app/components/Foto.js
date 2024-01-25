"use client"
import Image from "next/image";
import style from "./Foto.module.css";
import { useEffect, useState } from "react";



function Foto(){
    const [perrito, setPerrito]=useState ("/vercel.svg");
    const [estado, setEstado]=useState ("esperando");
    const url="https://dog.ceo/api/breeds/image/random"
    useEffect(() => {
        fetch(url).then(res => res.json())
        .then(data => {setPerrito(data.message),setEstado(data.status)})
    }, []);
    return(
        <div className={style.contenedor}>
            <h1>{estado}</h1>
            <Image src={perrito} alt="perrito" width={250} height={250}/>
        </div>
    )
}
export default Foto;
