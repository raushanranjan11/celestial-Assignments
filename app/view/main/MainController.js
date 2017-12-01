/**
 * 
 */


Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    onClickButton: function () {

      
        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
   //     Ext.widget('login');
	//	 Ext.widget('basic-column');

    }
});