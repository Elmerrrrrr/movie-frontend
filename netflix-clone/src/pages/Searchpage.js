import React, { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer_2";

import SearchByMovie from "../components/Search/SearchByMovie/SearchByMovie";
import Spacer from "../components/Spacer";
import "../css/Searchpage.css";
import "../css/SearchBar.css";

import SearchByActor from "../components/Search/SearchByActor/SearchByActors";
import {Helmet} from "react-helmet";



function SearchPage() {

const [value, setValue] = useState();

let input = document.getElementById("searchBox1");
console.log(input);


const getValue = (event) => {
  // console.log(event.target.value);
  // setValue(event.target.value);
  setValue(input.value);
  console.log(input.value);
}



// element.onchange = function() {
//   console.log(element);
// }



  return (
<>

          
    <Nav getValue={getValue}/>
    
    <div className="searchContainerNav">
              <SearchByActor />
          </div>
    <Spacer/>


    {/* <SearchByActor value={value} /> */}
    
  
    {/* <SearchByMovie/> */}


  <Helmet>
           <script src="search.js" type="text/javascript" />
  </Helmet>


  <Helmet>
          <script src="searchBar.js" type="text/javascript" />
  </Helmet>

 



    {/* <Spacer/> */}
        
    <Footer />
</>
  );
}

export default SearchPage;