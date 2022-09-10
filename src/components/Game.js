import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  /* box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2); */
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    bottom: 0;
  }
`;

export default Game;
