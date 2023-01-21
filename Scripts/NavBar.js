let navBar = document.getElementById("navBar")
let desktopButton
let webButton
let homeBtn
let demosButton
let desktopRect
let webRect
let homeRect

window.addEventListener("load", async () => {
    navBar.innerHTML = await loadNavBar()

    desktopButton = document.getElementById("desktopButton")
    webButton = document.getElementById("webButton")
    homeBtn = document.getElementById("homeBtn")
    demosButton = document.getElementById("demos")
    updateRects()

    webButton.style.width = desktopRect.width + "px"
    updateRects()
    navBar.style.left = (window.innerWidth / 2) - navBar.getBoundingClientRect().width / 2 + "px"
    document.getElementById("desktopContent").style.minWidth = desktopRect.width + "px"
    document.getElementById("webContent").style.minWidth = webRect.width + "px"
    updateRects()

    desktopButton.onclick = function() {
        window.location.href = "./DesktopProjects.html"
    }

    webButton.onclick = function() {
        window.location.href = "./WebProjects.html"
    }

    homeBtn.onclick = function() {
        window.location.href = "./Index.html"
    }

    demosButton.onclick = function() {
        window.location.href = "./Demos.html"
    }
})

function updateRects() {
    desktopRect = desktopButton.getBoundingClientRect()
    webRect = webButton.getBoundingClientRect()
    homeRect = homeBtn.getBoundingClientRect()
}

async function loadNavBar() {
    return await (await fetch("/NavBar.html")).text()
}