	function Typing(){
		this.className = "";
		this.stringName = "";
		this.typingSpeed = 50;
		this.cursorSpeed = 50;
		this.taskQueue = [];
	}

	Typing.prototype.init = function(className,typingSpeed,cursorSpeed,callback){
		this.className = className;
		console.log(this);

		this.typingSpeed = typingSpeed;
		this.cursorSpeed = cursorSpeed;
		this.callback = callback;
		$("."+this.className).append("<span class='typing-container'>"+"</span>");
		$("."+this.className).append("<span class='cursor'>"+"▍"+"</span>");
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


	Typing.prototype.execute = function(){
			if (!!this.taskQueue[0] == true){

				var a = this.taskQueue.shift()
				for (name in a) {
					if(name == "add"){
						this.addTask(a[name]);
					} else if(name == "delete"){
						this.deleteTask(a[name]);
					} else if(name == "sleep"){
						this.sleepTask(a[name]);
					} else if(name == "callback"){
						this.callbackTask(a[name]);
					}
				}
			}
			else{
				
			}
	};




	Typing.prototype.addTask = function(val){
		this.stringName = val;
		var This = this;
		var count = 0;
		var show = true;
		var length = this.stringName.length;
		var charInterval = setInterval(function(){
	        $("."+This.className + " .typing-container").append("<span>"+This.stringName.charAt(count)+"</span>");
	        count++;
		        if (count == length) {
		        	clearInterval(charInterval);
		       		clearInterval(cursorInterval);
		        	This.execute();
		        }
			}, this.typingSpeed);

		var cursorInterval = setInterval(function(){
			if (show) {
				$("."+This.className + " .cursor").css("opacity",1);
				show = false;
			}
			else{
				$("."+This.className + " .cursor").css("opacity",0);
				show = true;
			}
		},this.cursorSpeed);
	}


	Typing.prototype.deleteTask = function(val){
		var This = this;
		var count = 0;
		var show = true;
		var allCharLength = $("."+This.className + " .typing-container")[0].children.length;

		if (val > allCharLength) {
			console.error("The delete function's param must less than String's length")
		} else{
		var charInterval = setInterval(function(){
        $("."+This.className + " .typing-container span:nth-last-child(1)").remove();
        count++;
	        if (count == val) {
	        	clearInterval(charInterval);
	       		clearInterval(cursorInterval);
	        	This.execute();
	        }
		}, this.typingSpeed);





		var cursorInterval = setInterval(function(){
				if (show) {
					$("."+This.className + " .cursor").css("opacity",1);
					show = false;
				}
				else{
					$("."+This.className + " .cursor").css("opacity",0);
					show = true;
				}
			},this.cursorSpeed);
		}






	}
	Typing.prototype.sleepTask = function(val){
		setTimeout(function(){

		}, val);
	}
	Typing.prototype.callbackTask = function(val){
				console.log(val);
	}
