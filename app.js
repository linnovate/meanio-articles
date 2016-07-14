'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Articles = new Module('articles');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
<<<<<<< HEAD
Articles.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Articles.routes(app, auth, database, circles);

/*  Articles.aggregateAsset('css', 'articles.css');
*/
=======
Articles.register(function(app, auth, database, circles, swagger) {

  //We enable routing. By default the Package Object is passed to the routes
  Articles.routes(app, auth, database);

  Articles.aggregateAsset('css', 'articles.css');

>>>>>>> c9288b2f61bc9903db61245305af1300820b858a
  
  //We are adding a link to the main menu for all authenticated users
  Articles.menus.add({
    'roles': ['authenticated'],
    'title': 'Articles',
    'link': 'all articles'
  });
  Articles.menus.add({
    'roles': ['authenticated'],
    'title': 'Create New Article',
    'link': 'create article'
  });

  Articles.events.defaultData({
    type: 'post',
    subtype: 'article'
  });


  /*
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Articles.settings({'someSetting':'some value'},function (err, settings) {
      //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Articles.settings({'anotherSettings':'some value'});

    // Get settings. Retrieves latest saved settings
    Articles.settings(function (err, settings) {
      //you now have the settings object
    });
    */

  // Only use swagger.add if /docs and the corresponding files exists
<<<<<<< HEAD
/*  swagger.add(__dirname);
*/	
=======
  swagger.add(__dirname);
	
>>>>>>> c9288b2f61bc9903db61245305af1300820b858a
  return Articles;
});
