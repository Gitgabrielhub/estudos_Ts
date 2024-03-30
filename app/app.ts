 import { negociacaoController } from "./controllers/negociacao-controller.js";

const controller = new negociacaoController();
const formulario = document.querySelector('.form');


formulario.addEventListener('submit', event=>{
    event.preventDefault();
    controller.adiciona();
}) 

