const result = () => {
    //alert("esta es la respuesta ");
    const response1 = "A la distancia en km entre la tierra y el sol."
    const response2 = "Aproximadamente 9 billones de km."
    const response3 = "Jupiter."
    
    const prueba = document.getElementById("resp");
prueba.innerHTML =`las respuestas son: </br> </br>${response1}</br> ${response2} </br> ${response3}`;
};
    const btnO = document.getElementById("btnOne");
    btnO.addEventListener("click", result)

const HidenShow = () => {
    const InitialHiden = document.getElementById("initial");
    InitialHiden.style.display = "none";   
    
    const hidenDiv = document.getElementById("backgroundQuestion");
    hidenDiv.style.display = "block";
}

const btnInitial = document.getElementById("buttonInitial");
    btnInitial.addEventListener("click", HidenShow);

