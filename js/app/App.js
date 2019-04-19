import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
/*

App is the heart of the application--it instantiates and manages models,
collections, views, controllers, layouts, etc.

*/

;
"use strict";

var app = new Marionette.Application();
app.addRegions({
    container: '#app-container'
});
var bindingVariable = app;
export default bindingVariable;
