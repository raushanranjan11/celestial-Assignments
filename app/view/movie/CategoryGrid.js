Ext.define('MyApp.view.movie.CategoryGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.categoryGrid',
	title : 'Category',
	requires : ['Ext.selection.CellModel', 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.form.*',
	 
	 ],
	/*plugins : [{
			xclass : 'Ext.grid.plugin.RowEditing',
			clicksToMoveEditor : 1,
			autoCancel : false
		}
	],*/
	//id:'movieList',
	/*controller : 'movieController',// injected viewcontroller
	viewModel : {
		type : 'movieViewport'// injected viewmodel
	},*/
	selModel : {
		selType : 'rowmodel'
	},
	/*bind : {
		store : '{movieStore}'
		// store:'Movie',
	},*/
	// store:'Movie',
	reference: 'categoryGrids',
		initComponent : function () {
			var comboStore = new MyApp.store.Category({});
			var movie = new MyApp.store.Movie({});
		Ext.apply(this, {
			store:movie,
	 
	columns : [ {
			text : 'Category',
			dataIndex : 'category',
			flex : 2,
			editor : {
				xtype: 'combobox', 
						maxHeight: 150,        
	 					multiSelect: true,
						emptyText : "Select Category",
						store: comboStore,
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
					renderer : function (val, metaData, record, rowIndex, colIndex, store, view) {
 							 // metaData.tdAttr = 'data-qtip="' + value + '"';
 							 // console.log()
 							 // return value; 

 							  var idx = comboStore.find('cat_id', val);
              // console.log(idx);
              var value = idx !== -1 ? comboStore.getAt(idx).get('categoryName'):''
              metaData.tdAttr = 'data-qtip="' + value + '"';
               // return idx !== -1 ? comboStore.getAt(idx).get('categoryName'):'';
               return value;
 						 
				}
		}, {
			text : 'Description',
			dataIndex : 'cat_description',
			flex : 1,
			/*editor : {
				allowBlank : false
			},*/
					renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';
 							 return value; 
				}
		}, 
		 ],
	viewConfig : {
		getRowClass : function (record, index) {
			/*//*/
		}
	},
	listeners : {
		itemdblclick : function (dv, record, item, index, e) {
		// Ext.widget('employeeEdit');
		},
	}
	/*listeners : {	
	itemdblclick:	'gridRowClick',
			scope:this

	},*/
		
	});
		this.callParent(arguments);
	}
});




















