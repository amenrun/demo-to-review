;(function(){
    // 页面初始化
    var panelWidth = $('.panel').width(),
        panelHeight = $('.panel').height();
    $('.panel div[id^="panel-"]').css('width',panelWidth).css('height',panelHeight);
    var bookScroll = new IScroll('.panel-book', {
        click: true, // 允许鼠标点击事件
        scrollX: false,
        scrollY: true, // 禁止纵向滚动
        tap: true // 没有滚动时触发的事件
    });
    var panelScroll = new IScroll('.panel', {
        bounce: false, // 禁止到达容器边缘的反弹效果
        click: true, // 允许鼠标点击事件
        scrollX: true,
        scrollY: false, // 禁止纵向滚动
        tap: true, // 没有滚动时触发的事件
        snap: true,
        probeType: 3
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
                    panelScroll.scrollToElement('#panel-book');
                    break;
                case 1:
                    console.log('activity');
                    panelScroll.scrollToElement('#panel-activity');
                    break;
                case 2:
                    console.log('personal');
                    panelScroll.scrollToElement('#panel-personal');
                    break;
                // 不设置default操作
            }
        });
    });

}());
