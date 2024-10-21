export async function navigateToVK(page) {
    await page.goto('https://vk.com/')
}

export async function clickLoginButton(page, expect) {
    const loginButton = page.locator('button.FlatButton--primary[type="submit"]')
    await expect(loginButton).toBeVisible()
    await loginButton.click()
}

export async function createAccountButton(page, expect) {
    const createAccountButton = page.locator('button.FlatButton--positive[type="button"]')
    await expect(createAccountButton).toBeVisible()
    await createAccountButton.click()
}

export async function createBusinessAccountButton(page, expect) {
    const createBusinessAccountButton = page.locator('button.FlatButton--accent-outline[type="button"]') 
    await expect(createBusinessAccountButton).toBeVisible()
    await createBusinessAccountButton.click()
}

export async function checkErrorMessage(page, expect, expectedText) {
    const errorMsg = page.locator('.VkIdForm__messageError')
    await expect(errorMsg).toHaveText(expectedText)
}

export async function clickCheckBox(page, expect) {
    const checkboxIsClickable = page.getByLabel('Сохранить вход')
    await expect(checkboxIsClickable).toBeVisible()
    await checkboxIsClickable.click()
}