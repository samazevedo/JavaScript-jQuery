$('#growbox').click(function () {
    $('#box').animate({ width: '500px', height: '500px' })
})
$('#growtext').click(function () {
    $('#box').animate({ fontSize: '40px' })
})
$('#movebox').click(function () {
    $('#box').animate({ left: '+=100px' }, 3000)
})
$('#doall').click(function () {
    $('#box').animate(
        {
            left: '-=100px',
            width: '-=300px',
            height: '-=250px',
            fontSize: '-=20px',
        },
        1000
    )
})
