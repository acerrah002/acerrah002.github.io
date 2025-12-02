const ThreeDPrintedPurchaseScriptHTML = `
  <section class="3Dprintedemail">
    <h2>🛠️ Order Your Selected PC</h2>
    <p>Select a PC build above, and it will auto-fill the form below.</p>

    <form action="https://api.web3forms.com/submit" method="POST" class="THREEDPRINTFORM">
        <input type="hidden" name="access_key" value="9d07b17d-cdc5-44ce-a6ed-09042ae7b36c">
        
        <label for="selectModel">Model</label>
        <input type="text" id="selectModel" name="selectModel" readonly>

        <label for="selectMaterial">Material</label>
        <input type="text" id="selectMaterial" name="selectMaterial" readonly>

        <label for="selectColour">Colours</label>
        <input type="text" id="selectColour" name="selectColour" readonly>

        <label for="Amount">Amount*</label>
        <input type="text" id="Amount" name="Amount" required>

        <label for="Comments">Comments</label>
        <input type="text" id="Comments" name="Comments">

        <label for="name">Your Name*</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Your Email*</label>
        <input type="email" id="email" name="email" required>

        <input type="submit" value="Place Order" style="font-size:40px; border-radius: 25px;" class="Submitbutton">
    </form>
</section>
`;
document.addEventListener('DOMContentLoaded', () => {
  console.log('purchaseform3dprinting.js loaded');
  const contentArea = document.getElementById('3Dprintedemail-placeholder');
  if (!contentArea) {
    console.warn('3Dprintedemail-placeholder not found in DOM');
    return;
  }
  contentArea.innerHTML = ThreeDPrintedPurchaseScriptHTML;
});