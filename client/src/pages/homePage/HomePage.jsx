import { useState, useEffect } from "react"
import { CardJuego } from "./components/CardJuego"

export const HomePage = () => {

    const [juegos, setJuegos] = useState([]) //si recibe un objeto sria {} si fuera un string seria ""

    const getJuegos = async() =>{
        try {
            const response = await fetch("http://localhost:3000/api/v1/juegos")
            const data = await response.json()
            console.log(data);
            setJuegos(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    //useEffect se ejecuta cada vez que se renderiza el componente, en este caso se ejecuta cuando se monta el componente
    useEffect(() => {
        getJuegos()
    }, [])
    


    return (
        <>
            <div className="flex space-x-6 mt-5">
                
                {
                    juegos.map((juego) => (
                        <CardJuego key={juego.id} juego={juego}/>
                    ))
                    //cuando se renderiza con html no se usa  {} en react se usa ()
                    //debe ir key sino da error , ideal que sea unica por eso se usa con .id
                    //llaves permite escribir js en html del componente
                    
                }
            </div>
        </>
    )
}