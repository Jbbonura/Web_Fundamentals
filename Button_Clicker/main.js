function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logoff"
    }
    else {
        element.innerText = "Login"
    }
}

function buttonRemove(element) {
    element.remove();
}
var topLikes = 13
function addLikesTop(element) {
    topLikes++
    element.innerText = topLikes + " likes"
    alert('Ninja was liked')
} 

var bottomLikes = 37
function addLikesBottom(element) {
    bottomLikes++
    element.innerText = bottomLikes + " likes"
    alert('Ninja was liked')
}