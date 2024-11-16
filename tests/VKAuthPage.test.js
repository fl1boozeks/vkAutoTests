const {test} = require('@playwright/test')
const {VKAuthPage} = require('../pageobjects/VKAuthPage')

test('Should ckick on the login button and check error message', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnLoginButton()
    await vkAuthPage.checkErrorMessage()
})

test.only('Should cancel search input after filling', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnCancelSearchButton()
})