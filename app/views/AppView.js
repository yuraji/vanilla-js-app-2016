define(['../framework/View', '../models/Posts', './PostView'], (View, Posts, PostView)=>{

	class AppView extends View {
		constructor(o={}){
			o.tagName = 'div';
			o.className = 'container';
			super(o);

			this.posts = new Posts();

			this.listenTo(this.posts, 'add', post => {
				let postView = new PostView({ model: post });
				postView.render().$el.appendTo( this.el );
			})

			this.posts.fetch();
		}

		render(){
			this.$el.append(`<h1>Some posts for you to enjoy</h1>`);
			return this;
		}
	}

	return AppView;
});