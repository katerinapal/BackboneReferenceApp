import Marionette from "..\\..\\lib\\js\\backbone.marionette.v1.0.0-rc3.min.js";
import dirApp from ".\\App.js";
import ContactView from ".\\ContactView.js";
import app from "..\\app\\App.js";
/*

DirectoryView renders and manages a Directory collection.

*/

;
"use strict";

var DirectoryView = Marionette.CollectionView.extend({
    tagName: "ul",
    id: "directory-list",
    itemView: ContactView
});

export default DirectoryView;
