//API parts
var nowPlayingRespons=[];
var popularRespons=[];
var topRatedRespons=[];
var trendingMovieRespons =[];
var upComingRespons=[];
var AllmoviesRespons=[];
//create api objects
var nowPlayingMovie =new XMLHttpRequest();
var popularMovie =new XMLHttpRequest();
var topRatedMovie =new XMLHttpRequest();
var trendingMovie = new XMLHttpRequest();
var upComingMovie =new XMLHttpRequest();
var Allmovies =new XMLHttpRequest();
//open this objects
Allmovies.open('GET','https://api.themoviedb.org/3/search/movie?query=mad&api_key=668d79579e3fa32c33defa5c8b9a7378&language=en-US&include_adult=false');
nowPlayingMovie.open('GET','https://api.themoviedb.org/3/movie/now_playing?api_key=668d79579e3fa32c33defa5c8b9a7378&language=en-US&page=1');
popularMovie.open('GET','https://api.themoviedb.org/3/movie/popular?api_key=668d79579e3fa32c33defa5c8b9a7378&language=en-US&page=2');
topRatedMovie.open('GET','https://api.themoviedb.org/3/movie/top_rated?api_key=668d79579e3fa32c33defa5c8b9a7378&language=en-US&page=3');
trendingMovie.open('GET','https://api.themoviedb.org/3/trending/movie/day?api_key=668d79579e3fa32c33defa5c8b9a7378');
upComingMovie.open('GET','https://api.themoviedb.org/3/movie/upcoming?api_key=668d79579e3fa32c33defa5c8b9a7378&language=en-US&page=4');
//send 
Allmovies.send();
nowPlayingMovie.send();
popularMovie.send();
topRatedMovie.send();
trendingMovie.send();
upComingMovie.send();
//get response

//default response nowPlayingMovie    
Allmovies.addEventListener('readystatechange',function(){
    if(Allmovies.readyState>=3&&Allmovies.status==200)
    {
        AllmoviesRespons = JSON.parse( Allmovies.response).results;

    }
});

    nowPlayingMovie.addEventListener('readystatechange',function(){
        if(nowPlayingMovie.readyState>=3&&nowPlayingMovie.status==200)
        {
            nowPlayingRespons = JSON.parse( nowPlayingMovie.response).results;
            display(nowPlayingRespons);

        }
    });

    popularMovie.addEventListener('readystatechange',function(){
        if(popularMovie.readyState>=3&&popularMovie.status==200)
        {
            popularRespons = JSON.parse( popularMovie.response).results;
        }
    }); 

    topRatedMovie.addEventListener('readystatechange',function(){
        if(topRatedMovie.readyState>=3&&topRatedMovie.status==200)
        {
            topRatedRespons = JSON.parse( topRatedMovie.response).results;
        }
    }); 

    trendingMovie.addEventListener('readystatechange',function(){
        if(trendingMovie.readyState>=3&&trendingMovie.status==200)
        {
            trendingMovieRespons = JSON.parse( trendingMovie.response).results;
        }
    }); 

    upComingMovie.addEventListener('readystatechange',function(){
        if(upComingMovie.readyState>=3&&upComingMovie.status==200)
        {
            upComingRespons = JSON.parse( upComingMovie.response).results;
        }
    }); 


var NowPlaying = document.getElementById("NowPlaying");
var Popular = document.getElementById("Popular");
var TopRated = document.getElementById("TopRated");
var Trending = document.getElementById("Trending");
var Upcoming = document.getElementById("Upcoming");

NowPlaying.addEventListener('click',function(){
        display(nowPlayingRespons);     
});

Popular.addEventListener('click',function(){
    display(popularRespons); 
});

TopRated.addEventListener('click',function(){
    display(topRatedRespons); 
});
Trending.addEventListener('click',function(){
    display(trendingMovieRespons); 
});
Upcoming.addEventListener('click',function(){
    display(upComingRespons); 
});

//display function

function display(movies)
{
    var tepm='';
    for(var i=0;i<movies.length;i++)
    {
        tepm+=`<div class="col-lg-4 col-sm-6 my-3 imgscon">
                <img src="https://image.tmdb.org/t/p/w500${movies[i].poster_path}" >
                <div class="mylayer mx-3 py-5">
                    <h2 class="my-5">${movies[i].title}</h2>
                    <p>${movies[i].overview}</p>
                    <p>rate: ${movies[i].vote_average}</p>
                    <p>${movies[i].release_date}</p>
                </div>
            </div>`;
    }
    document.getElementById("moviesContainer").innerHTML=tepm;
}
////////////////////////////////////////

//side nav control

