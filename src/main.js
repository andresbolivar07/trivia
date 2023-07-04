const result = () => {
    const response1 = "A la distancia en km entre la tierra y el sol."
    const response2 = "Aproximadamente 9 billones de km."
    const response3 = "Jupiter."
    

const responseQ = document.getElementById("resp");
responseQ.innerHTML =`las respuestas son: </br> </br>${response1}</br> ${response2} </br> ${response3}`;
};
    const btnO = document.getElementById("btnOne");
    btnO.addEventListener("click", result)
    
const HidenShow = () => {
    let name = document.getElementById("nameUser").value;
    localStorage.setItem("user",name);
    const InitialHiden = document.getElementById("initial");
    InitialHiden.style.display = "none";   
    
    const hidenDiv = document.getElementById("backgroundQuestion");
    hidenDiv.style.display = "block";

    const callName = document.getElementById("userName");
    callName.innerHTML = `Bienvenido ${localStorage.getItem("user")}.`;
}

const btnInitial = document.getElementById("buttonInitial");
btnInitial.addEventListener("click", HidenShow);







