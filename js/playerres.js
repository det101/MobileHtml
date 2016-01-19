(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 36,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.绿进度条body = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CB50E").s().p("AqJAZIAAgxIUSAAIAAAxg");
	this.shape.setTransform(65,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130,5.2);


(lib.滑块1 = function() {
	this.initialize();

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzA1QgWgWgBgfQABgeAWgWQAWgWAdAAQAeAAAXAWQAVAWAAAeQAAAfgVAWQgXAWgeAAQgdAAgWgWg");
	this.shape.setTransform(0.7,0.3);

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgzA4QgWgXgBghQABggAWgXQAWgYAdABQAegBAXAYQAVAXAAAgQAAAhgVAXQgXAYgeAAQgdAAgWgYg");
	this.shape_1.setTransform(0.7,0.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-7.4,15,16);


(lib.音量条 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CB50E").s().p("AkrAOIAAgcIJXAAIAAAcg");
	this.shape.setTransform(30,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,3);


(lib.音量 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.008)").s().p("AikClIAAlJIFJAAIAAFJg");
	this.shape.setTransform(16.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAwA8IACgDIAIgJQAGgJADgJQAHgOAAgQIAAgEQgBgNgGgMQgEgMgJgKIAAgDIARAAQAGAKAEAJQAGAPABAQIAAAEQAAATgHAQQgFAOgJALgAhCAXIgVAAIAAguIAVAAIAygkIAAB3gAAYAmQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABgBIAGgIIAEgHQAEgJgBgJIAAgEQAAgHgDgGQgEgJgGgGIgDgEIAUAAQAEAHACAHQAEAIABAKIAAAEQAAAMgFALQgDAIgEAHgAAEAPQACgFABgHIAAgDIgBgDIgCgJIAPAAIABAJIAAADQAAAJgBAGg");
	this.shape_1.setTransform(20.9,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgxAYIgWAAIAAgwIAWAAIAxgkIAAB5gAApAmQAAAAAAgBQAAAAAAgBQABgBAAAAQABgBAAAAIAHgJIADgHQAEgJAAgJIAAgFQgBgFgDgHQgDgJgHgHIgCgDIATAAQAEAGADAHQAEAJAAAJIAAAFQABAMgFALQgDAJgFAGgAAVAQQACgHABgGIAAgDIgBgEIgCgJIAOAAIACAJIAAAEQAAAJgCAHg");
	this.shape_2.setTransform(19.2,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AggAXIgVAAIAAguIAVAAIAvgkIAAB3gAAmAPQACgFAAgHIAAgDIAAgDIgCgJIAPAAIABAJIAAADQAAAJgBAGg");
	this.shape_3.setTransform(17.5,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF6600").ss(1.5,1,1).p("AgEgEIgUgUAgEAGIgUATAAZAZIgZgZIAZgY");
	this.shape_4.setTransform(19.6,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAYIgWAAIAAgvIAWAAIAugkIAAA4IgTgUIATAUIAAAKIgTASIATgSIAAA1gAAigDg");
	this.shape_5.setTransform(15.5,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.volumeCover = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#989A9A").s().p("AiVAOIAAgcIEqAAIAAAcg");
	this.shape.setTransform(15,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,3);


(lib.绿色左圆弧 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#91BB0F","#85AC0D"],[0,1],50.5,-2.5,50.5,2.6).s().p("AAEAZIAAgLIgIAAIAAgKIgKAAIAAgIIAKAAIAAgKIAIAAIAAgKIAKAAIAAAxg");
	this.shape.setTransform(1.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(134,173,13,0.659)").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_1.setTransform(1.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(136,176,13,0.8)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_2.setTransform(0.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(141,182,14,0.8)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_3.setTransform(0.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(144,185,14,0.659)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_4.setTransform(1.5,0.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.绿色右圆弧 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#91BB0F","#85AC0D"],[0,1],-50.5,-2.5,-50.5,2.6).s().p("AgOAZIAAgxIAKAAIAAAKIAIAAIAAAKIAKAAIAAAIIgKAAIAAAKIgIAAIAAALg");
	this.shape.setTransform(1.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(134,173,13,0.659)").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_1.setTransform(1.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(136,176,13,0.8)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_2.setTransform(2.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(141,182,14,0.8)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_3.setTransform(2.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(144,185,14,0.659)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_4.setTransform(1.5,0.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.白色左圆弧 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A9C9C","#969898"],[0,1],50.5,-2.5,50.5,2.6).s().p("AAEAZIAAgLIgIAAIAAgKIgKAAIAAgIIAKAAIAAgKIAIAAIAAgKIAKAAIAAAxg");
	this.shape.setTransform(1.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(150,152,152,0.659)").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_1.setTransform(1.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(151,153,153,0.8)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_2.setTransform(0.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(152,154,154,0.8)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_3.setTransform(0.5,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,155,155,0.659)").s().p("AgEAEIAAgIIAIAAIAAAIg");
	this.shape_4.setTransform(1.5,0.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.白色右圆弧 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(152,154,154,0.8)").s().p("AgEAFIAAgIIAIAAIAAAIg");
	this.shape.setTransform(2.5,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(150,152,152,0.659)").s().p("AgEAFIAAgIIAIAAIAAAIg");
	this.shape_1.setTransform(1.5,4.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(151,153,153,0.8)").s().p("AgEAFIAAgIIAIAAIAAAIg");
	this.shape_2.setTransform(2.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,155,155,0.659)").s().p("AgEAFIAAgJIAIAAIAAAJg");
	this.shape_3.setTransform(1.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#9A9C9C","#969898"],[0,1],-50.5,-2.5,-50.5,2.6).s().p("AgOAZIAAgxIAKAAIAAALIAIAAIAAAKIAKAAIAAAIIgKAAIAAAKIgIAAIAAAKg");
	this.shape_4.setTransform(1.5,2.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,3,5);


(lib.重播原件 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A1A1A1","#919191"],[0,1],-7.4,0,7.4,0).s().p("AgzBAQgWgWAAgeIAcAAQABASANAOQANANASAAQATAAAOgNQAMgOAAgSQAAgQgLgMQgLgNgQgDIAAAWIg2glIA2gmIAAAZQAcADATAUQATAWAAAbQAAAegVAWQgWAVgeAAQgdAAgWgVg");
	this.shape.setTransform(7.4,8.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,17.2);


(lib.发光4 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhcA6QgngYAAgiQAAghAngXQAngZA1AAQA2AAAnAZQAmAXAAAhQAAAigmAYQgnAXg2AAQg1AAgngXg");
	this.shape.setTransform(13.2,12.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4.5,26.4,16.4);


(lib.加载旋转 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0.439,1],-13.9,0,14,0).s().p("AhiBiQgogpAAg5QAAg4AogqQAqgoA4AAQA5AAApAoQApAqAAA4QAAA5gpApQgpApg5AAQg4AAgqgpgAhPhPQgiAiAAAtQAAAuAiAiQAiAiAtAAQAuAAAigiQAigiAAguQAAgtgigiQgigiguAAQgtAAgiAig");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.9,-13.9,27.9,27.9);


(lib.整个控制条背景 = function() {
	this.initialize();

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("Egq9AC0IAAlnMBV6AAAIAAFng");
	this.shape.setTransform(275,18);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,36);


(lib.playBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AkrC0IAAlnIJXAAIAAFng");
	this.shape.setTransform(20,18,0.667,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhFBBIAAiAQABgKAUAKIBwA5QAMAGgMAHIhyA6QgIAEgFAAQgEAAgCgEg");
	this.shape_1.setTransform(21,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBBIAAiAQABgKAUAKIBwA5QAMAGgMAHIhyA6QgIAEgFAAQgEAAgCgEg");
	this.shape_2.setTransform(21,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,36);


(lib.pauseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AkrC0IAAlnIJXAAIAAFng");
	this.shape.setTransform(20,18,0.667,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAOBAIAAh/IA8AAIAAB/gAhJBAIAAh/IA8AAIAAB/g");
	this.shape_1.setTransform(20.1,17.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBAIAAh/IA8AAIAAB/gAhJBAIAAh/IA8AAIAAB/g");
	this.shape_2.setTransform(20.1,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,36);


(lib.dragBarSlider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-6.4,-2.8,6.5,-2.8).s().p("AgsAPIABAAQgUgRAAgZIAAgEIAIAAIAAAEQAAAWARAOQARAPAVAAQAXAAAQgPQARgOAAgWIAAgEIAIAAIAAAEQAAAZgTARQgSARgbAAQgZAAgTgRg");
	this.shape.setTransform(0,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0,0.518,1],-6.5,-2.8,6.5,-2.8).s().p("AgsAPIAAAAQgTgRAAgZIAAgEIAIAAIAAAEQgBAWASAOQAQAPAWAAQAXAAAQgPQASgOgBgWIAAgEIAIAAIAAAEQABAZgUARQgSARgbAAQgZAAgTgRg");
	this.shape_1.setTransform(0,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E6E6E6","#D5D5D5","#D0D0D0","#DDDDDD","#FFFFFF"],[0,0.416,0.49,0.565,1],-6.4,5.4,-6.4,-5.7).s().p("AgpArQgSgSAAgZQAAgYASgSQASgSAXAAQAYAAASASQASASAAAYQAAAZgSASQgSASgYAAQgXAAgSgSg");
	this.shape_2.setTransform(0.1,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E6E6E6","#D5D5D5","#D0D0D0","#DDDDDD","#FFFFFF"],[0,0.416,0.49,0.565,1],-6.4,5.4,-6.4,-5.7).s().p("AgqArQgSgSAAgZQAAgYASgSQATgSAXAAQAZAAASASQARASABAYQgBAZgRASQgSASgZAAQgXAAgTgSg");
	this.shape_3.setTransform(0.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// 图层 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgsAtQgTgSAAgbQAAgaATgSQATgUAZABQAagBATAUQATASAAAaQAAAbgTASQgTAUgagBQgZABgTgUg");
	this.shape_4.setTransform(0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgtAxQgSgVAAgcQAAgcASgUQAUgVAZAAQAaAAATAVQAUAUgBAcQABAcgUAVQgTAUgaABQgZgBgUgUg");
	this.shape_5.setTransform(0.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,-6.5,13,13);


(lib.灰进度条body = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9A9C9C","#969898"],[0,1],0,-2.5,0,2.6).s().p("AzhAZIAAgxMAnDAAAIAAAxg");
	this.shape.setTransform(125,2.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,250,5);


(lib.音量调节 = function() {
	this.initialize();

	// 滑块1
	this.slider = new lib.滑块1();
	this.slider.setTransform(39.1,9.6,0.75,0.755,0,0,0,6.6,7);

	// 图层 4
	this._volumeCover = new lib.volumeCover();
	this._volumeCover.setTransform(0,5.4,1,1,0,0,0,0,1.5);

	// 图层 1
	this.volumeBar = new lib.音量条();
	this.volumeBar.setTransform(29.9,7.9,1,1,0,0,0,29.9,4);

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#989A9A").s().p("AkrAPIAAgdIJXAAIAAAdg");
	this.shape.setTransform(30,5.4);

	this.addChild(this.shape,this.volumeBar,this._volumeCover,this.slider);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.3,60,12.1);


(lib.重播发光 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.重播原件();
	this.instance.setTransform(7.4,8.6,1,1,0,0,0,7.4,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

	// 发光
	this.instance_1 = new lib.发光4();
	this.instance_1.setTransform(7.7,31.7,0.989,0.774,0,0,0,13.2,8.2);
	this.instance_1.alpha = 0;
	this.instance_1.filters = [new cjs.BlurFilter(12, 12, 3)];
	this.instance_1.cache(-2,3,30,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0.66},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-3.1,96,85);


(lib.replayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(229,229,229,0)").s().p("AjlClIAAlJIHKAAIAAFJg");
	this.shape.setTransform(23,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A1A1A1","#919191"],[0,1],-7.4,0,7.4,0).s().p("AgzA/QgVgVgBgfIAcAAQAAAUAOANQANANASAAQATAAANgNQAOgNAAgUQAAgPgMgMQgKgNgRgDIAAAXIg3gmIA3gmIAAAZQAcADATAVQAUAVAAAaQgBAfgVAVQgWAXgegBQgdABgWgXg");
	this.shape_1.setTransform(23.9,16.1);

	this.instance = new lib.重播发光();
	this.instance.setTransform(23.9,16.1,1,1,0,0,0,7.4,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.instance}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,33);


(lib.loadingBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.加载旋转();
	this.instance.alpha = 0.801;
	this.instance.shadow = new cjs.Shadow("#FFFFFF",0,0,5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},19).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCCCCC","#999999","#CCCCCC"],[0,0.494,1],-10.4,10,-1.5,-2.6).s().p("AgUAsIAAhXIAqAAIAABXg");
	this.shape.setTransform(3.4,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B2B2B2","#FFFFFF","#B2B2B2"],[0,0.494,1],-2.2,0,2.2,0).s().p("AgUADIAAgFIAqAAIAAAFg");
	this.shape_1.setTransform(3.4,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#CCCCCC","#999999","#CCCCCC"],[0,0.494,1],-2.2,10,6.7,-2.6).s().p("AgUAsIAAhXIApAAIAABXg");
	this.shape_2.setTransform(-3.1,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B2B2B2","#FFFFFF","#B2B2B2"],[0,0.494,1],-2.2,0,2.2,0).s().p("AgUADIAAgFIApAAIAAAFg");
	this.shape_3.setTransform(-3.1,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-19.9,45,45);


(lib.dragBarGreen = function() {
	this.initialize();

	// 图层 1
	this.tail = new lib.绿色右圆弧();
	this.tail.setTransform(131.5,2.5,1,1,0,0,0,1.5,2.5);

	this.head = new lib.绿色左圆弧();
	this.head.setTransform(-1.5,-2.5,1,1,0,0,0,1.5,-2.5);

	this.body = new lib.绿进度条body();
	this.body.setTransform(0,2.5,1,1,0,0,0,0,2.5);

	this.addChild(this.body,this.head,this.tail);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,0,136,5.2);


(lib.dragBarBackGround = function() {
	this.initialize();

	// Layer 1
	this.tail = new lib.白色右圆弧();
	this.tail.setTransform(251.5,2.5,1,1,0,0,0,1.5,2.5);

	this.head = new lib.白色左圆弧();
	this.head.setTransform(-1.5,-2.5,1,1,0,0,0,1.5,-2.5);

	this.body = new lib.灰进度条body();
	this.body.setTransform(125,2.5,1,1,0,0,0,125,2.5);

	this.addChild(this.body,this.head,this.tail);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,0,256,5);


(lib.comqiyinoneditPlayerviewcontrolbarpartsvolumeVolumeControllerUI = function() {
	this.initialize();

	// volumePanel
	this.volumePanel = new lib.音量调节();
	this.volumePanel.setTransform(35.6,10.4);

	// speaker
	this.speaker = new lib.音量();
	this.speaker.setTransform(5.5,7.4,1,1,0,0,0,5.5,7.4);

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AnyClIAAlJIPmAAIAAFJg");
	this.shape.setTransform(49,16.5);

	this.addChild(this.shape,this.speaker,this.volumePanel);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,100,33);


(lib.comqiyinoneditPlayerviewcontrolbarpartsseekerSeekBarUI = function() {
	this.initialize();

	// 图层 1
	this.slider = new lib.dragBarSlider();
	this.slider.setTransform(134.7,7.3);

	this.playBar = new lib.dragBarGreen();
	this.playBar.setTransform(0,4.3);

	this.seekBarBg = new lib.dragBarBackGround();
	this.seekBarBg.setTransform(125,7.3,1,1,0,0,0,125,3);

	this.addChild(this.seekBarBg,this.playBar,this.slider);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,0.8,256,13);


(lib.togglePlay = function() {
	this.initialize();

	// pause_btn
	this.pauseBtn = new lib.pauseBtn();
	new cjs.ButtonHelper(this.pauseBtn, 0, 1, 2, false, new lib.pauseBtn(), 3);

	// play_btn
	this.playBtn = new lib.playBtn();
	new cjs.ButtonHelper(this.playBtn, 0, 1, 2, false, new lib.playBtn(), 3);

	// loading
	this.loadingBtn = new lib.loadingBtn();
	this.loadingBtn.setTransform(22,19.1);

	// replay
	this.replayBtn = new lib.replayBtn();
	new cjs.ButtonHelper(this.replayBtn, 0, 1, 2, false, new lib.replayBtn(), 3);

	this.addChild(this.replayBtn,this.loadingBtn,this.playBtn,this.pauseBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.8,0,62,69.4);


(lib.comqiyinoneditPlayerviewcontrolbarControlBarUI = function() {
	this.initialize();

	// 图层 2
	this.displayTime = new cjs.Text("00:00:00 / 00:00:00", "11px 'Verdana'", "#FFFFFF");
	this.displayTime.name = "displayTime";
	this.displayTime.textAlign = "center";
	this.displayTime.lineHeight = 13;
	this.displayTime.lineWidth = 131;
	this.displayTime.setTransform(373.5,8.8);

	this.triggerBtn = new lib.togglePlay();
	this.triggerBtn.setTransform(33,27.3,1,1,0,0,0,30,27.3);

	// 图层 1
	this.backGround = new lib.整个控制条背景();
	this.backGround.setTransform(320,13,1,1,0,0,0,320,13);

	this.addChild(this.backGround,this.triggerBtn,this.displayTime);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,550,40.1);


// stage content:
(lib.playerres = function() {
	this.initialize();

	// 图层 1
	this.player_progress = new lib.comqiyinoneditPlayerviewcontrolbarpartsseekerSeekBarUI();
	this.player_progress.setTransform(172,18,1,1,0,0,0,125,6.5);

	this.player_volume = new lib.comqiyinoneditPlayerviewcontrolbarpartsvolumeVolumeControllerUI();
	this.player_volume.setTransform(498,18.5,1,1,0,0,0,49,16.5);

	this.playerBg = new lib.comqiyinoneditPlayerviewcontrolbarControlBarUI();
	this.playerBg.setTransform(275,25.3,1,1,0,0,0,275,25.3);

	this.addChild(this.playerBg,this.player_volume,this.player_progress);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(275,18,550,40.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;