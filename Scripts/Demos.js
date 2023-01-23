let textEditor
let consoleNote
let redditDownloader
let myFirstPong
let textSlideIndex = 1, consoleSlideIndex = 1, redditSlideIndex = 1, pongSlideIndex = 1
let allSlidesThumbnails
let textSlidesThumbnails
let consoleSlidesThumbnails
let redditSlidesThumbnails
let pongSlidesThumbnails
let captions

window.addEventListener("load", function(event) {
    let containers = document.getElementsByClassName("container")
    textEditor = document.getElementById("textEditor")
    consoleNote = document.getElementById("consoleNote")
    redditDownloader = document.getElementById("redditDownloader")
    myFirstPong = document.getElementById("myFirstPong")
    allSlidesThumbnails = getSlidesAndThumbnails()
    textSlidesThumbnails = allSlidesThumbnails[0]
    consoleSlidesThumbnails = allSlidesThumbnails[1]
    redditSlidesThumbnails = allSlidesThumbnails[2]
    pongSlidesThumbnails = allSlidesThumbnails[3]
    captions = document.getElementsByClassName("caption-container")
    let videos = document.getElementsByClassName("videoSlide")

    showSlides()

    for (let i = 0; i < containers.length; i++) {
        let containerRows = containers[i].getElementsByClassName("row")
        let containerIndex = i + 1

        let thumbnails = []
        for (let j = 0; j < containerRows.length; j++) {
            let columns = containerRows[j].getElementsByClassName("column")
            let rowRect = containerRows[j].getBoundingClientRect()
            let columnHeight = rowRect.height + "px"

            for (let k = 0; k < columns.length; k++) {
                thumbnails.push(columns[k].children[0])
                columns[k].style.height = columnHeight
            }

            for (let k = 0; k < thumbnails.length; k++) {
                thumbnails[k].addEventListener("click", function(evt) {
                    currentSlide(containerIndex, k + 1)
                })

                thumbnails[k].style.height = columnHeight
            }
        }
    }

    for (let i = 0; i < videos.length; i++) {
        videos[i].controls = true
    }

    stylePrevAndNext()
})

function nextSlide(container, i) {
    if (container === 1) {
        textSlideIndex += i
    } else if (container === 2) {
        consoleSlideIndex += i
    } else if (container === 3) {
        redditSlideIndex += i
    } else if (container === 4) {
        pongSlideIndex += i
    }

    showSlides()
}

function currentSlide(container, i) {
    if (container === 1) {
        textSlideIndex = i
    } else if (container === 2) {
        consoleSlideIndex = i
    } else if (container === 3) {
        redditSlideIndex = i
    } else if (container === 4) {
        pongSlideIndex = i
    }

    showSlides()
}

function showSlides() {
    checkIndices()

    for (let i = 0; i < allSlidesThumbnails.length; i++) {
        let slides = allSlidesThumbnails[i][0]

        for (let j = 0; j < slides.length; j++) {
            slides[j].style.display = "none"
        }
    }

    for (let i = 0; i < allSlidesThumbnails.length; i++) {
        let thumbnails = allSlidesThumbnails[i][1]
        for (let j = 0; j < thumbnails.length; j++) {
            thumbnails[j].className = thumbnails[j].className.replace(" active", "")
        }
    }

    textSlidesThumbnails[0][textSlideIndex - 1].style.display = "block"
    textSlidesThumbnails[1][textSlideIndex - 1].className += " active";

    consoleSlidesThumbnails[0][consoleSlideIndex - 1].style.display = "block"
    consoleSlidesThumbnails[1][consoleSlideIndex - 1].className += " active";

    redditSlidesThumbnails[0][redditSlideIndex - 1].style.display = "block"
    redditSlidesThumbnails[1][redditSlideIndex - 1].className += " active";

    pongSlidesThumbnails[0][pongSlideIndex - 1].style.display = "block"
    pongSlidesThumbnails[1][pongSlideIndex - 1].className += " active"

    let prevsNexts = []
    let containers = document.getElementsByClassName("container")

    for (let i = 0; i < containers.length; i++) {
        let prev = containers[i].getElementsByClassName("prev")[0]
        let next = containers[i].getElementsByClassName("next")[0]
        prevsNexts.push([prev, next])
    }

    let rect = textSlidesThumbnails[0][textSlideIndex - 1].getBoundingClientRect()
    prevsNexts[0][0].style.top = rect.height / 2 + "px"
    prevsNexts[0][1].style.top = rect.height / 2 + "px"

    rect = consoleSlidesThumbnails[0][consoleSlideIndex - 1].getBoundingClientRect()
    prevsNexts[1][0].style.top = rect.height / 2 + "px"
    prevsNexts[1][1].style.top = rect.height / 2 + "px"

    rect = redditSlidesThumbnails[0][redditSlideIndex - 1].getBoundingClientRect()
    prevsNexts[2][0].style.top = rect.height / 2 + "px"
    prevsNexts[2][1].style.top = rect.height / 2 + "px"

    rect = pongSlidesThumbnails[0][pongSlideIndex - 1].getBoundingClientRect()
    prevsNexts[3][0].style.top = rect.height / 2 + "px"
    prevsNexts[3][1].style.top = rect.height / 2 + "px"
}

