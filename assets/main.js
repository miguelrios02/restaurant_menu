const allMenu = [
  {
    id: 0,
    name: "Bocadillos de Pollo con miel",
    category: "Entradas",
    price: 15000,
    description:
      "Gran plato de entrada lleno de bocadillos con un delicioso pollo desmechado",
    urlImage: "./assets/img/entradaBocadillosDePolloConMole.jpg",
    isActiv: false,
  },
  {
    id: 1,
    category: "Entradas",
    name: "Montaditos salteados de jitomates",
    price: 10000,
    description:
      "Delicioso plato de de montadillos en salsa de ajitomate especial de la casa con una pisca de sal",
    urlImage: "./assets/img/entradaMontaditosDeSalteadoDeJitomates.jpg",
    isActiv: false,
  },
  {
    id: 2,
    category: "Entradas",
    name: "Palillos de berenjena en salsa agridulce",
    price: 16000,
    description:
      "Los palillos son una extraordinaria combinacion entre la berenjena y la salsa agridulce",
    urlImage: "./assets/img/entradaPalillosDeBerenjenaEnSalsaAgridulce.jpg",
    isActiv: false,
  },
  {
    id: 3,
    category: "Fuertes",
    name: "Arroz atollado",
    price: 35000,
    description:
      "Las raices atolladas contienen papa de la mejor calidad con un arroz amarillo",
    urlImage: "./assets/img/rice_atollado.jpg",
    isActiv: false,
  },
  {
    id: 4,
    category: "Fuertes",
    name: "Arroz mariscal de coco",
    price: 33000,
    description:
      "este arroz contiene una gran variedad de mariscos convinados con coco",
    urlImage: "./assets/img/arroz_mariscos_coco.jpg",
    isActiv: false,
  },
  {
    id: 5,
    category: "Fuertes",
    name: "Arroz chino colombiano",
    price: 29000,
    description:
      "Especial arroz chino de la casa con una gran variedad de carnes",
    urlImage: "./assets/img/arroz_chino_colombiano-1.jpg",
    isActiv: false,
  },
  {
    id: 6,
    category: "Fuertes",
    name: "Ajiaco bogotano",
    price: 40000,
    description:
      "Delicioso ajiaco con papas, carne desmechada de pollo y mazorca tierna",
    urlImage: "./assets/img/ajiaco_bogotano.jpg",
    isActiv: false,
  },
  {
    id: 7,
    category: "Bebidas",
    name: "Piña colada",
    price: 6000,
    description: "bebida fria con una cantidad considerable de piña",
    urlImage: "./assets/img/piña-colada.jpg",
    isActiv: false,
  },
  {
    id: 8,
    category: "Bebidas",
    name: "coctel",
    price: 8000,
    description: "este cotel contiene esta hecho a base de Vodka limon y sal",
    urlImage: "./assets/img/coctel.jpg",
    isActiv: false,
  },
  {
    id: 9,
    category: "Bebidas",
    name: "Guanche",
    price: 9000,
    description: "bebida con miel 100% natural, notas de roble con ron añejo",
    urlImage: "./assets/img/guanche.jpg",
    isActiv: false,
  },
  {
    id: 10,
    category: "Bebidas",
    name: "agua de limon",
    price: 5500,
    description: "bebida fria de a base de limon endulsada con stevia",
    urlImage: "./assets/img/aguaLimon.jpg",
    isActiv: false,
  },
  {
    id: 11,
    category: "ParaCompartir",
    name: "Provo Argentino",
    price: 16500,
    description: "rebanadas pequeñas de pan con queso y hierbas ",
    urlImage: "./assets/img/ParaComparitrArgentina_provo.jpg",
    isActiv: false,
  },
  {
    id: 12,
    category: "ParaCompartir",
    name: "Pin en Sandwich",
    price: 14300,
    description: "sandwich de jamon con queso, lechuga y tomate en chuzos",
    urlImage: "./assets/img/ParaCompartir_pinEnSandwich.jpg",
    isActiv: false,
  },
  {
    id: 13,
    category: "ParaCompartir",
    name: "Tartaletas saladas variadas",
    price: 11600,
    description:
      "Pastel pequeño salado elaborado del mismo modo que una tarta pero para consumo individual",
    urlImage:
      "./assets/img/ParaCompartir_tartaletas-saladas-variadas-fiestas-H.jpg",
    isActiv: false,
  },
  {
    id: 15,
    category: "ParaCompartir",
    name: "Recetas saladas",
    price: 19500,
    description: "variedad de galletas saladas con huvas y salsa de la casa ",
    urlImage: "./assets/img/ParaCompartirPin_RecetasSaladas.jpg",
    isActiv: false,
  },
];
document.addEventListener("DOMContentLoaded", function () {
  handleMixtup();
});
window.addEventListener("load", function () {
  const loading = this.document.querySelector(".loading");

  setTimeout(() => {
    loading.style.display = "none";
  }, 20);
});
const contentCartShopItems = document.querySelector(".contentMenuShop__items");
const productos = document.querySelector(".productos");
const contentCartShopTotal = document.querySelector(".contentMenuShop__total");
const icontCart = document.querySelector(".bag");
const contentMenuShop = document.querySelector(".contentMenuShop");
const countBag = document.querySelector(".count__bag");
const navbarIcons = document.querySelector(".navbar__icons");
const objMenuTobuy = {};
let mixitupState = null;

function handleMixtup() {
  mixer = mixitup(".productos", {
    selectors: {
      target: ".mixMenu",
    },
    animation: {
      duration: 0,
      nudge: false,
      reverseOut: false,
      effects: "fade scale(0.45) translateY(69%)",
      queue: false,
    },
  });
}
function addfood(idFood) {
  const currentfood = allMenu.find((oneFood) => oneFood.id == idFood);
  objMenuTobuy[currentfood.id].quantity++;
}

