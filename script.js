/*
- when im less tired, observer pattern between renderer and engine, in case we want to get any more interesting interactions going

*/
var quizData = {
	outcomes : [
		{
			title : 'Outcome Number One',
			text : 'Outcome Number One Body Text',
			slug : 'outcome_1',
			image : 'http://via.placeholder.com/600x300?text=Outcome%20Image',
		}
	],
	rounds : [
		{
			prompt : '',
			description : '',
			image : 'http://via.placeholder.com/600x300?text=Round%20Image',
			roundType : '(single|multiple|correct|boolean)',
			transition : '(slide|fadeOut|fadeWhite|fadePrimaryColor)',
			answers : [
				{
					text : 'Answer Number One',
					outcomeMapping : ['outcome_1','outcome_2'],
					selected : false
				}
			]
		}
	],
	meta : {
		title : 'Quiz Title',
		slug : 'demo_quiz',
		image : 'http://via.placeholder.com/600x300?text=Quiz%20Image'
	}
};

var playerStats = {
	
};

var quizRenderer = {
	this.quizWrapperElement : '',
	this.broadcaster : '',

	renderCover : function( quizMeta ) {
		// DOM manipulations
	},
	renderSlide : function( quizRound ) {
		// DOM manipulations
	},
	renderOutcome : function( quizOutcome ) {
		// DOM manipulations
	},
	doSlideTransition : function( quizRound ) {
		
		function end() {

		}

		this.quizWrapperElement.addEventListener('onanimationend', end);
	},
	clearSlide : function() {
		this.quizWrapperElement.innerHTML = '';
	},

	init : function( quizWrapperElement ) {
		this.quizWrapperElement = quizWrapperElement;
	}
};

var quizEngine = {
	this.currentQuiz : '',	// type quizData
	this.currentRound : '',	// type round
	this.allRounds : [],	// type round[]
	this.renderer : '',		// type quizRenderer
	this.listener : '',
	this.playerStats : '',	// type playerStats

	this.nextQuiz : function() {
		var counter = 0;
		var numOfRounds = this.all;
	},
	this.endQuiz : function() {
		var winningOutcome;
		// determine quiz outcome

		this.renderer.renderOutcome( winningOutcome );
	},
	this.restartQuiz : function() {

	},
	this.doCurrentRound : function() {

	},
	this.initQuiz : function() {
		this.renderer = quizRenderer;
		this.renderer.init();
	}

};