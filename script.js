var square = document.querySelectorAll(".square");
var btn_showAll = document.querySelector("#showAll");
var btn_hideAll = document.querySelector("#hideAll");
var filter = document.querySelector("#filter");

btn_showAll.addEventListener("click", function () {
    square.forEach(function (e) {
        e.style.display = "block";
    });
});

btn_hideAll.addEventListener("click", function () {
    square.forEach(function (e) {
        e.style.display = "none";
    });
});

filter.addEventListener("keyup", function () {
    var colorName = filter.value;
    square.forEach(function (e) {
        if (e.classList.contains(colorName)) {
            e.style.display = "block";
        }
        else {
            e.style.display = "none"
        }


    })
})

square.forEach(function (e) {
    e.addEventListener("mouseover", function () {
        e.style.height = "200px"
        e.style.width = "250px"
    })
    e.addEventListener("mouseout", function () {
        e.style.height = "180px"
        e.style.width = "180px"
    })
});



