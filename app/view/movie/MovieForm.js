Ext.define('MyApp.view.movie.MovieForm', {
    extend: 'Ext.form.Panel',
    requires: ['MyApp.view.movie.MovieController'],
    xtype: 'movieForm',
    autoDestroy:false,
    controller: 'movieController',
    initComponent: function() {
       
        var comboStore = new MyApp.store.Category({});

        this.items = [
				 
					{
						xtype : 'textfield',
						name : 'movieTitle', 
						allowBlank : false,
 						msgTarget : 'side',
						blankText : 'Movie Name  is Mandatory!',
						fieldLabel : 'Movie Title',
						reference: 'movieTitle',
            			 bind: '{theMovies.movieTitle}',
						listeners : {
							 
						}
					}, {
						xtype : 'textfield',
						name : 'releaseYear',
						fieldLabel : 'Release year', 
						 reference: 'releaseYear',
            			 bind: '{theMovies.releaseYear}',
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
            			 bind: '{theMovies.category}',
						 
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
            			bind: '{theMovies.director}'
						
					},
					{
						xtype : 'textfield',
						name : 'imdbLink',
						fieldLabel : 'IMDB Link',
						 reference: 'imdbLink',
            			bind: '{theMovies.imdbLink}'
						
					}
					
				];
       this. buttons = [{
            text: 'Save',
            scope : this,
            action: 'save',
            formBind : true,
            //id:'save'
        }, '->', {
            text: 'Cancel',
            action: 'cancel',
            scope : this,
            //scope : this,
				 handler : this.close,
        }];
        this.callParent();
    }
});