/**
 * Application definition goes here
 */

Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
//  Aplication name space
    name: 'MyApp',

 // TODO: add global / shared models here
		models: [
			//'MyApp.model.User',
			'MyApp.model.Employee',
			'MyApp.model.RootModel'
		],

    stores: [
        // TODO: add global / shared stores here
	//'MyApp.store.User',
		'MyApp.store.Employee',
		'MyApp.store.RootStore'
    ],
    views: [
        'MyApp.view.login.Login',
        'MyApp.view.main.Main',
		 'MyApp.view.employee.Employer',
		'MyApp.view.employee.EditEmployee',
		//'MyApp.view.chart.EmployeeChart'
    ],
    launch: function () {

		//Ext.QuickTips.init();
		  // intialising tooltip object
		Ext.tip.QuickTipManager.init();
         // initialising login screen during starting or boot of application
	    Ext.widget('login');

    }
});