const {expect} = require('@playwright/test')

exports.VKAuthPage = class VKAuthPage {
    /** 
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page
        this.loginButton = page.getByRole('button', {name: 'Войти'})
        this.errorMessage = page.locator('.VkIdForm__messageError')
        this.cancelSearchButton = page.locator('.vkuiTappable__stateLayer')
        this.searchInput = page.locator('.vkuiSearch__label')
    }

    async goto() {
        await this.page.goto('https://vk.com/')
    }

    async clickOnLoginButton() {
        await this.loginButton.click()
    }

    async checkErrorMessage() {
        await expect(this.errorMessage).toHaveText('Не указаны телефон или почта')
    }

    async clickOnCancelSearchButton() {
        await this.searchInput.fill('Дуров')
        await this.cancelSearchButton.click()
        await expect(this.searchInput).toHaveValue('')
    }
}