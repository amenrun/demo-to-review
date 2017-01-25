;(function(){
    // 页面初始化
    var panelWidth = $('.panel').width(),
        panelHeight = $('.panel').height();
    $('.panel div[id^="panel-"]').css('width',panelWidth).css('height',panelHeight);
    var scrollErrorFn = function() {
        console.log('滚动失败了')
    };
    var scroll = new IScroll('.panel', {
        bounce: false, // 禁止到达容器边缘的反弹效果
        click: true, // 允许鼠标点击事件
        freeScroll: true, // 允许二维同时滚动
        scrollY: false, // 禁止纵向滚动
        tap: true, // 没有滚动时触发的事件
        hScrollbar:false,
        vScrollbar:false,
        vScroll:false,
        snap:true,
        probeType:3,
        onBeforeScrollStart: function ( e ) {
            if ( this.absDistX > (this.absDistY + 5 ) ) {
                e.preventDefault();
            }
        },
        //解决第一次无法滑动的问题
        onTouchEnd: function () {
            var self = this;
            if (self.touchEndTimeId) {
               clearTimeout(self.touchEndTimeId);
            }
            self.touchEndTimeId = setTimeout(function () {
                self.absDistX = 0;
                self.absDistY = 0;
            }, 600);
        }
    });
    $('.weui-tabbar__item').eq(0).addClass('weui-bar__item_on').siblings().removeClass('weui-bar__item_on');
    // 在页面内点击底部菜单时，才需要触发的操作
    $('.weui-tabbar__item').each(function(index) {
        $(this).on('click', function () {
            // 改变高亮
            $(this).addClass('weui-bar__item_on').siblings().removeClass('weui-bar__item_on');
            // 显示对应内容
            switch(index) {
                case 0:
                    console.log('book');

                    break;
                case 1:
                    console.log('activity');

                    break;
                case 2:
                    console.log('personal');

                    break;
                // 不设置default操作
            }
        });
    });

}());
