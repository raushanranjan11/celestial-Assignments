Ext.define('MyApp.model.RootModel', {//
    extend: 'Ext.data.Model',
    /*fields: [
        { name: 'id', type: 'int', mapping: 'Id' },
        { name: 'text', type: 'string', mapping: 'Text' },
        { name: 'leaf', type: 'boolean', mapping: 'Leaf' },
        { name: 'loaded', type: 'boolean', mapping: 'Loaded', defaultValue: false },
        { name: 'Properties'},
        { name: 'expanded', defaultValue: true }
    ]*/

    fields: [{
        name: 'name',
        type: 'string'
    }],
    proxy: {
        type: 'memory',
        data: {
            success: true,
            children: [{
                name: 'Cars',
                leaf: false, // this is a branch   
                expanded: false,
                children: [{
                    name: 'Mercedes-Benz',
                    leaf: true // this is a leaf node. It can't have children. Sad! :-(   
                }, {
                    name: 'Audi',
                    leaf: true
                }, {
                    name: 'Ferrari',
                    leaf: true
                }]
            }]
        }
    }
});