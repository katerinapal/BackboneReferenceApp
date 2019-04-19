import Handlebars from "..\\util\\handlebars-helper.js";
import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
import app from ".\\App.js";
import ModKit from "..\\util\\ModKit.js";
/*

Displays an info page.

*/

;
"use strict";

app.addInitializer(function () {
    // Layout regions
    var regionHeader = app.container.currentView.header,
        regionMain = app.container.currentView.main,
        regionOverlay = app.container.currentView.overlay;
        
    // Controller for showing info views
    var infoController = new ModKit.Controller();

    // Show introduction message
    app.commands.addHandler("showIntroMsg", function () {
        infoController.show(
            regionHeader,
            new ModKit.HeaderView({
                id: "app-intro",
                template: Handlebars.compile(IntroTemplate)
            })
        );
    });

    // Show search results header message
    app.commands.addHandler("showResultsMsg", function () {
        infoController.show(
            regionHeader,
            new ModKit.HeaderView({
                id: "app-results",
                template: Handlebars.compile(ResultsTemplate)
            })
        );
    });

    // Show no search results message
    app.commands.addHandler("showNoResultsMsg", function () {
        infoController.show(
            regionHeader,
            new ModKit.HeaderView({
                id: "app-noResults",
                template: Handlebars.compile(NoResultsTemplate)
            })
        );
    });

    // Show info about this application
    app.commands.addHandler("showAbout", function () {
        infoController.show(
            regionOverlay,
            new ModKit.OverlayView({
                id: "app-about",
                template: Handlebars.compile(AboutTemplate)
            })
        );
    });

    // Show tips & tricks
    app.commands.addHandler("showTips", function () {
        infoController.show(
            regionOverlay,
            new ModKit.OverlayView({
                id: "app-about",
                template: Handlebars.compile(TipsTemplate)
            })
        );
    });

    // Show user how to send feedback
    app.commands.addHandler("showFeedback", function () {
        infoController.show(
            regionOverlay,
            new ModKit.OverlayView({
                id: "app-about",
                template: Handlebars.compile(FeedbackTemplate)
            })
        );
    });

});
