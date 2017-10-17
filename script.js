/*
var p = document.createElement('p');
var text = document.createTextNode('Mon super texte');
// p.innerHTML = 'Montext';

p.appendChild(text);

var content = document.getElementById('content');
content.appendChild(p);

var body = document.getElementsByTagName('body');
console.log(body);

body[0].appendChild(text);

var a = new Array([1]);
var b = a;

a[0] = 20;

console.log(b);


var $ = "hello";
console.log($);
*/



$(document).ready(function() {
  function colorTasks() {
    $('li:even').css('backgroundColor', '#8DE6DB');
  }

  // $("#content").text("Mon texte");
  $("#content").append("Mon texte");

  var text = $('#task');
  text.on('keypress', function(event) {
    if(event.keyCode === 13) {
      console.log(text.val());

      var li = $(document.createElement('li'));
      li.text(text.val());
      li.hide().appendTo('#nav').slideDown(1000);

      text.val(''); //Vide le champ du formulaire après l'entrée
      colorTasks();
    }
  });

  var list = $('li:odd'); //odd ou even
  list.css('backgroundColor', 'yellow');

  console.log(list);

  $('.active').css('backgroundColor', 'blue');
  $('.active').hover(function() {
    $(this).addClass('hover');
    $(this).css('backgroundColor', 'green');
  }, function() {
    $(this).css('backgroundColor', 'aquamarine')
  });

  $('li:even').css('backgroundColor', 'yellow');

  $('#nav').on('click', 'li', function() {
    var li = $(this);

    if (li.css('backgroundColor') === 'yellow') {
      li.css('backgroundColor', '');
    } else {
      li.css('backgroundColor', 'red');
    }
  });

  $('#nav li i').on('click', function() {
    $(this).parent().remove();
  });
});
