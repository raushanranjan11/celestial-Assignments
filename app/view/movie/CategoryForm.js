
// Edit window for row of grid
Ext.define("MyApp.view.movie.CategoryForm", {
	extend : 'Ext.window.Window',
	xtype : 'categoryForm',
	title : 'Category Form',
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
 						name : 'category',
						fieldLabel : 'Category',
						xtype: 'combobox', 
						maxHeight: 150,        
	 					multiSelect: true,
						emptyText : "Select Category",
 						store:comboStore,
						displayField: 'categoryName',
						valueField: 'cat_id', 
						forceSelection: false,
						editable: false,
						queryMode: 'local',
						// value:'AC',
 						triggerAction: 'all',
						allowBlank : false,
						reference : 'category',
						msgTarget : 'side',
						blankText : 'Category  is Mandatory!',
						 reference: 'category',
 						 
						listeners : {
							 
						}
					},
					{
						xtype : 'textfield',
						name : 'cat_description',
						fieldLabel : 'Cat. Description',
						//allowBlank : false,
						reference : 'cat_description',
						msgTarget : 'side',
						//blankText : 'Director Name  is Mandatory!',n
 						
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














