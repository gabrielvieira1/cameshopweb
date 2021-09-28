import api from './api'

function cadastrarProduto(object){
    api.post("/items", object);
}

export{
    cadastrarProduto
}