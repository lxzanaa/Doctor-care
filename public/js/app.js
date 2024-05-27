let mobile_menu = document.querySelector("#mobile_menu"),
    mobile_open = document.querySelector("#mobile_open"),
    mobile_close = document.querySelector("#mobile_close");

mobile_open.addEventListener('click', function () {
    mobile_menu.classList.toggle("left-0")
})
mobile_close.addEventListener('click', function () {
    mobile_menu.classList.toggle("left-0")
})

let header_link = document.querySelectorAll("#header_link")

header_link.forEach(function (item, index) {
    item.addEventListener('click', function () {
        header_link.forEach(function (element, index) {
            element.classList.remove('header_active')
        })
        item.classList.add("header_active");
    })
})
