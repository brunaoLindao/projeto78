var fotos = ['https://static.vecteezy.com/ti/vetor-gratis/p3/5084945-grande-familia-com-tres-geracoes-gratis-vetor.jpg', 'https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2020/10/the-addams-family-1.jpg','https://assets-global.website-files.com/60ff690cd7b0537edb99a29a/62c34e6404495dc64c728aa6_Fami%CC%81lia-Dinossauros.jpg'];
var descricao = ['Familia Completa','familia addams','familia dinossauro'];
var auxiliar = 0;
function proximo(){
    auxiliar++;
    if (auxiliar<3){
        document.getElementById('fotos').src= fotos[auxiliar];
        document.getElementById('descricao').innerHTML = descricao[auxiliar];
    }
    else{
        auxiliar = 0;
        document.getElementById('fotos').src= fotos[auxiliar];
        document.getElementById('descricao').innerHTML = descricao[auxiliar];
    }
}