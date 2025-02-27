let amigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let lista = document.getElementById("lista-amigos");

  if (amigo.value == "") {
    alert("Por favor, digite um nome de amigo.");
    return;
  }

  if (amigos.includes((amigo.value).toUpperCase())) {
    alert("Você já adicionou este amigo.");
    return;
  }

  amigos.push((amigo.value).toUpperCase());

  if (lista.textContent == "") {
    lista.textContent = amigo.value;
  } else {
    lista.textContent = lista.textContent + ", " + amigo.value;
  }

  amigo.value = "";
}

function sortear() {
  embaralha(amigos);
  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length -1 ) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + "--> " + amigos[0] + "<br>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + "--> " + amigos[i + 1] + "<br>";
    }
  }
}

function embaralha(lista) {
  for (let indice = lista.lenght; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    //Atribuição via destructing
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}


function reiniciar(){

    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";

}