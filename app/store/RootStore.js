Ext.define('MyApp.store.RootStore', {
    extend: 'Ext.data.TreeStore',
   model: 'MyApp.model.RootModel',
   // requires: 'MyApp.model.RootModel',
  // xtype: 'store',
  storeId: 'store',
  /* fields:[name: 'text',
        mapping: 'text'],*/

        /*  rootVisible:true,
    root: {
        text: 'Roles',
        expanded: true  ,
        children: [
            {
                text: 'Add',
                leaf: true
            },
            {
                text: 'List',
                leaf: true
            },
             
        ]      
    },*/
    /*proxy: {
        type: 'ajax',
        // url: treeRoot,
        url: 'data/treeRoot.json',
        //actionMethods: 'POST',
        reader: {
            type: 'json'
        }
    }*/

});