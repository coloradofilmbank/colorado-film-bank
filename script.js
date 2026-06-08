// Colorado Film Bank

<script>
document.getElementById('q').addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        window.location='search.html?q='+encodeURIComponent(this.value);
    }
});
</script>

<script src="script.js"></script>
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

const buttons =
document.querySelectorAll('.year-btn');

const slider =
document.getElementById('timelineSlider');

const label =
document.getElementById('timelineLabel');

const selected =
document.getElementById('selectedDecade');

buttons.forEach(button=>{

    button.addEventListener('click',()=>{

        buttons.forEach(b=>
            b.classList.remove('active')
        );

        button.classList.add('active');

        selected.textContent =
        button.textContent;

    });

});

slider.addEventListener('input',()=>{

    label.textContent =
    slider.value;

});
