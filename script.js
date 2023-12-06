function clicar() {
  const menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      
      
      
      document.querySelector('.icon').src = "banco-de-imagens/burger.svg";
      menuMobile.style.transition = "1s"
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "banco-de-imagens/xeez.svg";
  }
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  for(let i = 0; i < textoArray.length; i++) {
    setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
  }
}

const titulo = document.querySelector('.titulo');
typeWriter(titulo);

