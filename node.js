let index = 0;

show_slide = (i) => {
  // increment ou decrement slide
  index += i;

  // pegar imagens
  let images = document.getElementsByClassName('image');

  // pegar os pontinhos
  let dots = document.getElementsByClassName('dot');

  // esconder as imagens
  for (let i = 0; i < images.length; i++){
    images[i].style.display = 'none';
  }

  // remover a classe active do dot
  for (i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "")
  }

  // se o index for maior que as imagens volta pro zero
  if (index > images.length - 1){
    index = 0;
  }

  // se o index for menor que zero, coloque ele de acordo com a length das images
  if (index < 0){
    index = images.length -1;
  }


  // só vai mostrar a imagem que é a proxima ou a de antes
  images[index].style.display = "block";
  // só vai fazer o dot que está active ficar cinza escuro
  dots[index].className += " active";
}

window.addEventListener("load", () => show_slide(index));