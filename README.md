# Creative Code Cam

## Jackson Pollock Generator

This repo uses p5.js and face tracking data from the clmtracker.js library to create a unique composition across a digital canvas. The intention is to use facial mapping data to determine the positioning of various points, and then create a composition similar to a Jackson Pollock painting.

### How it Works

Conceptually, this was difficult to tackle. I knew the most straight forward way to code it would be to hard code every line, but I also knew that was the least efficient. I started using for loops early on to generate a larger number or arcs and lines, but they were very obviously repeating and following specific points of the viewers face. 

The key was to add a random modifier to select a point on the viewers face and round it to the nearest whole number so it wouldn't break the processing code when it created the arcs and lines.

Once I had that side figured out, it was very simple to reconfigure the code to randomize colour based off the location of the veiwers face as well.

The hardest part in recreating a Jackson Pollock paintings is, well, that it is entirely random. And something that purely random is hard (for me) to recreate digitally.

### Bugs

Currently there are two main bugs. 

When the generate button is clicked, it registers as being clicked multiple times (anywhere from 1 - 400 from my estimations). This causes the function to run multiple times and create many more shapes than intended. This is currently disabled by adding a background before running the shape loops

The second bug has to do with the clear button. Currently it draws over the canvas but when generating again, the old shapes appear in addition to the new ones.

### Citations

* [https://github.com/auduno/clmtrackr]