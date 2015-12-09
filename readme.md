# Refactor Time!

You've been hired as a contractor by Never Ending Song Inc. to refactor their new website prototype. Their previous engineer has been fired over this awfully managed project, and you have been brought on to salvage the code. 


## What To Do:

The application works exactly how it's supposed to, but the code is a mess. Your new bosses at NES Inc. expect the function of the prototype to remain exactly the same, but they want the project to follow a Model View Controller pattern. Can you restructure the code, without changing the behavior? You may also need to change the code, especailly things like the paths in your .ejs / .html `<script>` and `<link>` tags, since you'll be changing the structure of the code base.

### Getting Started

First, run the server and become familiar with the features of the website. Knowing what you're working with is half the battle. Once you have a handle on the websites features try to identify which components should be __models__ which should be __views__ and which should be __controllers__. Models, views, and controllers should each get their own folders. For example, everything you think is a view should be in a folder called views.

Remember the following:

### Models

Define the __data__ for the application. Data can be manipulated and saved, but in the end models are a representation of whatever data is crucial to application performace. A model that nearly every website has (but this one does not) is a user. 

### Controllers 

Define the applications __interactive behavior__. When a user types in a url, a __controller__ is activated in order to determine which __view__ a user should see. When a user submits a form or other data to your website a __controller__ should be used to alter the __data model__. 

### Views

Views are anything a user actually sees. HTML files are basically always considered views, for example. 

### Assets

In modern web applications (including this one) there is code that runs in the browser, rather than on the server. CSS is an example of this code, and any Javascript files that are executed in the browser (for example any JS files referenced in an HTML file) are __not models, views, or controllers__. These files are commonly refered to as "static assets" or just "assets".

Assets deserve a folder of their own. Frequently assets are broken down into sub-folders inside the main 'assets' folder, such as a special folder for CSS, and another for JS. 