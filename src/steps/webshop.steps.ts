import { Given, When, Then } from "@cucumber/cucumber";

Given("the user is logged into the Webshop", async function () {
  console.log("the user is logged into the Webshop");
});

When(
  "the user orders a product in the shopping cart",
  async function (dataTable) {
    console.log(dataTable);
  }
);

When(
  "the user completes the checkout process with the following parameters",
  async function (dataTable) {
    console.log(
      "the user completes the checkout process with the following params"
    );
  }
);

Then("the price is added correctly", async function () {
  console.log("the price is added correctly");
});

Then("the success message is displayed correctly", async function () {
  console.log("the success message is displayed correctly");
});
