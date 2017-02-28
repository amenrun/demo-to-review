requirejs.config({
    paths: {
        jquery: 'jquery-3.1.1.min'
    }
});

requirejs(['jquery', 'backTop'], function(BackTop) {
    // new BackTop('backTop', {
    //     mode: 'go',
    //     speed: 800
    // });

    $('#backTop').backTop({
        mode: 'move',
        speed: 800
    });
});
