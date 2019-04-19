import bs from "..\\..\\lib\\js\\backbone-sharepoint.odata.js";
import dirApp from ".\\App.js";
import app from "..\\app\\App.js";
/*

This is our main model: a SharePoint contact.

It would be *super*-cool if this is the only class in the whole application
that needs to have any knowledge of the schema hard-coded. I don't know if
that's achievable, but it would be a big win for maintainability. We might
be able to use something like the "schema" property used by Backbone-Forms.

*/

;
"use strict";

var bindingVariable = Backbone.SP.Item.extend({
    // https://github.com/lstak/Backbone.SharePoint
    site: '/Apps',
    list: 'EmployeeDirectory'
});

export default bindingVariable;
