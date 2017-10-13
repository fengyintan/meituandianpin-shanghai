var loading = {
    show: function() {
        document.getElementById("loading").className = "";
    },
    close: function() {
        document.getElementById("loading").className = "hidden";
    }
}
var vm = new Vue({
    el: "#app",
    data: {
        nowPage: 1,
        pageLimit: 6,
        pageState1: false,
        pageState2: false,
        pageState3: false,
        pageState4: false,
        pageState5: false,
        pageState6: false,
        pageState7: false,
        pageState8: false,
        transClass: "ds",
        page1: {
            child1: false,
            child2: false,
            child3: false,
        },
        page2: {
            child1: false,
            child2: false,
            child3: false,
        },
        page3: {
            child1: false,
        },
        page4: {
            child1: false,
            child2: false,
            child3: false,
        },
        page5: {
            child1: false,
            child2: false,
        },
        page6: {
            child1: false,
            child2: false,
            child3: false,
            child4: false,
        },
        page7: {
            child1: false,
        },
        page8: {
            child1: false,
        },
        ubrand: "",
        uposition: "",
        uname: "",
        utel: "",
        uemail: '',
        warningState: false,
        warningText: "",
        clickState: 0,
    },
    methods: {
        doReg: function() {
            if (this.clickState == 0) {
                var reg = /^1[3-9]\d{9}$/;
                var reg2 = /^\s*$/;
                if (!this.ubrand || reg2.test(this.ubrand)) {
                    this.warning("请输入品牌！");
                } else if (!this.uposition || reg2.test(this.uposition)) {
                    this.warning("请输入职位！");
                } else if (!this.uname || reg2.test(this.uname)) {
                    this.warning("请输入姓名！");
                } else if (!reg.test(this.utel)) {
                    this.warning("请输入正确的手机号！");
                } else if (!this.uemail || reg2.test(this.uemail)) {
                    this.warning("请输入邮箱！");
                } else {
                    //                  this.nowPage++;  //测试
                    this.clickState = 1;
                    var url = "api.php?type=action&action=reg";
                    var formData = new FormData();
                    formData.append('brand', this.ubrand);
                    formData.append('position', this.uposition);
                    formData.append('name', this.uname);
                    formData.append('mobile', this.utel);
                    formData.append('email', this.uemail);
                    loading.show();
                    this.$http.post(url, formData).then(function(response) {
                        this.clickState = 0;
                        loading.close();
                        console.log(response.body)
                        if (response.body.state == "1") { //注册成功
                            this.nowPage++;
                        } else if (response.body.state == "-1") { //品牌错误
                            this.warning(response.body.msg);
                        }
                    }, function(response) {
                        this.clickState = 0;
                        loading.close();
                        this.warning("网络错误,请重试!")
                    });
                }
            }
        },
        warning: function(msg) {
            this.warningState = true;
            this.warningText = msg;
            var self = this;
            setTimeout(function() {
                self.warningState = false;
            }, 2000);
        },
        jsSdk: function() {
            var url = "api.php?type=action&action=jssdk";
            var formData = new FormData();
            formData.append('jssdk_url', location.href);
            this.$http.post(url, formData).then(function(response) {
                wxConfig(response.body);
            }, function(response) {});
        }
    },
    watch: {
        nowPage: function(newVal, oldVal) {
            this.pageState1 = false;
            this.pageState2 = false;
            this.pageState3 = false;
            this.pageState4 = false;
            this.pageState5 = false;
            this.pageState6 = false;
            this.pageState7 = false;
            this.pageState8 = false;
            switch (newVal) {
                case 1:
                    this.pageState1 = true;
                    break;
                case 2:
                    this.pageState2 = true;
                    break;
                case 3:
                    this.pageState3 = true;
                    break;
                case 4:
                    this.pageState4 = true;
                    break;
                case 5:
                    this.pageState5 = true;
                    break;
                case 6:
                    this.pageState6 = true;
                    break;
                case 7:
                    this.pageState7 = true;
                    break;
                case 8:
                    this.pageState8 = true;
                    break;
                default:
                    break;
            }
        },
        pageState1: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                for (var i = 0; i < 2; i++) {
                    setTimeout(function(i) {
                        return function() {
                            if (i == 0) {
                                self.page1.child3 = true;
                            } else if (i == 1) {
                                self.page1.child2 = true;
                            }
                        }
                    }(i), (i * 700 + 1000));
                }
            }
        },
        pageState2: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                for (var i = 0; i < 3; i++) {
                    setTimeout(function(i) {
                        return function() {
                            if (i == 0) {
                                self.page2.child1 = true;
                            } else if (i == 1) {
                                self.page2.child2 = true;
                            } else if (i == 2) {
                                self.page2.child3 = true;
                            }
                        }
                    }(i), (i * 300 + 1000));
                }
            }
        },
        pageState3: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                setTimeout(function() {
                    self.page3.child1 = true;
                }, 1000);
            }
        },
        pageState4: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                for (var i = 0; i < 3; i++) {
                    setTimeout(function(i) {
                        return function() {
                            if (i == 0) {
                                self.page4.child1 = true;
                            } else if (i == 1) {
                                self.page4.child2 = true;
                            } else if (i == 2) {
                                self.page4.child3 = true;
                            }
                        }
                    }(i), (i * 300 + 1000));
                }
            }
        },
        pageState5: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                for (var i = 0; i < 2; i++) {
                    setTimeout(function(i) {
                        return function() {
                            if (i == 0) {
                                self.page5.child1 = true;
                            } else if (i == 1) {
                                self.page5.child2 = true;
                            }
                        }
                    }(i), (i * 300 + 1000));
                }
            }
        },
        pageState6: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                for (var i = 0; i < 4; i++) {
                    setTimeout(function(i) {
                        return function() {
                            if (i == 0) {
                                self.page6.child1 = true;
                            } else if (i == 1) {
                                self.page6.child2 = true;
                            } else if (i == 2) {
                                self.page6.child3 = true;
                            } else if (i == 3) {
                                self.page6.child4 = true;
                            }
                        }
                    }(i), (i * 120 + 800));
                }
            }
        },
        pageState7: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                setTimeout(function() {
                    self.page7.child1 = true;
                }, 800);
            }
        },
        pageState8: function(newVal, oldVal) {
            var self = this;
            if (newVal == true) {
                setTimeout(function() {
                    self.page8.child1 = true;
                }, 800);
            }
        },
    },
    mounted: function() {
        this.jsSdk();
        this.pageState1 = true;
        var app = document.getElementById('app');
        var self = this;
        var mouseDown = 0;
        app.ontouchstart = function(e) {
            //  e.preventDefault();
            var target = e.touches[0];
            var y = target.clientY;
            var y2 = y;
            app.ontouchmove = function(e) {
                e.preventDefault();
                y2 = e.touches[0].clientY;
            };
            app.ontouchend = function() {
                //              alert(y)
                if (y - y2 > 50) {
                    self.transClass = "ds";
                    //                      alert("GO")
                    if (self.nowPage <= self.pageLimit) {
                        //                      alert("GO")
                        self.nowPage++;
                    }
                } else {
                    if (y2 - y > 50) {
                        self.transClass = "us";
                        //                      alert("GO")
                        if (self.nowPage > 1) {
                            //                      alert("GO")
                            self.nowPage--;
                        }
                    }
                }
            }
        }
        window.onmousedown = function(e) {
            //  e.preventDefault();
            //          var target=e.touches[0];
            var y = e.clientY;
            var y2 = 0;
            mouseDown = 0;
            window.onmousemove = function(e) {
                if (mouseDown == 0) {
                    e.preventDefault();
                    y2 = e.clientY;
                }
            };
            window.onmouseup = function() {
                mouseDown = 1;
                console.log(y)
                console.log(y2)
                //              alert(y)
                if (y - y2 > 50) {
                    y = 0;
                    y2 = 0;
                    self.transClass = "ds";
                    //                      alert("GO")
                    if (self.nowPage <= self.pageLimit) {
                        //                      alert("GO")
                        self.nowPage++;
                    }
                } else {
                    if (y2 - y > 50) {
                        y = 0;
                        y2 = 0;
                        self.transClass = "us";
                        //                      alert("GO")
                        if (self.nowPage > 1 && self.nowPage <= 7) {
                            //                      alert("GO")
                            self.nowPage--;
                        }
                    }
                }
            }
        }
    }
});
window.onload = function() {
    loading.close();
    audioAutoPlay("music");
    document.getElementById("loading").style.background = "rgba(255,255,255,0)"
    //  audioPlay();
}

