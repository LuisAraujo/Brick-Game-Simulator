/**
 * Created by Luis 4raujo on 12/12/14.


 */


function Linha(param_col){

    var col = param_col;
    //         00, 01 - 10,11 - 20, 21
    var pos = [[0,col],[1,col],[2,col],[3,col]];
    var posAnt = [[0,col],[1,col],[2,col],[3,col]];
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
        if(pos[3][0]<15){

                //em pé
                if((rota == 0) || (rota==2)){

                   if(param[ pos[3][0]+1][pos[3][1]] == 0){

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


                       //limpando
                       param[ pos[0][0] ][pos[0][1]] = 1;
                       param[ pos[1][0] ][pos[1][1]] = 1;
                       param[ pos[2][0] ][pos[2][1]] = 1;
                       param[ pos[3][0] ][pos[3][1]] = 1;

                       return false;
                   }


              //deitado
              }else if((rota == 1)||(rota==3)){


                    if((param[ pos[0][0]+1][pos[0][1]] == 0) && (param[ pos[1][0]+1][pos[1][1]] == 0) && (param[ pos[2][0]+1][pos[2][1]] == 0) && (param[ pos[3][0]+1][pos[3][1]] == 0) ){

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
                        //limpando
                        param[ pos[0][0] ][pos[0][1]] = 1;
                        param[ pos[1][0] ][pos[1][1]] = 1;
                        param[ pos[2][0] ][pos[2][1]] = 1;
                        param[ pos[3][0] ][pos[3][1]] = 1;

                        return false;
                    }

                }


                    posAnt[0][0] = pos[0][0];
                    posAnt[0][1] = pos[0][1];

                    posAnt[1][0] = pos[1][0];
                    posAnt[1][1] = pos[1][1];

                    posAnt[2][0] = pos[2][0];
                    posAnt[2][1] = pos[2][1];

                    posAnt[3][0] = pos[3][0];
                    posAnt[3][1] = pos[3][1];

                    return true;

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

        if((rota==0) || (rota==2)){

                    if(param1 == "left"){

                        if(   ((param[ pos[0][0]][ pos[0][1]-1 ]== 0) && (pos[0][1]>0))
                            && ((param[ pos[1][0]][ pos[1][1]-1 ]== 0) && (pos[1][1]>0))
                               && ((param[ pos[2][0]][ pos[2][1]-1 ]== 0) && (pos[2][1]>0))
                                  && ((param[ pos[3][0]][ pos[3][1]-1 ]== 0) && (pos[3][1]>0))
                            ){

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

                        if ( ((param[ pos[0][0]][ pos[0][1]+1 ]== 0) && (pos[0][1]<9))
                           && ((param[ pos[1][0]][ pos[1][1]+1 ]== 0) && (pos[1][1]<9))
                               && ((param[ pos[2][0]][ pos[2][1]+1 ]== 0) && (pos[2][1]<9))
                                 && ((param[ pos[3][0]][ pos[3][1]+1 ]== 0) && (pos[3][1]<9))

                            ){

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

        }else  if((rota==1) || (rota==3)){

                        if(param1 == "left"){

                            if( (pos[0][1] > 0) && (param[pos[0][0]][pos[0][1]-1]== 0)){
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

                            if  ((pos[3][1]<9) && (param[ pos[3][0]][ pos[3][1]+1]==0)){


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

        //verificar se a posião de rotacao é válida




        //limpando
        param[ pos[0][0] ][pos[0][1]] = 0;
        param[ pos[1][0] ][pos[1][1]] = 0;
        param[ pos[2][0] ][pos[2][1]] = 0;
        param[ pos[3][0] ][pos[3][1]] = 0;


        //rotacionado
        if((rota==0) || (rota==2)){

            if((param[pos[0][0]+1][pos[0][1]-2] == 0)
                && (param[pos[1][0]][pos[1][1]-1] == 0)
                && (param[pos[2][0]-1][pos[2][1]] == 0)
                && (param[pos[3][0]-2][pos[3][1]+1] == 0)
                ){

                console.log("rot ");
                    pos[0][1]-=2;
                    pos[0][0]++;

                    pos[1][1]--;

                    pos[2][0]--;

                    pos[3][0]-=2;
                    pos[3][1]++;


                    changeRota();
                }else{
                console.log("err ");
                //limpando
                param[ pos[0][0] ][pos[0][1]] = 1;
                param[ pos[1][0] ][pos[1][1]] = 1;
                param[ pos[2][0] ][pos[2][1]] = 1;
                param[ pos[3][0] ][pos[3][1]] = 1;

                }

        }else if((rota==1) || (rota==3)){

            if((param[pos[0][0]-1][pos[0][1]+2] == 0)
                && (param[pos[1][0]][pos[1][1]+1] == 0)
                && (param[pos[2][0]+1][pos[2][1]] == 0)
                && (param[pos[3][0]+2][pos[3][1]-1] == 0)
                ){

                    console.log("rot ");
                    pos[0][1]+=2;
                    pos[0][0]--;

                    pos[1][1]++;

                    pos[2][0]++;

                    pos[3][0]+=2;
                    pos[3][1]--;

                    changeRota();


                }else{
                console.log("err ");
                    //limpando
                    param[ pos[0][0] ][pos[0][1]] = 1;
                    param[ pos[1][0] ][pos[1][1]] = 1;
                    param[ pos[2][0] ][pos[2][1]] = 1;
                    param[ pos[3][0] ][pos[3][1]] = 1;
                }

        }

    }




changeRota = function(){
    //rotacoes
    if((rota>=0) && (rota<=2))
        rota++;
    else
        rota = 0;
}


}

