var likes = 3
function likeCounter() {
    likes++

    var h3 = document.querySelector("h3")
    h3.innerText = likes + " like(s)"
    console.log('function called')
}