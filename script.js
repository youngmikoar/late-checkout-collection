const totalCartas = 20;

function abrirSobre(){

let cartas=document.getElementById("cartas");
let mensaje=document.getElementById("mensaje");

cartas.innerHTML=`

<img src="img/sobre.png" class="sobreAnimacion">

<h2>📦 Abriendo Late Checkout Pack...</h2>

<p>Rompiendo el sello...</p>

`;

mensaje.innerHTML="";

setTimeout(()=>{

cartas.innerHTML=`
<div class="abriendo">
<h2>✨ Revelando stickers...</h2>
</div>
`;

setTimeout(()=>{

cartas.innerHTML="";

let usadas=[];

while(usadas.length<3){

let n=Math.floor(Math.random()*totalCartas)+1;

if(!usadas.includes(n)){

usadas.push(n);

}

}

let titulo=document.createElement("h2");
titulo.innerText="✨ TU LATE CHECKOUT PACK ✨";
cartas.appendChild(titulo);

usadas.forEach((carta,index)=>{

setTimeout(()=>{

let img=document.createElement("img");

img.src="img/"+carta+".png";
img.classList.add("destello");

img.style.opacity="0";

cartas.appendChild(img);

setTimeout(()=>{
img.style.opacity="1";
img.style.transition=".4s";
},50);

},index*300);

});

setTimeout(()=>{

mensaje.innerHTML=`
✨ ¡Estas son tus figuritas! ✨
<br><br>

<b>${usadas.join(" • ")}</b>

<br><br>

Compartilo en historias y etiquetá a

<br><br>

<b>@youngmikoar</b>
`;

},1000);

cartas.scrollIntoView({
behavior:"smooth"
});

},800);

},1200);

}


// GALERÍA

const galeria = document.getElementById("cardGallery");

if (galeria) {

    for (let i = 1; i <= totalCartas; i++) {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-image">
                <img src="img/${i}.png" alt="Sticker ${i}">
            </div>

            <h3 class="card-title">
                Sticker #${i}
            </h3>
        `;

        galeria.appendChild(card);
    }
}

