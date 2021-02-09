

    function LED(pin) {
      this.pin = pin ;
      this.status = false;
      this.blinktimer = null;
        retyrn this;
    }
  
    /**
    * On led
    */
   LED.prototype.setOn = function(){
      this.stopBlinking();
      this.status = true;
      digitalWrite(this.pin, this.status);
    }
  
    /**
    * Off led
    */
   LED.prototype.setOff = function(){
      this.stopBlinking();
      this.status = false;
      digitalWrite(this.pin, this.status);
    }
  
    /**
    * Toggle led
    */
   LED.prototype.toggle = function(){
      this.stopBlinking();
      this.status = !this.status;
      digitalWrite(this.pin, this.status);
    }
  
    /**
    * blink the led
    * speed
    */
   LED.prototype.blink = function(speed){
      var _this = this;
      this.stopBlinking();
      this.blinktimer = setInterval(function(){
        //_this.toggle();
        _this.status = !_this.status;
        digitalWrite(_this.pin, _this.status);
      },speed);
    }
  
    LED.prototype.getStatus = function(){
      return this.status;
    }
  
  
    /**
    *Set led PWM
    */
   LED.prototype.pwm = function(val){
      this.stopBlinking();
      analogWrite(this.pin, val);
    }
  
  
    LED.prototype.stopBlinking = function(){
      if(this.blinktimer){
        clearInterval(this.blinktimer);
        this.blinktimer = null;
      }
    }
  


  exports.connect = function (options) {
    var led = new LED(options);
    return led;
  };
  
