/**
 * Created by luxiaolong on 2015/12/28.
 */
$(document).ready(function () {

    console.log(~2016);
    var $myVideo =  $("#player");
    var myVideo = $myVideo.get(0);

    var $bar = $(".bar");
    var bar = $bar.get(0);

    var $play_btn = $(".play_button");
    var $pause_btn = $(".pause_button");
    $pause_btn.hide();

    var $progress = $(".progress");
    var progress = $progress.get(0);

    var timeTxt = $("#time")[0];

    var timeId = 0;

    var duration = 0;

    var isMouseDown = false;


    $play_btn.click(function () {
        $play_btn.hide();
        $pause_btn.show();
        console.log("点击播放")
        myVideo.play();
    });

    $pause_btn.click(function () {
        $pause_btn.hide();
        $play_btn.show();

        myVideo.pause();
    });
    $myVideo.bind("play",function () {
        timeId = setInterval(function(){
                timeTxt.innerHTML = formatTime(myVideo.currentTime)+"/"+duration;
                if(!isMouseDown)
                {
                    $progress.width(myVideo.currentTime/myVideo.duration*480);
                }
            }, 33
        );
    });

    $myVideo.bind("ended", function () {
        $pause_btn.hide();
        $play_btn.show();
    })

    $myVideo.bind("durationchange", function () {
        duration = formatTime(myVideo.duration);
        console.log("当前时间"+myVideo.duration)
    })

    function formatTime(seconds) {
        var min = Math.floor(seconds / 60),
            second = seconds % 60,
            hour, newMin, time;
        second = Math.floor(second);
        if (min > 60) {
            hour = Math.floor(min / 60);
            newMin = min % 60;
        }

        if (second < 10) { second = '0' + second;}
        if (min < 10) { min = '0' + min;}

        return time = hour? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
    }

    $myVideo.bind("loadedmetadata", function (data) {
        var str = "";
        for(var i in data)
        {
            str+= i+":"+data[i]+"\n";
        }
        console.log(data);
    });

    $myVideo.bind("ended", function () {
        clearInterval(timeId);
    });

    //$bar.click(barClick);
    $bar.bind("mousedown",barmouseDown);

    function barmouseUp(e)
    {
        isMouseDown = false;
        bar.releaseCapture && bar.releaseCapture();
       $(document).unbind("mousemove",mouseMove).unbind("mouseup",barmouseUp);;
        var positionX=e.pageX-$bar.offset().left; //获取当前鼠标相对img的X坐标
        var positionY=e.pageY-$bar.offset().top; //获取当前鼠标相对img的Y坐标
        console.log("鼠标弹起，移除事件");

        var time = positionX / $bar.width() * myVideo.duration;
        console.log(time,positionX , $bar.width(),myVideo.duration);
        myVideo.currentTime = time;
    }



    function barmouseDown(e)
    {
        console.log("鼠标按下，添加事件");
        bar.setCapture && bar.setCapture();
        $(document).bind("mouseup",barmouseUp).bind("mousemove",mouseMove);

        isMouseDown = true;
        var positionX=e.pageX-$(this).offset().left; //获取当前鼠标相对img的X坐标
        var positionY=e.pageY-$(this).offset().top; //获取当前鼠标相对img的Y坐标
        $progress.width( positionX);
    }

    function mouseMove(e)
    {
       // e.stopImmediatePropagation();
        //e.stopPropagation();
        if(isMouseDown)
        {
            console.log("鼠标移动");
            updateProgress(e);

            return false;
        }

    }

    function updateProgress(e)
    {
        var positionX=e.pageX-$bar.offset().left; //获取当前鼠标相对img的X坐标
        if(positionX<0)
        {
            positionX = 0;
        }
        else if(positionX>$bar.width())
        {
            positionX = $bar.width();
        }
        $progress.width(positionX);
    }

    //myVideo.play();
});
