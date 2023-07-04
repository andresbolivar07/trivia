const result = () => {
    
    const response1User = document.querySelector('input[name="opcion"]:checked').id;
    const response2User = document.querySelector('input[name="opcion2"]:checked').id;
    const response3User = document.querySelector('input[name="opcion3"]:checked').id;

    const ansCorrect1 = "La respuesta correcta es = A la distancia en km entre la tierra y el sol (aproximadamente 150 millones de km).";
    const ansCorrect2 = "Aproximadamente 9 billones de km.";
    const ansCorrect3 = "Jupiter";

    if (response1User === "cbox3") {

        const correctAnswer = document.getElementById("resp");
        correctAnswer.innerHTML =` Acertaste! la respuesta correcta es : ${ansCorrect1}`;
    }else{
        const falseAnswer = document.getElementById("resp");
        falseAnswer.innerHTML = `u.u Fallaste! la respuesta corresta es:  ${ansCorrect1}` 
    }

    if (response2User === "cbox5") {
        const answerCorrect2 = document.getElementById("resp2");
        answerCorrect2.innerHTML = `Acertaste!! La Respuesta correcta es : ${ansCorrect2}`;
    }else{
        const answerFalse = document.getElementById("resp2");
        answerFalse.innerHTML = `Fallaste! la respuesta conrrecta es : ${ansCorrect2}`;
    }; 

    if (response3User === "cbox7") {
        const answerCorrect3 = document.getElementById("resp3");
        answerCorrect3.innerHTML = `Acertaste! La respuesta correcta es: ${ansCorrect3}`;
    }else{
        const answerFalse3 = document.getElementById("resp3");
        answerFalse3.innerHTML = `Fallaste!! La respuesta correcta es: ${ansCorrect3}`;
    };
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







