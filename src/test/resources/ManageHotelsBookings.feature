Feature: Manage hotels and customer bookings

  Background: 
    Given that I am at "http://localhost:3003/"
    And that I have logged in as an "admin" with password "password"

  Scenario Outline: Create a new hotel entry
    When I create a new hotel with "<Hotel Name>","<Hotel Address>","<Owner>","<Phone Number>","<Email>"
    Then I should see hotel "<Hotel Name>" created successfully
    Then I delete a hotel with name "<Hotel Name>" 

    Examples: 
      | Hotel Name | Hotel Address | Owner | Phone Number | Email              |
      | Ramada     | London        | Rob   | 01234567890  | ramada@london.com  |
      | Novotel    | London        | Mat   | 01234567891  | novotel@london.com |
  
 
  Scenario: Delete a new hotel entry
    Given I create a new hotel with "HolidayInn","London","Andy","01234567892","holidayinn@london.com"
    When I delete a hotel with name "HolidayInn"
    Then I should see hotel "HolidayInn" deleted successfully
 