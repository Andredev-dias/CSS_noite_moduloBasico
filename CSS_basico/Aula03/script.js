function abrir() {
  var modal = document.getElementById("modal");
  modal.style.display = "flex";
}

function fecharModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function fecharAlert() {
  var alert = document.getElementById("alert");
  alert.style.display = "none";
}

function enviar(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const assunto = document.getElementById("msg").value;
  const alert = document.getElementById("alert");
  alert.style.display = "none";
  document.getElementById("nome").style.background = "#ffffff";
  document.getElementById("msg").style.background = "#ffffff";

  if (!nome || !assunto) {
    alert.style.display = "flex";
    document.getElementById("nome").style.background = "lightpink";
    document.getElementById("msg").style.background = "lightpink";
    return;
  }

    const mensagem = `Gostaria de entrar em contato!!! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    window.location.href = `https://wa.me/55999999999?text=${msg}`
}
