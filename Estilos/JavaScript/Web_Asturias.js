var control = false;
function menu(){
  
  
  if(control== false){
  var salida = "<ul id=\"menus\"";
  salida +=">";
  salida +="<li";
  salida +=">";
  salida +="<a href=\"google.es\"";
  salida +=">";
  salida +="Inicio";
  salida +="</a";
  salida +=">";
  salida +="</li";
  salida +=">";
  salida +="<li";
  salida +=">";
  salida +="<a href=\"google.es\"";
  salida +=">";
  salida +="Descarga la app";
  salida +="</a";
  salida +=">";
  salida +="</li";
  salida +=">";
  salida +="<li";
  salida +=">";
  salida +="<a href=\"google.es\"";
  salida +=">";
  salida +="Comparte con amigos";
  salida +="</a";
  salida +=">";
  salida +="</li";
  salida +=">";
  salida +="<li";
  salida +=">";
  salida +="<a href=\"google.es\"";
  salida +=">";
  salida +="Invita a infitriones";
  salida +="</a";
  salida +=">";
  salida +="</li";
  salida +=">";
  salida +="</ul";
  salida +=">";
    document.getElementById("caja_menu").innerHTML=salida;
   
    control=true;
}
  
else{
  document.getElementById("caja_menu").innerHTML="";
    control=false;
  
}
  
}
