let navBar = document.getElementById("navBar")
let desktopProjsBtn
let webProjsBtn
let homeBtn
let desktopRect
let webRect
let homeRect

window.addEventListener("load", async () => {
    navBar.innerHTML = await loadNavBar()

    desktopProjsBtn = document.getElementById("desktopButton")
    webProjsBtn = document.getElementById("webButton")
    homeBtn = document.getElementById("homeBtn")
    updateRects()

    webProjsBtn.style.width = desktopRect.width + "px"
    updateRects()
    navBar.style.width = webRect.width + desktopRect.width + homeRect.width + "px"
    navBar.style.left = (window.innerWidth / 2) - navBar.getBoundingClientRect().width / 2 + "px"
    document.getElementById("desktopContent").style.minWidth = desktopRect.width + "px"
    document.getElementById("webContent").style.minWidth = webRect.width + "px"
})

function updateRects() {
    desktopRect = desktopProjsBtn.getBoundingClientRect()
    webRect = webProjsBtn.getBoundingClientRect()
    homeRect = homeBtn.getBoundingClientRect()
}

async function loadNavBar() {
    return await (await fetch("NavBar.html")).text()
}
