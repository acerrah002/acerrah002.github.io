
//This is a 2D array with 2 elemtns inside each item Image and Description this is scaleable just add another element and use the image and description as template
const classes = [
  {
    image: "/images/Randompc2 (1).jpeg",
    description: "Custom-built computers tailored for high performance.",
    link: "test.html"
  },
  {
    image: "/images/3dprinted (1).jpg",
    description: "3D Printing, prototyping and manufacturing",
    link: "test.html"
  },
  {
    image: "/images/computer_repair (1).jpg",
    description: "PC/Laptop Maintenance & Repair.",
    link: "test.html"
  },
  {
    image: "/images/fob_keys (1).jpg",
    description: "Precision key fob cloning for all models.",
    link: "test.html"
  },
  {
    image: "/images/esp32 (1).jpg",
    description: "Robotics projects for innovative automation solutions.",
    link: "test.html"
  }
];

let currentindex = 1;

//currentindex = (currentindex + 1) % classes.length; This goes forward
//currentindex = (currentindex + -1) % classes.length; This goes backward
const backbtn = document.getElementById("Backwards");
const forbtn = document.getElementById("Forwards");

const imgslide = document.getElementById("imageslide");
const beforeimg = document.getElementById("imageslideBefore");
const afterimg = document.getElementById("imageslideAfter");

const imgdesc = document.getElementById("imagedescription")

function imgfadanimation(){
    //Removes fade class to have a adding animation
    imgslide.classList.remove('fade');
    beforeimg.classList.remove('fade');
    afterimg.classList.remove('fade');
    //resets the tick so the animation can happen
    void imgslide.offsetWidth;
    void beforeimg.offsetWidth;
    void afterimg.offsetWidth;
    //Adds fade class for animation
    imgslide.classList.add('fade');
    beforeimg.classList.add('fade');
    afterimg.classList.add('fade');    
}

//updates the empty img element in html to be a index of the array
function updateImage() {
    imgfadanimation();

    const prevIndex = (currentindex - 1 + classes.length) % classes.length;
    const nextIndex = (currentindex + 1 + classes.length) % classes.length;

    beforeimg.src = classes[prevIndex].image;
    imgslide.src = classes[currentindex].image;
    imgdesc.textContent = classes[currentindex].description;
    afterimg.src = classes[nextIndex].image;

    // Make them clickable — center image + description share same link, sides use their own.
    imgslide.style.cursor = 'pointer';
    imgdesc.style.cursor = 'pointer';
    beforeimg.style.cursor = 'pointer';
    afterimg.style.cursor = 'pointer';

    imgslide.title = classes[currentindex].description;
    beforeimg.title = classes[prevIndex].description;
    afterimg.title = classes[nextIndex].description;

    // assign click handlers (overwrites any previous handler cleanly)
    imgslide.onclick = () => window.location.href = classes[currentindex].link;
    imgdesc.onclick  = () => window.location.href = classes[currentindex].link;
    beforeimg.onclick = () => window.location.href = classes[prevIndex].link;
    afterimg.onclick  = () => window.location.href = classes[nextIndex].link;
}
updateImage();
//adds a listener to check if the button was clicked
forbtn.addEventListener('click', () => {
    currentindex = (currentindex + 1 + classes.length) % classes.length;
    updateImage();
});

backbtn.addEventListener('click', () => {
    currentindex = (currentindex - 1 + classes.length) % classes.length;
    updateImage();
});