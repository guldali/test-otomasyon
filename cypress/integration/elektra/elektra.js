context('Elektra', () =>{
	beforeEach(()=>{
        cy.visit('https://www.elektraweb.com')
        .viewport(1200,729)
    })
    Cypress.Commands.add('Login',()=>{
      cy.get('#mat-input-2').clear().type('18892')// önce içindeki yazı temizlenip typenin içindeki yazıldı		
        .get('#mat-input-0').clear().type('demo')//önce içindeki yazı temizlenip typenin içindeki yazıldı	
        .get('#mat-input-1').clear().type('123')
        .get('.mat-button-wrapper').contains('Login').click()//butona otomatik tıklama yapıldı

    })
    Cypress.Commands.add('toolbarcontral',()=>{
      cy.get('.mat-toolbar-row').contains('pie_chart').should('visible')
        .get('.mat-toolbar-row').contains('money').should('visible')
        .get('.mat-toolbar-row').contains('insert_chart_outlined').should('visible')
        .get('.mat-toolbar-row').contains('view_comfy').should('visible')
        .get('.mat-toolbar-row').contains('date_range').should('visible')
        .get('.mat-toolbar-row').contains('flight_land').should('visible')
        .get('.mat-toolbar-row').contains('hotel').should('visible')
        .get('.mat-toolbar-row').contains('monetization_on').should('visible')
        .get('.mat-toolbar-row').contains('touch_app').should('visible')
        .get('.mat-toolbar-row').contains('add_shopping_cart').should('visible')
        .get('.mat-toolbar-row').contains('alarm').should('visible')
        .get('.mat-toolbar-row').contains('TR').should('visible')
        .get('.mat-toolbar-row').contains('account_circle').should('visible')


    })

    Cypress.Commands.add('rezeryasyoniconlar',()=>{
      cy.get('.mat-drawer-content').should('visible').wait(200)
        .get('.sidemenu > :nth-child(6) > .mat-button').click()
        .get('.ang-grid-rez-listesi').contains('add').should('visible')
        .get('.ang-grid-rez-listesi').contains('edit').should('visible')
        .get('.ang-grid-rez-listesi').contains('print').should('visible')
        .get('.ang-grid-rez-listesi').contains('refresh').should('visible')
        //cy.get('.ang-grid-rez-listesi').find('svg').should('visible') exel sıkıntılı
        .get('.ang-grid-rez-listesi').contains('expand_less').should('visible')
        .get('.ang-grid-rez-listesi').contains('menu').should('visible')
        .get('.ang-grid-rez-listesi').contains('flash_on').should('visible')
        .get('#grid-actions > :nth-child(1) > .mat-button').click().wait(200)
        .get('.panel-grid > ang-group.ng-star-inserted > .group').should('visible')        
        .get('.mat-menu-buttons').should('visible')
        .get('.mat-dialog-content') .contains('chevron_left').should('visible')
        .get('.record-left-side').contains('add').should('visible')
        .get('.mat-dialog-content').contains('file_copy').should('visible')
        .get('.record-left-side').contains('print').should('visible') 
        .get('.mat-dialog-content').contains('save').should('visible')
        .get('.mat-dialog-content').contains('chevron_right').should('visible')
        .get('.mat-dialog-content').contains('flash_on').should('visible')
        .get('.mat-dialog-content').contains('done').should('visible')
        .get('.mat-dialog-content').contains('clear').should('visible')
        .get('.ang-grid-HOTEL_RES_DetailView').contains('add').should('visible')
        .get('.ang-grid-HOTEL_RES_DetailView').contains('edit').should('visible')
        .get('.ang-grid-HOTEL_RES_DetailView').contains('delete').should('visible')
        .get('.ang-grid-HOTEL_RES_DetailView').contains('refresh').should('visible')
        .get('.ang-grid-HOTEL_RES_DetailView').contains('menu').should('visible')
        .get('.ang-grid-HOTEL_RES_DetailView').contains('flash_on').should('visible')

    })
    Cypress.Commands.add('blokaj',()=>{
        
      cy.get('.mat-toolbar-row').contains('date_range').click()
        .get('.mat-slide-toggle-content').contains('Forecast').prev().click()
        .get('#calendar-chart').should('visible')
        .get('.b-grid-cell').contains('Family').click()
        .get('.b-grid-cell').contains('Standart').click()

    })
    Cypress.Commands.add('forecast',()=>{      
      cy.get('.mat-toolbar-row').contains('insert_chart_outlined').click()
        .get('.mat-raised-button').contains('<').should('visible')
        .get('.mat-raised-button').contains('>').should('visible')
        .get('.mat-form-field-flex').should('visible')
        .get('.ng-star-inserted').contains('printer'+' Yazdır').should('visible')
        .get('.ng-star-inserted').contains('today'+' Yıllık').should('visible')
        .get('.ng-star-inserted').contains('check_box'+' Günlük Durum').should('visible')
        .get('.mat-button-wrapper').contains('Bu Hafta').should('visible')
        .get('.mat-button-wrapper').contains('Bu Ay').should('visible')
        .get('.mat-button-wrapper').contains('Bu Yıl').should('visible')
        .get('.mat-raised-button').contains(' Raporla ').should('visible')
        .get('.big-icon').contains('clear').should('visible')

  })
       
    Cypress.Commands.add('durum1',()=>{
        var adet2=0
        cy.get('.mat-toolbar-row').contains('pie_chart').click().get('.pl-16').wait(1000).contains('Konaklayanlar Odalar')
        .parent().parent().find('.light-blue-fg',{timeout:5000})
          .invoke('text').then(adet =>{
          adet =  adet.match('[0-9]+')+''
           cy.log(adet)
           .get('.pt-8',{timeout:5000}).find('.light-blue-fg',{timeout:1000}).click()
           //.get('.pt-32').click().get('.cdk-overlay-container')
           .get('.mat-dialog-container',{timeout:5000}).contains('Konaklayan Listesi').parent().parent().parent().find('.ag-body-viewport')
           .last().contains(adet,{timeout:5000})
          })
         
         
     })
     Cypress.Commands.add('durum2',()=>{
        cy.get('.mat-toolbar-row').contains('pie_chart').click().get('.pl-16').wait(1000).contains('Beklenen Gelişler')
          .parent().parent().parent().find('.red-fg')
          .invoke('text').then(adet1 =>{
            adet1 = adet1.match('[0-9]+')+''
            cy.log(adet1)
            .get('.pt-8',{timeout:5000}).find('.red-fg',{timeout:1000}).click()
            .get('.mat-dialog-container',{timeout:500}).contains('Beklenen Gelişler').click()
            .get('.mat-dialog-container',{timeout:5000}).contains('Rezervasyon Listesi').parent().parent().parent().find('.ag-body-viewport')
            .last().contains(adet1,{timeout:7000})
            
          })
         // 
        //  .get('.ag-body',{timeout:1000}).last().contains('3',{timeout:5000}).should('visible')

    

      })
     Cypress.Commands.add('durum3',()=>{
        cy.get('.mat-toolbar-row').contains('pie_chart').click().get('.pl-16').wait(1000).contains('Beklenen Çıkışlar')
          .parent().parent().parent().find('.orange-fg')
          .invoke('text').then(adet2 =>{
            adet2 = adet2.match('[0-9]+')+''
            cy.log(adet2)
            if(adet2==0){
            cy.get('.pt-8',{timeout:5000}).find('.orange-fg',{timeout:1000}).click()
              .get('.mat-dialog-container',{timeout:500}).contains('Beklenen Çıkışlar').click()
            }
            else{
             cy.get('.pt-8',{timeout:5000}).find('.orange-fg',{timeout:1000}).click()
               .get('.mat-dialog-container',{timeout:500}).contains('Beklenen Çıkışlar').click()
               .get('.mat-dialog-container',{timeout:5000}).contains('Konaklayan Listesi').parent().parent().parent().find('.ag-body-viewport')
               .last().contains(adet2,{timeout:7000})

            }
          })
   
      })
        

    it('type()', () => { //it metodu ilk çalışma için gerekli 
             cy.Login()
          // cy.toolbarcontral()
          // cy.rezeryasyoniconlar()
          // cy.blokaj()
          // cy.forecast()
          // cy.durum1()
          // cy.durum2()
          // cy.durum3()
             cy.get('.mat-toolbar-row').contains('money').click()
             cy.get('.wrapper').contains('Fiyat ve Doluluk').should('visible')
            // cy.get('.button-actions').contains('Eylemler').click({force: true}).wait(5000)
             cy.get('.button-actions').contains('60',{timeout:1000}).click({force: true}).wait(1000)
            // cy.get('.mat-sidenav-content').scrollTo(1000,100) //aşağı ve sağ scroll
            // cy.get('.ng-star-inserted').wait(1000).contains('panorama_fish_eye').click().click()
             cy.get('.mat-icon').contains('expand_more').click({force: true})
             cy.get('.ng-star-inserted').contains('Satışı Durdur').parent().find('.material-icon').click({force: true})
   
    })
})