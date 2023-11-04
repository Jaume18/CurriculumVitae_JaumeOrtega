var menu_visibole = false;
let menu = document.getElementById("nav");

function veiwMenu(){
    if(menu_visibole==false){
        menu.style.display = "block";
        menu_visibole=true;
    }else{

        menu.style.display = "none";
        menu_visibole=false;


    }
}

let links = document.querySelectorAll("nav a");

for(var x=0; x<links.length; x++){
    links[x].onClick = function(){
        menu.style.display = "none";
        menu_visibole = false;

    }
}