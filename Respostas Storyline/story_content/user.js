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

fetch("https://script.google.com/a/macros/omie.com.br/s/AKfycbyPFzY3zhCj9sTBMiPIoUPekqYo1G3iF_j-job9ewgh2e_Mn2JRTLGo3jU-UWVCDC_p/exec", {
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
});

}

};
