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
  var nome = GetPlayer().GetVar("Nome");       // Nome da variável no Storyline
var email = GetPlayer().GetVar("Email");     // Nome da variável no Storyline
var instituicao = GetPlayer().GetVar("Instituicao");  // Nome da variável no Storyline

var formUrl = 'https://script.google.com/a/macros/omie.com.br/s/AKfycbzq3WGGHhMbD5Pgv-PY_2TyaM-BHYiM1bdBiGO4sbPW3e0b3I0HBSc3oJlQ-Cwzcbb7Aw/exec';  // A URL do script gerado

var formData = {
  'entry.1252185723': nome,         // Nome do usuário
  'entry.1438357341': email,        // E-mail do usuário
  'entry.796108511': instituicao    // Instituição do usuário
};

// Enviar os dados usando a URL e método POST
var options = {
  'method': 'post',
  'payload': formData
};

fetch(formUrl, options)
  .then(response => {
    if (response.ok) {
      console.log('Dados enviados com sucesso');
    } else {
      console.log('Erro ao enviar dados');
    }
  })
  .catch(error => console.error('Erro de rede:', error));


}

};
