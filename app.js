console.log("testing");

const fullSizeImageContainer = document.getElementById(
  "fullSizeImageContainer"
);
const thumbnailBar = document.getElementById("thumbnailBar");

let images = [
  {
    src: "./assets/Emperor-1600.webp",
    srcset:
      "./assets/Emperor-400.webp 400w, ./assets/Emperor-800.webp 800w, ./assets/Emperor-1200.webp 1200w, ./assets/Emperor-1600.webp 1600w",
    alt: "in the emperors name",
    ariaLabel:
      "My armor is contemp, my shield is disgust, my sword is hatred, in the emperors name let none survive",
  },
  {
    src: "./assets/Dread-1600.webp",
    srcset:
      "./assets/Dread-400.webp 400w, ./assets/Dread-800.webp 800w, ./assets/Dread-1200.webp 1200w, ./assets/Dread-1600.webp 1600w",
    alt: "dreadnaught",
    ariaLabel: "an adeptus astartes dreadnaught in battle on a snowy planet",
  },
  {
    src: "./assets/Marine-1600.webp",
    srcset:
      "./assets/Marine-400.webp 400w, ./assets/Marine-800.webp 800w, ./assets/Marine-1200.webp 1200w, ./assets/Marine-1600.webp 1600w",
    alt: "3 space marines",
    ariaLabel:
      "3 space marines, the middle in front, with a glowing aura around all 3",
  },
  {
    src: "./assets/Tank-1600.webp",
    srcset:
      "./assets/Tank-400.webp 400w, ./assets/Tank-800.webp 800w, ./assets/Tank-1200.webp 1200w, ./assets/Tank-1600.webp 1600w",
    alt: "a tank",
    ariaLabel:
      "an imperial Stormblade in battle with an imperial titan in the background",
  },
  {
    src: "./assets/Marine3-1600.webp",
    srcset:
      "./assets/Marine3-400.webp 400w, ./assets/Marine3-800.webp 800w, ./assets/Marine3-1200.webp 1200w, ./assets/Marine3-1600.webp 1600w",
    alt: "a space marine",
    ariaLabel:
      "a spacemarine with glowing red eyes standing ready in the rain, fire in the background",
  },
];

function addThumbnails() {
  images.forEach(function (image) {
    let imageElement = document.createElement("img");
    imageElement.src = image.src;
    imageElement.srcset = image.srcset;
    imageElement.alt = image.alt;
    imageElement.ariaLabel = image.ariaLabel;
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
  largeImageElement.src = largeImage.src;
  largeImageElement.srcset = largeImage.srcset;
  largeImageElement.alt = largeImage.alt;
  fullSizeImageContainer.appendChild(largeImageElement);
}
