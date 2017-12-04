Feature: Counting non executive board members
  As an internet user
  In order to find out how many board members

  Scenario: Counting entersekt non executive board members
    When I count Entersekt "Board members"
    Then The result should be equal to 4

