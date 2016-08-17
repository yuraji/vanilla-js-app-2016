define(['./Base'], Base => {
	return class Model extends Base {

		constructor(data){
			super()
			this.attributes = Object.assign({}, data);
		}

		get(attr) {
			return this.attributes[attr];
		}
	}
})