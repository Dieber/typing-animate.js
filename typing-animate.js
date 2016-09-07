    function Input(){
        this.str = "";
        this.count = 0;
        this.query = null;
        this.timer = 0;
        this.interval = 0;
        this.callback = null;
    }

    Input.prototype.init = function (str,timer,query,callback) {
        this.str = str;
        this.timer = timer;
        this.makeTimer();
        this.query = query;
        this.callback = callback;
    };

    Input.prototype.makeTimer = function () {
        var This = this;
        var cnt = 0;
        this.interval = setInterval(function () {
            if(This.query[cnt] == -1){
                $("span").last().remove();
            }
            if(This.count  == This.query[cnt]){
                $(".typing-animate").append("<span>"+This.str.charAt(cnt)+"</span>");
                cnt++;
            }
            This.count++;
            if(This.count % 2 == 0) {
                $(".typing-animate").append("<span id='cursor'>▍</span>");
            }
            else if(This.count % 2 == 1){
                $("#cursor").remove();
            }
            if(cnt >= This.str.length){
                setTimeout(function () {
                    clearInterval(This.interval);
                    $("#cursor").remove();
                    This.callback();
                },1000);
            }
        },This.timer);
    };