const menuLista = document.querySelectorAll('.menu__lista a[href^="#"]');
const nav       = document.querySelector('.menu-items');
const menu      = document.querySelector('.menu');
const navList   = document.querySelectorAll(".menu__lista li");
const sections  = document.querySelectorAll("section");

function classToggle() {
    nav.classList.toggle('menu-ToggleShow')
};

document.querySelector('.menu-toggle').addEventListener('click', classToggle);

menuLista.forEach(menuList => {
    menuList.addEventListener("click", function(){
        nav.classList.remove("menu-ToggleShow");
    });
});

const options = {
    // threshold: "0.6" // 0.6 === 60% of the section should be visible
    rootMargin: "-30% 0px -70% 0px"
};

const observer = new IntersectionObserver (entries => {
    entries.forEach(e => {
        if(e.isIntersecting){
            // CHANGING NAVBAR STYLE ON SCROLL TO NEXT SECTION
            if(e.target.id !== "banner"){
                menu.classList.add("active");
            }else{
                menu.classList.remove("active");
            }
            // SECTION INDICATOR
            navList.forEach(link => {
                // To remove active class from other
                link.classList.remove('active');

                let enlace = link.childNodes[1]; 
                enlace.classList.remove('active'); 

                if(e.target.id === link.dataset.nav){
                    link.classList.add('active');
                    enlace.classList.add('active');
                }
            })
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});