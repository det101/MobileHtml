/**
 * Created by luxiaolong on 2016/1/18.
 */
function ProgressBar(sp)
{
    this.sp = sp;

    var self = this;
    this.isMouseDown = false;
    var slider1 = sp.slider;

    var playBar = sp.playBar;
    //playBar.mouseEnabled = false;

    var seekBarBg = sp.seekBarBg;
    slider1.on("pressmove",pressMove);
    slider1.on("mousedown",onMouseDown);
    seekBarBg.on("click",onSeekClick);

    function onSeekClick(evt)
    {
        var pt = seekBarBg.globalToLocal(evt.stageX, evt.stageY);
        var value = pt.x/seekBarBg.nominalBounds.width;
        $(self).trigger("slider_seek",value)
    }

    function onMouseUp()
    {
        slider1.stage.off("stagemouseup",onMouseUp);
        console.log("mouseup")
        self.isMouseDown = false;
        var rect = sp.nominalBounds;
        var value =slider1.x/rect.width;
        $(self).trigger("slider_seek",value)
    }

    function onMouseDown()
    {
        slider1.stage.on("stagemouseup",onMouseUp);
        self.isMouseDown = true;
        console.log("mousedown")
    }

    function pressMove(evt){
        var pt = sp.globalToLocal(evt.stageX, evt.stageY)
        var rect = sp.nominalBounds;
        if(pt.x<0)
        {
            pt.x = 0;
        }
        else if(pt.x>rect.width)
        {
            pt.x =rect.width;
        }

        slider1.set({x:pt.x})
        var bounds = playBar.body.nominalBounds;
        playBar.body.scaleX= (pt.x)/bounds.width;
        playBar.tail.x = slider1.x;
       // var value = pt.x/rect.width;
       // $(_self).trigger("Test",[value])
    }
}

ProgressBar.prototype.changeProgress= function(time,duration)
{
    if(!this.isMouseDown)
    {
        var rect = this.sp.nominalBounds;
        var slider1 =  this.sp.slider;
        var scale = time / duration;

        slider1.x = scale*rect.width;
        var bounds = this.sp.playBar.body.nominalBounds;
        this.sp.playBar.body.scaleX= (slider1.x)/bounds.width;
        this.sp.playBar.tail.x = slider1.x;
    }
}


