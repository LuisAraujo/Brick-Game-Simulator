function Quadrado(param_col){

    var col = param_col;


    if(col == 9 )
        col = 8;
    //         00, 01 - 10,11 - 20, 21
    var pos = [[0,col],[1,col],[0,col+1],[1,col+1]];
    var posAnt = [[0,col],[1,col],[0,col+1],[1,col+1]];
    var rota = 0;

    this.getPos = function (){
        return pos;
    }

    this.print = function(param){

        param[ pos[0][0] ][pos[0][1]] = 1;
        param[ pos[1][0] ][pos[1][1]] = 1;
        param[ pos[2][0] ][pos[2][1]] = 1;
        param[ pos[3][0] ][pos[3][1]] = 1;

        return param;
    }


    this.move = function(param, param2){

        //fim da matriz
        if(pos[1][0]<15){

            //em pé ou deitado
            if( (rota == 0) || (rota==2) || (rota == 1)||(rota==3) ){

                if( (param[ pos[1][0]+1][pos[1][1]] == 0) && ( param[ pos[3][0]+1][pos[3][1]] == 0 ) ){

                    param[ posAnt[0][0] ][posAnt[0][1]] = 0;
                    param[ posAnt[1][0] ][posAnt[1][1]] = 0;
                    param[ posAnt[2][0] ][posAnt[2][1]] = 0;
                    param[ posAnt[3][0] ][posAnt[3][1]] = 0;


                    pos[0][0]++;
                    param[ pos[0][0] ][pos[0][1]] = 1;
                    pos[1][0]++;
                    param[ pos[1][0] ][pos[1][1]] = 1;
                    pos[2][0]++;
                    param[ pos[2][0] ][pos[2][1]] = 1;
                    pos[3][0]++;
                    param[ pos[3][0] ][pos[3][1]] = 1;

                }else{

                    console.log('n avancou');
                    //limpando
                    param[ pos[0][0] ][pos[0][1]] = 1;
                    param[ pos[1][0] ][pos[1][1]] = 1;
                    param[ pos[2][0] ][pos[2][1]] = 1;
                    param[ pos[3][0] ][pos[3][1]] = 1;


                    return false;
                }

                posAnt[0][0] = pos[0][0];
                posAnt[0][1] = pos[0][1];
                posAnt[0][2] = pos[0][2];

                posAnt[1][0] = pos[1][0];
                posAnt[1][1] = pos[1][1];
                posAnt[1][2] = pos[1][2];

                posAnt[2][0] = pos[2][0];
                posAnt[2][1] = pos[2][1];
                posAnt[2][2] = pos[2][2];


                posAnt[2][0] = pos[2][0];
                posAnt[2][1] = pos[2][1];
                posAnt[2][2] = pos[2][2];

                return true;

            }
        }else{


            //limpando
            param[ pos[0][0] ][pos[0][1]] = 1;
            param[ pos[1][0] ][pos[1][1]] = 1;
            param[ pos[2][0] ][pos[2][1]] = 1;
            param[ pos[3][0] ][pos[3][1]] = 1;
            return false;


        }
    }

    this.moveCol = function(param, param1){


        //EM PÉ

        if((rota==0) || (rota==2) || (rota==1) || (rota==3)){

            if(param1 == "left"){

                if( (pos[0][1] > 0) && (param[pos[0][0]][pos[0][1]-1]== 0)  && (param[pos[1][0]][pos[1][1]-1]== 0)   ){
                    //limpando
                    param[ pos[0][0] ][pos[0][1]] = 0;
                    param[ pos[1][0] ][pos[1][1]] = 0;
                    param[ pos[2][0] ][pos[2][1]] = 0;
                    param[ pos[3][0] ][pos[3][1]] = 0;

                    pos[0][1]--;
                    pos[1][1]--;
                    pos[2][1]--;
                    pos[3][1]--;

                    return true;
                }else
                    return false;

            }else if (param1 == "right"){

                if  ((pos[2][1]<9) && (param[ pos[2][0]][ pos[2][1]+1]==0) && (param[ pos[3][0]][ pos[3][1]+1]==0)){


                    //limpando
                    param[ pos[0][0] ][pos[0][1]] = 0;
                    param[ pos[1][0] ][pos[1][1]] = 0;
                    param[ pos[2][0] ][pos[2][1]] = 0;
                    param[ pos[3][0] ][pos[3][1]] = 0;

                    pos[0][1]++;
                    pos[1][1]++;
                    pos[2][1]++;
                    pos[3][1]++;

                    return true;
                }else
                    return false;


            }

            refreshScreen();
        }

    }

    this.rotate = function(param){

        changeRota();

    }

    changeRota = function(){
        //rotacoes
        if((rota>=0) && (rota<=2))
            rota++;
        else
            rota = 0;
    }



}