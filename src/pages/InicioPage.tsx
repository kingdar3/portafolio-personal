import { FC } from "react";
import Principal from "../components/principal";
import Habilidades from "../components/habilidades";
import Domino from "../components/domino";

const InicioPage : FC = () =>{
    return (
        <>
        <Principal/>
        <Domino></Domino>
        <Habilidades></Habilidades>
        </>
    )
}
export default InicioPage