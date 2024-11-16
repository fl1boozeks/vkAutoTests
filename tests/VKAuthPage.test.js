const {test, expect} = require('@playwright/test')
const {VKAuthPage} = require('../pageobjects/VKAuthPage')

test('Should click on the login button and check error message', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnLoginButton()
    await vkAuthPage.checkErrorMessage()
})

test('Should cancel search input after filling', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnCancelSearchButton()
})

test('Should click on the create account button', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnCreateAccountButton()
})

test('Should click on the create business account button', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnCreateBusinessAccountButton()
})

test('Should click on the checkbox', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnCheckbox()
})

test('A window with a list of all languages should pop up', async ({page}) => {
    const vkAuthPage = new VKAuthPage(page)

    await vkAuthPage.goto()
    await vkAuthPage.clickOnChooseLanguageButton()
    await expect(vkAuthPage.popupWithLanguages).toBeVisible()
})