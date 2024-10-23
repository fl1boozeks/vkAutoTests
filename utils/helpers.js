export async function navigateToVK(page) {
    await page.goto('https://vk.com/')
}

export async function clickLoginButton(page, expect) {
    const loginButton = page.getByRole('button', {name: 'Войти'}) 
    await expect(loginButton).toBeVisible()
    await loginButton.click()
}

export async function clickButton(page, expect, buttonLocator) {
    const button = page.locator(buttonLocator)
    await expect(button).toBeVisible()
    await button.click()
}

export async function checkMarketButtons(page, expect, buttonLocator) {
    const button = page.locator(buttonLocator)
    await expect(button).toBeVisible()
    await button.click()
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

export async function cancelSearch(page, expect) {
    const cancel = page.locator('.vkuiTappable__stateLayer')
    await page.getByLabel('Поиск').fill('Дуров')
    await expect(cancel).toBeVisible()
    await cancel.click()
    await expect(page.getByLabel('Поиск')).toHaveValue('')
}

export async function checkSearch(page, expect, expectedTitle) {
    const search = page.locator('.vkuiSearch__label')
    await expect(search).toBeVisible()
    await search.press('Enter')
    await expect(page).toHaveTitle(expectedTitle)
}