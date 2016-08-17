define(['../framework/Collection', './Post'], (Collection, Post)=>{
	return class Posts extends Collection {
		constructor(o={}){
			o.model = Post;
			super(o)
		}

		fetch(){

			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/posts'
			}).then( data => {
				data && data.length && data.forEach( item => this.add(item) )
			});

		}
	}
})