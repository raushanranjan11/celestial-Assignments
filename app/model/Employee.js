Ext.define('MyApp.model.Employee', {
    extend: 'Ext.data.Model',

    fields: [{name:'name'},
             {name:'mobile'},
		 {name:'email'},
		 {name:'gender'},
		 {name:'reportingManager'},
		 {name:'leaves'},'sl','cl','pl'
		],

	//	validators: {
        
      //  gender: { type: 'inclusion', list: ['Male', 'Female'] },
        
   // }
            
            
});
