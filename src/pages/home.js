import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animation";
const Home = () => {
  const { pathname } = useLocation();
  const pathId = pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length > 0 && (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => {
                return (
                  <Game
                    key={game.slug}
                    name={game.name}
                    released={game.released}
                    id={game.id}
                    image={game.background_image}
                  />
                );
              })}
            </Games>
          </div>
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => {
            return (
              <Game
                key={game.slug}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            );
          })}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => {
            return (
              <Game
                key={game.slug}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            );
          })}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => {
            return (
              <Game
                key={game.slug}
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
              />
            );
          })}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;

  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
