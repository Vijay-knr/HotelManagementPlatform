$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ManageHotelsBookings.feature");
formatter.feature({
  "line": 1,
  "name": "Manage hotels and customer bookings",
  "description": "",
  "id": "manage-hotels-and-customer-bookings",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that I am at \"http://localhost:3003/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "that I have logged in as an \"admin\" with password \"password\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Create a new hotel entry   # 1. Creating an entry",
  "description": "",
  "id": "manage-hotels-and-customer-bookings;create-a-new-hotel-entry---#-1.-creating-an-entry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I create a new hotel with \"Ramada\",\"London\",\"Rob\",\"01234567890\",\"ramada@london.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see hotel \"Ramada\" created successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I delete a hotel with name \"Ramada\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that I am at \"http://localhost:3003/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "that I have logged in as an \"admin\" with password \"password\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 15,
  "name": "Create a new hotel entry   # 1. Creating an entry",
  "description": "",
  "id": "manage-hotels-and-customer-bookings;create-a-new-hotel-entry---#-1.-creating-an-entry;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I create a new hotel with \"Novotel\",\"London\",\"Mat\",\"01234567891\",\"novotel@london.com\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should see hotel \"Novotel\" created successfully",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I delete a hotel with name \"Novotel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "that I am at \"http://localhost:3003/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "that I have logged in as an \"admin\" with password \"password\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "Delete a new hotel entry       # 2. Deleting an entry",
  "description": "",
  "id": "manage-hotels-and-customer-bookings;delete-a-new-hotel-entry-------#-2.-deleting-an-entry",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I create a new hotel with \"HolidayInn\",\"London\",\"Andy\",\"01234567892\",\"holidayinn@london.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I delete a hotel with name \"HolidayInn\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see hotel \"HolidayInn\" deleted successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});