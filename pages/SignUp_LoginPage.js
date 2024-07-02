import { expect } from '@playwright/test';

exports.SignUp_LoginPage = class SignUp_LoginPage {
    constructor(page) {
        this.page = page;
        this.newUserSignup = page.locator("//div[@class='signup-form']//h2");
        this.username = page.getByPlaceholder('Name');
        this.signupEmail = page.locator("//input[@data-qa='signup-email']");
        this.signUpBtn = page.locator("//button[@data-qa='signup-button']");
    }

    async goToLoginPage() {
        await this.page.goto('https://www.automationexercise.com/login');
    }

    async expectSignUpFormVisible() {
        await expect(this.newUserSignup).toBeVisible();
    }

    async fillSignUpForm(name, email) {
        await this.username.fill(name);
        await this.signupEmail.fill(email);
        await this.signUpBtn.click();
    }
}
