import {test, expect} from '@playwright/test'
import { navigateToVK, clickLoginButton, checkErrorMessage, clickCheckBox, clickButton } from '../utils/helpers'

const buttons = [
    { name: 'create account', locator: 'button.FlatButton--positive[type="button"]' },
    { name: 'create business account', locator: 'button.FlatButton--accent-outline[type="button"]' }
]

test.beforeEach(async ({page}) => {
    await navigateToVK(page)
})

test('Should click on the login button', async ({page}) => {
    await clickLoginButton(page, expect)
    await checkErrorMessage(page, expect, /Не указаны телефон или почта/)
})

for (const {name, locator} of buttons) {
    test(`Should click on the ${name} button`, async ({page}) => {
        await clickButton(page, expect, locator)
    })
}

test('Should click on the checkbox', async ({page}) => {
    await clickCheckBox(page, expect)
})

