//Este es el archivo con la lógica de la calculadora

const myScreen = document.getElementById('screen')
const myButtons = document.querySelectorAll('.button')

//Al emplear query.SelectorAll se nos crea un array y podemos hacer un forEach en los botones.
myButtons.forEach( btn => {
    btn.addEventListener('click', () => {
        const pushButton = btn.textContent
        
        /// Para borrar lo que haya en el screen usando AC
        if(btn.id === "ac"){
            myScreen.textContent = "0";
            return;
        }

        //Esta condición nos permite borrar numéros de la calculadora
        if(btn.id === "delete"){
            if(myScreen.textContent.length === 1){
                myScreen.textContent ="0" ;
            } else {myScreen.textContent = myScreen.textContent.slice(0, -1);
            }
            return;
        }
        
        //aquí tenemos que utilizar el método try-catch para evaluar 
        if(btn.id === "result"){
            try {myScreen.textContent = eval(myScreen.textContent);
            return;
             } catch { myScreen.textContent ="ERROR";
            return;
             }  
        }


        if(myScreen.textContent === "0"){    
            myScreen.textContent = '' + pushButton;
        } else {
            myScreen.textContent += btn.textContent;
        } 
    })
})




