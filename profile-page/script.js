console.log("page loaded...");

function editName() {
    var h1 = document.querySelector(".card-body h1")
    h1.innerText = "John Smith"
}

function removeListTodd() {
    var todd = document.querySelector(".todd")
    todd.remove()

    var connectionRequests = document.querySelector(".top-badge")
    if (connectionRequests.innerText == "2") {
        connectionRequests.innerText = "1"
    }
    else {
        connectionRequests.innerText = "0"
    }
}

function removeListPhil() {
    var phil = document.querySelector(".phil")
    phil.remove()

    var connectionRequests = document.querySelector(".top-badge")
    if (connectionRequests.innerText == "2") {
        connectionRequests.innerText = "1"
    }
    else {
        connectionRequests.innerText = "0"
    }
}
var connectionTotal = 500;
function acceptConnection() {
    var connections = document.querySelector(".bottom-badge")
    connectionTotal++
    connections.innerText = connectionTotal
    console.log('function called')
}

function acceptToddClicked() {
    removeListTodd()
    acceptConnection()
}

function acceptPhilClicked() {
    removeListPhil()
    acceptConnection()
}