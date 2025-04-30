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

var nome = player.GetVar("Nome");
var email = player.GetVar("Email");
var instituicao = player.GetVar("Instituicao");
var desempenho = player.GetVar("Desempenho");

console.log("Nome:", nome);
console.log("Email:", email);
console.log("Instituição:", instituicao);
console.log("Desempenho:", desempenho);

var url = "https://docs.google.com/forms/d/e/1FAIpQLSe4i50Rq7hDqomKd1g4Fk-6iEtYYzX_utqqkD-rBJKwHMs1eg/viewform?usp=pp_url" +
          "&entry.1252185723=" + encodeURIComponent(nome) +
          "&entry.1438357341=" + encodeURIComponent(email) +
          "&entry.935022108=" + encodeURIComponent(instituicao) +

console.log("URL gerada:", url);
window.open(url, "_blank");
}

};
