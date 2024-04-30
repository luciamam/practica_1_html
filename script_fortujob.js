let opcion_formulario= document.getElementById('opcion_formulario')

opcion_formulario.addEventListener( "change",() =>{
    if (opcion_formulario.value=="busco_trabajo"){
        FormBuscarTrabajo.style.display="flex";
        FormularioPersonal.style.display="none";
        FormularioSuscribirse.style.display="none"


        
       

    }
    if (opcion_formulario.value=="busco_personal"){
        FormBuscarTrabajo.style.display="none";
        FormularioPersonal.style.display="flex";
        FormularioSuscribirse.style.display="none"


        
       

    }
    if (opcion_formulario.value=="Quiero_suscribirme"){
        FormBuscarTrabajo.style.display="none";
        FormularioPersonal.style.display="none";
        FormularioSuscribirse.style.display="flex"


        
       

    }

   
   

})