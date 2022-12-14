//如果server需要資料就用cookie，如果只有使用者要存那就localstorage

let darkMode=localStorage.getItem("darkMode");
const darkModeToggle=document.querySelector("#btn-tgl");
const enableDarkMode=()=>{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode","enabled");
}
const disableDarkMode=()=>{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode",null);
}
darkModeToggle.addEventListener("click",()=>{
    darkMode=localStorage.getItem("darkMode");
    if(darkMode!=="enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
});