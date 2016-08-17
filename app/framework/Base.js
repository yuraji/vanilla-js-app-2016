define(()=>{
	return class Base {

		constructor(){
			
		}

		trigger(eventName, arg){
			typeof this._listeners === 'object' && 
				typeof this._listeners[eventName] === 'object' && 
				this._listeners[eventName].length &&
				this._listeners[eventName].forEach( cb => cb(arg) );
		}

		listenTo(obj, eventName, callback){

			typeof obj._listeners === 'undefined' && (obj._listeners = {});

			typeof obj._listeners[eventName]==='undefined' && (obj._listeners[eventName] = []);

			obj._listeners[eventName].push( callback );
		}

	}

})