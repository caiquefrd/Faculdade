function converter (entrada:string){
    const textos = entrada.split(",");
    const nros:number[] = [];
    for( let i = 0; i < textos.length; i++){
        nros[i] = parseInt (textos[i]);
    }
    return nros;
}