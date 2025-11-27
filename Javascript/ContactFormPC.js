const PCBuildsHTML = `
  <section class="builds">
    <h2>🖥️ Previous Builds & Examples</h2>
    <h2>Currently in beta no items for sale</h2>
    <div class="build-container">
      <div class="build empty-slot"></div>

      <div class="build fade-in" onclick="selectPC('Gaming Beast','Ryzen 7 7800X3D, RTX 4070 Ti, 32GB RAM, 1TB NVMe','$3,499')">
        <img src="/images/highendpc.png" alt="Gaming PC Build">
        <h3>Gaming Beast</h3>
        <p>Ryzen 7 7800X3D, RTX 4070 Ti, 32GB RAM, 1TB NVMe</p>
        <p class="price">$3,499</p>
      </div>

      <div class="build fade-in" onclick="selectPC('Gaming Build','Intel I7 10700k, Radeon Strix RX 6700 XT, 16GB RAM, NVMe 1TB','$1,299')">
        <img src="/images/gamingpc.png" alt="Gaming Build">
        <h3>Gaming Build</h3>
        <p>Intel I7 10700k, Radeon Strix RX 6700 XT, 16GB RAM, NVMe 1TB</p>
        <p class="price">$1,299</p>
      </div>

      <div class="build fade-in" onclick="selectPC('Budget Starter','Ryzen 7 5800, GTX 1660 Super, 16GB RAM, NVMe 500GB','$999')">
        <img src="/images/budgetfriendly.png" alt="Budget Starter">
        <h3>Budget Starter</h3>
        <p>Ryzen 7 5800, GTX 1660 Super, 16GB RAM, NVMe 500GB</p>
        <p class="price">$999</p>
      </div>

      <div class="build fade-in" onclick="selectPC('Budget Starter (AIO)','Ryzen 7 5700G, Radeon Vega 8, 16GB RAM, NVMe 500GB','$849')">
        <img src="/images/Cool-Pc-Setup.png" alt="Budget Starter">
        <h3>Budget Starter</h3>
        <p>Ryzen 7 5700G, Radeon Vega 8, 16GB RAM, NVMe 500GB</p>
        <p class="price">$849</p>
      </div>

      <div class="build fade-in" onclick="selectPC('Budget PC Build','Ryzen 5 5600G, Radeon Vega 7, 16GB RAM, NVMe 500GB','$699')">
        <img src="/images/White-Budget-Gaming-PC.png" alt="Budget PC Build">
        <h3>Budget PC Build</h3>
        <p>Ryzen 5 5600G, Radeon Vega 7, 16GB RAM, NVMe 500GB</p>
        <p class="price">$699</p>
      </div>

      <div class="build fade-in" onclick="selectPC('Custom Build','N/A, N/A, N/A, N/A','$200')">
        <img src="/images/pcparts.png" alt="Custom Build">
        <h3>Custom built to your liking</h3>
        <p>N/A, N/A, N/A, N/A</p>
        <p class="price">$200</p>
      </div>
    </div>
  </section>

  <section class="custom-build" id="contact">
    <h2>🛠️ Order Your Selected PC</h2>
    <p>Select a PC build above, and it will auto-fill the form below.</p>

    <form action="https://api.web3forms.com/submit" method="POST" class="PCFORSALEFORM">
      <input type="hidden" name="access_key" value="9d07b17d-cdc5-44ce-a6ed-09042ae7b36c">

      <label for="pc-name">Selected PC</label>
      <input type="text" id="pc-name" name="pc-name" readonly>

      <label for="pc-specs">Specifications</label>
      <input type="text" id="pc-specs" name="pc-specs" readonly>

      <label for="pc-price">Price</label>
      <input type="text" id="pc-price" name="pc-price" readonly>

      <label for="order-name">Your Name</label>
      <input type="text" id="order-name" name="order-name" required>

      <label for="order-email">Your Email</label>
      <input type="email" id="order-email" name="order-email" required>

      <button type="submit">Place Order</button>
    </form>
  </section>
`;


function selectPC(name, specs, price) {
      const pn = document.getElementById("pc-name");
      const ps = document.getElementById("pc-specs");
      const pp = document.getElementById("pc-price");
      if (pn) pn.value = name;
      if (ps) ps.value = specs;
      if (pp) pp.value = price;
    }
document.body.style.zoom = "120%";

document.addEventListener('DOMContentLoaded', () => {
  console.log('pc_builds.js loaded');
  const contentArea = document.getElementById('PCBuilds-placeholder');
  if (!contentArea) {
    console.warn('PCBuilds-placeholder not found in DOM');
    return;
  }
  contentArea.innerHTML = PCBuildsHTML;
});
