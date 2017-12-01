Ext.define('MyApp.view.movie.MoviesGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.movieList',
	title : 'Movies',
	requires : ['Ext.selection.CellModel', 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.form.*',
	 'MyApp.view.movie.MovieViewModel', 'MyApp.view.movie.MovieController','MyApp.store.Category'],
	plugins : [{
			xclass : 'Ext.grid.plugin.RowEditing',
			clicksToMoveEditor : 2,
			autoCancel : false
		}
	],
	id:'movieList',
	controller : 'movieController',// injected viewcontroller
	viewModel : {
		type : 'movieViewport'// injected viewmodel
	},
	selModel : {
		selType : 'rowmodel'
	},
	bind : {
		store : '{movieStore}'
	},
	 // bind: '{movieStore}',
	reference: 'movieGrids',

	// Create a session for this view
    // session: true,
		initComponent : function () {
			var comboStore = new MyApp.store.Category({});
			var me = this;
		Ext.apply(this, {
	tbar : [{
			text : 'Add ',//id:'add',
			scope : this,
			listeners : {
				click : 'onAddMovies'
			}
		}, {
			text : 'Edit ',
			scope : this,
			listeners : {
				click : 'onEditMovies'
			}
		}, {
			text : 'Delete ',
			scope : this,
			listeners : {
				click : 'deleteMovies'
			}
		}
	],
	columns : [{
			text : 'Movie Title',
			dataIndex : 'movieTitle',
			flex : 1,
			editor : {
				allowBlank : false
			},
					renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';
 							 return value; 
				}
		}, {
			text : 'Release year',flex : 1,
			dataIndex : 'releaseYear',
			editor : {
				allowBlank : false
			},
					renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';// for quicktip
 							 return value; 
				}
		}, {
			text : 'Category',
			dataIndex : 'category',
			flex : 2,
			editor : {
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
						//value:'AC',
						//ddReorder: true,
						triggerAction: 'all',
						allowBlank : false,
			},
					/*renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';
 							 console.log()
 							 return value; 
 					 
				}*/
				renderer: function(val, metaData, record, rowIndex, colIndex, store,view) {
					
               var idx = comboStore.find('cat_id', val);
              // console.log(idx);
              var value = idx !== -1 ? comboStore.getAt(idx).get('categoryName'):''
              metaData.tdAttr = 'data-qtip="' + value + '"';
               // return idx !== -1 ? comboStore.getAt(idx).get('categoryName'):'';
               return value;
            }
		}, {
			text : 'Director',
			dataIndex : 'director',
			flex : 1,
			editor : {
				allowBlank : false
			},
					renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';
 							 return value; 
				}
		}, {
			text : 'IMDB Link',
			dataIndex : 'imdbLink',//id:'link',
			flex : 1,
			editor : {
				allowBlank : false
			},
					renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';
 							// return value; 
 							 if (value != null && value != '') {
        return '<a  class="link" href=\'idmb@link:' + value + ';\'>' + value + '</a>';
    }
    return value;
				}
		},  
		 ],
		  dockedItems: [{
        xtype: 'pagingtoolbar',
        // store: 'simpsonsStore', // same store GridPanel is using
        bind : {
		store : '{movieStore}'
	},
        dock: 'bottom',
        displayInfo: true
    }],
	viewConfig : {
		getRowClass : function (record, index) {
			/*//*/
		}
	},
	listeners : {
		itemdblclick : function (dv, record, item, index, e) {
		 
		},
		 
		cellclick :function( e1, td, cellIndex, record, tr, rowIndex, e, eOpts ) {
			  


			if(cellIndex == 4){

				if(typeof(e.target.getElementsByTagName('a')[0]) == 'undefined'){
				// console.log("HI")
				Ext.Msg.alert('Alert', record.get('movieTitle') + ' has no link.');
			}else{


				var tabPanel = me.up('app-main').down('tabpanel'); 
              var addIndex = tabPanel.items.length;
               var tab = tabPanel.add(
	               {xtype:'panel',closable:true,
	               title:record.get('imdbLink'),
	               html:record.get('cat_description')
	           }
	       );

              tabPanel.setActiveTab(tab);
          }
				
			}
			
		}
	}
	/*listeners : {	
	itemdblclick:	'gridRowClick',
			scope:this

	},*/
		
	});
		this.callParent(arguments);
	}
});




















