Ext.define('MyApp.store.Employee', {
    extend: 'Ext.data.Store',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Employee',
            
              model:'MyApp.model.Employee',
				  data:[
                      {name:'Raushan',mobile:'123',email:'raushan@abc.com',reportingManager:'A',leaves:'PL',gender:'M',sl:6,pl:6,cl:15},
				  {name:'Raushan',mobile:'123',email:'raushan@abc.com',reportingManager:'A',leaves:' SL',gender:'M',pl:6,sl:6,cl:15},
				  {name:'Raushan',mobile:'123',email:'raushan@abc.com',reportingManager:'A',leaves:'CL',gender:'M',cl:16,sl:3,pl:2},
				    {name:'Ranjan',mobile:'123',email:'raushan@abc.com',reportingManager:'A',leaves:'PL',gender:'M',cl:13,sl:3,pl:5},
				  {name:'Ranjan',mobile:'123',email:'raushan@abc.com',reportingManager:'A',leaves:' SL',gender:'M',pl:2,sl:6,cl:11},
				  {name:'Ranjan',mobile:'123',email:'raushan@abc.com',reportingManager:'A',leaves:'CL',gender:'M',sl:2,cl:14,pl:5}
               
                
                ],
					groupField: 'leaves',
        
        
        }, cfg)]);
    }
});