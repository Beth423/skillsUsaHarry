
/**  CREATE THE HEADER*/
const header = document.getElementsByTagName('header')[0];
let innerDiv = document.createElement('div');
innerDiv.classList.add("inner");
const nav = document.createElement('nav');
innerDiv.appendChild(nav);
header.appendChild(innerDiv);

/* Create the logo */
let logoContainer = document.createElement('div');
let logo = document.createElement('img');
logo.src = "";
logoContainer.classList.add("logo");
logoContainer.appendChild(logo);
nav.appendChild(logoContainer);

/*
<div class="inner">
<div class="logo"></div>
<nav>
</nav>
</div>*/


/* Create the nav bar */
let menu_items = [["Home","/"], ["About","/about.html"], ["Sign the Petition","/petition.html"]];
//const nav = document.getElementsByTagName('nav')[0];
let ul = document.createElement('ul');
nav.appendChild(ul);
for(i=0; i<menu_items.length; i++){
    let html = document.getElementsByTagName('html')[0];
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = menu_items[i][1];
    a.innerHTML = menu_items[i][0];

    //set active class to the correct menu item based on the html id
    if (html.id == menu_items[i][0].toLowerCase())
    {
        a.classList.add("active");
    }
    li.appendChild(a);
    ul.appendChild(li);
}




/* Create the footer */
const footer = document.getElementsByTagName('footer')[0];
innerDiv = document.createElement('div');
innerDiv.class = "inner";
