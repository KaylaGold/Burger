# **Eat-Da-Burger! ** #

Eat-Da-Burger is a restaurant app that lets users input the names of burgers they’d like to eat. Whenever a user submits a burger’s name, the app will display the burger on the left side of the page – waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
The app will store every burger in a database, whether devoured or not.

## Technologies Used ##
-Handlebars.js
-Express.js
-MySQL

-Node.js

-JavaScript

## npm Packages: ##
- [express]( https://www.npmjs.com/package/express "express") - Provides small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.
- [MySQL]( https://www.npmjs.com/package/mysql "MySQL") - This is a node.js driver for mysql.

- [express-handlebars]( https://www.npmjs.com/package/express-handlebars-sections "express-handlebars") - This module adds support to express-handlebars to manage sections. It means that you can define one or more sections in the template, and then in the view specify what is the content for each section.

- [body-parser]( https://www.npmjs.com/package/body-parser "body-parser") - Node.js body parsing middleware.

## How it works: ##
- Step 1: User will enter the burger that they would like to eat in the text section, and then clicks the “Submit” button.
- Step 2: Once the burger is submitted, the burger list will appear on the left side of the HTML page, waiting to be devoured. Once the “Devour it!” button is clicked, the burger will move to the right side of the page.
- Step 3: Every burger entered is stored in the database.
