
// Edit window for row of grid
Ext.define("MyApp.view.movie.MovieWindow", {
	extend : 'Ext.window.Window',
	xtype : 'movieEdit',
	//title : 'Edit Employee',
	layout : 'fit',
	autoShow : true,
	// id:'movieEdit',
	modal: true,
    width: 400,
    height: 350,
    closable: true,
	viewModel : {
		type : 'movieViewport'// injected viewmodel
	},
	/* bind: {
        title: 'Edit {theMovies.movieTitle}'
    },*/
	//requires : ['Ext.model.Category'],
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
						name : 'movieTitle', 
						allowBlank : false,
						//reference : 'movieTitle',
						msgTarget : 'side',
						blankText : 'Movie Name  is Mandatory!',
						fieldLabel : 'Movie Title',
						reference: 'movieTitle',
            			// bind: '{theMovies.movieTitle}',
						listeners : {
							 
						}
					}, {
						xtype : 'textfield',
						name : 'releaseYear',
						fieldLabel : 'Release year', 
						 reference: 'releaseYear',
            			 // bind: '{theMovies.releaseYear}',
						listeners : {
							 
						}
					}, {
						//xtype : 'combobox',
						name : 'category',
						fieldLabel : 'Category',
						xtype: 'combobox', 
						maxHeight: 150,        
	 					multiSelect: true,
						emptyText : "Select Category",
						// store: 'MyApp.store.Category',
						store:comboStore,
						displayField: 'categoryName',
						valueField: 'cat_id', 
						forceSelection: false,
						editable: false,
						queryMode: 'local',
						value:'AC',
						//ddReorder: true,
						triggerAction: 'all',
						allowBlank : false,
						reference : 'category',
						msgTarget : 'side',
						blankText : 'Category  is Mandatory!',
						 reference: 'category',
            			 // bind: '{theMovies.category}',
						 
						listeners : {
							 
						}
					},
					{
						xtype : 'textfield',
						name : 'director',
						fieldLabel : 'Director',
						allowBlank : false,
						reference : 'director',
						msgTarget : 'side',
						blankText : 'Director Name  is Mandatory!',
						 reference: 'director',
            			// bind: '{theMovies.director}'
						
					},
					{
						xtype : 'textfield',
						name : 'imdbLink',
						fieldLabel : 'IMDB Link',
						 reference: 'imdbLink',
            			// bind: '{theMovies.imdbLink}'
						
					}
					
				],
				buttons : [{
						text : 'Submit',
						scope : this,
				formBind : true,
				//id:'submit',
				listeners : {
							click : function(button){
								 
								var win = button.up('window');
            
					           var  values = this.up('form').getForm().getValues();
					           // Ext.widget('movieList').getStore().add(values);
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














