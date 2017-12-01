/**
 * 
 */


Ext.define('MyApp.view.movie.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movieViewport',
    // model: 'MyApp.model.Movie',
 
    requires: [
        'Ext.data.Store',
       'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
 
    stores: {
         movieStore: {
            autoLoad: true,
            // autoLoad: {start: 0, limit: 2},
            pageSize: 3,
            model: 'MyApp.model.Movie',
            proxy: {
                type: 'ajax',
                url: 'data/movies.json',
                reader: {
                    type: 'json',
                    rootProperty: 'rows'
                }
            },
             // autoLoad: true,
            // session: true,
            
        }
    },



     /*formulas: {
        theMovies: {
            // We need to bind deep to be notified on each model change
            bind: {
                bindTo: '{movieGrids.selection}', //--> reference configurated on the grid view (reference: groupGrid)
                deep: true
            },
            get: function(record) {
                console.log("^^^^^^^^^^^^^^666");
                return record;
            },
            set: function(record) {
                console.log("^^^^^^^^^^^^^^666");
                console.log(record);
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('theMovies', record);
            }
        }
    }*/

   /* currentRec: {
            bind: {
                bindTo: '{gridbetRef.selection}',
                deep: true
            },
            get: function(client) {
                return client;
            },
            set: function(client) {
                console.info(arguments);
                if (!client.isModel) {
                    client = this.get('storebet').getById(client);
                    console.info(client);
                }
                this.set('currentRec', client);
            }
        }*/
 
});