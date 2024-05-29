2: As a user I should be able to show/hide event so I can see all the details

3: As a user I should be able to specify the number of events I have so I can manage them

4: As a user I should be be able to use the event app offline so I can still manage and see errors in the offline app

5: As a user I should be able to add a shortcut to the event app on my homescreen so I can get to it faster and easier.

6: As a user I should be able to see a chart of all upcoming events in chart format so I can manage upcoming events in what cities easier

Feature 2: Event Management

Scenario: An event element is collapsed by default
Given the event element exists
When the app loads
Then the event element is collapsed

Scenario: User can expand an event to see details
Given the event element is collapsed
When the user taps on the event
Then the event details are displayed

Scenario: User can collapse an event to hide details
Given the event details are displayed
When the user taps on the event
Then the event element is collapsed

Feature 3: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 events are shown by default
Given the user hasn’t specified the number of events
When the app loads
Then 32 events are displayed

Scenario: User can change the number of events displayed
Given the user is viewing events
When the user selects to change the number of events
Then the number of displayed events changes accordingly

Feature 4: Use the App When Offline

Scenario: Show cached data when there’s no internet connection
Given the app is offline
When the user accesses the app
Then the cached data is displayed

Scenario: Show error when user changes search settings (city, number of events)
Given the user is changing search settings
When there is no internet connection
Then an error message is displayed

Feature 5: Add an App Shortcut to the Home Screen

Scenario: User can install the meet app as a shortcut on their device home screen
Given the user has the app installed
When the user selects to add a shortcut
Then the app shortcut is added to the home screen

Feature 6: Display Charts Visualizing Event Details

Scenario: Show a chart with the number of upcoming events in each city
Given there are upcoming events
When the user accesses the event details
Then a chart displaying the number of events in each city is shown
