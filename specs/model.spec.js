define(['framework/Model'], (Model)=>{

	describe('Model', ()=>{

		it('instance', ()=>{
			let model = new Model();
			expect( model instanceof Model ).toBeTruthy();
		})

		describe('Attributes', ()=>{
			let item = new Model({ a:'b'});

			it('maintains attributes', ()=>{
				expect( item.get('a') ).toBe('b');
			});

		})

	})

})