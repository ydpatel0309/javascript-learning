const generateMemeBtn= document.querySelector(".meme-btn")
const memeTitle= document.querySelector(".meme-generator .meme-title")
const memeAuthor= document.querySelector(".meme-generator .meme-author")
const memeImage= document.querySelector(".meme-generator img")


const updateDetails = (url,title,author) =>{
    memeImage.setAttribute("src", url);
    memeAuthor.innerHTML=author;
    memeTitle.innerHTML=title;
}
function generateMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response)=>Response.json())
    .then((data)=>{
        console.log("oj");
        updateDetails(data.url,data.title,data.author);
    });

};
generateMemeBtn.addEventListener("click", generateMeme)
// console.log("generateMeme");