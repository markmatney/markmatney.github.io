$(window).load(function() {
    $('h1').lettering();
    var lastWidth;
    var lastRotation = -69;

    var calculateRotation = function(base, offset) {
        return base + offset / 2;
    };

    $('h1').children().each(function(index) {

        var width = $(this).width();

        var newRotation = calculateRotation(
            lastRotation ? lastRotation : 0,
            lastWidth ? lastWidth : 0
        );
        console.log(this, lastRotation, lastWidth);
        
        $(this).css('transform', 'rotate(' + newRotation + 'deg)');
        lastWidth = width ? width : 15;
        lastRotation = newRotation;
    });
});
