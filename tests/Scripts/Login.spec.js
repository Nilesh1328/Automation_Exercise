import { test, expect } from '@playwright/test';
import { SignUp_LoginPage } from '../../pages/SignUp_LoginPage';
import { AccountInformationPage } from '../../pages/AccountInformationPage';
import { userDetails } from '../../pages/UserDetails';

test('Register User', async ({ page }) => {
    const signUpLoginPage = new SignUp_LoginPage(page);
    const accountInformationPage = new AccountInformationPage(page);

    await signUpLoginPage.goToLoginPage();
    await signUpLoginPage.expectSignUpFormVisible();
    await signUpLoginPage.fillSignUpForm(userDetails.Name, userDetails.Email);

    await accountInformationPage.expectInfoPageVisible();
    await accountInformationPage.fillAccountInformation(userDetails);

    //comment added by Nilesh
});
