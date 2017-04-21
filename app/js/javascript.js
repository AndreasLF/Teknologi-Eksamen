var macAddress = "00:06:66:7D:83:DF"; //BLuetooth Mate mac adress, pasword 1234

var forwardButton, backwardButton, leftButton, rightButton;

var speed1, speed2, speed3;

var speed1clicked = false,
    speed2clicked = false,
    speed3clicked = false;

function onLoad() {

    /*Buttons*/

    forwardButton = document.getElementById("forwardButton");

    backwardButton = document.getElementById("backwardButton");

    leftButton = document.getElementById("leftButton");

    rightButton = document.getElementById("rightButton");


    speed1 = document.getElementById("speed1");

    speed2 = document.getElementById("speed2");

    speed3 = document.getElementById("speed3");

    /*These eventlisteners are triggered on touchstart*/

    forwardButton.addEventListener("touchstart", drive, false);

    backwardButton.addEventListener("touchstart", reverse, false);

    rightButton.addEventListener("touchstart", turnRight, false);

    leftButton.addEventListener("touchstart", turnLeft, false);

    /*These eventlisteners are triggered on touchend*/

    forwardButton.addEventListener("touchend", stop, false);

    backwardButton.addEventListener("touchend", stop, false);

    leftButton.addEventListener("touchend", stop, false);

    rightButton.addEventListener("touchend", stop, false);



    speed1.addEventListener("touchstart", speed1function, false);
    speed2.addEventListener("touchstart", speed2function, false);
    speed3.addEventListener("touchstart", speed3function, false);



    /* Checks if device is ready */

    document.addEventListener("deviceready", onDeviceReady, false);


}



function onDeviceReady() {

    bluetoothSerial.connect(macAddress, onConnect, onDisconnect);

}



function onConnect() {

    alert("Successfully connected to: " + macAddress + "!");

}

function onDisconnect() {

    alert("Disconnected");

}

function sendToArduino(data) {

    bluetoothSerial.write(data);

}

function drive() {

    document.getElementById("forwardButton").style.color = "black";
    sendToArduino('f');
}

function reverse() {

    document.getElementById("backwardButton").style.color = "black";
    sendToArduino("b");
}



function turnRight() {

    document.getElementById("rightButton").style.color = "black";
    sendToArduino("r");
}



function turnLeft() {


    document.getElementById("leftButton").style.color = "black";
    sendToArduino("l");

}


function stop() {

    document.getElementById("forwardButton").style.color = "grey";
    document.getElementById("leftButton").style.color = "grey";
    document.getElementById("rightButton").style.color = "grey";
    document.getElementById("backwardButton").style.color = "grey";
    sendToArduino("s");
}

function resetstyle() {
    document.getElementById("speed1").style.fontSize = "36px";
    document.getElementById("speed2").style.fontSize = "36px";
    document.getElementById("speed3").style.fontSize = "36px";
    document.getElementById("speed1").style.color = "grey";
    document.getElementById("speed2").style.color = "grey";
    document.getElementById("speed3").style.color = "grey";
    navigator.vibrate(250);

}

function speed1function() {

    if (speed1clicked == false) {

        speed1clicked = true;
        speed2clicked = false;
        speed3clicked = false;
        resetstyle();
        document.getElementById("speed1").style.fontSize = "48px";
        document.getElementById("speed1").style.color = "black";
        sendToArduino("1");

    } else if (speed1clicked == true) {

        speed1clicked = false;
        speed2clicked = false;
        speed3clicked = false;
        resetstyle();
        stop();

    }

}

function speed2function() {

    if (speed2clicked == false) {

        speed1clicked = false;
        speed2clicked = true;
        speed3clicked = false;
        resetstyle();
        document.getElementById("speed2").style.fontSize = "48px";
        document.getElementById("speed2").style.color = "black";
        sendToArduino("2");

    } else if (speed2clicked == true) {

        speed1clicked = false;
        speed2clicked = false;
        speed3clicked = false;
        resetstyle();
        stop();

    }

}

function speed3function() {

    if (speed3clicked == false) {

        speed1clicked = false;
        speed2clicked = false;
        speed3clicked = true;
        resetstyle();
        document.getElementById("speed3").style.fontSize = "48px";
        document.getElementById("speed3").style.color = "black";
        sendToArduino("3");

    } else if (speed3clicked == true) {

        speed1clicked = false;
        speed2clicked = false;
        speed3clicked = false;
        resetstyle();
        stop();

    }

}























