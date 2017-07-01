/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Contacts.Application',

    name: 'Contacts',

    requires: [
        // This will automatically load all classes in the Contacts namespace
        // so that application classes do not need to require each other.
        'Contacts.*'
    ],

    // The name of the initial view to create.
    //mainView: 'Contacts.view.main.Main'
});
