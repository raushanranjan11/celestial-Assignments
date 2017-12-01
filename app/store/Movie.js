Ext.define('MyApp.store.Movie', {
    extend: 'Ext.data.Store',
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Movie',
            
              model:'MyApp.model.Movie',
				  data:[
                     

      {movieTitle:'Sultan',releaseYear:'2016',category:'SD',director:'Ali Abbas Zafar',imdbLink:'sultan',
                     dir_description:'Ali Abbas Zafar',cat_description:'Sports and Drama Films'},
               
                
                ],
				 
        
        
        }, cfg)]);
    }
});