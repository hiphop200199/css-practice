//如果server需要資料就用cookie，如果只有使用者要存那就localstorage
//記得使用者當初選的設定
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

if(darkMode==="enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click",()=>{
    darkMode=localStorage.getItem("darkMode");
    if(darkMode!=="enabled"){
        enableDarkMode();
      
    }else{
        disableDarkMode();
       

    }
});