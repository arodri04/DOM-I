const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const hype = document.querySelectorAll('a');
hype[0].textContent = 'Services';
hype[1].textContent = 'Product';
hype[2].textContent = 'Vision';
hype[3].textContent = 'Features';
hype[4].textContent = 'About';
hype[5].textContent = 'Contact';

let nav = document.querySelector("nav");

const addhypefront = document.createElement('a');
addhypefront.innerHTML = "WORK PLS";
nav.prepend(addhypefront);

const addhypeback = document.createElement('a');
addhypeback.innerHTML = "thanksLiz";
nav.append(addhypeback);


hype.forEach(function(current){
  current.style.color = 'green';
});


const tText = document.querySelectorAll('h1'); 
const btext = document.querySelectorAll('button');
tText[0].textContent = 'DOM IS AWESOME';
btext[0].textContent = 'Get Started';

let mainLogo = document.getElementById('cta-img');
mainLogo.setAttribute('src', 'img/header-img.png');

let midimg = document.getElementById('middle-img');
midimg.setAttribute('src', 'img/mid-page-accent.jpg');

const midheaders = document.querySelectorAll('h4');
midheaders[0].textContent = 'Features';
midheaders[1].textContent = 'About';
midheaders[2].textContent = 'services';
midheaders[3].textContent = 'product';
midheaders[4].textContent = 'vision';
//contact
midheaders[5].textContent = 'Contact';

const ptext = document.querySelectorAll('p');
ptext[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ptext[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ptext[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ptext[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
ptext[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//contact
ptext[5].textContent = '123 Way 456\n Street Somewhere, USA';
ptext[6].textContent = '1 (888) 888-8888';
ptext[7].textContent = 'sales@greatidea.io';
ptext[8].textContent = 'Copyright Great Idea! 2018';



