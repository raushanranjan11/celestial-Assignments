// Employee Controler


Ext.define('MyApp.view.employee.EmployeeController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.employeeController',
	init : function (view) {},
	onAddEmployee : function () {
		console.log('employees  controller');
		var me = this; 
		var rec = new MyApp.model.Employee({
				name : '',
				mobile : '',
				email : '',
				leaves : '',
				gender : '',
				sl : 6,
				pl : 6,
				cl : 15,
				reportingManager : '',
			});
		me.getView().getViewModel().getStore('employeeStore').insert(0, rec);
		me.getView().plugins[0].startEdit(
			rec,0
		);
	},
		deleteEmployee: function(grid, rowIndex){
		var me = this;
	   var view = me.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getViewModel().getStore('employeeStore');


        store.remove(selected);
    },

	 gridRowClick :function(dv, record, item, index, e) {
        alert('working');
    }
});



















