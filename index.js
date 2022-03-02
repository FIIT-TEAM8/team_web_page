winter_active = true

window.onload = () => {
    
    document.getElementById("btn-winter-semester").addEventListener("click", () => {
        if(winter_active != true){
            winter_active = true

            document.getElementById("winter-semester").style.display = "";
            document.getElementById("btn-winter-semester").className = "right-flex btn-semester-active";

            document.getElementById("summer-semester").style.display = "none";
            document.getElementById("btn-summer-semester").className = "right-flex btn-semester-notactive";
            }
    });

    document.getElementById("btn-summer-semester").addEventListener("click", () => {
        if(winter_active == true){
            winter_active = false

            document.getElementById("summer-semester").style.display = "";
            document.getElementById("btn-summer-semester").className = "right-flex btn-semester-active";

            document.getElementById("winter-semester").style.display = "none";
            document.getElementById("btn-winter-semester").className = "right-flex btn-semester-notactive";
        }
    });
}
