import { obtenerBusquedaPRO } from "../request.js";
import { createCards } from "../createCards.js";
const busqueda = window.location.search;

obtenerBusquedaPRO(busqueda).then((data) => {
  const containerCards = document.querySelector("#container-card");
  data.forEach((e) => {
    containerCards.innerHTML += createCards(e);
  });
});
