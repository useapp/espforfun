class LED{

    constructor(pin) {
      this.pin = pin ;
      this.status = false;
      this.blinktimer = null;
    }
  
    /**
    * On led
    */
    setOn(){
      this.stopBlinking();
      this.status = true;
      digitalWrite(this.pin, this.status);
    }
  
    /**
    * Off led
    */
    setOff(){
      this.stopBlinking();
      this.status = false;
      digitalWrite(this.pin, this.status);
    }
  
    /**
    * Toggle led
    */
    toggle(){
      this.stopBlinking();
      this.status = !this.status;
      digitalWrite(this.pin, this.status);
    }
  
    /**
    * blink the led
    * speed
    */
    blink(speed){
      var _this = this;
      this.stopBlinking();
      this.blinktimer = setInterval(function(){
        //_this.toggle();
        _this.status = !_this.status;
        digitalWrite(_this.pin, _this.status);
      },speed);
    }
  
    getStatus(){
      return this.status;
    }
  
  
    /**
    *Set led PWM
    */
    pwm(val){
      this.stopBlinking();
      analogWrite(this.pin, val);
    }
  
  
    stopBlinking(){
      if(this.blinktimer){
        clearInterval(this.blinktimer);
        this.blinktimer = null;
      }
    }
  
  }

  exports.connect = function (options) {
    var led = new LED(options);
    return led;
  };
  