/**
 * Created by Luis 4raujo on 20/12/14.
 */

var imgNextTeris = new Image();
var imgPointTetris = new Image();
var imgMiniLinha = new Image();
var imgMiniQuadrado = new Image();
var imgMiniEse = new Image();
var imgMiniEle = new Image();
var imgMiniTe = new Image();

var estadoTelaGameOver = 0;
var isover = true;
var TipoNextTetris=0;
var imgMini = new Array();

//teris atual
var currentTetris = null;


//Word Game for show in game
var arrayPalavraGame = [
    //linha1
    [0,0,0,0,0,0,0,0,0,0],
    //linha2
    [0,1,1,1,0,0,1,1,1,0],
    //linha3
    [0,1,0,0,0,0,1,0,1,0],
    //linha4
    [0,1,0,1,0,0,1,1,1,0],
    //linha5
    [0,1,0,1,0,0,1,0,1,0],
    //linha6
    [0,1,1,1,0,0,1,0,1,0],
    //linha7
    [0,0,0,0,0,0,0,0,0,0],
    //linha8
    [0,0,0,0,0,0,0,0,0,0],
    //linha9
    [0,0,0,0,0,0,0,0,0,0],
    //linha10
    [0,1,0,1,0,0,1,1,1,0],
    //linha11
    [0,1,1,1,0,0,1,0,0,0],
    //linha12
    [0,1,1,1,0,0,1,1,0,0],
    //linha13
    [0,1,0,1,0,0,1,0,0,0],
    //linha14
    [0,1,0,1,0,0,1,1,1,0],
    //linha15
    [0,0,0,0,0,0,0,0,0,0],
    //linha16
    [0,0,0,0,0,0,0,0,0,0],
    //linha17
    [0,0,0,0,0,0,0,0,0,0]

];



//Word Over for show in game
var arrayPalavraOver = [
    //linha1
    [0,0,0,0,0,0,0,0,0,0],
    //linha2
    [0,1,1,1,0,0,1,0,1,0],
    //linha3
    [0,1,0,1,0,0,1,0,1,0],
    //linha4
    [0,1,0,1,0,0,1,0,1,0],
    //linha5
    [0,1,0,1,0,0,0,1,0,0],
    //linha6
    [0,1,1,1,0,0,0,1,0,0],
    //linha7
    [0,0,0,0,0,0,0,0,0,0],
    //linha8
    [0,0,0,0,0,0,0,0,0,0],
    //linha9
    [0,0,0,0,0,0,0,0,0,0],
    //linha10
    [0,1,1,1,0,0,1,1,1,0],
    //linha11
    [0,1,0,0,0,0,1,0,1,0],
    //linha12
    [0,1,1,0,0,0,1,1,0,0],
    //linha13
    [0,1,0,0,0,0,1,0,1,0],
    //linha14
    [0,1,1,1,0,0,1,0,1,0],
    //linha15
    [0,0,0,0,0,0,0,0,0,0],
    //linha16
    [0,0,0,0,0,0,0,0,0,0],
    //linha17
    [0,0,0,0,0,0,0,0,0,0]

];