function deletefood(idFood) {
  const op = confirm("seguro que quieres eliminar?");
  if (op) delete objMenuTobuy[idFood];
}
function countFoods() {
  const arrayMenuToBuy = Object.values(objMenuTobuy);
  let suma = arrayMenuToBuy.reduce((acum, curr) => {
    acum += curr.quantity;
    return acum;
  }, 0);
  countBag.textContent = suma;
}
function printTotal() {
  const arrayMenuToBuy = Object.values(objMenuTobuy);

  if (!arrayMenuToBuy.length) {
    return (contentCartShopTotal.innerHTML = `<div class="menu__item">
  <h3>0 item</h3>
  <h3>$0.00</h3>
  </div>`);
  } else {
    let total = arrayMenuToBuy.reduce((acum, curr) => {
      const subtotal = curr.price * curr.quantity;
      return acum + subtotal;
    }, 0);
    let suma = arrayMenuToBuy.reduce((acum, curr) => {
      acum += curr.quantity;
      return acum;
    }, 0);
    contentCartShopTotal.innerHTML = `<div class="menu__item">
    <h3> ${suma} item</h3>
    <h3>${numberToCurrency(total)}</h3>
</div>
`;
  }
}
function numberToCurrency(value) {
  return new Intl.NumberFormat("es-co", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}
function printfood() {
  let html = "";
  allMenu.forEach(
    ({ id, category, name, price, description, urlImage, isActiv }) => {
      const isActivDescription = isActiv
        ? `<div class="food__body">
            <p class="food__price"><strong>${numberToCurrency(
              price
            )}</strong></p> 
          </div>
  <h3>${description}</h3>`
        : ``;
      html += `
    <div class="mixMenu ${category}" >
        <div class="food__img">
            <img src="${urlImage}" alt="${name}">
        </div>

        <div class="food__descripcion i">
        <h3>${name}</h3>
            
            
            <div class="food__options">
               <h4 class="show_description" id="${id}" > VER MAS 
               <i class='bx bx-chevron-down'></i>
               </h4>
               
            </div>
            <div class="ver__mas">
            ${isActivDescription}
            <button class="btn__add button__plus" id="${id}">+</button>
            </div>
        </div>   
    </div>`;
      productos.innerHTML = html;
    }
  );
}

function printfoodToBuy() {
  let html = "";
  const arrayMenuToBuy = Object.values(objMenuTobuy);
  if (arrayMenuToBuy.length > 0) {
    arrayMenuToBuy.forEach(
      ({ id, name, price, description, quantity, urlImage }) => {
        html += `
    <div class="mixMenu food__menuToBuy">
        <div class="food__img food__img-toBuy">
            <img src="${urlImage}" alt="${name}">
        </div>
        <div class="cart__container">
            
            <h3>${name}</h3>
            <div class="toBuy__description-price">
                <p>description: ${description}|</p>
                <p class="toBuy__price"><span>${numberToCurrency(
                  price
                )}</span></p>
            </div>
            <p class="cart__subtotal">Subtotal:${numberToCurrency(
              price * quantity
            )}</p>
            <div class="food__options">
                <button class="btn btn__rest" id="${id}">-</button>
                <div class="units__toBuy">  ${quantity} units</div>
                <button class="btn btn__add" id="${id}">+</button>
                <i class='bx bx-trash-alt btn__del' id="${id}"></i>
            </div>
        </div>   
    </div>
    `;
      }
    );
  } else {
    html += `
    <div class="cart__empty">
      <img src="assets/img/empty-cart.png" alt="empty cart">
      <h2>you don't have any order yet</h2>
      <p>You can add items to your cart by clicking on the "+" button on the home.</p>
    </div>`;
  }
  contentCartShopItems.innerHTML = html;
  printTotal();
  countFoods();
}
productos.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn__add")) {
    const idfood = Number(e.target.id);
    const currentfood = allMenu.find((oneFood) => oneFood.id == idfood);
    if (objMenuTobuy[currentfood.id]) {
      addfood(idfood);
    } else {
      objMenuTobuy[currentfood.id] = { ...currentfood };
      objMenuTobuy[currentfood.id].quantity = 1;
    }
    printfoodToBuy();
  }
  if (e.target.classList.contains("show_description")) {
    const iditem = Number(e.target.id);
    const menuIndex = allMenu.findIndex((menu) => menu.id == iditem);
    if (menuIndex !== -1) {
      if (allMenu[menuIndex].isActiv) {
        allMenu[menuIndex].isActiv = false;
      } else {
        allMenu[menuIndex].isActiv = true;
      }
    }
    printfood();
    mixitupState = mixer.getState();
    mixer.destroy();
    handleMixtup();
    const activeFilterSelector = mixitupState.activeFilter.selector;
    mixer.filter(activeFilterSelector);
  }
});
contentCartShopItems.addEventListener("click", (m) => {
  if (m.target.classList.contains("btn__add")) {
    const idFood = Number(m.target.id);
    addfood(idFood);
  }
  if (m.target.classList.contains("btn__rest")) {
    const idFood = Number(m.target.id);
    if (objMenuTobuy[idFood].quantity === 1) {
      alert("quieres eliminar");
      deletefood(idFood);
    } else {
      objMenuTobuy[idFood].quantity--;
    }
  }
  if (m.target.classList.contains("btn__del")) {
    const idFood = Number(m.target.id);
    deletefood(idFood);
  }
  printfoodToBuy();
});
icontCart.addEventListener("click", () => {
  contentMenuShop.classList.toggle("contentCartShop__show");
  printfoodToBuy();
});
printfood();
printTotal();
