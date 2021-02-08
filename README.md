# Root

Hello Root!

For this coding challenge I have decided to use a Node.js/Javascript enviornment. Although I have experience with Ruby, it has been a little while and my most confident programming language is JavaScript. That being said, I did still take a traditional OOP approach, as this is now possible thanks to the merits of ES6 javascript classes. I could tell that I would need to track data about each trip as it correlates to it's driver, and since trip was already a complex item with many properties of its own, rather than write some complicated functions using objects and arrays and spread them all over one JS file - a traditional class-based approach would bring both me and the reviewer less confusion, get the job done more efficiently, and would be more scalable (I know this is an exercise, but things should be designed for scale).


Running the project

You may need to run npm install to install the necessary packages. This is mainly 'fs', to help us read files in the file system. After installation, you should be able to run node root.js {your input file name here}.

Root.js file

We access the input file using process.argv, and grabbing the 3rd string provided. I am using basic fs package methods to read the text file into an array, and do a map at the end to remove an annoying '\r' character which gets added during file reading on Windows. I have 2 constants below this line, DRIVERS and TRIPS. These are to initiate instances of the Drivers and Trips classes, which are linked via import - and live in the classes folder. These will be useful class instances to then run methods and keep track of our Drivers and Trips in the session. 

TextByLine is holding our converted text-to-javascript array. I iterate using a ForEach and grab the driverName and command right away. I then put in a switch case to perform different actions based on the command. A switch case is cleaner and more scalable than a long chain of 'if' statements. 