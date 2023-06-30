const result = () => {
    //alert("esta es la respuesta ");
    const response1 = "A la distancia en km entre la tierra y el sol."
    const response2 = "Aproximadamente 9 billones de km."
    
    const prueba = document.getElementById("resp");
prueba.innerHTML =`las respuestas son: </br> </br>${response1}</br> ${response2}`;
};



    const btnO = document.getElementById("btnOne");
    btnO.addEventListener("click", result)
