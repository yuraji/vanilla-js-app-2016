define(['./Base', './Model'], (Base, Model)=>{

	return class Collection extends Base {
		constructor({ model=Model }){
			super();
			this.Model = model;

			this.models = [];
		}
		
		get length(){
			return this.models.length;
		}

		add(item){
			let addedModel = new this.Model(item);
			this.models.push(addedModel);
			this.trigger('add', addedModel);
		}
	}
})