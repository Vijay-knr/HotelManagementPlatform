Reasons for tools using for automation:

1.Maven - 
Is a build and dependency managment tool; It has many benefits like pulling all the dependencies specified in pom.xml, maintains the project structure very well, easy to understand.

2. Cucumber: 
We can write the feature files so that non-technical team also can read what automated tests are running and so on.

3. Page factory: 
Easy to maintain, Increased readabibility

Please Note: 
1. Can't create multiple entries as there is no option for that.
2. Tests can run with one command ‘mvn clean test'

Exploratory testing findings:

1.No validations for fields like phone number, email, checkin/out dates etc..,
2.Search is case sensitive.
3.No information message if user trying to create with empty data.
4.There is no information about mandatory fields.
5.Create button on bookings doesn't work.