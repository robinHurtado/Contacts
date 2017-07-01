Ext.define('Contacts.view.main.FieldTypes', {
    extend: 'Ext.form.Panel',
    xtype: 'form-fieldtypes',
    alias: "FieldTypes",

     requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Contacts.view.main.MainController',
        'Contacts.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    frame: true,
    bodyPadding: 10,
    defaultType: 'textfield',
    layout: 'form',

    items: [{                         
            fieldLabel: 'Name',
            name: 'name'
        },{                          
            fieldLabel: 'NIT',
            name: 'nit'
        },{
           fieldLabel: 'Address',
            name: 'address' 
        },{
            fieldLabel: 'City',
            name: 'city'
        },{ 
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        },{
            fieldLabel: 'Phone 1',
            name: 'phonePrimary'
        },{
            fieldLabel: 'Phone 2',
            name: 'phoneSecondary'
        },{                    
            fieldLabel: 'Fax',
            name: 'fax'
        },{                          
            fieldLabel: 'Mobile Number',
            name: 'mobile'
        },Ext.create('Ext.form.ComboBox', {
             fieldLabel: 'List of Prices',
             name: 'priceList',
             store: [{text: "General",value: 'general'},{text: "Ninguna",value: 'ninguna'}]
        }),Ext.create('Ext.form.ComboBox', {
             fieldLabel: 'Seller',
             name: 'seller',
             store: [{text: "Ninguno",value: 'ninguno'}]
        }),Ext.create('Ext.form.ComboBox', {
             fieldLabel: 'Terms of Method',
             name: 'term',
             store: [{text: "Vencimiento Anual",value: 'vc'},{text: "De contado",value: 'dc'},
                      {text: "8 dias",value: '8'}, {text: "15 dias",value: '15'},
                      {text: "30 dias",value: '30'}, {text: "60 dias",value: '60'}  
                    ]
        }),{
            xtype: 'checkboxgroup',
            columns: 2,
            name: 'type',
            items: [{ boxLabel  : 'Client', name      : 'cliente', inputValue: '1'},
                    { boxLabel  : 'Provider', name      : 'proveedor', inputValue: '2',checked   : true}
            ]
        },{
            xtype     : 'textareafield',                        
            fieldLabel: 'Observations',
            name      : 'observaciones',
            anchor    : '100%'
        },{
            xtype: 'checkboxgroup',
            items: [{ boxLabel  : 'Inlcude State of the Account', name: 'state', inputValue: '3', checked: true}]
        },{
            xtype: 'button',
            text: 'Save and Create Other One'
        },{
            xtype: 'button',
            text: 'Save',
            handler: 'submitUpdate'
        }
    ]
});