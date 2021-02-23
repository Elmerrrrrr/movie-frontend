import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer_2";

import SearchByMovie from "../components/Search/SearchByMovie/SearchByMovie";
import Spacer from "../components/Spacer";
import "../css/Searchpage.css";
import "../css/Search.css";
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



    <SearchByActor/>
    
  
    <SearchByMovie/>


  <Helmet>
           <script src="search.js" type="text/javascript" />
  </Helmet>


    <Helmet>
           <script src="searchBar.js" type="text/javascript" />
    </Helmet>

 



    <Spacer/>
        
    <Footer />
</>
  );
}

export default SearchPage;