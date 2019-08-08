context('Easypos', () =>{
    beforeEach(()=>{
		cy.visit('https://www.elektraweb.com').viewport(1200,729)
    })
   
    Cypress.Commands.add('TextCagir', (textYazi, textSayi) =>
	cy.contains(textYazi).parent().parent().parent().parent()   
	.find('input').first().clear().type(textSayi)
    );
    Cypress.Commands.add('TextElektraCagir',(TextYazi,textyaz)=>{
        cy.get('.mat-input-element',{timeout:10000})
        .parent().parent().contains(TextYazi).parent().parent().find('.mat-input-element').click()
        .clear().type(textyaz).get('.mat-option').contains(textyaz).click() 
    })
    Cypress.Commands.add('login',(kullanıcı,sifre)=>{
        cy.TextCagir('Tenant',kullanıcı).TextCagir('Password',sifre)
        .get('.mat-raised-button').contains('Login',{ timeout: 10000 }).click()
    })
    Cypress.Commands.add('MenuSec', (menu, menusecim) =>
	cy.get('.mat-form-field-type-mat-select',{timeout:10000})
		.contains(menu).parent().parent().click()
		.get('.mat-option').contains(menusecim,).click()
);
    Cypress.Commands.add('musteriadsoyad',(textad,textsoyad)=>{
        cy.get('.ang-grid-HOTEL_RES_DetailView').contains('add',{timeout:2000}).click()
        .get('.ag-cell-edit-input',{timeout:10000}).parent().parent().parent().parent()
        .next().dblclick().find('.ag-cell-edit-input',{timeout:1000}).type(textad)
        .parent().next().dblclick().find('.ag-cell-edit-input').type(textsoyad)
        .get('ang-record-grid.ng-star-inserted > app-grid.ng-star-inserted > .content > .grid-container > .main-grid > .ag-root-wrapper > .ag-root-wrapper-body > .ag-root > .ag-body > .ag-body-viewport-wrapper > .ag-body-viewport')
        .scrollTo('right').find('.mat-checkbox').first().click()
    })
    Cypress.Commands.add('islemcheckin',(textisim)=>{
        cy.contains(textisim,{timeout:10000}).trigger('contextmenu').debug().get('.ag-menu-list',{timeout:10000})
         .contains('Check-In').click().get('.angus-dlg').contains('Evet').click().get('.cdk-overlay-container').contains('OK',{timeout:5000}).click()
    })
    Cypress.Commands.add('bosodasec',(textisim)=>{
        cy.contains(textisim,{timeout:10000}).trigger('contextmenu').get('.ag-menu-list')
         .contains('Boş Oda Listesinden Seç').click().wait(2000)
         .get('.ag-header-container').last().find('.ag-floating-filter-body').first().parent()
         .next().next().find('.ag-floating-filter-input').type('Clean').wait(400)
         .get('.light-green',{timeout:10000}).last().click().wait(100).dblclick().wait(2000)
    })
    Cypress.Commands.add('odasecim',(İstekYazi,istekyaz)=>{
        cy.get('.mat-form-field',{timeout:5000}).contains('Bbk').parent().parent().parent().parent()
        .parent().parent().parent().parent().parent().next()
        .find('.mat-input-element').type('403').click()
        .get('.mat-option-text',{timeout:2000}).click()
        .get('.mat-form-field-label-wrapper').contains(İstekYazi,{timeout:1000}).parent().parent().click().find('.mat-input-element').type(istekyaz,{force:true})
        
    })
    Cypress.Commands.add('faturakes',(textisim)=>{
        cy.get('.main-grid').contains(textisim).trigger('contextmenu').debug().get('.ag-menu-list',{timeout:2000})
        .contains('Fatura Kes').click().wait(500).get('.mat-dialog-container').scrollTo('bottom').find('.mat-raised-button').contains('Ödeme')
        .click().wait(300).MenuSec('Ödeme Tipi','Cash').get('.mat-raised-button').contains('Kaydet').click()
        .get('.mat-raised-button').contains('!CheckOut!').click().get('.dlg-action').contains('Evet').click()
        .wait(1000).get('.angus-dlg',{timeout:5000}).contains('OK').click()
    })
    Cypress.Commands.add('folyoislem',(textisim)=>{
        cy.get('.main-grid').find('.ag-floating-filter-input').first()
        .parent().parent().parent().next().next().next().next().find('.ag-floating-filter-input').type(textisim).wait(500)
        .get('.main-grid').contains(textisim,{timeout:5000}).trigger('contextmenu')
        .wait(2000).debug().get('.ag-menu-list').contains('Folyo İşlemleri')
        .click().wait(1000).get('.mat-expansion-panel-body')
        .contains('Ödeme Al').click().wait(500).get('.cdk-overlay-pane')
        .MenuSec('Ödeme Tipi','Cash').TextCagir('TL Tutar','500')
        .get('.mat-dialog-container').contains('Kaydet',{timeout:5000}).click().wait(1000)
        .get('.mat-expansion-panel-body').contains('Nakit Ödeme').click()
        .wait(500).get('.angus-dlg').contains('Evet')
        .click().wait(500).get('.mat-dialog-container',{timeout:5000}).contains('OK').click().wait(200)
        .get('.big-icon').contains('clear')
        .click()
    })
    Cypress.Commands.add('Notlar',(TextYazi,not)=>{
        cy.get('.mat-tab-labels').contains('Notlar').click().wait(1000)
          .get('.ang-grid-resnote',{timeout:1000}).contains('add').click().wait(1000)
          .get('.ag-cell-edit-input').click().get('.mat-option-text').contains(TextYazi).click({timeout:100000})
          .get('.ag-row-not-inline-editing').contains(TextYazi).next().dblclick({timeout:1000}).find('.ag-cell-edit-input').type(not)
          //.get('.big-icon').contains('done').click()
          
    })
    Cypress.Commands.add('İstekler',(TextYazi)=>{
        cy.get('.mat-button').contains('Konaklayan').click().wait(1000)
          .get('.ag-floating-filter-input').first().parent().parent().parent().next().next().next().next().find('input').type(TextYazi)
          .get('.main-grid').contains(TextYazi).trigger('contextmenu').get('.ag-menu-list').contains('Folyo İşlemleri',{timeout:1000}).click()
          .get('.mat-raised-button').contains('Harcama Gir').wait(1000).click().wait(1000)
          .get('.mat-form-field-label-wrapper').contains('Departman').click({force:true})
          .get('.mat-option-text').contains('Pansiyon',{timeout:1000}).click().wait(1000)
        //.get('.mat-option-text').should('not.be.visible')
          .get('.mat-form-field-label-wrapper').contains('Gelir',{timeout:1000}).click({force:true})
          .get('.mat-option-text').contains('Yiyecek',{timeout:1000}).click()
          .TextCagir('TL Tutar', '12')
          .get('.mat-dialog-container').contains('Folyo Harcama').parent().parent().contains('Notlar').parent().parent().parent()
          .find('input').type(TextYazi,{force:true})
          .get('.mat-dialog-container').contains('Folyo Harcama').parent().parent().contains('Kaydet').click()

          
    })

    it('type() - type into a DOM element', () => {
        cy.TextCagir('Usercode','demo').login('18892','123',{timeout:5000}).wait(1000).debug()
        .get('.mat-toolbar-row')
        
        .contains('flight_land').click().wait(1000).get('.mat-drawer-content')
          
            //.debug()
            // .get('.content').contains('add').click().wait(1000)
             
            cy//.TextElektraCagir('Acenta','ADA').TextCagir('Check-Out','01.08.2019')
              .İstekler('Berna KOCA')
            //  .musteriadsoyad('Will','Turner')
            // .TextElektraCagir('Oda Tipi','Fam').TextElektraCagir('Pansiyon','BB')
            // .MenuSec('Ödeyen','Misafir').MenuSec('Ödeme Tipi','Nakit')
            // .odasecim('Misafir Ek İstekler','Sigara Yok')
            // .get('.cdk-overlay-container').contains('Fiyatlandırma').click()
            // .TextElektraCagir('Kontrat','AFS MEDYA').TextElektraCagir('Fiyat Tipi','Refundable')
            // .Notlar('Checkin Message','Suit ve ek yataklı büyük bir oda')
            // .get('.record-dialog').contains('done').click().wait(2000)
            // .bosodasec('Will Turner').islemcheckin('Will Turner')
            // .get('.mat-toolbar-row').contains('hotel').click().wait(1000)
            // .folyoislem('Will Turner').faturakes('Will Turner')

    })
})