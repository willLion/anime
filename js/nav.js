$(function () {
    // 初始化导航栏样式
    function initNav() {
        let str = window.location.search;
        //将返回的字符串以=分割
        let a = str.split("=");
        let index = a[1];
        let ul = $('#select-sort')
        for (let j = 0; j < ul.children().length; j++) {
            ul.children().eq(j).find('a').css({
                color: '#337ab7',
                backgroundColor: 'transparent'
            })
        }
        ul.children().eq(index).find('a').css({
            color: '#fff',
            backgroundColor: '#337ab7'
        })

        for (let i = 0; i < ul.children().length; i++) {
            ul.children().eq(i).on('click', () => {

                for (let j = 0; j < ul.children().length; j++) {
                    ul.children().eq(j).find('a').css({
                        color: '#337ab7',
                        backgroundColor: 'transparent'
                    })
                }

                ul.children().eq(i).find('a').css({
                    color: '#fff',
                    backgroundColor: '#337ab7'
                })

                // 不点击首页，进行url传递参数
                if (i != 0) {
                    ul.children().eq(i).find('a').attr('href', ul.children().eq(i).find('a').attr('href') + '?index=' + i)
                }


            })
        }
    }

    initNav()
})