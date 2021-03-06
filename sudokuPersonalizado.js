function sudoku() {

    const tabuleiro = [ [3, 0, 6, 5, 0, 8, 4, 0, 1],
                        [5, 2, 0, 0, 0, 0, 0, 0, 0],
                        [0, 8, 7, 0, 0, 0, 0, 3, 0],
                        [0, 4, 3, 0, 1, 0, 0, 8, 0],
                        [9, 0, 0, 8, 6, 3, 0, 0, 5],
                        [0, 5, 0, 0, 9, 0, 6, 0, 0],
                        [1, 3, 0, 0, 0, 0, 2, 5, 0],
                        [0, 0, 0, 0, 0, 0, 0, 7, 4],
                        [0, 0, 5, 2, 0, 6, 3, 0, 0]]; // Cria o primeiro array com 9 elementos.


    //const tabuleiro_reto = [].concat(...tabuleiro); //... operador de espalhamento.
    // pega o array bidimensional tabuleiro, concatena ele todo, ou seja junta ele todo e coloca examente no tabuleiro_reto.

    // concat aceita n parametros. 
    // outro metodo de fazer.
    /*
    var tabuleiro_reto = [];
    for(i = 0; i < 9 ; i++){
        tabuleiro_reto = tabuleiro_reto.concat(tabuleiro[i]); 
    }
    */
   const tabuleiro_reto = [];

    n = 0;
    for(i = 0; i < 9; i++){
        for(k = 0; k < 9; k++){
            tabuleiro_reto[n] = tabuleiro[i][k];
            n++;
        }
    }


    /*

    for (i = 0; i < 9; i++) {
        tabuleiro[i] = []; // instância em cada linha do array, outro array com 9 elementos.
    }
  
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
           tabuleiro[i][j] = Math.floor(Math.random() * 9) + 1;
        }
    }
*/
    var arrBlocos = [];
    console.log(tabuleiro);
    console.log("Linha eh a: " + getLinha(0));
    console.log("Coluna eh a: " + getColuna(3));
    console.log("Bloco eh o: " + getBloco(8,arrBlocos));
    valido() == 1 ? console.log("Valido") : console.log("Invalido");

    function getLinha(linha) {
        return tabuleiro[linha];
    }

    function getColuna(coluna) {

        var arrColuna = [];
        for (i = 0; i < 9; i++) {
            arrColuna[i] = tabuleiro[i][coluna];
        }
        return arrColuna;

    }

    function getBloco(bloco,listaDeBlocos) {

        var contadorDeLinhaBlocos = 0;
        var contadorDeBloco = 0;
        for (i = 0; i < 9; i++) {
            listaDeBlocos[i] = []; // instância em cada linha do array, outro array com 9 elementos.
        }
        for (i = 0; i < 81; i++) {
            if(i % 27 == 0 && i != 0){
                contadorDeLinhaBlocos++;
            }
            if(i % 3 == 0 && i != 0){
                contadorDeBloco++;
                if(contadorDeBloco > 2){
                    contadorDeBloco = 0;}
            }
            
            listaDeBlocos[contadorDeLinhaBlocos*3 + contadorDeBloco].push(tabuleiro_reto[i]); 
        }
        return listaDeBlocos[bloco];
    }

    function valido() {
        if (validarColuna() && validarLinha() && validarBloco()) { return 1; }
        else { return 0; }

    }

    function validarLinha() {
        // return 0 para tabuleiro invalido, return 1 para tabuleiro valido.
        var n = 0;
        while (n < 9) {
            for (i = 0; i < 9; i++) {
                for (k = i+1; k < 9; k++) {
                    if (k == i)
                        break;
                    if (tabuleiro[n][i] == tabuleiro[n][k] &&
                        tabuleiro[n][i] != 0 &&
                        tabuleiro[n][i] != "") {
                        return 0;
                    }
                }
            }
            n++;
        }
        return 1;
    }
    
        function validarBloco() {
        var n = 0;
        while (n < 9) {
            for (i = 0; i < 9; i++) {
                for (k = i+1; k < 9; k++) {
                    if (k == i)
                        break;
                    if (arrBlocos[n][i] == arrBlocos[n][k] &&
                        arrBlocos[n][i] != 0 &&
                        arrBlocos[n][i] != "") {
                        return 0;
                    }
                }
            }
            n++;
        }
        return 1;
    }
    
    function validarColuna() {
        // return 0 para colunas invalidas, return 1 para colunas validas
        var n = 0;
        while (n < 9) {
            for (i = 0; i < 9; i++) {

                for (k = i+1; k < 9; k++) {
                    
                    if (tabuleiro[i][n] == tabuleiro[k][n] && tabuleiro[i][n] != 0 && tabuleiro[i][n] != "") {
                        return 0;
                    }
                }
            }
            n++;
        }
        return 1;
    }
    return valido();
}

sudoku();
