	function Typing(className,object){
		this.stringName = "";
		this.typingSpeed = 50;
		this.cursorSpeed = 50;
		this.taskQueue = [];
		this.cursorChar = "█";
		this.loop = false;
		this.cursorInfinity = false;
		this.cursorInterval = null;
		this.fade = false;
		this.className = className;
		this.head = "";
		this.foot = "";
		$.extend(this, object);
		this.init();
	}

	Typing.prototype.init = function(){
		if(!!this.head)
		{
			$("."+this.className).append("<span class='typing-head'>"+this.head+"</span>");
		}
		$("."+this.className).append("<span class='typing-container'></span>");
		$("."+this.className).append("<span class='cursor'>"+this.cursorChar+"</span>");
		console.log($("."+this.className)[0]);
		if(!!this.foot)
		{
			$("."+this.className).append("<span class='typing-foot'>"+this.foot+"</span>");
		}



		if (this.fade == true) {
			$(".cursor").css("transition","opacity "+this.cursorSpeed/2000+"s");
		}
		var show = true;
		var This = this;
		this.cursorInterval = setInterval(function(){
			if (show) {
				$("."+This.className + " .cursor").css("opacity",1);
				show = false;
			}
			else{
				$("."+This.className + " .cursor").css("opacity",0);
				show = true;
			}
		},this.cursorSpeed);
		return this;
	};

	Typing.prototype.add = function(stringName){
		this.taskQueue.push({"add":stringName});
		return this;
	}

	Typing.prototype.delete = function(number){
		this.taskQueue.push({"delete":number});
		return this;
	}

	Typing.prototype.sleep = function(number){
		this.taskQueue.push({"sleep":number});
		return this;
	}

	Typing.prototype.callback = function(callback){
		this.taskQueue.push({"callback":callback});
		return this;
	}

	Typing.prototype.setting = function(object){
		this.taskQueue.push({"setting":object});
		return this;
	};



	Typing.prototype.execute = function(){

			if (!!this.taskQueue[0] == true){
				var a = this.taskQueue.shift()
			if( this.loop == true){
				this.taskQueue.push(a);
			}
				for (name in a) {
					if(name == "add"){
						this.addTask(a[name]);
					} else if(name == "delete"){
						this.deleteTask(a[name]);
					} else if(name == "sleep"){
						this.sleepTask(a[name]);
					} else if(name == "setting"){
						this.settingTask(a[name]);
					}else if(name == "callback"){
						a[name]();
						this.execute();
					}
				}
			} else {
					if (this.cursorInfinity == false) {
						$("."+this.className + " .cursor").remove();
						clearInterval(this.cursorInterval);
					}
					else{
						console.log('??');
					}
				}
			};

	Typing.prototype.addTask = function(val){
		this.stringName = val;
		var This = this;
		var count = 0;
		var length = this.stringName.length;
		var charInterval = setInterval(function(){
	        $("."+This.className + " .typing-container").append("<span>"+This.stringName.charAt(count)+"</span>");
	        count++;
		        if (count == length) {
		        	clearInterval(charInterval);
		        	This.execute();
		        }
			}, this.typingSpeed);
	}
	Typing.prototype.deleteTask = function(val){
		var This = this;
		var count = 0;
		var show = true;
		var allCharLength = $("."+This.className + " .typing-container")[0].children.length;
		if(!val == true){
			val = allCharLength;
		}
		if (val > allCharLength) {
			console.error("The delete function's param must less than String's length");
		} else{
		var charInterval = setInterval(function(){
        $("."+This.className + " .typing-container span:nth-last-child(1)").remove();
        count++;
	        if (count == val) {
	        	clearInterval(charInterval);
	        	This.execute();
	        }
		}, this.typingSpeed);
	}
}
	Typing.prototype.sleepTask = function(val){
		var This = this;
		setTimeout(function(){
			This.execute();
		}, val);
	}

	Typing.prototype.settingTask = function(object){
		$.extend(this,object);
		this.execute();
	};


