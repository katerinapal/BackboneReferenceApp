import Handlebars from "..\\util\\handlebars-helper.js";
import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
import Contact from ".\\Contact.js";
import dirApp from ".\\App.js";
import app from "..\\app\\App.js";
/*

View of an individual contact.

*/

;
"use strict";

// **ContactView** handles an individual **Contact**
var ContactView = Backbone.Marionette.ItemView.extend({

    tagName: "li",
    className: "contact list-item container",
    template: Handlebars.compile(ContactTemplate),

    events: {
        "click .result-icon": "editContact"
    },

    editContact: function () {
        dirApp.execute("editContact", this.model);
    }

});

var bindingVariable = ContactView;
export default bindingVariable;