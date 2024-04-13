import { useEffect, useMemo, useState } from "react"
import { getGames } from "../helpers"
import { GameCard } from "./GameCard"


export const GameList = () => {
  
  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  const memorizedGames = useMemo(() => getGames, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      const data = await memorizedGames('final');
      console.log(data.results);
      setGames(Array.from(data.results));

      setIsLoading(false);
    };

    fetchData();

    console.log(games);
  }, [memorizedGames])
  
  
  return (
    <>
      { 
        isLoading && 
        <div class="d-flex justify-content-center">
          <div class="spinner-border">
            <span class="visually-hidden"></span>
          </div>
        </div>
      }

      <div className="card-columns">
      {
        games.map((game) => (
          <GameCard key={game.id}
            {...game}
          />
        ))
      }
      </div>
    </>
  )
}
