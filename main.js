let contador = 0;

function sumarContador(){
  contador++;
  document.querySelector('.contador-numero').textContent = contador;
  addEventListener('click', sumarContador);
}

function restarContador(){
  contador--;
  document.querySelector('.contador-numero').textContent = contador;
  addEventListener('click', restarContador);
}