function audioAutoPlay(id) {
    var audio1 = document.getElementById("audio1");
    var audio = document.getElementById(id),
        play = function() {
            audio.play();
            audio1.className = "active";
            document.removeEventListener("touchstart", play, false);
        };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function() {
        play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        play();
    }, false);
    document.addEventListener("touchstart", play, false);
}
//音频播放
function audioPlay() {
    var audio = document.getElementById("music");
    var audio1 = document.getElementById("audio1");
    if (audio.paused) {
        audio.play();
        audio1.className = "active";
    } else {
        audio.pause();
        audio1.className = "";
    }
}

function wxConfig(jssdkInfo) {
    window.bigfoot = window.bigfoot | {
        jssdk_info: jssdkInfo
    };
    var shareImg = 'common/assets/img/wx_share.jpg';
    var shareInfo = {
        title: document.title,
        des: document.title,
        link: location.href,
        image: location.protocol + '//' + location.hostname + location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1) + shareImg
    }
    wx.config({
        debug: false,
        appId: jssdkInfo.appid,
        timestamp: jssdkInfo.timestamp,
        nonceStr: jssdkInfo.nonce_str,
        signature: jssdkInfo.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });
    wx.ready(function() {
        wx.onMenuShareTimeline({
            title: shareInfo.title, // 分享标题
            link: shareInfo.link, // 分享链接
            imgUrl: shareInfo.image, // 分享图标
            success: function() {},
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareAppMessage({
            title: shareInfo.title, // 分享标题
            desc: shareInfo.des, // 分享描述
            link: shareInfo.link, // 分享链接
            imgUrl: shareInfo.image, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
                // 用户确认分享后执行的回调函数
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        });
    });
    wx.error(function(res) {});
};