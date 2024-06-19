let pantalla = document.querySelector(".pantalla");
let botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click",()=>{
        let botonApretado = boton.textContent;

        if (boton.id ==="C"|| pantalla.textContent==="Error!") {
            pantalla.innerText = "0";
            return;
        }
        if (boton.id === "borrar" || pantalla.textContent==="Error!") {
            if (pantalla.textContent.length=== 1) {
                pantalla.textContent= "0"
            }else{
                pantalla.innerText=  pantalla.textContent.slice(0,-1)
            }
            return
        }
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent="Error!"
            }
            
            return
        }
        if (pantalla.textContent === "0") {
            pantalla.textContent = botonApretado;
        }else{
            pantalla.textContent += botonApretado;
        }
        
    })
});