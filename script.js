let fileInput = document.getElementById("file-input");
let imageContainer = document.getElementById("images");
let numOfFiles = document.getElementById("num-of-files");

// console.log(fileInput, imageContainer, numOfFiles);

function preview() {
  imageContainer.innerHTML = "";
  numOfFiles.textContent = `${fileInput.files.length} Files Selected`;
  for (let i of fileInput.files) {
    let reader = new FileReader();
    let figure = document.createElement("figure");
    let figCaption = document.createElement("figcaption");
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "X";

    figCaption.innerText = i.name;
    figure.appendChild(removeBtn);
    figure.appendChild(figCaption);

    reader.onload = () => {
      let img = document.createElement("img");
      img.setAttribute("src", reader.result);
      figure.insertBefore(img, figCaption);
    };
    imageContainer.appendChild(figure);

    reader.readAsDataURL(i);
    //remove image
    removeBtn.addEventListener("click", function (e) {
      let removedItem = e.target.parentNode.classList.add("remove");
      source = document.querySelectorAll(".remove img")[0].getAttribute("src");
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    });
  }
}

fileInput.addEventListener("change", preview);
