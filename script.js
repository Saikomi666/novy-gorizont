const home = document.getElementById("home");

const formScreen = document.getElementById("formScreen");

const finalScreen = document.getElementById("finalScreen");

const form = document.getElementById("applicationForm");



/* =========================
   ОТКРЫТЬ АНКЕТУ
========================= */

function openForm() {

    home.classList.add("hidden");

    finalScreen.classList.add("hidden");

    formScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================
   ГЛАВНАЯ
========================= */

function goHome() {

    formScreen.classList.add("hidden");

    finalScreen.classList.add("hidden");

    home.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================
   ОТПРАВКА
========================= */

form.addEventListener("submit", function(event) {

    event.preventDefault();


    /*
        ПОКА НЕ ПОДКЛЮЧЕНА ПОЧТА.

        Здесь мы просто показываем
        финальную страницу.

        Formspree подключим следующим шагом.
    */


    formScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});