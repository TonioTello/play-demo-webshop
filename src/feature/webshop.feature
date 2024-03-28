Feature: Webshop

  Scenario: Shipping Cost
    Given the user is logged into the Webshop
    When the user orders a product in the shopping cart
      | product      | Blue Jeans |
      | itemPrice    |          1 |
      | itemQuantity |         25 |
      | cardNumber   | 1234567890 |
    And the user completes the checkout process with the following parameters
      | cardholderName  | Goku       |
      | cardNumber      | 1234567890 |
      | expirationMonth |         10 |
      | expirationYear  |       2030 |
      | cardCode        |        123 |
    Then the price is added correctly
    And the success message is displayed correctly
