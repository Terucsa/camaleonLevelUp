function generarColorAleatorio() {
    let color = '#' + Math.random().toString(16).slice(2, 8);
    return color;
  }
  
function insertarColor(){
    let cambioColor = generarColorAleatorio();
    let insertarTexto = document.getElementById('insentarTexto');
    let bodyCambioColor = document.getElementById('bodyCuerpo');
    insertarTexto.innerHTML = cambioColor;
    bodyCambioColor.style.backgroundColor = cambioColor;
}
  