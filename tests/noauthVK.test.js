import {test, expect} from '@playwright/test'
import { navigateToVK, clickLoginButton, checkErrorMessage, clickCheckBox, clickCreateAccountButton } from '../utils/helpers'

test('Should click on the login button', async ({page}) => {
    await navigateToVK(page)
    await clickLoginButton(page, expect)
    await checkErrorMessage(page, expect, /Не указаны телефон или почта/)
})

test('Should click on the create account button', async ({page}) => {
    await navigateToVK(page)
    await clickCreateAccountButton(page, expect)
})

test('Should click on the checkbox', async ({page}) => {
    await navigateToVK(page)
    await clickCheckBox(page, expect)
})

