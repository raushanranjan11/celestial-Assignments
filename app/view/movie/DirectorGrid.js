Ext.define('MyApp.view.movie.DirectorGrid', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.directorGrid',
	title : 'Director',
	requires : ['Ext.selection.CellModel', 'Ext.grid.*', 'Ext.data.*', 'Ext.util.*', 'Ext.form.*',
	 // 'MyApp.view.movie.MovieViewModel', 'MyApp.view.movie.MovieController'
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
	},*/
	reference: 'movieGrids',
		initComponent : function () {
			var movie = new MyApp.store.Movie({});
		Ext.apply(this, {
			store:movie,
	 
	columns : [ {
			text : 'Director',
			dataIndex : 'director',
			flex : 1,
			/*editor : {
				allowBlank : false
			},*/
					renderer : function (value, metaData, record, rowIndex, colIndex, store, view) {
 							 metaData.tdAttr = 'data-qtip="' + value + '"';
 							 return value; 
				}
		}, {
			text : 'Description',
			dataIndex : 'dir_description',
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




















