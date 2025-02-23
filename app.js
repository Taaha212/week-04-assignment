const thumbnailContainer = document.getElementById("thumbnail-container");
const backgroundImage = document.getElementById("background-image");


const images = [
  {
    src: "./Assets/Architecture-interior-one.jpg",
    alt: "I nice picture of a house from the outside",
  },
  {
    src: "./Assets/Architecture-interior-two.jpg",
    alt: "A nice picture of a bridge with a beautiful view",
  },
  {
    src:"./Assets/Architecture-interior-three.jpg" ,
    alt: "The interior of a good looking construction",
  },

  {
    src:"./Assets/Architecture-interior-four.jpg" ,
    alt: "The outside view of a huge  architecture ",
  },
  {
    src: "./Assets/Architecture-interior-five.jpg",
    alt: "I greate picture of a decorative kitchen",
  },
];


function createThumbnails() {
  

  for (let i = 0; i < images.length; i++) {
    
    const imgTag = document.createElement("img");

    
    
    imgTag.src = images[i].src;
    imgTag.alt = images[i].alt;
    imgTag.setAttribute("role","istitem");
    imgTag.setAttribute("aria-label",images[i].alt);

    
    imgTag.addEventListener("click", function () {
      
      createBackgroundImage(images[i]);
    });

    
    thumbnailContainer.appendChild(imgTag);
  }
}


function createBackgroundImage(currentImage) {
  backgroundImage.innerHTML = ""; 
  

  
  const bigImgTag = document.createElement("img");

  
  bigImgTag.src = currentImage.src;
  bigImgTag.alt = currentImage.alt;

  
  backgroundImage.appendChild(bigImgTag);
}


createThumbnails();