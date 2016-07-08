require("../css/swiper.css");
require("../css/index.css");

var Swiper = require("./swiper");



(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // autoplay: 3000,
        onSlideChangeStart: function (swiper) {
            var index = swiper.activeIndex,
                cat = document.querySelector('.cat');
            if(index === 3) {
                cat.classList.add('hide');
            }else {
                cat.classList.remove('hide');
            }
        }
    });

    //判断访问终端
    var browser={
        versions: (function(){
            var u = navigator.userAgent, 
                app = navigator.appVersion;

            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
                iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        })(),
        url: {
            android: "http://www1.pclady.com.cn/app/mdxy/mdktApp/modern.apk",
            ios: "https://itunes.apple.com/cn/app/id1102356328?mt=8",
            weixin: "http://a.app.qq.com/o/simple.jsp?pkgname=cn.com.pclady.modern"
        }
    }
    
    var button, downUrl, ivyClickCount,
        masker, versions, url, hasClick;

    button = document.querySelector("#JButton");
    versions = browser.versions,
    url = browser.url;

    // 微信浏览器
    if(versions.weixin){
        masker = document.querySelector(".masker");

        if (versions.ios || versions.iPad || versions.iPhone) {
            ivyClickCount = 113;                        // 微信的IOS
        }else {
            ivyClickCount = 114;                        // 微信的安卓
        }

        button.onclick = function(){
            if(!hasClick) {                             // 第一次点击按钮才会统计数据
                ivyClick(ivyClickCount);
                hasClick = true;                        // 点击后会变量hasClick会设置为true，表示已经统计过
            }
        }
        button.href = url.weixin;                       
    }else {
        // 非微信浏览器
        if (versions.ios || versions.iPad || versions.iPhone) {  
            downUrl = url.ios;                              // 非微信的IOS
            ivyClickCount = 111;
        }else{
            downUrl = url.android;                          // 非微信的安卓
            ivyClickCount = 112;
        }

        button.href = downUrl;

        button.onclick = function () {
            ivyClick(ivyClickCount);
        }
    }

    function ivyClick(id){
        var _script = document.createElement("script");
        _script.type = "text/javascript";
        _script.src = "http://count.pclady.com.cn/count.php?channel=" + id + "&screen="+ screen.width + "*" + screen.height+"&refer="+encodeURIComponent(document.referrer)+"&anticache="
        +new Date().getTime()+"&url="+encodeURIComponent(location.href)+"&from=event";  
        document.getElementsByTagName("head")[0].appendChild(_script);
    }
    setTimeout(function () {
        wxApi.init(function () {
            var shareData = {
                title: '下载摩登课堂，进阶你我时尚！',
                desc:'一个有趣、实用的时尚美妆视频直播教学轻互动平台。',
                link: 'http://www1.pclady.com.cn/app/mdxy/pr20160527/index.html?ad=10748',
                imgUrl: 'http://www1.pclady.com.cn/app/mdxy/pr20160527/images/share-pic.png'
            };
            wx.onMenuShareAppMessage(shareData);// 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareTimeline(shareData);// 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareQQ(shareData);// 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareWeibo(shareData);// 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
        });
    }, 2000);
})();