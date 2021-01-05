/*---BURGERMENU----*/
window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menu").addEventListener("click", onClickMenu);
    document.querySelector("#splash_intro").classList.add("absolute");
    document.querySelector("#splash_intro").classList.add("splash_ani");
    document.querySelector("#splash_intro").addEventListener("animationend", splashEnd);

}

/*--FUNCTION TIL BURGERMENU---*/
function onClickMenu() {
    console.log("onClickMenu");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu_img").classList.toggle("change_img");

    document.getElementById("burger1").classList.toggle("change1");
    document.getElementById("burger2").classList.toggle("change1");
    document.getElementById("burger3").classList.toggle("change1");
    document.getElementById("burger4").classList.toggle("change1");
}

function splashEnd() {
    console.log ("splashEnd");
    document.querySelector("#splash_intro").classList.remove("absolute");
    document.querySelector("#splash_intro").classList.add("sticky");
}





