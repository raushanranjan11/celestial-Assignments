
// Edit window for row of grid
Ext.define("MyApp.view.movie.DirectorForm", {
	extend : 'Ext.window.Window',
	xtype : 'directorForm',
	title : 'Director Form',
	layout : 'fit',
	autoShow : true,
 	modal: true,
    width: 400,
    height: 250,
    closable: true,
   viewModel : {
		type : 'movieViewport'// injected viewmodel
	},
	 
	 
	initComponent : function () {
		var comboStore = new MyApp.store.Category({});
		// var viewModel = Ext.widget('movieList').getViewModel();
        //this.setViewModel(viewModel);
		this.items = [{
				xtype : 'form',
				height : 300,
				width : 400,
				bodyPadding : 10,
				items : [
				 
					 {
 					xtype : 'textfield',
						name : 'director',
						fieldLabel : 'Director',
						allowBlank : false,
						reference : 'director',
						msgTarget : 'side',
						blankText : 'Director Name  is Mandatory!',
						 reference: 'director',
					},
					{
						xtype : 'textfield',
						name : 'dir_description',
						fieldLabel : 'Dir. Description',
						//allowBlank : false,
						reference : 'dir_description',
						msgTarget : 'side',
						//blankText : 'Director Name  is Mandatory!',
 						
					},
					 
					 
					
				],
				buttons : [{
						text : 'Submit',
						scope : this,//id:'submit',
				formBind : true,
 				listeners : {
							click : function(button){
								 
								var win = button.up('window');
								// var  form = this.up('form').getForm();
            
					           var  values = this.up('form').getForm().getValues();
					            Ext.getCmp('movieList').getStore().add(values);
					          
					            
					           win.close();

            	 
							}
						}

						},

						{
				text : 'Cancel',
				scope : this,
				 handler : this.close,
				listeners : {
						//	click : 'onLoginClick'
						}
			}
						]
			}
		];
		 
		this.callParent(arguments);
	}
});














