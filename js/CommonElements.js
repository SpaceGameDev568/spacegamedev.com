// https://stackoverflow.com/a/31837264/19932427

$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = '/elements/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})