cleanLine = function(callback){

    arr = new Array();

    if(
        (arrayGame[0][0] == 1) && (arrayGame[0][1] == 1) && (arrayGame[0][2]==1)
            && (arrayGame[0][3] == 1) && (arrayGame[0][4]==1) && (arrayGame[0][5]==1)
            && (arrayGame[0][6] == 1) && (arrayGame[0][7]==1) && (arrayGame[0][8]==1)
            && (arrayGame[0][9] == 1)

        ){
        arr.push(0);
    }

    if(
        (arrayGame[1][0] == 1) && (arrayGame[1][1] == 1) && (arrayGame[1][2]==1)
            && (arrayGame[1][3] == 1) && (arrayGame[1][4]==1) && (arrayGame[1][5]==1)
            && (arrayGame[1][6] == 1) && (arrayGame[1][7]==1) && (arrayGame[1][8]==1)
            && (arrayGame[1][9] == 1)

        ){
        arr.push(1);
    }

    if(
        (arrayGame[2][0] == 1) && (arrayGame[2][1] == 1) && (arrayGame[2][2]==1)
            && (arrayGame[2][3] == 1) && (arrayGame[2][4]==1) && (arrayGame[2][5]==1)
            && (arrayGame[2][6] == 1) && (arrayGame[2][7]==1) && (arrayGame[2][8]==1)
            && (arrayGame[2][9] == 1)

        ){
        arr.push(2);
    }

    if(
        (arrayGame[3][0] == 1) && (arrayGame[3][1] == 1) && (arrayGame[3][2]==1)
            && (arrayGame[3][3] == 1) && (arrayGame[3][4]==1) && (arrayGame[3][5]==1)
            && (arrayGame[3][6] == 1) && (arrayGame[3][7]==1) && (arrayGame[3][8]==1)
            && (arrayGame[3][9] == 1)

        ){
        arr.push(3);
    }

    if(
        (arrayGame[4][0] == 1) && (arrayGame[4][1] == 1) && (arrayGame[4][2]==1)
            && (arrayGame[4][3] == 1) && (arrayGame[4][4]==1) && (arrayGame[4][5]==1)
            && (arrayGame[4][6] == 1) && (arrayGame[4][7]==1) && (arrayGame[4][8]==1)
            && (arrayGame[4][9] == 1)

        ){
        arr.push(4);
    }

    if(
        (arrayGame[5][0] == 1) && (arrayGame[5][1] == 1) && (arrayGame[5][2]==1)
            && (arrayGame[5][3] == 1) && (arrayGame[5][4]==1) && (arrayGame[5][5]==1)
            && (arrayGame[5][6] == 1) && (arrayGame[5][7]==1) && (arrayGame[5][8]==1)
            && (arrayGame[5][9] == 1)

        ){
        arr.push(5);
    }

    if(
        (arrayGame[6][0] == 1) && (arrayGame[6][1] == 1) && (arrayGame[6][2]==1)
            && (arrayGame[6][3] == 1) && (arrayGame[6][4]==1) && (arrayGame[6][5]==1)
            && (arrayGame[6][6] == 1) && (arrayGame[6][7]==1) && (arrayGame[6][8]==1)
            && (arrayGame[6][9] == 1)

        ){
        arr.push(6);
    }

    if(
        (arrayGame[7][0] == 1) && (arrayGame[7][1] == 1) && (arrayGame[7][2]==1)
            && (arrayGame[7][3] == 1) && (arrayGame[7][4]==1) && (arrayGame[7][5]==1)
            && (arrayGame[7][6] == 1) && (arrayGame[7][7]==1) && (arrayGame[7][8]==1)
            && (arrayGame[7][9] == 1)

        ){
        arr.push(7);
    }

    if(
        (arrayGame[8][0] == 1) && (arrayGame[8][1] == 1) && (arrayGame[8][2]==1)
            && (arrayGame[8][3] == 1) && (arrayGame[8][4]==1) && (arrayGame[8][5]==1)
            && (arrayGame[8][6] == 1) && (arrayGame[8][7]==1) && (arrayGame[8][8]==1)
            && (arrayGame[8][9] == 1)

        ){
        arr.push(8);
    }

    if(
        (arrayGame[9][0] == 1) && (arrayGame[9][1] == 1) && (arrayGame[9][2]==1)
            && (arrayGame[9][3] == 1) && (arrayGame[9][4]==1) && (arrayGame[9][5]==1)
            && (arrayGame[9][6] == 1) && (arrayGame[9][7]==1) && (arrayGame[9][8]==1)
            && (arrayGame[9][9] == 1)

        ){
        arr.push(9);
    }

    if(
        (arrayGame[10][0] == 1) && (arrayGame[10][1] == 1) && (arrayGame[10][2]==1)
            && (arrayGame[10][3] == 1) && (arrayGame[10][4]==1) && (arrayGame[10][5]==1)
            && (arrayGame[10][6] == 1) && (arrayGame[10][7]==1) && (arrayGame[10][8]==1)
            && (arrayGame[10][9] == 1)

        ){
        arr.push(10);
    }

    if(
        (arrayGame[11][0] == 1) && (arrayGame[11][1] == 1) && (arrayGame[11][2]==1)
            && (arrayGame[11][3] == 1) && (arrayGame[11][4]==1) && (arrayGame[11][5]==1)
            && (arrayGame[11][6] == 1) && (arrayGame[11][7]==1) && (arrayGame[11][8]==1)
            && (arrayGame[11][9] == 1)

        ){
        arr.push(11);
    }

    if(
        (arrayGame[12][0] == 1) && (arrayGame[12][1] == 1) && (arrayGame[12][2]==1)
            && (arrayGame[12][3] == 1) && (arrayGame[12][4]==1) && (arrayGame[12][5]==1)
            && (arrayGame[12][6] == 1) && (arrayGame[12][7]==1) && (arrayGame[12][8]==1)
            && (arrayGame[12][9] == 1)

        ){
        arr.push(12);
    }

    if(
        (arrayGame[13][0] == 1) && (arrayGame[13][1] == 1) && (arrayGame[13][2]==1)
            && (arrayGame[13][3] == 1) && (arrayGame[13][4]==1) && (arrayGame[13][5]==1)
            && (arrayGame[13][6] == 1) && (arrayGame[13][7]==1) && (arrayGame[13][8]==1)
            && (arrayGame[13][9] == 1)

        ){
        arr.push(13);

    }

    if(
        (arrayGame[14][0] == 1) && (arrayGame[14][1] == 1) && (arrayGame[14][2]==1)
            && (arrayGame[14][3] == 1) && (arrayGame[14][4]==1) && (arrayGame[14][5]==1)
            && (arrayGame[14][6] == 1) && (arrayGame[14][7]==1) && (arrayGame[14][8]==1)
            && (arrayGame[14][9] == 1)

        ){
        arr.push(14);
    }

    if(
        (arrayGame[15][0] == 1) && (arrayGame[15][1] == 1) && (arrayGame[15][2]==1)
            && (arrayGame[15][3] == 1) && (arrayGame[15][4]==1) && (arrayGame[15][5]==1)
            && (arrayGame[15][6] == 1) && (arrayGame[15][7]==1) && (arrayGame[15][8]==1)
            && (arrayGame[15][9] == 1)

        ){
        arr.push(15);
    }

    pickLine(arr, 4, callback);

}




