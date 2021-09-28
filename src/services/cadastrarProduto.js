import api from './api'

function cadastrarProduto(object){
    const res = api.post("/items", object);
}

export{
    cadastrarProduto
}