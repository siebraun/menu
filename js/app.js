
let navItems = [
        {href: '/index.html', text: 'Home'},
        {href: '/about.html', text: 'About'},
        {href: '/contact.html', text: 'Contact'}
    ];


let navElem = document.createElement("nav"),
        navList = document.createElement("ul"), 
        navItem, navLink;

    navElem.appendChild(navList);


    for (var i = 0; i < navItems.length; i++) {
        navItem = document.createElement("li");
        navLink = document.createElement("a");

        navLink.href = navItems[i].href;
        navLink.innerHTML = navItems[i].text;

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    }

    navList.children[0].className = "current";

        document.body.appendChild(navElem);
    

