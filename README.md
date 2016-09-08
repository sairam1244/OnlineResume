# Project Details

1. In this project, I am storing resume data in four JSON objects.
2. All of the HTML code needed to build the resume is stored in **js/helper.js** variables. The variable names indicate their function. You will replace substrings in these variable string values such as **%data%** and **#** with the data in your javaScript objects, and append or prepend the formatted result to your resume in the appropriate location.
4. If you are prompted to do so, you may want to get a [Google Maps API key](https://developers.google.com/maps/documentation/javascript/get-api-key), and include it as the value of the `key` parameter when loading the Google Maps API in **index.html**:
```<script  src="http://maps.googleapis.com/maps/api/js?libraries=places&key=[YOUR_API_KEY]"></script> ``` You may have some initial concerns with placing your API key directly within your JavaScript source files, but rest assured this is perfectly safe. All client-side code must be downloaded by the client; therefore, the client must download this API key - it is not intended to be secret. Google has security measures in place to ensure your key is not abused. **It is not technically possible to make anything secret on the client-side.**


And repository include the following files:

* **index.html**: The main HTML document. Contains links to all of the CSS and JS resources needed to render the resume, including resumeBuilder.js.
* **js/helper.js**: Contains helper code needed to format the resume and build the map. It also has a few function shells for additional functionality. More on helper.js further down.
* **js/resumeBuilder.js**: Javascript code
* **js/jQuery.js**: The jQuery library.
* **css/style.css**: Contains all of the CSS needed to style the page.
* **README.md**: 
The GitHub readme file.
* and some images in the images directory.

