const supportPage = require('../../../../pages/support/user-support.page');
const LoginPage = require('../../../../pages/login/login.page');
const supportData = require('../../../../data/support.data');
const loginData = require('../../../../data/login.data');
const { assert } = require('chai');



describe('Complete various combinations of an Owner Registration',() =>{

    before('Should log in as a regular user', () => {
        browser.url('/en/user');

        supportPage.getCookieBtn().click();

        const userField = LoginPage.UserNameField();
        const psdField = LoginPage.PasswordField();
        const login =  LoginPage.LoginBtn();

        userField.setValue(loginData.regularUser.username);
        psdField.setValue(loginData.regularUser.password);
        login.click();
              
        const pageUrl = browser.getUrl();

        assert.include(pageUrl, loginData.regularUser.expectedRoute);

    });

    after('Delete dummy service tag',() => {
        browser.url('/user/logout');
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

    it('Should complete an Owner Registration (Total Completion i.e. all fields)', ()=>{
        browser.url('/en/support/registration');

        const tag = supportData.serviceTag;
        supportPage.enterServiceTag(tag);

        const bikeDescription = supportData.bikeDesc[supportPage.getDynamicIndex()];
        const bikeModel = supportData.bikeModel;
        const dateOfPurchase = supportData.purchaseDate;
        const dealer = supportData.dealer;
        const frameNumber = supportData.frameNum;
        const batteryNum = supportData.batteryNum[supportPage.getDynamicIndex()];

        supportPage.completeUserFirstPage();
        supportPage.completeUserSecondPage();
        supportPage.completeUserThirdPage(bikeDescription,frameNumber,bikeModel,batteryNum,dateOfPurchase,dealer);
        supportPage.completeUserFourthPage();
        browser.pause(3500);

        const pageUrl = browser.getUrl();
        assert.include(pageUrl, '/support/registration/finished');

    })

});