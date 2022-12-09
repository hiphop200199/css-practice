document.addEventListener("DOMContentLoaded", () => {
    let mouse = document.querySelector(".cursor");
    /*window.addEventListener("mousemove",function(e){ 從瀏覽器在移動滑鼠的時候觀察座標之類的資料
        console.log(e);
    })*/
    window.addEventListener("mousemove", cursor);


    function cursor(e) {   //e表示事件發生時，得到的所有資訊

        mouse.style.top = e.pageY + "px"; //把y座標設成滑鼠移動時，游標中的y座標
        mouse.style.left = e.pageX + "px";//把x座標設成滑鼠移動時，游標中的x座標
    };
});