alert("Pencet Kue nya 🎂");

// audio
window.addEventListener(`click`, function() {
var audio = document.getElementById("HBD");
audio.play();
});

// buton
const cake = document.getElementById(`cake`);
const openbtn = document.getElementById(`openbtn`);
const modal_container = document.getElementById(`modal_container`);
const closebtn = document.getElementById(`closebtn`);

cake.addEventListener(`click`, () => {
    openbtn.classList.add(`show`);
});

openbtn.addEventListener(`click`, () => {
    modal_container.classList.add(`show`);
});

closebtn.addEventListener(`click`, () => {
    modal_container.classList.remove(`show`);
});