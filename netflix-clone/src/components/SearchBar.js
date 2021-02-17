import "../css/SearchBar.css";


function SearchBar() {


 // getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.getElementsByTagName("input");
const suggBox = document.getElementById("autocom-box");
const icon = document.getElementById("iconSearch");
let linkTag = document.getElementById("linkElement");
let webLink;
let emptyArray = [];

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "www.google.com/" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = searchActor().filter((data)=>{
            console.log(data.name);
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
           
            // passing return data inside li tag
            return data = '<li>'+ data.name +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            // console.log(allList[i]);
           
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    
    let actorId = resultsFetch.map((data)=>{
         if(data.name === selectData){
             console.log(data.id);
             return data.id
         }  
    });
   
    icon.onclick = ()=>{
        webLink = "http://localhost:2021/movies/actor/" + actorId;
        console.log(webLink);
        let newWebLink = webLink.replace(/,/g,'');
        console.log(newWebLink);
        linkTag.setAttribute("href", newWebLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}


function showSuggestions(list){
    let listData;
    if(!list.length){
        let userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}



let resultsFetch;

function searchActor(){
 
    console.log(resultsFetch);

    let baseurl = "http://localhost:2021/search/actors/sug/";
    let inputBox = document.querySelector("input").value;
    
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",baseurl + inputBox,true);
    
    xmlhttp.onreadystatechange = function() {
    
      if(xmlhttp.readyState ===4 && xmlhttp.status ===200){
        resultsFetch = JSON.parse(xmlhttp.responseText);
        console.log(resultsFetch);
      }
    };
    xmlhttp.send();

    return resultsFetch;
    }



  return (
     

    
<div className="search-input">
        <a id="linkElement" href="" target="_blank" hidden></a>
        <input type="text" id="searchInput" placeholder="Type to search.."></input>
        <div id="autocom-box" className="autocom-box">
          {/* <!-- here list are inserted from javascript --> */}
        </div>
        <div id="iconSearch" className="icon"><i className="fas fa-search"></i></div>
      </div>
     
          
  );
}

export default SearchBar;