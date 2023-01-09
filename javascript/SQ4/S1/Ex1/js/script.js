function zoom() {
    $('img').css('height', '100vh');
    $('#zoom').attr('disabled', 'disabled');
    $('#dezoom').removeAttr('disabled');
}

function dezoom() {
    $('img').css('height', '25vh');
    $('#dezoom').attr('disabled', 'disabled');
    $('#zoom').removeAttr('disabled');
}

function keyHandler(e) {
    let appui = e.which || e.keyCode;
    if (appui == 187 || appui == 107) {
        zoom();
    } else if (appui == 54 || appui == 109) {
        dezoom();
    }
}

function eventHandler() {
    $('#zoom').click(function() {
        zoom();
    });

    $('#dezoom').click(function() {
        dezoom();
    });

    $(document).ready(function() {
        $('#chargement').hide();
        $('#contenu').show();
    });

    $(document).keydown(keyHandler);
}
eventHandler();