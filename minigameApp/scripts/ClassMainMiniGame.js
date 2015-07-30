/**
 * Created by Luis 4raujo on 12/12/14.
 */

//size of minigame
var SIZE_TETRIS;

//DOM Elements
var body;
var canvas;
var ctx;

//images of MiniGame
var imgTetrisInativo = new Image();
var imgTetrisAtivo = new Image();

//flag for button press
var press = false;
//id button press
var btKey  = 0;

var Update = null;

var arrayGame;

//Get element body
body = document.getElementById('body');

body.onload= function(){

    refreshSizePage();

    //Pega contexto 2D
    ctx = canvas.getContext("2d");

     //Imagem tetris ativos
     imgTetrisAtivo.src = "img/tetris.png";
     //Imagem tetris inativo
     imgTetrisInativo.src = "img/tetrisAlpha.png";

     init();

}

/* --- Refresh Size Page ---
* This function update the size of mini game
* according with the parameter "size" of mini game tag at HTML
* */
refreshSizePage = function(){

    var minigame =  document.getElementById('minigame');

    if(minigame.getAttribute("size")=="small"){
        SIZE_TETRIS = 20;
    }else if(minigame.getAttribute("size")=="medium"){
        SIZE_TETRIS = 30;
    }else if(minigame.getAttribute("size")=="big"){
        SIZE_TETRIS = 40;
    }

    minigame.style.width = (SIZE_TETRIS*16.5)+"px";
    minigame.style.height = (SIZE_TETRIS*28)+"px";


    //Pega canvas
    canvas = document.getElementById('canvas');

    //Aplica a color ao beckground
    canvas.style.background = "#394837";
    canvas.style.left = (SIZE_TETRIS)*3.1+"px";
    canvas.style.top = (SIZE_TETRIS)*3.8+"px";

    //change size by SIZE_TETRIS
    canvas.height = (SIZE_TETRIS*17+20);
    canvas.width = (SIZE_TETRIS*10);
}




keyDown = function(evt){

    evt = (evt) ? evt : window.event

    //key é verificado no update, para evitar assiconia
    if(!press){
        btKey = evt.keyCode;
        press = true;
    }
}

/*GameLoop
*/
update = function(){
    refreshScreen();
}


/* RefreshScreen
*Update screen according with arrayGame
* */
refreshScreen = function(){

    ctx.clearRect(0,0,500, 870);

    for(var i = 1; i<17; i++){
       for(var j = 0; j < 10; j++){

       if(arrayGame[i-1][j] == 0)
        ctx.drawImage(imgTetrisInativo, SIZE_TETRIS*j, (SIZE_TETRIS*i)+20, SIZE_TETRIS, SIZE_TETRIS);
       else
         ctx.drawImage(imgTetrisAtivo, SIZE_TETRIS*j, (SIZE_TETRIS*i)+20, SIZE_TETRIS, SIZE_TETRIS);

       }
    }

}



/*
 * The function return a Array clean
 */
CleanArray = function(){
    return  [
        //linha1
        [0,0,0,0,0,0,0,0,0,0],
        //linha2
        [0,0,0,0,0,0,0,0,0,0],
        //linha3
        [0,0,0,0,0,0,0,0,0,0],
        //linha4
        [0,0,0,0,0,0,0,0,0,0],
        //linha5
        [0,0,0,0,0,0,0,0,0,0],
        //linha6
        [0,0,0,0,0,0,0,0,0,0],
        //linha7
        [0,0,0,0,0,0,0,0,0,0],
        //linha8
        [0,0,0,0,0,0,0,0,0,0],
        //linha9
        [0,0,0,0,0,0,0,0,0,0],
        //linha10
        [0,0,0,0,0,0,0,0,0,0],
        //linha11
        [0,0,0,0,0,0,0,0,0,0],
        //linha12
        [0,0,0,0,0,0,0,0,0,0],
        //linha13
        [0,0,0,0,0,0,0,0,0,0],
        //linha14
        [0,0,0,0,0,0,0,0,0,0],
        //linha15
        [0,0,0,0,0,0,0,0,0,0],
        //linha16
        [0,0,0,0,0,0,0,0,0,0],
        //linha17
        [0,0,0,0,0,0,0,0,0,0]

    ];
}



init = function(){
    arrayGame = CleanArray();

    refreshScreen();
    //Setting the gameloop
    Update = setInterval(function(){update();}, 500);

    //Setting event keyDown
    document.addEventListener("keydown",keyDown);

}