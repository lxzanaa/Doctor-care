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


document.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const links = document.querySelectorAll('#header_link');
    const menuItems = document.querySelectorAll('#mobile_menu a');
    const title = document.querySelector('header a');
    const mobileMenuButton = document.querySelector('#mobile_open');
    const consultationButton = document.querySelector('header a.py-3');
    const activeLink = document.querySelector('.header_active');

    if (window.scrollY > 50) {
        header.classList.add('bg-[#00856F]', 'text-white', 'fixed', 'top-0', 'left-0', 'w-full', 'z-50');
        header.classList.remove('bg-[#DCE9E2]', 'text-black');

        title.classList.add('text-white');
        mobileMenuButton.classList.add('text-white');
        consultationButton.classList.add('text-white', 'border-white');

        links.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-[#00856F]');
        });

        menuItems.forEach(item => {
            item.classList.add('text-white');
            item.classList.remove('text-[#00856F]');
        });

        if (activeLink) {
            activeLink.classList.add('active_2');
            activeLink.classList.remove('header_active');
        }

    } else {
        header.classList.add('bg-[#DCE9E2]', 'text-black');
        header.classList.remove('bg-[#00856F]', 'text-white', 'fixed', 'top-0', 'left-0', 'w-full', 'z-50');

        title.classList.remove('text-white');
        mobileMenuButton.classList.remove('text-white');
        consultationButton.classList.remove('text-white', 'border-white');

        links.forEach(link => {
            link.classList.add('text-[#00856F]');
            link.classList.remove('text-white');
        });

        menuItems.forEach(item => {
            item.classList.add('text-[#00856F]');
            item.classList.remove('text-white');
        });

        const activeLinkWithActive2 = document.querySelector('.active_2');
        if (activeLinkWithActive2) {
            activeLinkWithActive2.classList.add('header_active');
            activeLinkWithActive2.classList.remove('active_2');
        }
    }
});
