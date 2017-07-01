/**
 * This view is an example list of people.
 */
Ext.define('Contacts.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Contacts.store.Personnel'
    ],

    title: 'Your Contacts',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'NIT', dataIndex: 'email', flex: 1 },
        { text: 'Phone 1', dataIndex: 'phone', flex: 1 },
        { text: 'Observations', dataIndex: 'observations', flex: 1},
        { text: 'Actions', dataIndex: 'actions', flex: 1}
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
