const permissions = require('../../../../pages/permisssions/dealerPermissions');
const LoginPage = require('../../../../pages/login/login.page');
const supportPage = require('../../../../pages/support/user-support.page');
const permissionData = require('../../../../data/permission.data');
const loginData = require('../../../../data/login.data');
const supportData = require('../../../../data/support.data');
const { assert } = require('chai');
const dealerPermissions = require('../../../../pages/permisssions/dealerPermissions');



describe('Complete various Permission/Translations tests as a Dealer',() =>{

    before('Should log in as a Dealer', () => {
        browser.url('/user/');

        supportPage.getCookieBtn().click();

        const userField = LoginPage.UserNameField();
        const psdField = LoginPage.PasswordField();
        const login =  LoginPage.LoginBtn();

        userField.setValue(loginData.dealerUser.username);
        psdField.setValue(loginData.dealerUser.password);
        login.click();
              
        const pageUrl = browser.getUrl();

        assert.include(pageUrl, loginData.dealerUser.expectedRoute);

    });

    after('Should delete dummy service tag', () => {
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
        
        permissions.findServiceTag(tag);
        tagLink = permissions.getDropdownToggle();

        if(tagLink.isDisplayed()) {
            permissions.deleteServiceTag();
        }
        else
        {
            console.error("*****Service Tag not found, test case has likely failed. Nothing has been deleted.*****")
        }

    });

    after('Should delete newly created owner registration', () => {
        browser.url('/admin/content/owner-registrations');
        const tag = permissionData.tag; 
             
        permissions.findOwnerRegistration(tag);
        tagLink = permissions.getDropdownToggle();

        if(tagLink.isDisplayed()) {
            permissions.deleteOwnerRegistration();
        }
        else
        {
            console.error("*****Service Tag not found, test case has likely failed. Nothing has been deleted.*****")
        }

    });
    

    xit('Should edit dealer store information', ()=>{
        browser.url('/user');

        const address1 = permissionData.address1;
        const address2 = permissionData.address2;
        const city = permissionData.city;
        const postal = permissionData.postal;
        const latitude = permissionData.latitude;
        const longitude = permissionData.longitude;
        
        dealerPermissions.editStoreInfo(address1, address2, city, postal, latitude, longitude);
        const msg = permissions.getUpdatedMessage();
                      
        assert.include(msg, permissionData.successText);
    })

    it('Should create a linked bike registration to autodeal', ()=>{
        browser.url('/en/support/registration');

        const tag = supportData.serviceTag;
        dealerPermissions.enterServiceTag(tag);

        const bikeDescription = supportData.bikeDesc[supportPage.getDynamicIndex()];
        const bikeModel = supportData.bikeModel;
        const dateOfPurchase = supportData.purchaseDate;
        const dealer = supportData.dealer;
        const frameNumber = supportData.frameNum;
        const batteryNum=supportData.batteryNum[supportPage.getDynamicIndex()];

        supportPage.completeUserFirstPage();
        supportPage.completeUserSecondPage();
        supportPage.completeUserThirdPage(bikeDescription,frameNumber,bikeModel,batteryNum,dateOfPurchase,dealer);
        supportPage.completeUserFourthPage(); 
        
        const pageUrl = browser.getUrl();
        assert.include(pageUrl, '/support/registration/finished');

    })

    xit('Should view bike registration', ()=>{
        browser.url('/user');
        const tag = permissionData.tag;

        dealerPermissions.viewBikeRegistration();  

        assert.equal(tag, dealerPermissions.getServiceTagView());       
    })


});