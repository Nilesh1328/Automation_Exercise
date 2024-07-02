const { expect } = require('@playwright/test');

exports.AccountInformationPage = class AccountInformationPage {
    constructor(page) {
        this.page = page;
        this.infoPageTitle = page.getByText('Enter Account Information');
        this.selectRoleMr = page.locator("//input[@type='radio'][@value='Mr']");
        this.password = page.locator('#password');
        this.daysDD = page.locator('select#days');
        this.monthsMM = page.locator('select#months');
        this.yearYY = page.locator('select#years');
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.company = page.locator('#company');
        this.address1 = page.locator('#address1');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode');
        this.mobileNo = page.locator('#mobile_number');
        this.createAccount = page.locator("//button[@type='submit' and @data-qa='create-account']");
        this.accountCreated = page.getByText('Account Created!');
        this.continueBtn = page.locator("//a[@data-qa='continue-button']");
    }

    async expectInfoPageVisible() {
        await expect(this.infoPageTitle).toBeVisible();
    }

    async fillAccountInformation(userDetails) {
        await this.selectRoleMr.click();
        await this.password.fill(userDetails.Password);
        await this.daysDD.selectOption('27');
        await this.monthsMM.selectOption('August');
        await this.yearYY.selectOption('1996');
        await this.firstName.fill(userDetails.FirstName);
        await this.lastName.fill(userDetails.LastName);
        await this.company.fill(userDetails.Company);
        await this.address1.fill(userDetails.Address);
        await this.country.selectOption(userDetails.Country);
        await this.state.fill(userDetails.State);
        await this.city.fill(userDetails.City);
        await this.zipcode.fill(userDetails.ZipCode);
        await this.mobileNo.fill(userDetails.MobileNo);
        await this.createAccount.click();
    }
}
