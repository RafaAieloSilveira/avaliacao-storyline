window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var player = GetPlayer();

var nome = player.GetVar("NomeAluno");
var instituicao = player.GetVar("Instituicao");
var email = player.GetVar("Email");
var acertos = player.GetVar("Acertos");
var erros = player.GetVar("Erros");

fetch("https://script.google.com/a/macros/omie.com.br/s/AKfycbxfjxszda_CrGEkKmonD_yszpf_rqK9M1bXXn7ojGS66FhHJV73fxNcHgEGtu3T9Qen/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nome: nome,
    instituicao: instituicao,
    email: email,
    acertos: acertos,
    erros: erros
  })
})
.then(response => response.text())
.then(data => console.log("Resposta do servidor:", data))
.catch(error => console.error("Erro ao enviar dados:", error));

}

};
