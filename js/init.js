var buttomRelative = document.getElementById('buttomRelative');
primer = document.getElementById('primer').value,
segundo = document.getElementById('segundo').value,
tercero = document.getElementById('tercero').value, 
cuarto = document.getElementById('cuarto').value;
var optimoDelPedido, costeReposicion, costeAlmacenamiento, costeInventario, pedidosAlAno, diasPedidos, operacionAlmacenammiento;
function mostrar(){
    primer = document.getElementById('primer').value;
    segundo = document.getElementById('segundo').value; 
    tercero = document.getElementById('tercero').value;
    cuarto = document.getElementById('cuarto').value;
    optimoDelPedido = Math.sqrt(2*parseFloat(primer)*parseFloat(segundo)/5);
    document.getElementById('optimoPedido').innerHTML =  parseInt(optimoDelPedido);
    costeReposicion = parseFloat(primer)*parseFloat(segundo)/optimoDelPedido;
    document.getElementById('costeReposicion').innerHTML =  parseInt(costeReposicion);
    operacionAlmacenammiento = optimoDelPedido/2
    costeAlmacenamiento = parseFloat(tercero)*(operacionAlmacenammiento + parseFloat(cuarto));
    document.getElementById('costeAlmacenamiento').innerHTML =  parseInt(costeAlmacenamiento);
    costeInventario = costeReposicion + costeAlmacenamiento;
    document.getElementById('costeInventarios').innerHTML =  parseInt(costeInventario);
    pedidosAlAno = parseFloat(segundo)/optimoDelPedido;
    document.getElementById('pedidosAlAno').innerHTML =  parseInt(pedidosAlAno);
    diasPedidos = 360/pedidosAlAno;
    document.getElementById('diasPedidos').innerHTML =  parseInt(diasPedidos.toFixed(3));

}
function inicio(){
    document.form.primer.value = 2;
    document.form.segundo.value = 2000;
    document.form.tercero.value = 5;
    document.form.cuarto.value = 0;

 };
 inicio();
buttomRelative.addEventListener('click',() => mostrar());

const goTo = id => {
    let top = document.getElementById(id).offsetTop - 20
    window.scroll({
        top,
        left: 0,
        behavior: 'smooth'
    })
  }
  const addListener = (handler, el) => document.getElementById(handler).addEventListener('click', () => goTo(el))
  
  addListener('goFunciona', 'comoFunciona')
  addListener('goAplicacion', 'aplicacionResultados')
  addListener('goContactos', 'contactoN')