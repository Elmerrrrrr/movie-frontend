import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer_2";
import SearchBar from "../components/SearchBar";
import SearchLive from "../components/Search/SearchLive";
import Spacer from "../components/Spacer";
import "../css/Searchpage.css";

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

    {/* <SearchBar/> */}
    <SearchLive/>


    <Spacer/>
        
    <Footer />
</>
  );
}

export default SearchPage;