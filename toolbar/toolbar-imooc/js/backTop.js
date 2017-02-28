define(['jquery', 'scrollTo'], function($, ScrollTo) {
    function BackTop(el, opts) {
        this.opts = $.extend({}, BackTop.DEFAULTS, opts);
        this.$el = $(el);
        this.scrollTo = new ScrollTo({
            dest: 0,
            speed: this.opts.speed
        });
        this.checkPos();

        if(this.opts.mode === 'move') {
            this.$el.on('click', $.proxy(this.move, this));
        }else if(this.opts.mode === 'go') {
            this.$el.on('click', $.proxy(this.go, this));
        }
        $(window).on('scroll', $.proxy(this.checkPos, this));
    }

    BackTop.DEFAULTS = {
        mode: 'move',
        speed: 800,
        pos: $(window).height()
    };
    BackTop.prototype.move = function () {
        this.scrollTo.move();
    };
    BackTop.prototype.go = function () {
        this.scrollTo.go();
    };
    BackTop.prototype.checkPos = function () {
        var $el = this.$el;

        if($(window).scrollTop() > this.opts.pos) {
            $el.fadeIn();
        }else {
            $el.fadeOut();
        }
    };

    $.fn.extend({
        backTop: function (opts) {
            return this.each(function () {
                new BackTop(this, opts);
            });
        }
    });

    return BackTop;

});
