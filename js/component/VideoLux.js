/**
 * Created by luxiaolong on 2016/1/15.
 */
function VideoLux($myVideo)
{
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
}
