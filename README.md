textbox-multiple-character-limited
==================================

A demo Umbraco Belle 'textbox multiple' datatype, that has a character limit.



=====


Aim
----------------------------------
The last task of the Umbraco AngularJS/Belle workshop in London last week, was to build our own datatype. I decided on a textarea with a configurable character limit, as this is something we repeatedly find useful at Blueprint Web Tech. I also decided I would like to be able to unit test the new datatype using Karma/Jamine, as the Angular JS tutorials I've played around with impress the importance of this good practise.



Environment
----------------------------------
- Windows 7 SP1 VM
- IIS 7.8
- SQL Server 2008 R2
- Node JS 0.10.18
- Karma 0.10.2
- Umbraco: UmbracoCms.7.0.0-build.66

 

Plan
----------------------------------

- Install Node JS and Karma (see above) � done
- Build demo datatype � done
- Get a test or two running to show Node/Karma/Jasmine running, perhaps testing true === true � done (see Test 1 and Test 2)
- Build some proper tests � currently stuck! 



1. Install Node JS and Karma
----------------------------------

- I visited http://nodejs.org and clicked on the big green install button. 
- This allowed me to install Karma using the command 'npm install -g karma'.



2. Build demo datatype
----------------------------------

This is done and sees to work OK with the following features:

- Number of characters used and character limit are displayed to the user.
- Exceeding the character limit turns the the property editor label and text below the user input red. In the background AngularJS sets model.value to undefined.
- If the user attempts to save/publish the node, then a big red horizontal bar across the top of the node indicates the 'property has errors'. I guess Umbraco does this for us.



3. Get a test or two running to show Node/Karma/Jasmine running
----------------------------------

My Jasmine tests are all contained in the 'test' directory, and I initiate the tests from a command prompt with a working directory at the root of my datatype (i.e. /App_Plugins/BwtTextboxMultipleCharacterLimited):

	> test\test.bat

If I just run Test 1 and Test 2 by commenting Test 3 in unit_02.js I get the following output:

	> test\test.bat
	WARN [config]: config.configure() is deprecated, please use config.set() instead
	.
	INFO [karma]: Karma v0.10.2 server started at http://localhost:9876/
	INFO [launcher]: Starting browser PhantomJS
	INFO [PhantomJS 1.9.1 (Windows 7)]: Connected on socket pBV5RueOkA8cU8O_AgxQ
	PhantomJS 1.9.1 (Windows 7): Executed 2 of 2 SUCCESS (0.172 secs / 0.006 secs)

Hence, I think I at least have a working node/karma setup.

My config file is essentially what I found at:

https://github.com/umbraco/Umbraco-CMS/blob/7.0.0/src/Umbraco.Web.UI.Client/test/config/karma.conf.js

although I have made a few amendments to account for different paths found in the nightly, and to add my unit tests.



4. Build some proper tests � currently stuck!
----------------------------------

This is were the problems begin�

First I added an empty Test 3. This doesn't throw any errors, so I think the way I am introducing this test is OK.

My next step is to add bits of the test 3 one by one.

Because I don't know if I need to mock the assetService, or at this stage know how to mock the assetsService, I removed reference to it in my controller BwtTextboxMultipleCharacterLimitedController i.e. I register my controller in BwtTextboxMultipleCharacterLimited.controller.js with:

	angular.module('umbraco')
		.controller('BwtTextboxMultipleCharacterLimitedController',
			function ($scope) {
        
and comment the assetsService.loadCss line.

In Test 3 I now am able to instantiate Ctrl and scope, and initialise the controller with a mock scope. Running the tests yields the same result as shown above in 3).

My next step is to introduce the c=true and test c=true code block. I do this to check I have properly configured the controller in this test. It seems I haven't, as running the tests at this stage yields the following error:




	> test\test.bat
	WARN [config]: config.configure() is deprecated, please use config.set() instead
	.
	INFO [karma]: Karma v0.10.2 server started at http://localhost:9876/
	INFO [launcher]: Starting browser PhantomJS
	INFO [PhantomJS 1.9.1 (Windows 7)]: Connected on socket OfFLvInLy_vS2p5qGoMS
	PhantomJS 1.9.1 (Windows 7) Test 3 Controller: BwtTextboxMultipleCharacterLimite
	dController Set 'c = true' and test if c = true FAILED
			Error: No module: blueimp.fileupload
				at c:/inetpub/wwwSites/umbraco-ang-lab.local/website/Umbraco/lib/ang
	ular/1.1.5/angular.js:1148
				at ensure (c:/inetpub/wwwSites/umbraco-ang-lab.local/website/Umbraco
	/lib/angular/1.1.5/angular.js:1089)
				at module (c:/inetpub/wwwSites/umbraco-ang-lab.local/website/Umbraco
	/lib/angular/1.1.5/angular.js:1347)
				at c:/inetpub/wwwSites/umbraco-ang-lab.local/website/Umbraco/lib/ang
	ular/1.1.5/angular.js:2837
	PhantomJS 1.9.1 (Windows 7): Executed 3 of 3 (1 FAILED) (0.188 secs / 0.013 secs
	)


I suspect my karma config file karma.conf as I've just blindly used this, and also how I've set up the controller in Test 3 (unit_02.js), but I'm out of ideas at the moment. If anyone has any pointers I'd be very grateful.

Ultimately, I guess I would like to test:

� loading the datatype displays pulls back model.value. I guess I need to mock this service?
� exceeding the character limit sets model.value to undefined
� any other ideas?



=== Aside ===

A character limit should be a positive integer, but I wasn't able to set this:

	preValueEditor: {
		fields: [
			{
				label: 'Character limit',
				description: 'Enter an integer character limit.',
				key: 'characterLimit',
				view: 'integer'
			}
		]

as the property wouldn't appear when editing the node (see image). This same error happened when setting the view as a textstring. I guess in both instances this is because there is no integer/textarea view in /Umbraco/Views/preValueEditors? My solution was to use a textarea as this is just a demo.

