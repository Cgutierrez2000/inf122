import React {useState} from"react";
import Notas from './Notas';
import '../style/ListaNotas.css';
function ListaNotasBasic() {
    const [notas, setNotas] =useState([])
    const addNota=() =>{
        console.log("Agregar nota");
    };
    const onDelate=() =>{
        console.log("Eliminar");

    };
    const onEdit=() =>{
        console.log("Editar");

}