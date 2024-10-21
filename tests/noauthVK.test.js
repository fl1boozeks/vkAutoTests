import {test, expect} from '@playwright/test'
import { navigateToVK, clickLoginButton, checkErrorMessage, clickCheckBox, clickButton, checkMarketButtons } from '../utils/helpers'

const authButtons = [
    { name: 'create account', locator: 'button.FlatButton--positive[type="button"]' },
    { name: 'create business account', locator: 'button.FlatButton--accent-outline[type="button"]' }
]

const storeButtons = [
    {name: 'google play', locator: 'button.FlatButton--tertiary[type="button"]:has-text("Google Play")'}, 
    {name: 'rustore', locator: 'button.FlatButton--tertiary[type="button"]:has-text("RuStore")'}, 
    {name: 'app store', locator: 'button.FlatButton--tertiary[type="button"]:has-text("App Store")'}, 
]

test.beforeEach(async ({page}) => {
    await navigateToVK(page)
})

test('Should click on the login button', async ({page}) => {
    await clickLoginButton(page, expect)
    await checkErrorMessage(page, expect, /Не указаны телефон или почта/)
})

for (const {name, locator} of authButtons) {
    test(`Should click on the ${name} button`, async ({page}) => {
        await clickButton(page, expect, locator)
    })
}

for (const {name, locator} of storeButtons) {
    test(`Should click on the ${name} button`, async ({page}) => {
        await checkMarketButtons(page, expect, locator)
    })
}

test('Should click on the checkbox', async ({page}) => {
    await clickCheckBox(page, expect)
})

