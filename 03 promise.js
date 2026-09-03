function prepararPedido(){
    return new Promise((resolve, reject) =>{
        temPao = false;
        setTimeout(()=>{
            if(temPao){
                resolve("Hamburguer pronto!");
            }else{
                reject(new Error("Estamos sem pão😓"))
            }
        }, 2000)
    })
}

prepararPedido().then((resultado)=>{
    console.log(resultado);

}).catch((erro) =>{
    console.error(erro.message)
});