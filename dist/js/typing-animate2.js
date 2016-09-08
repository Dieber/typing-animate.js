	function Typing(){
		this.className = "";
		this.stringName = "";
		this.typingSpeed = 50;
		this.cursorSpeed = 50;
	}

	Typing.prototype.init = function(className,typingSpeed,cursorSpeed,callback){
		this.className = className;
		this.typingSpeed = typingSpeed;
		this.cursorSpeed = cursorSpeed;
		this.callback = callback;
		$("."+this.className).append("<span class='typing-container'>"+"</span>");
		$("."+this.className).append("<span class='cursor'>"+"▍"+"</span>");
	};


	Typing.prototype.add = function(stringName){
		this.stringName = stringName;
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
		        	return This;
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

	Typing.prototype.delete = function(charCount){
		
	}




