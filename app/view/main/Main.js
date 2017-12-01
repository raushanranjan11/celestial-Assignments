
//Main viewport of application

Ext.define('MyApp.view.main.Main', {
	extend : 'Ext.container.Container',
	requires : ['MyApp.view.main.MainController'],
	xtype : 'app-main',
	controller : 'main',
	plugins : 'viewport',//plugged-In viewport object
	layout : {
		type : 'border'
	},
	items : [{
			xtype : 'panel',
			region: 'west',
         
			title: 'Chart',
			width: 450,
			items : [{
					//xtype : 'employeeChart'
				}
			]
		}, {
			region : 'center',
			xtype : 'panel',
			items : [{
					xtype : 'employeeList'
				}
			]
		}
	]
});