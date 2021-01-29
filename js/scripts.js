

/* Create the nav bar */
let menu_items = [["Home","/"], ["About","/about.html"], ["Sign the Petition","/petition.html"]];
const nav = document.getElementsByTagName('nav')[0];
let ul = createElement('ul');
nav.appendChild(ul);
for(i=0; i<menu_items.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = menu_items[i][1];
    a.innerHTML = menu_items[i][0];
    li.appendChild(a);
    ul.appendChild(li);
}
