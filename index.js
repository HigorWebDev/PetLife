var elemetosDuvida = document.querySelectorAll(".duvida")

elemetosDuvida.forEach(function(duvida){
    duvida.addEventListener("click",function(){
        duvida.classList.toggle("ativa")
    })
})