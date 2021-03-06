var win = Ti.UI.currentWindow;

var TimerLabel = Ti.UI.createLabel({
	text : '00:00',
	font : {
		fontSize : 35
	},
	top : 30
})
win.add(TimerLabel);

var Clock = {
	totalSeconds : 0,
	start : function() {

		var self = this;

		this.interval = setInterval(function() {
			self.totalSeconds += 1;

			var hours = Math.floor(self.totalSeconds / 3600);
			var min = Math.floor(self.totalSeconds / 60 % 60);
			var sec = parseInt(self.totalSeconds % 60);
			TimerLabel.text = '' + hours + ':' + min + ':' + sec;
		}, 1000);
	},

	pause : function() {

		clearInterval(this.interval);
		delete this.interval;

	},

	resume : function() {
		if (!this.interval)
			this.start();
	},
	stop : function() {
		clearInterval(this.interval);
	},
	reset : function() {
		clearInterval(this.interval);
		this.totalSeconds = 0;
		TimerLabel.text = '0:0:0';

	}
};

var startBtn = Ti.UI.createButton({
	title : 'Start',
	top : 70,
	left : 10
});
var stoptBtn = Ti.UI.createButton({
	title : 'Stop',
	top : 70,
	right : 10
});
var pauseBtn = Ti.UI.createButton({
	title : 'Pause',
	top : 150,
	left : 10
});
var resumeBtn = Ti.UI.createButton({
	title : 'Resume',
	top : 150,
	right : 10
});
var resetBtn = Ti.UI.createButton({
	title : 'ReSet',
	top : 200
});
win.add(startBtn);
win.add(stoptBtn);
win.add(pauseBtn);
win.add(resumeBtn);
win.add(resetBtn);

startBtn.addEventListener('click', function(e) {
	Clock.start();
});
stoptBtn.addEventListener('click', function(e) {
	Clock.stop();
});
pauseBtn.addEventListener('click', function(e) {
	Clock.pause();
});

resumeBtn.addEventListener('click', function(e) {
	Clock.resume();
});

resetBtn.addEventListener('click', function(e) {
	Clock.reset();
});
