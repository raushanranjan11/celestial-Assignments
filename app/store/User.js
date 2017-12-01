Ext.define('MyApp.store.User', {
    extend: 'Ext.data.Store',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'User',
            
              model:'MyApp.model.User',
				  data:[
                      {userName:'admin',password:'adminPassword'}
               
                
                ]
        
        
        }, cfg)]);
    }
});