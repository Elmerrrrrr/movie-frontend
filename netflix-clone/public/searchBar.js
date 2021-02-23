// getting all required elements
const searchWrapper1 = document.querySelector(".search-input1");
const inputBox1 = document.getElementById("searchBox1");
const suggBox1 = document.getElementById("autocom-box1");
const icon1 = document.getElementById("iconSearch1");
let linkTag1 = document.getElementById("linkElement1");
let webLink1;
let emptyArray1 = [];
// console.log("Check!!1");
// if user press any key and release
inputBox1.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    emptyArray1 = [];
    if(userData){
    //     icon.onclick = ()=>{
    //         webLink = "" + userData;
    //         linkTag.setAttribute("href", webLink);
    //         console.log(webLink);
    //         linkTag.click();
    //     }
        emptyArray1 = searchActor1().filter((data)=>{
            // console.log(data.name);
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.name.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
       });
        emptyArray1 = emptyArray1.map((data)=>{
        //    console.log(data);
            // passing return data inside li tag
            return data = '<li>'+ data.name +'</li>';
        });
        searchWrapper1.classList.add("active"); //show autocomplete box
        showSuggestions1(emptyArray1);
        let allList = suggBox1.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            // console.log(allList[i]);
           
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper1.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox1.value = selectData;
    
    let actorId = resultsFetch1.map((data)=>{
         if(data.name === selectData){
             console.log(data.id);
             return data.id
         }  
    });
   
//    icon1.onclick = ()=>{
//         webLink1 = "http://localhost:2021/movies/actor/" + actorId;
//         // console.log(webLink);
//         let newWebLink = webLink1.replace(/,/g,'');
//         // console.log(newWebLink);
//         linkTag1.setAttribute("href", newWebLink);
//         linkTag1.click();
//    }
    searchWrapper1.classList.remove("active");
}


function showSuggestions1(list){
    let listData;
    if(!list.length){
        let userValue = inputBox1.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox1.innerHTML = listData;
}



let resultsFetch1;

function searchActor1(){
 
    // console.log(resultsFetch);

    let baseurl = "http://localhost:2021/search/actors/sug/";
    let inputBox = document.getElementById("searchBox1").value;
    
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",baseurl + inputBox,true);
    
    xmlhttp.onreadystatechange = function() {
    
      if(xmlhttp.readyState ===4 && xmlhttp.status ===200){
        resultsFetch1 = JSON.parse(xmlhttp.responseText);
        // console.log(resultsFetch);
      }
    };
    xmlhttp.send();

    return resultsFetch1;
    }