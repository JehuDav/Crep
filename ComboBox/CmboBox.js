    document.getElementById('Calificacion').addEventListener('click', function() {
        let valor1 = document.getElementById("P1").value;
        let valor2 = document.getElementById("P2").value;
        let valor3 = document.getElementById("P3").value;
        let valor4 = document.getElementById("P4").value;
        let valor5 = document.getElementById("P5").value;
        let valor6 = document.getElementById("P6").value;
        let valor7 = document.getElementById("P7").value;
        let valor8 = document.getElementById("P8").value;
        let valor9 = document.getElementById("P9").value;
        let valor10 = document.getElementById("P10").value;

        let resultado = parseInt(valor1) + parseInt(valor2) + parseInt(valor3) + parseInt(valor4) + parseInt(valor5) + parseInt(valor6) + parseInt(valor7) + parseInt(valor8) + parseInt(valor9) + parseInt(valor10);
            
        textosalida.innerText= "Tu resultado es de:" + " " + resultado + "/10";

        if(valor1 == 1){
            R1.innerText = " ✔️"+" Correcto";
        }else{
            R1.innerText = " " +"❌" ;
            Res1.innerText = "Recuerda que Bruselas es la capital de Belgica";
        }
    
        if(valor2 == 1){
            R2.innerText = " ✔️"+" Correcto";
        }else{
            R2.innerText = " " +"❌";
            Res2.innerText = "Recuerda que Buenos Aires es la capital de Argentina";
        }
    
        if(valor3 == 1){
            R3.innerText = " ✔️"+" Correcto";
        }else{
            R3.innerText = " " +"❌";
            Res3.innerText = "Recuerda que San José es la capital de Costa Rica";
        }
    
        if(valor4 == 1){
            R4.innerText = " ✔️"+" Correcto";
        }else{
            R4.innerText = " " +"❌";
            Res4.innerText="Recuerda que Caracas es la capital de Venezuela";
        }
    
        if(valor5 == 1){
            R5.innerText = " ✔️"+" Correcto";
        }else{
            R5.innerText = " " +"❌";
            Res5.innerText = "Recuerda que Brasilia es la capital de Brasil"
        }
    
        if(valor6 == 1){
            R6.innerText = " ✔️"+" Correcto";
        }else{
            R6.innerText = " " +"❌";
            Res6.innerText="Recuerda que Lima es la capital de Perú";
        }
    
        if(valor7 == 1){
            R7.innerText = " ✔️"+" Correcto";
        }else{ 
            R7.innerText = " " +"❌";
            Res7.innerText= "Recuerda que Puerto España es la capital de Trinidad y Tobago";
        }
    
        if(valor8 == 1){
            R8.innerText = " ✔️"+" Correcto";
        }else{
            R8.innerText = " " +"❌";
            Res8.innerText= "Recuerda que La Habana es la capital de Cuba";
        }
    
        if(valor9 == 1){
            R9.innerText = " ✔️"+" Correcto";
        }else{
            R9.innerText = " " +"❌";
            Res9.innerText= "Recuerda que Managua es la capital de Nicaragua";
        }
    
        if(valor10 == 1){
            R10.innerText = " ✔️"+" Correcto";
        }else{
            R10.innerText = " " +"❌";
            Res10.innerText = "Recuerda que Quito es la capital de Ecuador";
        }
    });

    document.getElementById('Reiniciar').addEventListener('click', function() {
        location.reload();
    })