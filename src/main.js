const resultAstronomy = () => {
    
    const response1User = document.querySelector('input[name="opcion"]:checked').id;
    const response2User = document.querySelector('input[name="opcion2"]:checked').id;
    const response3User = document.querySelector('input[name="opcion3"]:checked').id;

    const ansCorrect1 = "La respuesta correcta es = A la distancia en km entre la tierra y el sol (aproximadamente 150 millones de km).";
    const ansCorrect2 = "Aproximadamente 9 billones de km.";
    const ansCorrect3 = "Jupiter";
    
    let counterAstronomy = 0;
    

    if (response1User === "cbox3") {
        const correctAnswer = document.getElementById("resp");
        correctAnswer.innerHTML =` Acertaste! la respuesta correcta es : ${ansCorrect1}`;
        counterAstronomy++;
    }else{
        const falseAnswer = document.getElementById("resp");
        falseAnswer.innerHTML = `u.u Fallaste! la respuesta corresta es:  ${ansCorrect1}` 
    }

    if (response2User === "cbox5") {
        const answerCorrect2 = document.getElementById("resp2");
        answerCorrect2.innerHTML = `Acertaste!! La Respuesta correcta es : ${ansCorrect2}`;
        counterAstronomy++;
    }else{
        const answerFalse = document.getElementById("resp2");
        answerFalse.innerHTML = `Fallaste! la respuesta conrrecta es : ${ansCorrect2}`;
    }; 

    if (response3User === "cbox7") {
        const answerCorrect3 = document.getElementById("resp3");
        answerCorrect3.innerHTML = `Acertaste! La respuesta correcta es: ${ansCorrect3}`;
        counterAstronomy++;
    }else{
        const answerFalse3 = document.getElementById("resp3");
        answerFalse3.innerHTML = `Fallaste!! La respuesta correcta es: ${ansCorrect3}`;
    };

    const userWinAstronomy = `Felicidades!! Acertaste a todooo :) tu puntaje es 3`;
    const userLoseAstronomy = `Uu Te falto poco para ganar tu puntaje es ${counterAstronomy}`;

    
    const loseOrWin = document.getElementById("winAstronomy");
    loseOrWin.innerHTML = counterAstronomy > 2 ? userWinAstronomy : userLoseAstronomy;

    
    
};
    const btnResponseAstronomy = document.getElementById("btnAstronomy");
    btnResponseAstronomy.addEventListener("click", resultAstronomy);

const resultFood = () => {

    const response4User = document.querySelector('input[name="optionF1"]:checked').id;
    const response5User = document.querySelector('input[name="optionF2"]:checked').id;
    const response6User = document.querySelector('input[name="optionF3"]:checked').id;

    const ansCorrect4 = "Italia";
    const ansCorrect5 = "Arroz, agua, aceite y sal.";
    const ansCorrect6 = "Tortillas";

    let counterFood = 0;

    if (response4User === "cboxF1") {
        const answercorrect4 = document.getElementById("respF");
        answercorrect4.innerHTML = `Acertaste!!  La respuesta correcta es: ${ansCorrect4}`;
        counterFood++;
    }else{
        const answercorrect4 = document.getElementById("respF");
        answercorrect4.innerHTML = `Fallaste!!  La respuesta correcta es: ${ansCorrect4}`;
    };
    
    if (response5User === "cboxF6") {
        const answerCorrect5 = document.getElementById("respF2");
        answerCorrect5.innerHTML = `Acertaste!!  La respuesta correcta es: ${ansCorrect5}`;
        counterFood++;
    }else{
        const answerCorrect5 = document.getElementById("respF2");
        answerCorrect5.innerHTML = `Fallaste!!  La respuesta correcta es: ${ansCorrect5}`;
    };

    if (response6User === "cboxF9") {
        const answerCorrect6 = document.getElementById("respF3");
        answerCorrect6.innerHTML = `Acertaste!!  La respuesta correcta es: ${ansCorrect6}`;
        counterFood++;
    }else{
        const answerCorrect6 = document.getElementById("respF3");
        answerCorrect6.innerHTML = `Fallaste!!  La respuesta correcta es: ${ansCorrect6}`;
    };

    const userWin = `Felicidades!! Acertaste a todooo :) Tu puntaje es 3 `;
    const userLose = `Uu Te falto poco para ganar, Tu puntaje es ${counterFood} `;

    
    const winOrLose = document.getElementById("winFood");
    winOrLose.innerHTML = counterFood > 2 ? userWin : userLose;
};
const btnResponseFood = document.getElementById("btnFood");
btnResponseFood.addEventListener("click", resultFood);

    
const showAstronomy = () => {
    const username = document.getElementById("nameUser").value;
    if (username.length < 1) {
        alert("Por favor ingrese su nombre");
    }else{
        localStorage.setItem("user",username);

        const InitialHiden = document.getElementById("initial");
        InitialHiden.style.display = "none";   
        
        const mostrarAstro = document.getElementById("astronomy")
        mostrarAstro.style.display = "block";

        const callName = document.getElementById("userName");
        callName.innerHTML = `Bienvenido ${localStorage.getItem("user")}.`;

        const btnFinal = document.getElementById("btnReload");
        btnFinal.style.display = "block";

        const buttonSend = document.getElementById("btnSendAstronomy");
        buttonSend.style.display =  "block"
    }
}

const showFood = () => {
    const username = document.getElementById("nameUser").value;
    if (username.length < 1) {
        alert("Por favor ingrese su nombre");
    }else{
        localStorage.setItem("user",username);
        
        const InitialHiden = document.getElementById("initial");
        InitialHiden.style.display = "none";   
        
        const mostrarFood = document.getElementById("food")
        mostrarFood.style.display = "block";

        const callName = document.getElementById("userName");
        callName.innerHTML = `Bienvenido ${localStorage.getItem("user")}.`;

        const btnFinal = document.getElementById("btnReload");
        btnFinal.style.display = "block";

        const buttonSend = document.getElementById("btnSendFood");
        buttonSend.style.display =  "block"
    }
}

const btnAstronomy = document.getElementById("btnOpGa1");
btnAstronomy.addEventListener("click", showAstronomy);

const btnFood = document.getElementById("btnOpGa2");
btnFood.addEventListener("click", showFood);

const goToHome = () => {
    window.location.reload("index.html")
}
const btnHome = document.getElementById("btnF");
btnHome.addEventListener("click", goToHome);







