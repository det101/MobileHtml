/**
 * Created by luxiaolong on 2016/1/15.
 */
$(document).ready(function ()
{
    var canvas, stage, exportRoot,$myVideo;
    var statue = 0; //0是未播放  1是播放中 2播放完成 3是loading
    $myVideo = $("#player");
    var myVideo = $myVideo[0];
    var duration;
    var arr = [];
    var displayTime;    //时间
    var _timeId = 0;
    var isMouseDown = false;
    initView();

    myVideo.src = 'http://static.show.pps.tv/echo-hereweare.mp4';

    var progress = new ProgressBar(exportRoot.player_progress);
    progress.changeProgress(0,1);
    var volume = new Volume(exportRoot.player_volume);
    $(progress).bind("slider_seek",onSeekFun);
    $(volume).bind("VolumeChange",volumeChange);
    //progress.changeProgress(0,1);
    function initView()
    {
        canvas = $(document)[0].getElementById("canvas");
        exportRoot = new lib.playerres();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        stage.enableMouseOver();

        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);

        displayTime = exportRoot.playerBg.displayTime;
        arr.push(exportRoot.playerBg.triggerBtn.playBtn);
        arr.push(exportRoot.playerBg.triggerBtn.pauseBtn);
        arr.push(exportRoot.playerBg.triggerBtn.replayBtn);
        arr.push(exportRoot.playerBg.triggerBtn.loadingBtn);

        init(exportRoot.playerBg.triggerBtn.playBtn,true);







    }

    function volumeChange(evt,data)
    {
        myVideo.volume = data;
    }
    /**
     * 播放区域的4个状态按钮更新
     * @param sp
     * @param value
     */
    function init(sp,value)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(sp==arr[i])
            {
                arr[i].visible = value;
            }
            else
            {
                arr[i].visible = !value;
            }
        }

        $(exportRoot.playerBg).bind("click",onPlayAreaClick);
    }

    function onPlayAreaClick(e)
    {
        var index = arr.indexOf(e.target);
        if(index==-1)return;
        switch(index)
        {
            case 0:
                myVideo.play();
                statue = 1;
                break;
            case 1:
                statue = 0;
                myVideo.pause();
                break;

            case 2:
                statue = 1;
                myVideo.play();
                break;

            default:
                break;
        }

        changeStatue();
    }

    /**
     * 改变播放按钮区域的显示状态
     */
    function changeStatue()
    {

        var sp;
        switch(statue)
        {
            case 0:
                sp = exportRoot.playerBg.triggerBtn.playBtn;
                break;
            case 1:
                sp =  exportRoot.playerBg.triggerBtn.pauseBtn;
                break;

            case 2:
               sp =  exportRoot.playerBg.triggerBtn.replayBtn;
                break;

            default:
                sp = exportRoot.playerBg.triggerBtn.loadingBtn;
                break;
        }

        init(sp,true);
    }

    function onSeekFun(e,data)
    {
        console.log(data);
        myVideo.currentTime = data*myVideo.duration;
    }


    $myVideo.bind("waiting",function(e){
        console.log("waiting",myVideo.buffered.length);
        for(var i=0;i<myVideo.buffered.length;i++)
        {
            console.log(myVideo.buffered.start(i)+"-"+myVideo.buffered.end(i));
        }
        statue = 3;
        changeStatue();


    })
    $myVideo.bind("playing",function () {
        statue = 1;
        changeStatue();
        console.log("playing",myVideo.buffered.length);
        for(var i=0;i<myVideo.buffered.length;i++)
        {
            console.log(myVideo.buffered.start(i)+"-"+myVideo.buffered.end(i));
        }
        _timeId = setInterval(function(){
                displayTime.text = formatTime(myVideo.currentTime)+"/"+duration;
                if(!isMouseDown)
                {
                    progress.changeProgress(myVideo.currentTime,myVideo.duration)
                   // $progress.width(myVideo.currentTime/myVideo.duration*480);
                }
            }, 33
        );
    });

    $myVideo.bind("empty", function () {
        if(statue==3)
        {
            statue = 1;
            changeStatue();
        }

        console.log("empty",e);
    });

    $myVideo.bind("onplay", function (e) {
        console.log("onplay",e);
    });

    $myVideo.bind("onreadystatechange",function()
    {
        console.log("onreadystatechange",e);
    })

    $myVideo.bind("ended", function () {
        statue = 2;
        changeStatue();
    })

    $myVideo.bind("durationchange", function () {
        console.log("时间改变");
        duration = formatTime(myVideo.duration);
        console.log("当前时间"+myVideo.duration)
    });

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
        clearInterval(_timeId);
    });
})

