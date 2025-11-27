const FooterHTML = `
  <footer class="footer">
    <p>© 2025 ScrewsandCircuits</p>
    <p><b>Contact us</b></p>
    <p><i class="fas fa-envelope"></i> Email: <a href="mailto:screwsandcircuits@gmail.com">screwsandcircuits@gmail.com</a></p>
    <p><i class="fab fa-instagram"></i> Instagram: <a href="https://www.instagram.com/screwsandcircuits/?hl=en" target="_blank" rel="noopener">screwsandcircuits</a></p>
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