/**
 * @license SmartBuilder HTML5 widget framework, Copyright (c) 2014
 *          SuddenlySmart;
 */

var SB4TabOrder={
	previousOrder:[],
	nextOrder:[],
	focusElement:"",
	current:"",
	//other tab way
	normalOrder:[],
}
var assetmap={};

function SB4WgtSvc(id) {
	this.uid = id;

	this.getWidgetAssetURI = function(s) {
		return SB4API.util.getWidgetAssetURI(s, this.uid);
	};

	this.getFullUIKey = function() {
		return "sb4." + this.getShortUIKey();
	};

	this.getShortUIKey = function() {
		return this.uid.replace(/\./g, "_");
	};

	this.addInitTask = function(t) {
		SB4WgtSvc._loadingTasks.push(t);		
	};

};
SB4WgtSvc._loadingTasks=[];



var sb4runtime = {
	version : "0.1.0",
	mode : "prod",
	requiresetting : {
		waitSeconds : 0,
urlArgs : "bust=1.0.0.202404020954_1739953483649",
//		deps : [ "css!style/axon.css",
//				"css!style/ui-lightness/jquery-ui-1.10.4.custom.min.css" ],
		deps : [],
		config : {
			"sb4core/logging" : {
				_debug_log : false,
			},
			"sb4core/sbobj" : {
				"widgetsvc" : new SB4WgtSvc("axon.sbobj"),
			},
		},
		paths : {
			"jquery" : "lib/jquery.min",
			"jqueryui" : "lib/jqueryui",
			"scrollbar": "lib/scrollbar",
			"mousewheel":"lib/jquery.mousewheel.min",
			"underscore" : "lib/underscore-min",
			"underscore_str": "lib/underscore.string.min",
			"modernizr":"lib/modernizr.custom.44495",
			"text" : "lib/text",
			"pako_inflate" : "lib/pako_inflate.min",
			"sb4core" : "app",
			"widgets" : "wgt",
			"util" : "lib/util",
			"sb4core/loloader": "app/loloader",
			"xapiwrapper" : "lib/xapiwrapper.min",
			"perload": "lib/preloadjs-0.6.0.min",
		// "selectBoxIt" : "lib/util/selectBoxIt/widget",
		},
		shim : {
			"util/selectBoxIt/widget" : ["jqueryui/widget",
					"css!util/selectBoxIt/style.css" ],
			"modernizr": [],
			'scrollbar':[],
			'underscore': {
	            exports: '_'
	        },
	        'underscore_str': {
	            deps: ['underscore'],
	        },
	        "xapiwrapper" : [],	
	        'preload':[],
		},
		map : {
			'*' : {
				'css' : 'lib/css',
				"image" : "lib/image",
				"json" : "lib/json",
			}
		}
	},
	"getWidgetInfo":function(s) {
			var wgtreg=undefined;
			var a=this.requiresetting.config["wgt/"+s+"/s"];
		  if (a!=undefined && a["widgetsvc"]!=undefined) {
		  	wgtreg=a;
		  }
			return wgtreg;
	},
	 "loggerSetting": {
	        "engine": 1,
	        "parse": 1,
	        "util": 1,
	        "player": 1,
	        "box": 1,
	        "task": 1,
	        "timeline": 1,
	        "default": 1
	    }
};


(function() {
	var wconfig = {
			"wgt/com.smartbuilder.axon.widget.frame/s": {
				"widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.frame"),
			},	
			"wgt/com.smartbuilder.axon.widget.slide/s": {
				"widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.slide"),
			},	
			"wgt/com.smartbuilder.axon.widget.slideset/s": {
				"widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.slideset"),
			},	
			"wgt/com.smartbuilder.axon.widget.text.richtext/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.text.richtext"),},	
			"wgt/com.smartbuilder.axon.widget.data.track/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.data.track"),},	
			"wgt/com.smartbuilder.axon.widget.menunavigator/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.menunavigator"),},	
			"wgt/com.smartbuilder.axon.widget.percentgauge/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.percentgauge"),},	
			"wgt/com.smartbuilder.axon.widget.audio/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.audio"),},	
			"wgt/com.smartbuilder.axon.widget.button/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.button"),},	
			"wgt/com.smartbuilder.axon.widget.tts/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.tts"),},	
			"wgt/com.smartbuilder.axon.widget.line/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.line"),},	
			"wgt/com.smartbuilder.axon.widget.image/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.image"),},	
			"wgt/com.smartbuilder.axon.widget.table/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.table"),},	
			"wgt/com.smartbuilder.axon.widget.shape/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.shape"),},	
			"wgt/com.smartbuilder.axon.widget.character/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.character"),},	
			"wgt/com.smartbuilder.axon.widget.text.text/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.text.text"),},	
			"wgt/com.smartbuilder.axon.widget.input.textentry/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.input.textentry"),},	
			"wgt/com.smartbuilder.axon.widget.playerbar/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.playerbar"),},	
			"wgt/com.smartbuilder.axon.widget.hotspot/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.hotspot"),},	
			"wgt/com.smartbuilder.axon.widget.search/s": { "widgetsvc" : new SB4WgtSvc("com.smartbuilder.axon.widget.search"),},	
	};
	var config = sb4runtime.requiresetting.config;
	for ( var a in wconfig) {
		config[a] = wconfig[a];
	}
}());

