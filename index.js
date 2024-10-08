function getJoke()
{
    let config={
        headers:{
            'Accept':'application/json'
        }
    }
    axios.get("https://icanhazdadjoke.com", config).then((res)=>{
        console.log(res.data.joke);
        document.getElementById("what").innerHTML="";
        document.getElementById("cont").style.display="block";
        document.getElementById("joke").innerHTML=res.data.joke
    }).catch((err) => {
        console.error(err);
        document.getElementById("joke").innerHTML = "An error occurred while fetching the joke.";})
}
