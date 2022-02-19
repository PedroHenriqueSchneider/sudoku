function sudoku() {
    
     
    const tabuleiro = [[3, 0, 6, 5, 0, 8, 4, 0, 1],
                       [5, 2, 0, 0, 0, 0, 0, 0, 0],
                       [0, 8, 7, 0, 0, 0, 0, 3, 0], 
                       [0, 0, 3, 0, 1, 0, 0, 8, 0], 
                       [9, 0, 0, 8, 6, 3, 0, 0, 5], 
                       [0, 5, 0, 0, 9, 0, 6, 0, 0], 
                       [1, 3, 0, 0, 0, 0, 2, 5, 0], 
                       [0, 0, 0, 0, 0, 0, 0, 7, 4], 
                       [0, 0, 5, 2, 0, 6, 3, 0, 0]]; // Cria o primeiro array com 9 elementos.
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

    console.log(tabuleiro); 
    console.log("Linha eh a: " + getLinha(0));
    console.log("Coluna eh a: " + getColuna(3));
    //console.log("Bloco eh o: " + getBloco(8));
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

    // resto da divisao por 3 me retorna a coluna

    //function getBloco(bloco) {
        //var arrParametros = [[0, 0, 3, 3], [0, 3, 3, 6], [0, 6, 3, 9], [3, 0, 6, 3], [3, 3, 6, 6], [3, 6, 6, 9], [6, 0, 9, 3], [6, 3, 9, 6], [6, 6, 9, 9]]; // esse array contem as posicoes maximas e minimas do tabuleiro em que cada bloco esta. 
        //return auxGetBloco(arrParametros[bloco]); // chama a funcao auxiliar do bloco com o parametro sendo o array com as posicoes. 
    //}

    function valido() {
        // aceitar tabuleiros com elementos vazios.
        // implementacao de validacao errada. 
        if (validarColuna() && validarLinha()) { return 1; }
        else { return 0; }
        
    }

    function validarLinha() {
        // return 0 para tabuleiro invalido, return 1 para tabuleiro valido.
        var n = 0;
        while(n < 9){
            for(i = 0; i < 9; i++){
                for(k = 1; k < 9; k++){
                    if(tabuleiro[n][i] == tabuleiro[n][k] && tabuleiro[n][i] != 0 && tabuleiro[n][i] != ""){
                        console.log("aqui esta ocasionando erro linha: " + n + "\n");
                        return 0;
                    }
                }
            }
            n++;
        }
        return 1;
    }
/*
    function validarBloco() {
        
        return 1;
    }
*/
    function validarColuna() {
        // return 0 para colunas invalidas, return 1 para colunas validas
        var n = 0;
        while(n < 9){
            for(i = 0; i < 9; i++){
                for(k = 1; k < 9; k++){
                    if(tabuleiro[i][n] == tabuleiro[k][n] && tabuleiro[i][n] != 0 && tabuleiro[i][n] != ""){
                        console.log("aqui esta ocasionando erro coluna: " + n + "\n");
                        return 0;
                    }
                }
            }
        }
        return 1;
    }
    return valido();
}

sudoku();
