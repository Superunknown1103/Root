# Root

Hello Root

Hello Root engineers! Thank you for taking the time to review my submission. I will use this README to explain my thought process and any assertions I made while solving. I decided to use a Node.js/JavaScript enviornment because it is an enviornment I feel confident and comfortable in. However, I still use classes to reap the benefits of OOP in ES6. I used a class-based approach because after reading the problem statement - I noted that I would probably have to call something like Driver.Trips or Trip.Driver. I needed to establish an easy reference for such relationships. I did not know wheter we wanted the results in a text file or in the console, so I did both. I also included an error report, which can be found in errors.txt or the command line below the driver results. Lets get into it.

Running the Project Locally

After opening this code in your editor, you will have to run npm install to install necessary packages. This is mainly the file system package and mocha/chai for testing. You should be able to run the code by typing 'node root.js {your file here}' in your command line. If you do not specify your file parameter, the application will automatically use the sample-file.txt which is a copy of the input sample from the problem statement.

The main code runs in root.js at the root level of the app (no pun intended). We start by using some fs package magic to convert our file from text to a usable array of commands. I did a quick replace for a sneaky '\r' character which kept showing up in my Windows terminal after each command was converted. After, we setup instances of our Drivers and Trips classes. This is so we can keep track of all instances as we read through the input file. We iterate through the commands and use a switch case to determine wheter we are creating a new Trip or Driver instance. There is some quick checks done before initating a Driver to make sure we are not trying to create a Driver which already exists. Since each Trip needs a driver, I make sure to use the provided name in the command to find our corresponding Driver instance, or create them if they don't exist yet. I assumed any case besides Trip and Driver to be a syntax error, since the problem statement did not mention other commands were available.

Driver Class

There are two classes inside the Driver.js file. A Drivers and Driver class. Drivers will help us easily keep track of all of our Drivers, allowing us to call methods that will return all instances or do things that need access to all instances. Driver, on the other hand - is just one instance. We will do things that should only be done on a singular instance level - and avoid putting the burden of carrying all Driver information on the singular Driver class. We inititate new drivers via the Drivers class, making sure to append the new driver to our ongoing list before creating their singular instance. Since the focus point of our report is on the drivers, the Drivers class has a generateAllReports method which tells all the single instances to generate a driver report and send it back up.

Trip Class

Similarily to Driver, there is a Trip and Trips class built around the same idea. The newTrip method on the Trips class has some validation to meet the problem statement requirement of not using any trips with an average speed above 100 mph or below 5 mph. There is a little helper method as well to help me take milesDriven, startTime and endTime and calculate our average mph per trip. Since this seemed like validation to me, I treat any entries outside of that range as errors.

Error Class

I chose to include an Error class to help me generate an error report. This was not originally mentioned in the problem statement but I believe that any good application should have some kind of error handling and be developer-friendly when it comes to debugging those errors later. The Error class is designed to reference the line number in the input file for whichever command was the root cause of a problem. A helpful message is also displayed in this error- which includes the name of the driver.

Tests

I've never been a big test-writer and it's a shame really, so my tests are pretty rudimentary. I made sure to include some validation-based tests as well as type-based tests. The tests are written using npm libraries Mocha and assertion library Chai. To run them, simply write npm run test in the command line.


Thank you for the fun challenge!