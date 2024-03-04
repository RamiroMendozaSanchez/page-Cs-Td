document.addEventListener("DOMContentLoaded", function () {
  // Configura la fecha y hora de finalización
  var fechaFinalizacion = new Date("2025-07-11T12:00:00").getTime();

  // Actualiza el contador cada segundo
  var x = setInterval(function () {
    // Obtiene la fecha y hora actual
    var ahora = new Date().getTime();

    // Calcula la diferencia entre la fecha de finalización y la fecha actual
    var diferencia = fechaFinalizacion - ahora;

    // Calcula días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualiza los elementos HTML con el contador y las etiquetas
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Si el tiempo ha terminado, muestra un mensaje
    if (diferencia < 0) {
      clearInterval(x);
      document.getElementById("contador").innerHTML = "¡Tiempo finalizado!";
    }
  }, 1000);
});
