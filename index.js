function moveSpans() {
    let spanLeft = document.getElementById("tagLeft");
    let spanRight = document.getElementById("tagRight");

    let logo = document.getElementById("logo");

    logo.onmouseover = function () {
        spanLeft.style.padding = "0 30px";
        spanLeft.style.transition = "0.5s";
        spanRight.style.padding = "0 30px";
        spanRight.style.transition = "0.5s";
    }

    logo.onmouseout = function () {
        spanLeft.style.padding = "0 10px";
        spanLeft.style.transition = "0.5s";
        spanRight.style.padding = "0 10px";
        spanRight.style.transition = "0.5s";
    }
}

moveSpans();