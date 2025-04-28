// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navbtn = document.querySelector(".nav-toggle");
const LinksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navbtn.addEventListener("click", function(){
         const containerHeight =  LinksContainer.getBoundingClientRect().height;
         const linksheight = links.getBoundingClientRect().height;
         
         if(containerHeight === 0 ){
            LinksContainer.style.height = `${linksheight}px`;
         }
         else{
            LinksContainer.style.height = 0;
         }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const toplinkbtn = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const navbarHeight = navbar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if(scrollHeight > navbarHeight){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }

    if(scrollHeight > 800){
       toplinkbtn.classList.add("show-link");
    }
    else{
        toplinkbtn.classList.remove("show-link");
    }
});
// ********** smooth scroll ************
const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function(link){
   link.addEventListener("click", function(e){
   e.preventDefault();

   const id = e.currentTarget.getAttribute("href").slice(1);
   const element = document.getElementById(id);

   const navbarHeight = navbar.getBoundingClientRect().height;
   const linksContainerHeight = LinksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navbarHeight;

    if(!fixedNav){
        position = position - navbarHeight;
    }
    if(navbarHeight > 82){
        position = position + linksContainerHeight;
    }
    
    window.scrollTo({
        left: 0, top: position,

    });
 linksContainerHeight.style.height = 0;
   });
});
// select links
