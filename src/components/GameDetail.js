import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";

import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

import fullStar from "../img/star-full.png";
import emptyStar from "../img/star-empty.png";

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Exit Detail Handler
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      dispatch({
        type: "LOADING_DTAIL",
      });
      navigate("/");
    }
  };

  const ratingStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key="i" src={fullStar} />);
      } else {
        stars.push(<img alt="star" key="i" src={emptyStar} />);
      }
    }

    return stars;
  };

  const getPlatformImage = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "iOS":
        return apple;
      case "Nintendo Switch":
        return nintendo;
      default:
        return gamepad;
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {ratingStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => {
                    return (
                      <img
                        src={getPlatformImage(data.platform.name)}
                        key={data.platform.id}
                        alt={data.platform.name}
                      />
                    );
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={game.background_image}
                alt="game"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screenshot) => {
                return (
                  <img
                    src={smallImage(screenshot.image, 1280)}
                    key={screenshot.id}
                    alt="game"
                  />
                );
              })}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  position: absolute;
  background: white;
  left: 10%;
  color: #000;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;
export default GameDetail;
