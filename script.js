// Colorado Film Bank

const search = document.getElementById('q');

if(search){

search.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        window.location =
        'search.html?q=' +
        encodeURIComponent(this.value);
    }
});

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

setInterval(() => {

search.placeholder = suggestions[i];

i++;

if(i >= suggestions.length){
i = 0;
}

},3000);

}

document.body.style.opacity = 0;

window.addEventListener('load',()=>{

document.body.style.transition='opacity .8s';
document.body.style.opacity=1;

});

const eraCards =
document.querySelectorAll('.era-card');

const selected =
document.getElementById('selectedDecade');

eraCards.forEach(card => {

card.addEventListener('click',()=>{

eraCards.forEach(c =>
c.classList.remove('active')
);

card.classList.add('active');

if(selected){
selected.textContent =
card.dataset.era;
}

});

});

const slider =
document.getElementById('timelineSlider');

const label =
document.getElementById('timelineLabel');

if(slider && label){

slider.addEventListener('input',()=>{

label.textContent =
slider.value;

});

}

// TIMELINE SEARCH

fetch('catalog.json')
.then(response => response.json())
.then(records => {

const slider =
document.getElementById('timelineSlider');

const results =
document.getElementById('timelineResults');

function updateTimeline(){

const year =
parseInt(slider.value);

const matches =
records.filter(record => {

const match =
record.title.match(/\b(18|19|20)\d{2}\b/);

if(!match) return false;

return parseInt(match[0]) === year;

});

results.innerHTML =
`<h2>${matches.length} Records from ${year}</h2>`;

matches.forEach(record => {

results.innerHTML += `
<div class="timeline-result">
<a href="${record.url}">
<h3>${record.title}</h3>
</a>
<p>${record.collection}</p>
</div>
`;

});

}

slider.addEventListener('input', updateTimeline);

updateTimeline();

});
