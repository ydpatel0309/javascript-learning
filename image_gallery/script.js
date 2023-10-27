const Key="He5Hs2mGWHkTQKawCks5NcFDCx0MdaymAAImZt1ZO-w";
const fm=document.querySelector("form");
const inputE1=document.querySelector("#search-input");
const searchResult=document.querySelector(".search-results");
const showmore=document.querySelector("#show-more-button");


let inputData="";
let page =1;

async function searchImages()
{
    inputData =inputE1.value;
    const url = `http://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${Key}`

    const response=await fetch(url);
    const data =await response.json();

    const results=data.results;

    if(page == 1) searchResult.innerHTML = "";

    results.map((result) =>{
        const imageWrapper = document.createElement("div")//made outer div
        imageWrapper.classList.add("search-result")//made inner div
        const image = document.createElement("img")//made image
        image.src = result.urls.small//assigning image src
        image.alt = result.alt_description//assigning description
        const imageLink = document.createElement("a")//made inmage link
        imageLink.target = "_blank"//keeping target blank
        imageLink.textContent = result.alt_description//assigning description

        // upto now we made all elements now we will append all

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResult.appendChild(imageWrapper);
    });

    page++
    if(page>1) showmore.style.display="block"
}
fm.addEventListener("submit",(event) => {
    event.preventDefault();
    page=1;
    searchImages();
});

showmore.addEventListener("click",(event) => {
    searchImages();
});


