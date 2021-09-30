$('#hidebox').click(function () {
    $('#articlebox').hide('slow') // normal fast slow or 2000
})
$('#showbox').click(function () {
    $('#articlebox').show('fast')
})
$('#togglebox').click(function () {
    $('#articlebox').toggle(1000, function () {
        alert('done')
    })
})
