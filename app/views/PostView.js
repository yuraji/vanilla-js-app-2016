define(['../framework/View', '../models/Posts'], (View, Posts)=>{

	class PostView extends View {
		constructor(o={}){
			o.tagName = 'div';
			o.className = 'Post'
			super(o);

			this.$el.on('click', '.title', ()=> $('.post-body', this.el).slideToggle(100) );
		}

		render(){
			this.$el.append(`
				<em>${this.model.get('id')}</em>
				<span class="title">${this.model.get('title')}</span>
				<div class="post-body" style='display:none'>${this.model.get('body')}</div>
			`);
			return this;
		}
	}

	return PostView;
});