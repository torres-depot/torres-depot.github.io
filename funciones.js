(function(){

    var actualizarHora = function(){
        var fecha = new Date(),
        diaSemana = fecha.getDay(),
        dia = fecha.getDate(),
        mes = fecha.getMonth(),
        year = fecha.getFullYear();      
   
    var pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes"),
        pYear = document.getElementById("year");
    
     var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
        pDiaSemana.textContent = semana[diaSemana];
    
        pDia.textContent = dia;
    
        var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        pMes.textContent = meses[mes];
    
        pYear.textContent = year;             
    }
    actualizarHora();
}())
