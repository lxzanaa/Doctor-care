let mobile_menu = document.querySelector("#mobile_menu"),
    mobile_open = document.querySelector("#mobile_open"),
    mobile_close = document.querySelector("#mobile_close"),
    body = document.body

mobile_open.addEventListener('click', function () {
    mobile_menu.classList.toggle("left-0")
    body.classList.toggle('overflow-hidden');
    body.classList.toggle('h-screen');
})
mobile_close.addEventListener('click', function () {
    mobile_menu.classList.toggle("left-0")
    body.classList.toggle('overflow-hidden');
    body.classList.toggle('h-screen');
})




let header_links = document.querySelectorAll("#header_link");

header_links.forEach(function (item) {
    item.addEventListener('click', function () {
        if (window.screenTop > 50) {
            header_links.forEach(function (element) {
                element.classList.remove('active_2');
                element.classList.remove('header_active');
            });
            item.classList.add("active_2");
        }
    });
});



document.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const links = document.querySelectorAll('#header_link');
    const menuItems = document.querySelectorAll('#mobile_menu a');
    const title = document.querySelector('header a');
    const mobileMenuButton = document.querySelector('#mobile_open');
    const consultationButton = document.querySelector('header a.py-3');
    const header__btn = document.querySelector('#header__btn');
    const care = document.querySelector('#care');
    let section = document.querySelectorAll('section')

    if (window.scrollY > 50) {
        header_links.forEach(function (item) {
            item.addEventListener('click', function () {
                header_links.forEach(function (element) {
                    element.classList.remove('active_2');
                    element.classList.remove('header_active');
                });
                item.classList.add("active_2");
            });
        });

        section.forEach(function (item, index) {
            if (window.scrollY > section[index].offsetTop) {
                links.forEach(function (item2) {
                    item2.classList.remove('active_2')
                })
                links[index].classList.add('active_2')


            } else {
                links[index].classList.remove('active_2')

            }
        })

        console.log(section[2].offsetTop);

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

        const activeLink = document.querySelector('.header_active');
        if (activeLink) {
            activeLink.classList.add('active_2');
            activeLink.classList.remove('header_active');
        }

        if (header__btn) {
            header__btn.classList.add('header_btn_hover_2');
            header__btn.classList.remove('header_btn_hover');
        }

        if (care) {
            care.classList.add('text-white');
            care.classList.remove('text-[#00856F]');
        }
    } else {
        header.classList.add('bg-[#DCE9E2]', 'text-black');
        header.classList.remove('bg-[#00856F]', 'text-white', 'fixed', 'top-0', 'left-0', 'w-full', 'z-50');

        title.classList.remove('text-white');
        mobileMenuButton.classList.remove('text-white');
        consultationButton.classList.remove('text-white', 'border-white');

        header_links.forEach(function (item) {
            item.addEventListener('click', function () {
                header_links.forEach(function (element) {
                    element.classList.remove('active_2');
                });
                item.classList.add("header_active");
            });
        });

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

        if (header__btn) {
            header__btn.classList.add('header_btn_hover');
            header__btn.classList.remove('header_btn_hover_2');
        }

        if (care) {
            care.classList.add('text-[#00856F]');
            care.classList.remove('text-white');
        }
    }
});