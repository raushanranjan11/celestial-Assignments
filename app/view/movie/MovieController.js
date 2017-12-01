// Employee Controler


Ext.define('MyApp.view.movie.MovieController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.movieController',
	init : function (view) {},
	onAddMovies : function () {
		 Ext.widget('movieEdit');
		 
		 // var win =Ext.widget('movieEdit').setTitle('Add Movies');
		 // this.getView().add(win);
		 // win.show();
	},
	onEditMovies : function (button) {
		var view = this.getView();
           var selected = view.getSelectionModel().getSelection();
           // console.log(selected[0].getData());
            //console.log(this.dialog);
            if(Ext.isEmpty(selected)){
            	Ext.Msg.alert('Alert', 'You should select a row.');
            }else{
            	// console.log('^^^^^^^^^^^^^^^^^^^^');

            	var form = Ext.create('MyApp.view.movie.MovieForm',{
                    viewModel:{  // <--- this is solution
                        data:{
                            theMovies:this.getView().getSelectionModel().getSelection()[0]
                        }
                    },
                     session: true
                });
                var window = Ext.create('Ext.Window', {
                    frame: true,
                    width: 350,
                    height: 320,
                    modal: true,
                    layout: 'fit'
                });
                window.add(form);
                this.getView().add(window); // <--- add parent 'scope'
                window.show();
            	//var win = MyApp.view.movie.MovieWindow
            	// Ext.widget('movieEdit').setTitle('Edit Movies');
            	//var win = Ext.widget('movieEdit');
            	// console.log(win);
            	// console.log(win.down('form'));
            	/*this.dialog = view.add(win.down('form').add({
            		viewModel: { 
                data: {
                    theMovies: selected[0] //button.getWidgetRecord()
                }
                
            }, 
            session: true
            	})
            );*/
            	//win.show(); 
            	/*this.dialog = view.add({
            xtype: 'movieEdit', 
            viewModel: { 
                data: {
                    theMovies: selected[0].getData() //button.getWidgetRecord()
                }
            }, 
            session: true
        });*/
       /* var win  = Ext.widget('movieEdit');
        
		view.add(win); // <--- add parent 'scope'
		win.show(); */
		//=============
		       // this.dialog.show();

            }
		
// var viewModel = Ext.getCmp('gridbet').getViewModel();
        //this.setViewModel(viewModel);
		/*var window = Ext.widget('movieEdit');
                // window.add(form);
                //this.getView().add(window); // <--- add parent 'scope'
                window.show();*/
		 
	},
		deleteMovies: function(grid, rowIndex){
		var me = this;
	   var view = me.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getViewModel().getStore('movieStore');


        store.remove(selected);
    },

	 gridRowClick :function(dv, record, item, index, e) {
        alert('working');
    },
    control: {
        'movieForm button[action=save]': {
            click: function(button) {
                var form = button.up('form'),
                    window = form.up('window');
                  //  rec = this.getViewModel().get('theMovies');
                   
                 //rec.commit();
                window.close();
             }
        },
        'movieForm button[action=cancel]': {
            click: function(button) {
                var form = button.up('form'),
                    window = form.up('window');
                     
                 // var  rec = this.getViewModel().getData('theMovies');
                //rec.reject();
                window.close();
            }
        }
    }
});



















