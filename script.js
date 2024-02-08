const jokeContainer=document.getElementById('para');
// console.log(jokeContainer);

const btn=document.getElementById('btn');
// console.log(btn)

const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// console.log(url)

let getJoke=()=>{
    fetch(url).then((data)=> data.json()).then((item)=>{
        // console.log(item.joke);
        jokeContainer.innerText=item.joke;
    })
}
btn.addEventListener('click',getJoke)
getJoke()