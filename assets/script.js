console.log("testing");

const fullSizeImageContainer = document.getElementById(
  "fullSizeImageContainer"
);
const thumbnailBar = document.getElementById("thumbnailBar");

let images = [
  {
    url: "https://images2.alphacoders.com/204/thumb-1920-204310.jpg",
    alt: "in the empereos name",
  },
  {
    url: "https://images2.alphacoders.com/227/thumb-1920-227602.jpg",
    alt: "an imperial dreadnaught",
  },
  {
    url: "https://images4.alphacoders.com/290/thumb-1920-290118.jpg",
    alt: "a squad of space marines",
  },
  {
    url: "https://images2.alphacoders.com/162/thumb-1920-162300.jpg",
    alt: "a tank at the forefront of battle",
  },
  {
    url: "https://images2.alphacoders.com/255/thumb-1920-255220.jpg",
    alt: "a solitary space marine",
  },
];

function addThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    imageElement.src = image.url;
    imageElement.alt = image.alt;
    imageElement.setAttribute("tabindex", 0);
    imageElement.addEventListener("click", function (event) {
      addFullSizeImage(image);
    });
    imageElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        addFullSizeImage(image);
      }
    });
    thumbnailBar.appendChild(imageElement);
  });
}

addThumbnails();

function addFullSizeImage(largeImage) {
  fullSizeImageContainer.innerHTML = "";
  const largeImageElement = document.createElement("img");
  largeImageElement.src = largeImage.url;
  largeImageElement.alt = largeImage.alt;
  fullSizeImageContainer.appendChild(largeImageElement);
}
