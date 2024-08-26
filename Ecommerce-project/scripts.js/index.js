const menuIcon=document.getElementById("menu-icon");


const menu=document.getElementById("menu");

menuIcon.addEventListener("click", ()=>{
    if(menu="hidden"){
        menu.classList.remove("hidden");
    }

    else{
        menu.classList.add("hidden");
    }
});


