/**
 * Created by luxiaolong on 2016/1/15.
 */
function Volume($sp)
{
    var _self = this;
    this.sp = $sp;
    var isMouseDown = false;
    this.sp.speaker.gotoAndStop(1);

    var volumeValue = 0.5;

    var isOffVolume = false;
    var slider = this.sp.volumePanel.slider;

    var volumePanel = (this.sp.volumePanel);
    var volumeCover = this.sp.volumePanel._volumeCover;

    this.sp.speaker.on("click",onOffVolume);
    slider.on("pressmove",pressMove);

    function onOffVolume()
    {
        isOffVolume = !isOffVolume;
        if(isOffVolume)
        {
            $sp.speaker.gotoAndStop(3);
            $(_self).trigger("VolumeChange",[0]);

            slider.x =slider.regX;
            var bounds = volumePanel.nominalBounds;
            volumeCover.scaleX= slider.x/bounds.width;
        }
        else
        {
            $sp.speaker.gotoAndStop(0);
            $(_self).trigger("VolumeChange",[volumeValue]);


            var bounds = volumePanel.nominalBounds;
            slider.x =volumeValue*bounds.width;
            volumeCover.scaleX= slider.x/bounds.width;
        }
    }

    function pressMove(evt){
        var pt = volumePanel.globalToLocal(evt.stageX, evt.stageY)
        var rect = volumePanel.nominalBounds;
        if(pt.x<=slider.regX)
        {
            pt.x=slider.regX;

            $sp.speaker.gotoAndStop(3);
        }
        else if(pt.x>rect.width)
        {
            pt.x = rect.width;
        }
        $sp.speaker.gotoAndStop(0);
        slider.x =pt.x;
        var bounds = volumeCover.nominalBounds;
        volumeCover.scaleX= pt.x/bounds.width;
        volumeValue = (pt.x-slider.regX)/rect.width;
        $(_self).trigger("VolumeChange",[volumeValue]);

        console.log(volumeValue,pt.x/rect.width)
    }

}

