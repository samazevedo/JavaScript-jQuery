$('#slideup').click(function () {
    $('#articlebox').slideUp('slow') // normal fast slow or 2000
})
$('#slidedown').click(function () {
    $('#articlebox').slideDown('fast')
})
$('#slidetoggle').click(function () {
    $('#articlebox').slideToggle(1000, 'easeOutBounce')
})
