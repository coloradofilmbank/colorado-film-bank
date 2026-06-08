// Colorado Film Bank

const search = document.getElementById("q");

// Search on Enter

search.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        window.location =
        "search.html?q=" +
        encodeURIComponent(search.value);

    }

});

// Placeholder rotation

const suggestions = [

"Search Denver",

"Search Mining",

"Search Railroads",

"Search Rocky Mountain National Park",

"Search Aspen",

"Search Colorado Springs",

"Search 1940s",

"Search Historic Photographs"

];

let i = 0;

setInterval(()=>{

    search.placeholder = suggestions[i];

    i++;

    if(i>=suggestions.length){

        i=0;

    }

},3000);

// Fade in

document.body.style.opacity = 0;

window.addEventListener("load",()=>{

    document.body.style.transition = "opacity .8s";

    document.body.style.opacity = 1;

});
