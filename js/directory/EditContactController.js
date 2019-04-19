import Handlebars from "..\\util\\handlebars-helper.js";
import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
import Contact from ".\\Contact.js";
import dirApp from ".\\App.js";
import app from "..\\app\\App.js";
import ModKit from "..\\util\\ModKit.js";
/*

Edit or delete an existing contact.

*/

;
"use strict";

var Template = Header + FormBody + Footer;

// **EditContactView** draws a form for editing a **Contact**
var EditContactView = Backbone.Marionette.ItemView.extend({

    tagName: "form",
    className: "container contact editing",
    template: Handlebars.compile(Template),

    events: {
        "click .btn-update": "saveContact",
        "click .btn-cancel": "cancelEditContact",
        "click .btn-delete": "deleteContact"
    },

    onClose: function () {
        app.vent.trigger("overlay:close");
    },

    saveContact: function (e) {
        e.preventDefault();

        var formData = {};

        // Add valid input values to an array...
        $(e.target).closest("form.editing").find(":input").each(function () {
            var el = $(this);
            if (el.attr("name") !== undefined) {
                formData[el.attr("name")] = el.val();
            }
        });

        // ...and send the array of values to the server
        this.model.save(formData, {
            success: function (model, resp, options) {
                app.vent.trigger("contact:save:success", model);
            },
            error: function (model, xhr, options) {
                app.vent.trigger("contact:save:error", model, xhr.errorText);
            }
        });

        this.close();
    },

    cancelEditContact: function (e) {
        e.preventDefault();
        // app.vent.trigger("overlay:close");
        this.close();
    },

    deleteContact: function (e) {
        e.preventDefault();
        var deleteWarning = "Deleting contacts CANNOT BE UNDONE. " +
            "Are you sure you want to delete this contact?";
        if (confirm(deleteWarning)) {
            this.model.destroy({
                success: function (model, resp, options) {
                    app.vent.trigger("contact:delete:success", model);
                },
                error: function (model, xhr, options) {
                    app.vent.trigger("contact:delete:error", model, xhr.errorText);
                }
            });
            this.close();
        } else {
            // If user chooses not to delete, do nothing
        }
    }

});

var EditContactController = ModKit.Controller.extend();

dirApp.addInitializer(function () {

    // Create a Controller instance
    var editContactController = new EditContactController();

    // Listen for user request to edit a contact
    dirApp.commands.addHandler("editContact", function (model) {
        // Create a new EditContactView with the model attached.
        editContactController.show(
            app.container.currentView.overlay,
            new EditContactView({model: model})
        );
    });

});

var bindingVariable = EditContactController;
export default bindingVariable;