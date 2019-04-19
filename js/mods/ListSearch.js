import dirApp from "..\\directory\\App.js";
import app from "..\\app\\App.js";
dirApp.addInitializer(function () {

    // Search
    $("#list-search").keyup(function (e) {
        if (e.which == 27) {
            // Blur the search box on ESC
            $(this).blur();
        } else {
            // Otherwise, filter the list
            dirApp.execute("quickFilter", $(this).val());
        }
    });

    // Prevent form submission when user hits Enter
    // in search box
    $("#list-search").keydown(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

});
