const footerLinks = [
      { name: "Email", href: "mailto:screwsandcircuits@gmail.com", text: "Screwsandcircuits@gmail.com", image: "images/emailIcon.png"},
      { name: "Instagram", href: "https://www.instagram.com/screwsandcircuits/?hl=en", text: "Screwsandcircuits" , image: "images/instagramIcon.png"},
      { name: "YouTube", href: "https://www.youtube.com/@ScrewsandCircuits", text: "ScrewsandCircuits" , image: "images/youtubeIcon.png"},
      { name: "Facebook", href: "https://www.facebook.com/p/ScrewsCircuits-61577351262288/", text: "ScrewsandCircuits" , image: "images/facebookIcon.png"}
]

function generateParagraphItems(Links){
  return Links.map(function(link){
    return `<a href="${link.href}" target="_blank" rel="noopener"><img src="${link.image}" alt="${link.text}"></a> `;
  }).join('');
}

const FooterHTML = `
  <footer class="footer">
    <p>© 2026 ScrewsandCircuits</p>
    <p><b>Contact us</b></p>
    ${generateParagraphItems(footerLinks)}
  </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  console.log('footer.js loaded');
  const contentArea = document.getElementById('Footer-placeholder');
  if (!contentArea) {
    console.warn('Footer-placeholder not found in DOM');
    return;
  }
  contentArea.innerHTML = FooterHTML;
});