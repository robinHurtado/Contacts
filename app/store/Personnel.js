Ext.define('Contacts.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    fields: [
        'name', 'email', 'phone', 'observations', 'actions'
    ],

    proxy:{
        type: 'rest',
        url: 'app.php',
        writer: {
            type: 'json'
        }
    },

    autoLoad: true
});
