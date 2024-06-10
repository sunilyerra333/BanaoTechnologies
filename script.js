let elipisisIconEl = document.getElementById("elipisisIcon")
let unOrderItemsEl = document.getElementById("unOrderItems")
let recommendedContainerEl = document.getElementById("recommendedContainer")
let leisureFollowEl = document.getElementById("leisureFollow")
let noidaInputEl = document.getElementById("noidaInput");
let activismIdEl = document.getElementById("activismId")
let mbaIdEl = document.getElementById("mbaId")
let philosphyIdEl = document.getElementById("philosphyId")
let val = false;

elipisisIconEl.onclick = function() {
    let liEl = document.createElement("li");
    liEl.textContent = "Edit";
    liEl.classList.add("list-elements-style")
    unOrderItemsEl.appendChild(liEl);
    let liEl1 = document.createElement("li");
    liEl1.textContent = "Report";
    liEl1.classList.add("list-elements-style")
    unOrderItemsEl.appendChild(liEl1);
    let liEl2 = document.createElement("li");
    liEl2.textContent = "Option3";
    liEl2.classList.add("list-elements-style")
    unOrderItemsEl.appendChild(liEl2);
}

noidaInputEl.onclick = function() {
    if (val === false) {
        recommendedContainerEl.classList.remove("recommended-container");
        val = true;
    } else {
        recommendedContainerEl.classList.add("recommended-container");
        val = false;
    }
}

function leisureBtn() {
    leisureFollowEl.textContent = "Following"
    leisureFollowEl.style.backgroundColor = "black"
    leisureFollowEl.style.color = "white"
    leisureFollowEl.style.fontFamily = "Roboto"
}

function activismBtn() {
    activismIdEl.textContent = "Following"
    activismIdEl.style.backgroundColor = "black"
    activismIdEl.style.color = "white"
    activismIdEl.style.fontFamily = "Roboto"
}

function philosphyBtn() {
    philosphyIdEl.textContent = "Following"
    philosphyIdEl.style.backgroundColor = "black"
    philosphyIdEl.style.color = "white"
    philosphyIdEl.style.fontFamily = "Roboto"
}

function mbaBtn() {
    mbaIdEl.textContent = "Following"
    mbaIdEl.style.backgroundColor = "black"
    mbaIdEl.style.color = "white"
    mbaIdEl.style.fontFamily = "Roboto"
}
