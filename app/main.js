require(['views/AppView'], AppView => {

	let appView = new AppView();

	appView.render().$el.appendTo( document.body );

})