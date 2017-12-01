Ext.define('MyApp.store.Category', {
    extend: 'Ext.data.Store',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Category',
            
              model:'MyApp.model.Category',
				  data:[
                    
      {cat_id:'AC',categoryName:'Action'},
      {cat_id:'SD',categoryName:'Sports and Drama'},
      {cat_id:'FM',categoryName:'Family'}
               
                
                ],
					//groupField: 'leaves',
        
        
        }, cfg)]);
    }
});