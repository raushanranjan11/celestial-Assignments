Ext.define('MyApp.view.login.Login', {
	extend : 'Ext.window.Window',
	xtype : 'login',
	requires : ['MyApp.view.login.LoginController', 'Ext.form.Panel'],
	constructor : function (config) {
		return this.callParent(arguments);
	},
	controller : 'login',
	initComponent : function () {
		Ext.apply(this, {
			bodyPadding : 10,
			title : 'Login Window',
			closable : false,
			autoShow : true,
			items : {
				xtype : 'form',
				reference : 'form',
				items : [{
						xtype : 'textfield',
						name : 'username',
						fieldLabel : 'Username',
						allowBlank : false,
						reference : 'username',
						msgTarget : 'side',
						blankText : 'Your User Name  is admin!',
						tip : 'This is a tip',
					}, {
						xtype : 'textfield',
						name : 'password',
						inputType : 'password',
						fieldLabel : 'Password',
						allowBlank : false,
						reference : 'password',
						msgTarget : 'side',
						blankText : 'Your Password is adminPassword!'
					}, {
						xtype : 'displayfield',
						hideEmptyLabel : false,
					}
				],
				buttons : [{
						text : 'Login',
						formBind : true,
						listeners : {
							click : 'onLoginClick'
						}
					}
				]
			}
		});
		this.callParent(arguments);
	}
});