pickLine = function(param, param2, callback){

    clearInterval(Update);

    for(var i=0; i<param.length; i++){
        if((param2==1) || (param2==3)){
            arrayGame[param[i] ][0]=1;
            arrayGame[param[i]][1]=1;
            arrayGame[param[i]][2]=1;
            arrayGame[param[i]][3]=1;
            arrayGame[param[i]][4]=1;
            arrayGame[param[i]][5]=1;
            arrayGame[param[i]][6]=1;
            arrayGame[param[i]][7]=1;
            arrayGame[param[i]][8]=1;
            arrayGame[param[i]][9]=1;
            arrayGame[param[i]][10]=1;
        }else  if((param2==2)  || (param2==4)) {
            arrayGame[param[i]][0]=0;
            arrayGame[param[i]][1]=0;
            arrayGame[param[i]][2]=0;
            arrayGame[param[i]][3]=0;
            arrayGame[param[i]][4]=0;
            arrayGame[param[i]][5]=0;
            arrayGame[param[i]][6]=0;
            arrayGame[param[i]][7]=0;
            arrayGame[param[i]][8]=0;
            arrayGame[param[i]][9]=0;
            arrayGame[param[i]][10]=0;
        }
    }
    refreshScreen();

    if(param2 > 0){
        setTimeout(function(){pickLine(param,param2-1, callback)}, 100);
    }else{
        for(var j=0; j<param.length; j++){

            if(param[j] == 0){
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 1){
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }
            if(param[j] == 2){
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 3){
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }
            if(param[j] == 4){
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 5){
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }
            if(param[j] == 6){
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 7){
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }
            if(param[j] == 8){
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 9){
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }
            if(param[j] == 10){
                arrayGame[10] = arrayGame[9];
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }
            if(param[j] == 11){
                arrayGame[11] = arrayGame[10];
                arrayGame[10] = arrayGame[9];
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 12){
                arrayGame[12] = arrayGame[11];
                arrayGame[11] = arrayGame[10];
                arrayGame[10] = arrayGame[9];
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 13){
                arrayGame[13] = arrayGame[12];
                arrayGame[12] = arrayGame[11];
                arrayGame[11] = arrayGame[10];
                arrayGame[10] = arrayGame[9];
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 14){
                arrayGame[14] = arrayGame[13];
                arrayGame[13] = arrayGame[12];
                arrayGame[12] = arrayGame[11];
                arrayGame[11] = arrayGame[10];
                arrayGame[10] = arrayGame[9];
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];
            }

            if(param[j] == 15){
                arrayGame[15] = arrayGame[14];
                arrayGame[14] = arrayGame[13];
                arrayGame[13] = arrayGame[12];
                arrayGame[12] = arrayGame[11];
                arrayGame[11] = arrayGame[10];
                arrayGame[10] = arrayGame[9];
                arrayGame[9] = arrayGame[8];
                arrayGame[8] = arrayGame[7];
                arrayGame[7] = arrayGame[6];
                arrayGame[6] = arrayGame[5];
                arrayGame[5] = arrayGame[4];
                arrayGame[4] = arrayGame[3];
                arrayGame[3] = arrayGame[2];
                arrayGame[2] = arrayGame[1];
                arrayGame[1] = arrayGame[0];
                arrayGame[0] = [0,0,0,0,0,0,0,0,0,0];

            }
        }

        //new Tetris
        callback();

        refreshScreen();

        Update = setInterval(function(){update();}, 500);
    }
}


