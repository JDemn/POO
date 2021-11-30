let emergency = false;
let nivelDeCarga = 0;
switch(emergency){
  case nivelDeCarga > 1500 :
    console.log(emergency = true + " " + " Emergencia!! . EVACUAR , PELIGRO DE RADIACIÓN");
  break;
  case nivelDeCarga === 1200 && nivelDeCarga < 1500:
    console.log("Advertencia debe revisar la los niveles de flujo del reactor");
    break;
  case nivelDeCarga < 1200 :
    console.log("Niveles de carga estables")
    break;
  default :
    console.log("No aplica")
}