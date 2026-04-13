const sidebarLinks = [
    { name: "X", href: "#", id: "X", onClick: "hideSidebar()" }, 
    { name: "Home Page", href: "index.html" },
    { name: "Fob keys", href: "fobkeys.html" },
    { name: "Maintenance & Repair", href: "maintenance.html" },
    { name: "3DPrinting", href: "3DPrinting.html" },
    { name: "Pc Builds", href: "Pc_builds.html" },
    { name: "Tutorials", href: "Tutorials.html" },
    { name: "Facebook", href: "https://www.facebook.com/p/ScrewsCircuits-61577351262288/" },
    { name: "Instagram", href: "https://www.instagram.com/screwsandcircuits/?hl=en" },
    { name: "YouTube", href: "https://www.youtube.com/@ScrewsandCircuits" }
];

const navbarLinks = [
    { name: "Home", href: "index.html" },
    { name: "Services", href: "#Services" },
    { name: "Contact", href: "#contact" }
];


const generateListItems = (links, isNavbar = false) => {
    return links.map(link => {
        const clickAttr = link.onClick ? `onclick="${link.onClick}"` : `onclick="hideSidebar()"`;
        const classAttr = isNavbar ? 'class="navbarlinks"' : '';
        const idAttr = link.id ? `id="${link.id}"` : '';
        
        return `<li ${classAttr} ${clickAttr}><a href="${link.href}"><p ${idAttr}>${link.name}</p></a></li>`;
    }).join('');
};


const HeaderHTML = `
    <div id="HeaderDivTest">
        <nav>
            <ul class="sidebar">
                ${generateListItems(sidebarLinks)}
            </ul>
            <ul>
                ${generateListItems(navbarLinks, true)}
                <li onclick="showSidebar()"><a href="#"><div class="hamburger"><span></span><span></span><span></span></div></a></li>
            </ul>
        </nav>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hamburg.js loaded');
  const contentArea = document.getElementById('header-placeholder');
  if (!contentArea) {
    console.warn('header-placeholder not found in DOM');
    return;
  }
  contentArea.innerHTML = HeaderHTML;

const xButton = document.querySelector('#X');
   if (xButton) {
      xButton.parentNode.addEventListener('click', function(e) {
      e.preventDefault(); 
      e.stopPropagation();
     hideSidebar();
  });
  }
});

let sidebarVisible = false;

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    sidebarVisible = true;
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    sidebarVisible = false;
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerButton = document.querySelector('.hamburger');
    const xButton = document.querySelector('#X');
    
    // Check if click is outside sidebar, hamburger button, and X button
    if (sidebarVisible && 
        !sidebar.contains(event.target) && 
        !event.target.closest('.hamburger') && 
        event.target !== xButton) {
        hideSidebar();
    }
});