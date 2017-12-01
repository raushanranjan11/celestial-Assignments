Ext.define('MyApp.view.tree.Category', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.categoryTree',
    title: 'Category',
    store: 'Roles'  ,
    width: 100,
    height: 50,
    store: store,
    useArrows: false,
    rootVisible: false,  
});