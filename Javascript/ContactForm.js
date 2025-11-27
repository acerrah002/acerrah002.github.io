const ContactFormHTML = `
  <section class="contact" id="contact">
    <div class="container">
      <h2>Contact</h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="9d07b17d-cdc5-44ce-a6ed-09042ae7b36c">

        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." required>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email.." required>

        <label for="subject">Subject</label>
        <textarea id="subject" name="message" placeholder="Write something.." style="height:200px" required></textarea>

        <input type="submit" value="Submit">
      </form>
    </div>
  </section>
`;
document.addEventListener('DOMContentLoaded', () => {
  console.log('contactform.js loaded');
  const contentArea = document.getElementById('ContactForm-placeholder');
  if (!contentArea) {
    console.warn('ContactForm-placeholder not found in DOM');
    return;
  }
  contentArea.innerHTML = ContactFormHTML;
});