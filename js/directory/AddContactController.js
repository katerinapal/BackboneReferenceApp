import Handlebars from "..\\util\\handlebars-helper.js";
import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
import Contact from ".\\Contact.js";
import directory from ".\\Directory.js";
import dirApp from ".\\App.js";
import app from "..\\app\\App.js";
import ModKit from "..\\util\\ModKit.js";
/*

Add a new contact.

*/

;
"use strict";

var Template = Header + FormBody + Footer;

// **AddContactView** draws a form for adding a new **Contact**
var AddContactView = Backbone.Marionette.ItemView.extend({

    tagName: "form",
    className: "container contact editing",
    template: Handlebars.compile(Template),

    onRender: function () {
        // Why doesn't this work?
        $('input#LastName').focus();
    },

    onClose: function () {
        app.vent.trigger("overlay:close");
    },

    events: {
        "click .btn-add": "saveContact",
        "click .btn-update": "saveContact",
        "click .btn-cancel": "cancelEditContact"
    },

    saveContact: function (e) {
        e.preventDefault();

        var formData = {},
            model = new Contact();

        // Add valid input values to an array...
        $(e.target).closest("form.editing").find(":input").each(function () {
            var el = $(this);
            if (el.attr("name") !== undefined) {
                formData[el.attr("name")] = el.val();
            }
        });

        // ...and send the array of values to the server
        model.save(formData, {
            success: function (model, resp, options) {
                app.vent.trigger("contact:save:success", model);
            },
            error: function (model, xhr, options) {
                app.vent.trigger("contact:save:error", model, xhr.errorText);
            }
        });

        directory.add(model);

        // Revert back to the default contact view
        this.close();
    },

    cancelEditContact: function (e) {
        e.preventDefault();
        this.close();
    }

});

var AddContactController = ModKit.Controller.extend();

dirApp.addInitializer(function () {

    // Create a Controller instance
    var addContactController = new AddContactController();

    // Listen for user request to add a new contact
    dirApp.commands.addHandler("newContact", function () {
        addContactController.show(app.container.currentView.overlay, new AddContactView());
    });

});

var bindingVariable = AddContactController;
export default bindingVariable;
