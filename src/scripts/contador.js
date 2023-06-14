function getCookie(nombre) {
    const name = `${nombre}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
  
  function setCookie(nombre, valor, dias) {
    const d = new Date();
    d.setTime(d.getTime() + dias * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${nombre}=${valor}; ${expires}; path=/`;
  }
  
  function incrementarContador() {
    const contadorElement = document.querySelector(".counter");
    const spans = contadorElement.querySelectorAll("span");
  
    let contador = parseInt(spans[5].innerText + spans[4].innerText + spans[3].innerText + spans[2].innerText + spans[1].innerText + spans[0].innerText);
  
    if (isNaN(contador)) {
      contador = 0;
    }
  
    contador++;
  
    const contadorString = contador.toString().padStart(6, "0");
    for (let i = 0; i < contadorString.length; i++) {
      spans[i].innerText = contadorString[i];
    }
  
    setCookie("contadorVisitas", contador, 365);
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const contadorElement = document.querySelector(".counter");
    const spans = contadorElement.querySelectorAll("span");
  
    const contadorVisitas = parseInt(getCookie("contadorVisitas"));
  
    if (!isNaN(contadorVisitas)) {
      const contadorString = contadorVisitas.toString().padStart(6, "0");
      for (let i = 0; i < contadorString.length; i++) {
        spans[i].innerText = contadorString[i];
      }
    } else {
      for (let i = 0; i < spans.length; i++) {
        spans[i].innerText = "0";
      }
    }
  
    incrementarContador();
  });
  