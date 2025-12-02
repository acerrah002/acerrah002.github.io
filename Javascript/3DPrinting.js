document.body.style.zoom = "100%";
    
    document.addEventListener('DOMContentLoaded', () => {
        const genericButton = document.querySelector('button');
        if (genericButton) {
            genericButton.addEventListener('click', () => {
                console.log('Generic button clicked!');
            });
        }
    });

function selectMaterial(material) {
        const input = document.getElementById("selectMaterial");
  if (input) input.value = material;
    }

function selectColour(colour) {
        const input = document.getElementById("selectColour");
  if (input) input.value = colour;
    }

function selectModel(model) {
        const input = document.getElementById("selectModel");
  if (input) input.value = model;
    }

    function openSlider(element) {
        let currentIndex = parseInt(element.dataset.currentIndex || 0);
        let images = element.querySelectorAll('.Modelimg img');

        images.forEach(img => img.style.display = 'none');
        if (images.length > 0) {
            images[currentIndex].style.display = 'block';
            selectModel(images[currentIndex].alt);
        }
    }

    function changeImage(step, event) {
        event.stopPropagation();
        let gridItem = event.target.closest('.grid-item');
        let images = gridItem.querySelectorAll('.Modelimg img');
        let currentIndex = parseInt(gridItem.dataset.currentIndex || 0);

        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + step + images.length) % images.length;
        images[currentIndex].style.display = 'block';

        gridItem.dataset.currentIndex = currentIndex;
        selectModel(images[currentIndex].alt);
    }

    const descriptionHTML = `
        <ul class="description">
            <li>
                <button class="Modelprev" onclick="changeImage(-1, event)">&#10094;</button>
                <button class="Modelnext" onclick="changeImage(1, event)">&#10095;</button>
            </li>
            <li class="colourSelection">
                <button onclick="selectColour('Pink')" style="background-color: pink;"></button>
                <button onclick="selectColour('Blue')" style="background-color: blue;"></button>
                <button onclick="selectColour('Orange')" style="background-color: orange;"></button>
                <button onclick="selectColour('Yellow')" style="background-color: yellow;"></button>
                <button onclick="selectColour('Black')" style="background-color: black;"></button>
                <button onclick="selectColour('White')" style="background-color: white;"></button>
                <button onclick="selectColour('Grey')" style="background-color: grey;"></button>
                <button onclick="selectColour('Custom')" style="width: 60px; position: relative; bottom: 10px;">
                    <p>Custom</p>
                </button>
            </li>
            <li class="materialSelection">
                <button onclick="selectMaterial('PLA Basic')">PLA Basic</button>
                <button onclick="selectMaterial('PLA Matte')">PLA Matte</button>
                <button onclick="selectMaterial('PLA Silk')">PLA Silk</button>
                <button onclick="selectMaterial('PLA Tough')">PLA Tough</button>
                <button onclick="selectMaterial('PETG-CF')">PETG-CF</button>
                <button onclick="selectMaterial('PETG-GF')">PETG-GF</button>
                <button onclick="selectMaterial('TPU 95A')">TPU 95A</button>
                <button onclick="selectMaterial('ABS')">ABS</button>
                <button onclick="selectMaterial('ASA')">ASA</button>
                <button onclick="selectMaterial('PAHT-CF')">PAHT-CF</button>
                <button onclick="selectMaterial('Custom')">Custom</button>
            </li>
        </ul>
        `;

    const descriptionHTMLNoPrevNext = `
        <ul class="description">
            <li class="colourSelection">
                <button onclick="selectColour('Pink')" style="background-color: pink;"></button>
                <button onclick="selectColour('Blue')" style="background-color: blue;"></button>
                <button onclick="selectColour('Orange')" style="background-color: orange;"></button>
                <button onclick="selectColour('Yellow')" style="background-color: yellow;"></button>
                <button onclick="selectColour('Black')" style="background-color: black;"></button>
                <button onclick="selectColour('White')" style="background-color: white;"></button>
                <button onclick="selectColour('Grey')" style="background-color: grey;"></button>
                <button onclick="selectColour('Custom')" style="width: 60px; position: relative; bottom: 10px;">
                    <p>Custom</p>
                </button>
            </li>
            <li class="materialSelection">
                <button onclick="selectMaterial('PLA Basic')">PLA Basic</button>
                <button onclick="selectMaterial('PLA Matte')">PLA Matte</button>
                <button onclick="selectMaterial('PLA Silk')">PLA Silk</button>
                <button onclick="selectMaterial('PLA Tough')">PLA Tough</button>
                <button onclick="selectMaterial('PETG-CF')">PETG-CF</button>
                <button onclick="selectMaterial('PETG-GF')">PETG-GF</button>
                <button onclick="selectMaterial('TPU 95A')">TPU 95A</button>
                <button onclick="selectMaterial('ABS')">ABS</button>
                <button onclick="selectMaterial('ASA')">ASA</button>
                <button onclick="selectMaterial('PAHT-CF')">PAHT-CF</button>
                <button onclick="selectMaterial('Custom')">Custom</button>
            </li>
        </ul>
        `;

    document.querySelectorAll(".descriptionContainer").forEach(container => {
        container.innerHTML = descriptionHTML;
    });

    document.querySelectorAll(".descriptionContainerNoPrevNext").forEach(container => {
        container.innerHTML = descriptionHTMLNoPrevNext;
    });