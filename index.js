let toggle=0;
function handleClick(){
    let element=document.getElementsByClassName("hamburger-menu")[0];
    if(toggle){
        element.style.display="none";
        toggle=0;
    }else{
        element.style.display="block";
        toggle=1;
    }
}