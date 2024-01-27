# Generate Photo Figma Widget
## Introduction
This documentation provides an overview of the Figma widget code designed to display random photos from Unsplash based on a keyword. The code utilizes Figma's plugin development environment and interacts with the Unsplash API to fetch and display images.

## Code Overview
The provided code consists of TypeScript functions and components tailored for use within the Figma plugin environment. Here's a breakdown of the main components and their functionalities:

1. downloadAndDisplayImage(keyword)
This asynchronous function fetches a random image from Unsplash based on the provided keyword or a default keyword if none is provided.
It constructs the URL for the Unsplash API request and handles the response.
Upon successful retrieval of image data, it logs relevant information to the console.
Note: The code currently lacks the implementation to display the fetched image within the Figma environment.
2. Widget()
This function defines a React component that serves as the main widget displayed within the Figma canvas.
It sets a default keyword ('cat' in this case) and renders a text element.
Clicking on this text element triggers the downloadAndDisplayImage() function, initiating the process of fetching and displaying a random photo from Unsplash.
3. Figma Widget Registration
The code concludes with the registration of the Widget component using the widget.register() method. This step ensures that the widget is available for use within the Figma plugin.
Usage
To integrate and utilize this Figma widget within your Figma environment, follow these steps:


## Setup
1. Clone the GitHub repository
2. Open repository terminal and type ```npm run watch```
3. Open Figma -> Look for Widgets Menu -> Development -> Import from Manifest
4. Import manifest.json file
5. Drop the spreadsheet title widget onto the Figma workspace
6. Widgets Menu -> Development -> Show/Hide Console.
7. Click on text to generate photo link and description in the console.


## Exercise
Modify Keyword : If desired, modify the keyword variable within the Widget function to specify a default keyword for image searches.






