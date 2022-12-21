const body = document.getElementById("body");
const titleName = document.createElement("h1");
titleName.className = "title"
titleName.innerText = "TrybeTrip - Agência de Viagens";
body.appendChild(titleName);

const elementMain = document.createElement("main");
elementMain.className = "main-content";
body.appendChild(elementMain);

const elementSectionCenter = document.createElement("section");
elementSectionCenter.className = "center-content";
elementMain.appendChild(elementSectionCenter);

const paragraph = document.createElement("p");
paragraph.innerHTML = "Bem vindos e boas viagens!";
paragraph.className = "title";
elementSectionCenter.appendChild(paragraph);

const elementSectionLeft = document.createElement("section");
elementSectionLeft.className = "left-content";
elementMain.appendChild(elementSectionLeft);

const elementSectionRight = document.createElement("section");
elementSectionRight.className = "right-content";
elementMain.appendChild(elementSectionRight);

const smallImage = document.createElement("img");
smallImage.className = "small-image";
smallImage.src = "https://picsum.photos/200";
elementSectionLeft.appendChild(smallImage);

const elementUl = document.createElement("ul");
elementSectionRight.appendChild(elementUl);
const arrayNumbers = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"]
for (let index of arrayNumbers) {
    const elementLi = document.createElement("li");
    elementLi.innerText = index;
    elementUl.appendChild(elementLi);
}


for (index = 1; index <= 3; index += 1) {
    const tagsH3 = document.createElement("h3");
    tagsH3.innerText = `Férias - ${index}`;
    tagsH3.className = "description";
    elementMain.appendChild(tagsH3);
}

elementMain.removeChild(elementSectionLeft);

const sectionContentRight = document.getElementsByClassName("right-content")[0];
    sectionContentRight.style.marginRight = "auto";

elementMain.style.backgroundColor = "green";

const ul = document.getElementsByTagName("ul")[0]
ul.lastChild.remove();
ul.lastChild.remove();



