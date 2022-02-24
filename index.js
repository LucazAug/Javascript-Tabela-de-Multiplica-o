 function nomeDaSuaFuncao() { 
    let x = [];
   
        for (let i = 0; i <= 10; i++) {
            x[i] = [];
        
            for(let j = 0; j <=10; j++){
            x[i][j] = i*j;
 
        }
    }
    return console.table(x)
    
}