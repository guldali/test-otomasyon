context('Easypos', () =>{
	beforeEach(()=>{
		cy.visit('http://pos.elektraweb.com')
	})
	it('type()', () => {
		cy.contains('Login').click()
		cy.get('#mat-input-0').clear().type('18892')// önce içindeki yazı temizlenip typenin içindeki yazıldı		
		cy.get('#mat-input-1').clear().type('1')//önce içindeki yazı temizlenip typenin içindeki yazıldı	
		cy.get('.mat-raised-button').click()//butona otomatik tıklama yapıldı
		cy.get('[href="/pos/login"]').should('visible')
		cy.get('[href="/pos/dep"]').should('visible')
		//cy.get('.ng-pristine').type('res').click()
		//cy.get('.mat-button-ripple mat-ripple').click()
		//cy.get('.deps-container > :nth-child(1)').click()
		cy.get('[aria-haspopup="true"]').should('visible')
		
		cy.get('.deps-container > :nth-child(2)').click().wait(1500)//restorana tıklandı
		cy.get(':nth-child(5) > .mat-badge').click()
		cy.get('.pos-items-container').should('visible')
		
	})
})