function checkIndices() {
    if (textSlideIndex > textSlidesThumbnails[0].length) {
        textSlideIndex = 1
    } else if (textSlideIndex < 1) {
        textSlideIndex = textSlidesThumbnails[0].length
    }

    if (consoleSlideIndex > consoleSlidesThumbnails[0].length) {
        consoleSlideIndex = 1
    } else if (consoleSlideIndex < 1) {
        consoleSlideIndex = consoleSlidesThumbnails[0].length
    }

    if (redditSlideIndex > redditSlidesThumbnails[0].length) {
        redditSlideIndex = 1
    } else if (redditSlideIndex < 1) {
        redditSlideIndex = redditSlidesThumbnails[0].length
    }

    if (pongSlideIndex > pongSlidesThumbnails[0].length) {
        pongSlideIndex = 1
    } else if (pongSlideIndex < 1) {
        pongSlideIndex = pongSlidesThumbnails[0].length
    }
}

function getSlidesAndThumbnails() {
    let allSlidesAndThumbnails = []
    let slides = textEditor.getElementsByClassName("slideshow")
    let thumbnails = []

    let rows = textEditor.getElementsByClassName("row")
    for (let i = 0; i < rows.length; i++) {
        let columns = rows[i].getElementsByClassName("column")
        for (let j = 0; j < columns.length; j++) {
            thumbnails.push(columns[j].children[0])
        }
    }

    allSlidesAndThumbnails[0] = [slides, thumbnails]

    let children = consoleNote.children
    slides = []
    thumbnails = []

    for (let i = 0; i < children.length; i++) {
        if (children[i].className === "slideshow") {
            slides.push(children[i])
        } else if (children[i].className === "row") {
            let columns = children[i].children
            for (let j = 0; j < columns.length; j++) {
                thumbnails.push(columns[j].children[0])
            }
        }
    }

    allSlidesAndThumbnails[1] = [slides, thumbnails]

    children = redditDownloader.children
    slides = []
    thumbnails = []

    for (let i = 0; i < children.length; i++) {
        if (children[i].className === "slideshow") {
            slides.push(children[i])
        } else if (children[i].className === "row") {
            let columns = children[i].children
            for (let j = 0; j < columns.length; j++) {
                thumbnails.push(columns[j].children[0])
            }
        }
    }

    allSlidesAndThumbnails[2] = [slides, thumbnails]

    children = myFirstPong.children
    slides = []
    thumbnails = []

    for (let i = 0; i < children.length; i++) {
        if (children[i].className === "slideshow") {
            slides.push(children[i])
        } else if (children[i].className === "row") {
            let columns = children[i].children
            for (let j = 0; j < columns.length; j++) {
                thumbnails.push(columns[j].children[0])
            }
        }
    }

    allSlidesAndThumbnails[3] = [slides, thumbnails]
    return allSlidesAndThumbnails
}

function stylePrevAndNext() {
    let prev = document.getElementsByClassName("prev")
    let next = document.getElementsByClassName("next")
    prev[0].style.color = "black"
    next[0].style.color = "black"

    let prevNextWidth = prev[0].getBoundingClientRect().width

    let prevAnimation = []
    let nextAnimation = []

    let j = 16
    for (let i = 16; i > 5; i--) {
        prevAnimation.push({
            paddingLeft: `${i.toString()}px`,
            paddingRight: `${j.toString()}px`,
            width: `${prevNextWidth}px`
        })

        j++
    }

    for (let i = 6; i < 17; i++) {
        prevAnimation.push({
            paddingLeft: `${i.toString()}px`,
            paddingRight: `${j.toString()}px`,
            width: `${prevNextWidth}px`
        })

        j--
    }

    for (let i = 16; i > 5; i--) {
        nextAnimation.push({
            paddingLeft: `${j.toString()}px`,
            paddingRight: `${i.toString()}px`,
            width: `${prevNextWidth}px`
        })
        j++
    }

    for (let i = 6; i < 17; i++) {
        nextAnimation.push({
            paddingLeft: `${j.toString()}px`,
            paddingRight: `${i.toString()}px`,
            width: `${prevNextWidth}px`
        })
        j--
    }

    for (let i = 0; i < prev.length; i++) {
        prev[i].addEventListener("click", function prevSlide() {
            prev[i].animate(prevAnimation, 250)
        })

        next[i].addEventListener("click", function nextSlide() {
            next[i].animate(nextAnimation, 250)
        })
    }
}
