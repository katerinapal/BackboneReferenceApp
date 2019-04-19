import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
import dirApp from "..\\directory\\App.js";
import app from "..\\app\\App.js";
/*

Manages application menus.

*/

app.addInitializer(function () {

    app.commands.addHandler("showMenu", function (menu) {
        menu.toggleClass("app-menu-open");
    });

    app.commands.addHandler("closeAllMenus", function () {
        $(".app-menu").removeClass("app-menu-open");
    });

    // Show & hide the app menu
    $(".app-menu").click(function (e) {
        app.execute("showMenu", $(this));
        e.stopPropagation();
    });
    $(document).click(function () {
        app.execute("closeAllMenus");
    });

    /*
    TODO: when we have an API for registering menus/commands, move stuff
    like this to the appropriate controllers.
    */

    // Add a new contact
    $("#new-contact").click(function (e) {
        dirApp.execute("newContact");
        e.stopPropagation();
    });

    // Show Tips & Tricks screen
    $("#show-tips").click(function (e) {
        app.execute("showTips");
        e.stopPropagation();
    });

    // Show Feedback screen
    $("#show-feedback").click(function (e) {
        app.execute("showFeedback");
        e.stopPropagation();
    });

    // Show About screen
    $("#show-about").click(function (e) {
        app.execute("showAbout");
        e.stopPropagation();
    });

    // $("#test-event").click(function (e) {
    // 	app.vent.trigger("TestEvent", "Test event fired from menu item.");
    // 	e.stopPropagation();
    // });

});