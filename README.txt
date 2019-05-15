Hello after extract the file and locate them into an especified folder
please follow the next steps to install protractor and run the project.


Use npm to install Protractor globally with:



1. npm install -g protractor
This will install two command line tools, protractor and webdriver-manager. Try running protractor --version to make sure it's working.


2. The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

webdriver-manager update

Now start up a server with:

webdriver-manager start

This will start up a Selenium Server and will output a bunch of info logs. 
Your Protractor test will send requests to this server to control a local browser. 
You can see information about the status of the server at http://localhost:4444/wd/hub.


3.Now run the test with:

protractor conf.js

Note:
If this steps were not enought clear, please follow this link

https://www.protractortest.org/#/tutorial