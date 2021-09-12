const supportPage = require('../../../../pages/support/user-support.page');
const LoginPage = require('../../../../pages/login/login.page');
const supportData = require('../../../../data/support.data');
const loginData = require('../../../../data/login.data');
const { assert } = require('chai');

describe('Complete Owner Registration as a Guest user', () => {

    afterEach('Delete existing service tag',() => {
        browser.url('/user');
        const userField = LoginPage.UserNameField();
        const psdField = LoginPage.PasswordField();
        const login =  LoginPage.LoginBtn();

        userField.setValue(loginData.adminUser.username);
        psdField.setValue(loginData.adminUser.password);
        login.click();

        browser.url('/admin/content/owner-registrations');
        const tag = supportData.serviceTag;
        
        supportPage.findServiceTag(tag);
        tagLink = supportPage.getDropdownToggle();

        if(tagLink.isDisplayed()) {
            supportPage.deleteServiceTag();
        }
        else
        {
            console.error("*****Service Tag not found, test case has likely failed. Nothing has been deleted.*****")
        }
        
        browser.url('/user/logout');

    });


    it('Should complete an Owner Registration while creating tern account', ()=>{
        browser.url('/user/logout');
        browser.url('/en/support/registration');

        supportPage.getCookieBtn().click();

        const tag = supportData.serviceTag;
        supportPage.enterServiceTag(tag);

        const name = supportData.name;
        const email = supportData.validEmail;
        const firstName = supportData.firstName;
        const lastName = supportData.lastName;
        const password = supportData.password;
        const city = supportData.city;
        const streetAddress = supportData.address;
        const postalCode = supportData.postalCode;
        const bikeDescription = supportData.bikeDesc[supportPage.getDynamicIndex()];
        const frameNumber = supportData.frameNum;
        const bikeModel = supportData.bikeModel;
        const dateOfPurchase = supportData.purchaseDate;
        const dealer = supportData.dealer;

        supportPage.completeGuestFirstPage();
        supportPage.completeGuestSecondPageWithAcc(name,email,firstName,lastName,password,streetAddress,city,postalCode);
        supportPage.completeGuestThirdPage(bikeDescription,frameNumber,bikeModel,dateOfPurchase,dealer);
        supportPage.completeGuestFourthPage();    

        const pageUrl = browser.getUrl();
        assert.include(pageUrl, '/support/registration/finished');
        
    })


    it('Should complete an Owner Registration w/o creating tern account', ()=>{
        browser.url('/en/support/registration');

        const tag = supportData.serviceTag;
        supportPage.enterServiceTag(tag);

        const email = supportData.validEmail;
        const firstName = supportData.firstName;
        const lastName = supportData.lastName;
        const city = supportData.city;
        const streetAddress = supportData.address;
        const postalCode = supportData.postalCode;
        const bikeDescription = supportData.bikeDesc[supportPage.getDynamicIndex()];
        const frameNumber = supportData.frameNum;
        const bikeModel = supportData.bikeModel;
        const dateOfPurchase = supportData.purchaseDate;
        const dealer = supportData.dealer;

        supportPage.completeGuestFirstPage();
        supportPage.completeGuestSecondPageNoAcc(email,firstName,lastName,streetAddress,city,postalCode);
        supportPage.completeGuestThirdPage(bikeDescription,frameNumber,bikeModel,dateOfPurchase,dealer);
        supportPage.completeGuestFourthPage();    
        
        const pageUrl = browser.getUrl();
        assert.include(pageUrl, '/support/registration/finished');
    })

});