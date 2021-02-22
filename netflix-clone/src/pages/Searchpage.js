import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer_2";

import SearchLive from "../components/Search/SearchLive";
import Spacer from "../components/Spacer";
import "../css/Searchpage.css";
import SearchByActor from "../components/Search/SearchByActor/SearchMovieByActors";
import {Helmet} from "react-helmet";

function SearchPage() {
  const [activeMovie, setActiveMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState();

  function onPopupMoreInfoClick() {
    setActiveMovie(null);
    setTrailerUrl(null);
  }

  return (
<>

          
    <Nav />

    <Spacer/>



    {/* <SearchLive/> */}
    <SearchByActor/>



    <Helmet>
           <script src="searchBar.js" type="text/javascript" />
    </Helmet>



    <Spacer/>
        
    <Footer />
</>
  );
}

export default SearchPage;