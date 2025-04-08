import { useState, useEffect } from "react"
import { CardGame } from "./components/CardGame"

export const HomePage = () => {

    const [games, setGames] = useState([]) //si recibe un objeto sria {} si fuera un string seria ""

    const getGames = async() =>{
        try {
            const response = await fetch("http://localhost:3000/api/v1/games")
            const data = await response.json()
            console.log(data);
            setGames(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    //useEffect se ejecuta cada vez que se renderiza el componente, en este caso se ejecuta cuando se monta el componente
    useEffect(() => {
        getGames()
    }, [])
    


    return (
        <>
            <div className="flex space-x-6 mt-5">
                
                {
                    games.map((game) => (
                        <CardGame key={game.id} game={game}/>
                    ))
                    //cuando se renderiza con html no se usa  {} en react se usa ()
                    //debe ir key sino da error , ideal que sea unica por eso se usa con .id
                    //llaves permite escribir js en html del componente
                    
                }
            </div>
        </>
    )
}