//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)

//Nivel FE
    //Crear un componente que cargue el header.
    //Crear un componente que cargue el los character.
    //Crear un componente que cargue los planetas.
    //Crear un componente que cargue los vehiculos.
    //Buscar imagenes correspondientes en https://starwars-visualguide.com
    

//Nivel BE
    //Entender SWAPI.
    //Fetch personajes.
    //Fetch planetas.
    //Fetch vehiculos.
    //Mostrar la opción para agregar a favoritos y que estos se acumulen 
    // en un array.

