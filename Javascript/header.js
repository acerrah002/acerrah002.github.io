const HeaderHTML = `
  <img src="/images/logo.png" alt="ScrewsandCircuits Logo" id="logo">
         <div>
            <nav>
              <ul class="sidebar">
                <li onclick=hideSidebar()><a href="#"><p id="X">X</p></a></li>
                <li><a href="index.html" target="_blank">Home Page</a></li>
                <li><a href="fobkeys.html" >Fob keys</a></li>
                <li><a href="maintenance.html" >Maintenance & Repair</a></li>
                <li><a href="3DPrinting.html" >3DPrinting</a></li>
                <li><a href="PC_Builds.html">Pc Builds</a></li>
                <li><a href="Tutorials.html">Tutorials</a></li>
                <li><a href="https://www.instagram.com/screwsandcircuits/?hl=en"  target="_blank">Instagram</a></li>
                <li><a href="index.html #contact">Contact Us</a></li>
              </ul>
              <ul>
                <li class="navbarlinks"><a href="index.html">Home</a></li>
                <li class="navbarlinks"><a href="#Services">Services</a></li>
                <li class="navbarlinks"><a href="#contact">Contact</a></li>
                <li onclick=showSidebar() ><a href="#" ><div class="hamburger"><span></span><span></span><span></span></div></a></li>
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

// Stop propagation on X button click to prevent double-trigger
document.querySelector('#X').addEventListener('click', function(e) {
    e.stopPropagation();
});