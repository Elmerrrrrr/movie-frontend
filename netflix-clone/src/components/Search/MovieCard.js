import classes from "../../css/Movie-module.css";
import React from "react";
import Movie from "./MovieCard";


const Movies = ({ list }) => {
  let cards = <h3>Loading...</h3>;

  if (list) {
    cards = list.map((m, i) => <Movie key={i} item={m} />);
  }

  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );
};

export default Movies;
