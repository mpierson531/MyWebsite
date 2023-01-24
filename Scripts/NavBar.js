let navBar
let desktopButton
let webButton
let homeBtn
let demosButton
let desktopRect
let webRect
let homeRect

window.addEventListener("load", async () => {
    navBar = document.getElementById("navBar")
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

    let buttons = navBar.getElementsByTagName("button")
    for (let i = 0; i < buttons.length; i++) {
        let color = buttons[i].style.color

        buttons[i].addEventListener("mouseover", function() {
            buttons[i].style.color = "white"
            buttons[i].style.scale = "1.02"
        })

        buttons[i].addEventListener("mouseleave", function() {
            buttons[i].style.color = color
            buttons[i].style.scale = "1"
        })
    }

    let divs = navBar.getElementsByTagName("div")

    for (let i = 0; i < divs.length; i++) {
        if (divs[i].id.includes("Content")) {
            let content = divs[i]
            let a = content.getElementsByTagName("a")
            let button = content.previousElementSibling
            let buttonColor = button.style.color

            for (let j = 0; j < a.length; j++) {
                a[j].addEventListener("mouseover", function() {
                    button.style.color = "white"
                    button.style.scale = "1.02"
                })

                a[j].addEventListener("mouseleave", function() {
                    button.style.color = buttonColor
                    button.style.scale = "1"
                })
            }
        }
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