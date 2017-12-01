Ext.define('MyApp.view.chart.EmployeeChart', {
    extend: 'Ext.Panel',
    
	alias : 'widget.employeeChart',

		requires : [ 'Ext.chart.*' ],


    initComponent: function() {
        var me = this;

        this.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: [ ],
            data: [
                 
            ]
        });

        me.items = [];

        this.callParent();
    }
});