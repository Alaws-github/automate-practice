/*
 * Page object for home page
 */

class homePage {
    /*
     * Page Elements 
     */
    async getPageLanguage() {
        const htmlRootElement = $('html.js');
        const htmlLanguage = (await htmlRootElement).getAttribute('lang')
        return htmlLanguage;
    }

    async getHeaderElement() {
        const headerElement = $('h1');
        const headerText = (await headerElement).getText();
        return headerText;
    }
}

module.exports = new homePage();