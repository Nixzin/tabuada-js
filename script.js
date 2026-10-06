function tabuada(numero) {
    let tabuada = 1;
    let resultado;

    console.log(`Tabuada de ${numero}:`);
    while(tabuada < 11) {
       resultado = numero * tabuada; 
       console.log (`${numero}x${tabuada} = ${resultado}`)
       tabuada++
        
    }
}

tabuada(9);