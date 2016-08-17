define(['./Base'], Base => {
	return class View extends Base {

		constructor({ tagName='div', className='', model=null }){
			super()
			this.$el = $(`<${tagName} />`);
			this.el = this.$el.get(0);
			this.model = model;

			className && this.$el.addClass(className);
		}

		render(){}
	}
})