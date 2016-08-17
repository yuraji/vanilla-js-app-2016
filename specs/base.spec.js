define(['framework/Base'], (Base)=>{

	describe('Base', ()=>{

		it('instance', ()=>{
			let base = new Base();
			expect( base instanceof Base ).toBeTruthy();
		})

		describe('Events', ()=>{

			it('calls callback', ()=>{
				let actor = new Base();
				let listener = new Base();

				var callback = sinon.spy();
				
				listener.listenTo(actor, 'ding', callback)

				actor.trigger('ding', 'dong');
				
				expect( callback.calledOnce ).toBeTruthy();
				expect( callback.args[0][0] ).toBe('dong');
			});

		})

	})

})