isOver = function(){

    if ( (arrayGame[0][0]== 1) || (arrayGame[0][1]==1) || (arrayGame[0][2]==1) || (arrayGame[0][3]==1)
        || (arrayGame[0][4]== 1) || (arrayGame[0][5]==1) || (arrayGame[0][6]==1) || (arrayGame[0][7]==1)
        || (arrayGame[0][8]== 1) || (arrayGame[0][9]==1)){

        isover = true;
    }

}


setNewGame = function(){
    //cópia da matriz
    arrayGame = CleanArray();
    isover = false;
}


updateTetris = function(){
    //fim de jogo
    if(!isover){

        if(press){

            if(btKey == 83){
                if(currentTetris!=null)
                    currentTetris.rotate(arrayGame);
            }

            else if(btKey == 37){
                if(currentTetris!=null)
                    currentTetris.moveCol(arrayGame,"left");
            }

            else if(btKey == 40){

                //existe algum tetris no controle?
                if(currentTetris!= null){
                    if(!currentTetris.move(arrayGame, press)){
                        currentTetris=null;
                    }
                    refreshScreen();
                }
            }

            else if(btKey == 39){
                if(currentTetris!=null)
                    currentTetris.moveCol(arrayGame,"right");
            }

            press = false;
            btKey = 0;

        }

        //existe algum tetris no controle?
        if(currentTetris!= null){
            if(!currentTetris.move(arrayGame, press)){
                currentTetris=null;
            }
            // /senao, crie um
        }else{
            //ao fim do clean line chame o new Tetris
            cleanLine(function(){
                newTetris()
            });

        }

        refreshScreen();

        isOver();
    }else{

        animaGameOver();
        refreshScreen();


        if(press){
            if(btKey == 78){
                setNewGame();
            }


            press = false;
            btKey = 0;
        }
    }

}


function newTetris(){

    //escolha
    //var tipo = "linha";

    var coluna_randomica = Math.round(Math.random()*9);

    if(TipoNextTetris == 0)
        tipo = new Linha(coluna_randomica);
    else if (TipoNextTetris == 1)
        tipo = new Quadrado(coluna_randomica);
    //Ele
    else if (TipoNextTetris == 2)
        tipo = new Ele(coluna_randomica);
    //Esse
    else if (TipoNextTetris == 3)
        tipo = new Quadrado(coluna_randomica);
    //Te
    else if (TipoNextTetris == 4)
        tipo = new Quadrado(coluna_randomica);

    tipo.print(arrayGame);

    currentTetris = tipo;

    //proximo
    TipoNextTetris = 0;
    //Math.round((Math.random()*4));


};


animaGameOver = function(){

    if(estadoTelaGameOver == 0){
        arrayGame = arrayPalavraGame;
        estadoTelaGameOver = 1;
    }else{
        arrayGame = arrayPalavraOver;
        estadoTelaGameOver = 0;
    }

}


onloadTetris = function(){
    //específica do Tetris
    imgMiniLinha.src = "img/linha.png";
    imgMiniEle.src = "img/ele.png";
    imgMiniEse.src = "img/esse.png";
    imgMiniTe.src = "img/te.png";
    imgMiniQuadrado.src = "img/quadrado.png";

    imgMini[0] = imgMiniLinha;
    imgMini[1]=imgMiniQuadrado;
    imgMini[2]=imgMiniEle;
    imgMini[3]=imgMiniEse;
    imgMini[4]=imgMiniTe;

    TipoNextTetris = 2;
    //TipoNextTetris = Math.round((Math.random()*4));


}


refreshScreenTetris = function(){

    ctx.drawImage(imgNextTeris,   0, SIZE_TETRIS/5, SIZE_TETRIS*2.5, SIZE_TETRIS);
    ctx.drawImage(imgPointTetris, SIZE_TETRIS*4.5, SIZE_TETRIS/5, SIZE_TETRIS*2.5, SIZE_TETRIS);

    for(var l = 0; l<5; l++){
        if(TipoNextTetris==l){
            ctx.drawImage(imgMini[l], SIZE_TETRIS*3,SIZE_TETRIS/5, SIZE_TETRIS, SIZE_TETRIS);
            break;
        }
    }


}