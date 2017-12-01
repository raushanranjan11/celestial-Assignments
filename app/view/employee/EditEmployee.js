
// Edit window for row of grid
Ext.define("MyApp.view.employee.EditEmployee", {
	extend : 'Ext.window.Window',
	xtype : 'employeeEdit',
	title : 'Edit Employee',
	layout : 'fit',
	autoShow : true,
	initComponent : function () {
		this.items = [{
				xtype : 'form',
				height : 300,
				width : 400,
				bodyPadding : 10,
				items : [{
						xtype : 'radiogroup',
						fieldLabel : 'Leaves',
						columns : 3,
						vertical : true,
						items : [{
								boxLabel : 'CL',
								name : 'l',
								inputValue : '1'
							}, {
								boxLabel : 'PL',
								name : 'l',
								inputValue : '2',
								checked : true
							}, {
								boxLabel : 'SL',
								name : 'l',
								inputValue : '3'
							}, ]
					}, {
						xtype : 'numberfield',
						minValue : 0,
						name : 'leaveNumber',
						id : 'ff',
						fieldLabel : 'No. Of Leaves',
						listeners : {
							change : function (me, newValue, oldValue, eOpts) {
								var toDate = me.up('form').getForm().findField('toDate');
								if (newValue == 1) {
									toDate.disable();
								} else {
									toDate.enable();
								}
							}
						}
					}, {
						xtype : 'datefield',
						name : 'fromDate',
						fieldLabel : 'From Date',
						maxValue : new Date(),
						listeners : {
							change : function (me, newValue, oldValue, eOpts) {
								var form = me.up('form').getForm();
								var numberOfLeave = 0,
								toDate = form.findField('toDate').getValue()
									if (toDate != null) {
										numberOfLeave = toDate.getDate() - newValue.getDate();
										console.log(numberOfLeave);
										form.findField('leaveNumber').setValue(numberOfLeave);
									}
							}
						}
					}, {
						xtype : 'datefield',
						name : 'toDate',
						fieldLabel : 'To Date',
						value : new Date(),
						minValue : new Date(),
						listeners : {
							change : function (me, newValue, oldValue, eOpts) {
								var form = me.up('form').getForm();
								var numberOfLeave = 0,
								fromDate = form.findField('fromDate').getValue()
									if (fromDate != null) {
										numberOfLeave = newValue.getDate() - fromDate.getDate();
										console.log(numberOfLeave);
										form.findField('leaveNumber').setValue(numberOfLeave);
									}
							}
						}
					}
				]
			}
		];
		this.buttons = [{
				text : 'Submit',
				action : 'submit'
			}, {
				text : 'Cancel',
				scope : this,
				handler : this.close
			}
		];
		this.callParent(arguments);
	}
});














