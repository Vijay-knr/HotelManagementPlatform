$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ManageHotelsBookings.feature");
formatter.feature({
  "line": 1,
  "name": "Manage hotels and customer bookings",
  "description": "",
  "id": "manage-hotels-and-customer-bookings",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3099753759,
  "status": "passed"
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
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3003/",
      "offset": 14
    }
  ],
  "location": "StepDefs.that_I_am_at(String)"
});
formatter.result({
  "duration": 566857094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefs.that_I_have_logged_in_as_an_with_password(String,String)"
});
formatter.result({
  "duration": 577320304,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Create a new hotel entry",
  "description": "",
  "id": "manage-hotels-and-customer-bookings;create-a-new-hotel-entry;;2",
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
formatter.match({
  "arguments": [
    {
      "val": "Ramada",
      "offset": 27
    },
    {
      "val": "London",
      "offset": 36
    },
    {
      "val": "Rob",
      "offset": 45
    },
    {
      "val": "01234567890",
      "offset": 51
    },
    {
      "val": "ramada@london.com",
      "offset": 65
    }
  ],
  "location": "StepDefs.i_create_a_new_hotel_with(String,String,String,String,String)"
});
formatter.result({
  "duration": 597846563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramada",
      "offset": 20
    }
  ],
  "location": "StepDefs.i_should_see_hotel_created_successfully(String)"
});
formatter.result({
  "duration": 781000699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramada",
      "offset": 28
    }
  ],
  "location": "StepDefs.i_delete_a_new_hotel_with_name(String)"
});
formatter.result({
  "duration": 463569022,
  "status": "passed"
});
formatter.after({
  "duration": 79940409,
  "status": "passed"
});
formatter.before({
  "duration": 2465127621,
  "status": "passed"
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
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3003/",
      "offset": 14
    }
  ],
  "location": "StepDefs.that_I_am_at(String)"
});
formatter.result({
  "duration": 574735921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefs.that_I_have_logged_in_as_an_with_password(String,String)"
});
formatter.result({
  "duration": 605615484,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create a new hotel entry",
  "description": "",
  "id": "manage-hotels-and-customer-bookings;create-a-new-hotel-entry;;3",
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
formatter.match({
  "arguments": [
    {
      "val": "Novotel",
      "offset": 27
    },
    {
      "val": "London",
      "offset": 37
    },
    {
      "val": "Mat",
      "offset": 46
    },
    {
      "val": "01234567891",
      "offset": 52
    },
    {
      "val": "novotel@london.com",
      "offset": 66
    }
  ],
  "location": "StepDefs.i_create_a_new_hotel_with(String,String,String,String,String)"
});
formatter.result({
  "duration": 652785398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Novotel",
      "offset": 20
    }
  ],
  "location": "StepDefs.i_should_see_hotel_created_successfully(String)"
});
formatter.result({
  "duration": 840572147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Novotel",
      "offset": 28
    }
  ],
  "location": "StepDefs.i_delete_a_new_hotel_with_name(String)"
});
formatter.result({
  "duration": 505304872,
  "status": "passed"
});
formatter.after({
  "duration": 71539850,
  "status": "passed"
});
formatter.before({
  "duration": 2487195250,
  "status": "passed"
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
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3003/",
      "offset": 14
    }
  ],
  "location": "StepDefs.that_I_am_at(String)"
});
formatter.result({
  "duration": 460287663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 29
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefs.that_I_have_logged_in_as_an_with_password(String,String)"
});
formatter.result({
  "duration": 593803565,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Delete a new hotel entry",
  "description": "",
  "id": "manage-hotels-and-customer-bookings;delete-a-new-hotel-entry",
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
formatter.match({
  "arguments": [
    {
      "val": "HolidayInn",
      "offset": 27
    },
    {
      "val": "London",
      "offset": 40
    },
    {
      "val": "Andy",
      "offset": 49
    },
    {
      "val": "01234567892",
      "offset": 56
    },
    {
      "val": "holidayinn@london.com",
      "offset": 70
    }
  ],
  "location": "StepDefs.i_create_a_new_hotel_with(String,String,String,String,String)"
});
formatter.result({
  "duration": 848465663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HolidayInn",
      "offset": 28
    }
  ],
  "location": "StepDefs.i_delete_a_new_hotel_with_name(String)"
});
formatter.result({
  "duration": 546973373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HolidayInn",
      "offset": 20
    }
  ],
  "location": "StepDefs.i_should_see_hotel_deleted_successfully(String)"
});
formatter.result({
  "duration": 10302480622,
  "status": "passed"
});
formatter.after({
  "duration": 75133629,
  "status": "passed"
});
});