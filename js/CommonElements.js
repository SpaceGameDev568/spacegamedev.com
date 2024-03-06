// https://stackoverflow.com/a/31837264/19932427

//$(function () {
//  var includes = $('[data-include]')
//  $.each(includes, function () {
//    var file = 'elements/' + $(this).data('include') + '.html'
//    $(this).load(file)
//  })
//})

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(function(element) {
    const file = 'elements/' + element.getAttribute('data-include') + '.html';
    fetch(file)
        .then(response => {
          if (!response.ok) {
            throw new Error('File not found');
          }
          return response.text();
        })
        .then(html => {
          element.innerHTML = html;
        })
        .catch(error => {
          element.innerHTML = 'Page not found.';
        });
  });
});