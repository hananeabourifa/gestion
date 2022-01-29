document.getElementsByClassName("add")[0].children[0].addEventListener("click",ajouter)

afficher();
function  ajouter(){
    var div=document.getElementsByClassName(" add-div")[0].textContent;
    window.localStorage.setItem(indice(),div);
    document.getElementsByClassName(" add-div")[0].textContent="";
    window.location.href=""; 
}
function indice(){
    return localStorage.length+1;
}
function afficher(){   
    for (var i = 1; i <=localStorage.length; i++) { 
        document.getElementsByTagName("tbody")[0].innerHTML+='<tr><td>'+i+'</td><td>'+localStorage.getItem(i)+'</td><td><i class="fas fa-trash-alt" onclick="supprimer(this)"></i></td></tr>';
    }

}
function supprimer(el){
    var y=el.parentElement.parentElement.children[0].textContent;
    if(confirm("are you sur!!!!")){  
    localStorage.removeItem(y);
    window.location.href="";   
}
}