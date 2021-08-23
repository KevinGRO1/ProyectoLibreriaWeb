// var formularioLogin = document.getElementById("formulario_login");


// formulario_Registro.addEventListener('submit', function(event){
//     if(!localStorage.getItem('cliente_Logueado')){
//         localStorage.setItem('cliente_Logueado',JSON.stringify(cliente));
//     }else{
//         localStorage.clear();
//         localStorage.setItem('cliente_Logueado',JSON.stringify(cliente));
//     }     
// });

(function() {
    'use strict';
    window.addEventListener('load', function() {    
          
        formulario_Registro.addEventListener('submit', function(event){
            var numero_telefono = document.getElementById('telefono').value
            if(numero_telefono.length < 9){
                event.preventDefault();
                event.stopPropagation();
                console.log(formulario_Registro);
                alert('Ingrese un numero de 9 digitos')
            }
            
            
            
        }, false);       
    }, false);
  })();

  

