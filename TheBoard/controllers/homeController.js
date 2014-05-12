(function (homeController) {
    homeController.init = function (app) {
        
        var data = require("../data");

        app.get("/", function( req, res) {
            
            data.getNoteCategories(function(err, results) {

                    res.render("index", { title: "The Board", error: err, categories: results });
                });
            
            
            });
        
        };

 })(module.exports);