import { FaGamepad } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { useState } from "react";

export const CardGame = ({ game }) => {
    const [fondo, setFondo] = useState("text-sky-800");

    return (
        <div
            className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${
                game.console == "Super Nintendo"
                    ? "bg-sky-300"
                    : "bg-green-300"
            }`}
        >
            <img className="w-full" src={game.image} alt={game.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{game.name}</div>
                <p className="text-gray-700 text-base">
                    {game.console == "Super Nintendo" ? (
                        <FaGamepad />
                    ) : (
                        <IoLogoGameControllerB />
                    )}
                </p>
                <p className={`${fondo} text-base`}>{game.year}</p>
                <p className="text-gray-700 text-base mt-2">
                    {game.description}
                </p>
                <button
                    className="bg-green-400 rounded-2xl mt-4 px-2 py-2 hover:bg-sky-500 hover:scale-105"
                    onClick={() => setFondo("text-yellow-500")}
                >
                    Cambiar Color
                </button>
            </div>
        </div>
    );
};