var toggleNavBtn = document.getElementById('togglenav');
var navcontent=document.getElementById('side-nav');
var toggle = 0;
toggleNavBtn.addEventListener('click',function(e){
    console.log(e);
if(toggle){
    navcontent.style.left ="-250px";
    toggle=0;
    toggleNavBtn.innerHTML=`<i class="fa-solid fa-bars"></i>`;
}
else{
    $(".list-group .list-group-item").animate({opacity:"1",paddingTop:"25px"},1000);
    navcontent.style.left ="0px";
    toggle=1;
    toggleNavBtn.innerHTML=`<i class="fa-solid fa-xmark" ></i>`;

}
if(!toggle){
    $(".list-group .list-group-item").animate({opacity:"0",paddingTop:"50px"},1000);
}
});


//regex part

var regexMail =/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var regexname =/^[a-zA-Z]{1,}/;
var regexage =/^[0-1]{0,1}[0-9]{0,2}$/;
var regexphone=/^01(5|2|0|1)[0-9]{8}$/;
var regexpass =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var errorname =document.getElementById("errorname");
var errormail =document.getElementById("errormail");
var errorphone =document.getElementById("errorphone");
var errorAge =document.getElementById("errorAge");
var errorpass =document.getElementById("errorpass");
var errorrepass =document.getElementById("errorrepass");
var pass ;

function isValidMail(value)
{
if(regexMail.test(value))
{
    errormail.classList.replace('d-inline-block','d-none');
}
else{
    errormail.classList.replace('d-none','d-inline-block');
}   
}


function isValidName(value)
{
    if(regexname.test(value))
{
    errorname.classList.replace('d-inline-block','d-none');
}
else{
    errorname.classList.replace('d-none','d-inline-block');
} 
}


function isValidPhonr(value)
{
    if(regexphone.test(value))
{
    errorphone.classList.replace('d-inline-block','d-none');
}
else{
    errorphone.classList.replace('d-none','d-inline-block');
} 
}


function isValidAge(value)
{
    if(regexage.test(value))
{
    errorAge.classList.replace('d-inline-block','d-none');
}
else{
    errorAge.classList.replace('d-none','d-inline-block');
} 
}

function isValidPass(value)
{
    if(regexpass.test(value))
{
    errorpass.classList.replace('d-inline-block','d-none');
}
else{
    errorpass.classList.replace('d-none','d-inline-block');
} 
pass =value;
}

function isValidEqual(value)
{
    if(pass==value)
{
    errorrepass.classList.replace('d-inline-block','d-none');
}
else{
    errorrepass.classList.replace('d-none','d-inline-block');
} 
}

//search part 

function findMovies(value)
{
    var temp=[];
    var len = AllmoviesRespons.length;
    for(var i=0;i<len;i++)
    {
        if(AllmoviesRespons[i].title.toLowerCase().includes(value.toLowerCase())||AllmoviesRespons[i].overview.toLowerCase().includes(value.toLowerCase()))
        {
            temp.push(AllmoviesRespons[i]);
        }
    }
    len = nowPlayingRespons.length;
    for(var i=0;i<len;i++)
    {
        if(nowPlayingRespons[i].title.toLowerCase().includes(value.toLowerCase())||nowPlayingRespons[i].overview.toLowerCase().includes(value.toLowerCase()))
        {
            temp.push(nowPlayingRespons[i]);
        }
    }
    for(var i=0;i<len;i++)
    {
        if(popularRespons[i].title.toLowerCase().includes(value.toLowerCase())||popularRespons[i].overview.toLowerCase().includes(value.toLowerCase()))
        {
            temp.push(popularRespons[i]);
        }
    }
    
    len = topRatedRespons.length;
    for(var i=0;i<len;i++)
    {
        if(topRatedRespons[i].title.toLowerCase().includes(value.toLowerCase())||topRatedRespons[i].overview.toLowerCase().includes(value.toLowerCase()))
        {
            temp.push(topRatedRespons[i]);
        }
    }
    
    len = trendingMovieRespons.length;
    for(var i=0;i<len;i++)
    {
        if(trendingMovieRespons[i].title.toLowerCase().includes(value.toLowerCase())||trendingMovieRespons[i].overview.toLowerCase().includes(value.toLowerCase()))
        {
            temp.push(trendingMovieRespons[i]);
        }
    }

    
    len = upComingRespons.length;
    for(var i=0;i<len;i++)
    {
        if(upComingRespons[i].title.toLowerCase().includes(value.toLowerCase())||upComingRespons[i].overview.toLowerCase().includes(value.toLowerCase()))
        {
            temp.push(upComingRespons[i]);
        }
    }
    display(temp);
}
