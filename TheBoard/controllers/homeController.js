( function ( homeController ) {
    homeController.init = function ( app ) {

        var data = require( "../data" );

        app.get( "/", function ( req, res ) {

            data.getNoteCategories( function ( err, results ) {

                res.render( "index", { title: "The Board", error: err, categories: results, newCatError: req.flash("newCatName") });
            });


        });

    

    app.post( "/newCategory", function ( req, res ) {
        var categoryName = req.body.categoryName;

        data.createNewCategory( categoryName, function ( err ) {
            if ( err ) {
                console.log( err );
                req.flash("newCatName", err);
                res.redirect( "/" );
            }
            else {
                res.redirect( "/notes/" + categoryName );
            }
        });
    });

    };
})( module.exports );