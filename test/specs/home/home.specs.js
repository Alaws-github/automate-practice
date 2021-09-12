const homePage = require('../../../pages/home/home');
const { assert } = require('chai');



describe('Navigate to the various Tern Bicycle Home Pages', () => {
    it('Should navigate to the correct webpage for the Tern Bicycles | Worldwide site', async () => {
        browser.url('/en');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"en");
    });
    
    it('Should navigate to the correct webpage for the Tern Bicycles | Argentina site', async () => {
        browser.url('/ar');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Nueva Vektron');
        assert.equal(pageLanguage,"es-ar");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Australia site', async () => {
        browser.url('/au');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the HSD');
        assert.equal(pageLanguage,"en-au");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Belgium - Netherlands site', async () => {
        browser.url('/be');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Maak kennis met de GSD');
        assert.equal(pageLanguage,"nl-be");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Canada - English site', async () => {
        browser.url('/ca');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"en-ca");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Canada - French site', async () => {
        browser.url('/fr-ca');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Présentation du GSD');
        assert.equal(pageLanguage,"fr-ca");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Chile - Spanish site', async () => {
        browser.url('/cl');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Link D8');
        assert.equal(pageLanguage,"es-cl");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Colombia - Spanish site', async () => {
        browser.url('/co');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Link D8');
        assert.equal(pageLanguage,"es-co");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Czech - Republic site', async () => {
        browser.url('/cz');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Seznamte se. GSD');
        assert.equal(pageLanguage,"cs");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Denmark site', async () => {
        browser.url('/dk');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"da");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Germany site', async () => {
        browser.url('/de');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Das neue GSD');
        assert.equal(pageLanguage,"de");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Spain site', async () => {
        browser.url('/es');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Te presento la GSD');
        assert.equal(pageLanguage,"es");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Greece site', async () => {
        browser.url('/gr');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Το Link D8');
        assert.equal(pageLanguage,"el");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | France site', async () => {
        browser.url('/fr');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Présentation du GSD');
        assert.equal(pageLanguage,"fr");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Finland site', async () => {
        browser.url('/fi');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the HSD');
        assert.equal(pageLanguage,"fi");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Hong Kong site', async () => {
        browser.url('/hk');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, '認識BYB');
        assert.equal(pageLanguage,"zh-hk");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Italy site', async () => {
        browser.url('/it');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'La nuova GSD');
        assert.equal(pageLanguage,"it");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Japan site', async () => {
        browser.url('/jp');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the E Bike');
        assert.equal(pageLanguage,"ja");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Korean site', async () => {
        browser.url('/kr');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'BYB 만나기');
        assert.equal(pageLanguage,"ko");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Luxembourg site', async () => {
        browser.url('/lu');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Das neue GSD');
        assert.equal(pageLanguage,"de-lu");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Hungary site', async () => {
        browser.url('/hu');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"hu");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Malaysia site', async () => {
        browser.url('/my');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the BYB');
        assert.equal(pageLanguage,"en-my");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Mexico site', async () => {
        browser.url('/mx');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Verge X10');
        assert.equal(pageLanguage,"es-mx");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Netherlands site', async () => {
        browser.url('/nl');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Maak kennis met de GSD');
        assert.equal(pageLanguage,"nl");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | New Zealand site', async () => {
        browser.url('/nz');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"en-nz");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Norway site', async () => {
        browser.url('/no');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"nb");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Paraguay site', async () => {
        browser.url('/py');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Nueva Vektron');
        assert.equal(pageLanguage,"es-py");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Peru site', async () => {
        browser.url('/pe');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'La Nueva Node');
        assert.equal(pageLanguage,"es-pe");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Phillipines site', async () => {
        browser.url('/ph');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the BYB');
        assert.equal(pageLanguage,"en-ph");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Russia site', async () => {
        browser.url('/ru');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Verge X20');
        assert.equal(pageLanguage,"ru");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Poland site', async () => {
        browser.url('/pl');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Nowy Vektron');
        assert.equal(pageLanguage,"pl");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Switzerland - German site', async () => {
        browser.url('/ch');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Präsentation des GSD');
        assert.equal(pageLanguage,"gsw-berne");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Singapore site', async () => {
        browser.url('/sg');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the BYB');
        assert.equal(pageLanguage,"en-sg");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Slovakia site', async () => {
        browser.url('/sk');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Seznamte se. GSD');
        assert.equal(pageLanguage,"sk");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Switzerland - French site', async () => {
        browser.url('/ch-fr-ch');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Présentation du GSD');
        assert.equal(pageLanguage,"fr-ch");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Taiwan site', async () => {
        browser.url('/tw');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, '認識BYB');
        assert.equal(pageLanguage,'zh-hant');
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Thailand site', async () => {
        browser.url('/th');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'เชิญพบกับ BYB');
        assert.equal(pageLanguage,"en-th");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | United Kingdom site', async () => {
        browser.url('/uk');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"en-gb");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | United States site', async () => {
        browser.url('/us');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Introducing the GSD');
        assert.equal(pageLanguage,"en-us");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Uruguay site', async () => {
        browser.url('/uy');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'Nueva Vektron');
        assert.equal(pageLanguage,"es-uy");
    });

    it('Should navigate to the correct webpage for the Tern Bicycles | Vietnam site', async () => {
        browser.url('/vn');
        const pageLanguage = await homePage.getPageLanguage();
        const headerText = await homePage.getHeaderElement();
        assert.equal(headerText, 'The Link D8');
        assert.equal(pageLanguage,"vi");
    });

});