var SB4XAPI={};

function FlowContext () {
    this.listenerList=[];
    this.context={};
    FlowContext.prototype.addListener = function(listener) {
        this.listenerList.push(listener);
    };
    FlowContext.prototype.removeListener=function(listener) {
    	this.listenerList=_.without(this.listenerList, listener);
    };
    FlowContext.prototype.setContext=function(context) {
        this.context=context;
    };
    FlowContext.prototype.fireEvent=function() {
    	var self = this;
    	_.each(this.listenerList, function(listener, index){
    		listener(self.context);
    	});
    };
}


var SB4APITemp=SB4API;
var SB4API = {
	emptyMP3:'data:audio/mp3;base64,SUQzAwAAAAABBFRJVDIAAAAZAAAAU2lsZW50IE1QMyAxMHRoLW9mLWEtc2VjVFBFMQAAAA8AAAB3d3cueGFtdWVsLmNvbUNPTU0AAAArAAAAWFhYAEZyb20gaHR0cDovL3d3dy54YW11ZWwuY29tL2JsYW5rLW1wM3MvVENPTgAAAAkAAABTeW50aHBvcP/6kMBfqwAAAAABpBgAAAAAADSDgAAATEFNRTMuOTNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45M1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/6ksDmn8UDwAABpAAAAAAAADSAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+pLA+t7/g8AAAaQAAAAAAAA0gAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjkzVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//qSwPre/4PAAAGkAAAAAAAANIAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45M1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/6ksD63v+DwAABpAAAAAAAADSAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMuOTNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+pLA+t7/g8AAAaQAAAAAAAA0gAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV',
	emptyMP4:'',
	configCssList:[],
    configJsList:[],
    isLTR: true,
	functions:{},
	showErrorMessage:true,
urlArgs : "bust=1.0.0.202404020954_1739953483649",
    cacheSvgIdList:[],
	lms:{"type":1,"isCommitLMS":false},
	xapi:SB4XAPI==undefined?undefined:SB4XAPI,
	volume:undefined,	
	debug: null,
	tincan : null,
	txtLib : null,
	linkLib : null,
	flowcontext:new FlowContext(),
	LEGACY_KEYMAP:{
		'Spacebar':' ',
		'Esc':'Escape',
		'Up':'ArrowUp',
		'Down':'ArrowDown',
		'Left':'ArrowLeft',
		'Right':'ArrowRight',
	},

	util:{
		getWidgetAssetURI : function(s,type) {
			if (s==null || s=='') return '';
			if(s.indexOf("http")==0){
		         return SB4API.addBustParam(s);
		    }
			if (assetmap) {
				if (assetmap[s]!=undefined) return SB4API.addBustParam(assetmap[s]);
			}
			return SB4API.addBustParam("wgt/" + type + "/" + s);
		},
		getWidgetAssetProperties : function(s) {
			s = s+"_properties";
			var props;	
			if (assetmap) {
				props = assetmap[s];
				if (props==undefined){
					props={};
				}
			}
			return props;
		}
	},
	
	addBustParam: function(url){
		return url;
    	//return url+((-1===url.indexOf("?") ? "?":"&")+SB4API.urlArgs)
	}
};
if(SB4APITemp){
	for(var key in SB4APITemp){
		SB4API[key]=SB4APITemp[key];
	}
}
//SetDebugPublishTask will set DEBUG false
var DEBUG=false;
if (SB4API.queryMap["debug"]!=null && SB4API.queryMap["debug"]=='1') {
	DEBUG=false; //DEBUG may be false due to external program
}

SB4API._console=console;
SB4API.isConsoleEnable=DEBUG;
SB4API._consoleCtrLock=0;
SB4API.setConsoleEnable=function(b,m){
	const l=b==true;
	if (SB4API.isConsoleEnable==l) {
		return;
	}
	SB4API.isConsoleEnable= l;
	if (SB4API._consoleCtrLock>0) {
		clearTimeout(SB4API._consoleCtrLock);
		SB4API._consoleCtrLock=0;
	}
	if ( Number.isInteger(m) && m>0 ) {
		SB4API._consoleCtrLock=setTimeout(() => {SB4API.isConsoleEnable=!l;SB4API._consoleCtrLock=0}, m)
	}	
};
console = {};
console.log = function(){
	if(SB4API._EMBEDDED==true || SB4API.isConsoleEnable===true){
		var args = Array.prototype.slice.call(arguments);
		SB4API._console.log.apply(SB4API._console,args);
		if (typeof StageLogFunction=='function') {
			let cache = [];
			// Circular reference found, discard key
			let str = JSON.stringify(args, function(key, value) {
				if (typeof value === "object" && value !== null) {
				if (cache.indexOf(value) !== -1) {
					return;
				}
				cache.push(value);
				}
				return value;
			});
			cache = null; // reset the cache
			StageLogFunction("dev: "+str);
		}
	}
};

