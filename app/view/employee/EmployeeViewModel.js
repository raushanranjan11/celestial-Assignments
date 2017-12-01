/**
 * 
 */


Ext.define('MyApp.view.employee.EmployeeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.employeeViewport',
 
    requires: [
        'Ext.data.Store',
       'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
 
    stores: {
         employeeStore: {
            autoLoad: true,
            model: 'MyApp.model.Employee',
            proxy: {
                type: 'ajax',
                url: 'data/employee.json',
                reader: {
                    type: 'json',
                    rootProperty: 'rows'
                }
            }
        }
    }
 
});