const permissions = require('../../../../pages/permisssions/distributorPermissions');
const LoginPage = require('../../../../pages/login/login.page');
const supportPage = require('../../../../pages/support/user-support.page');
const permissionData = require('../../../../data/permission.data');
const loginData = require('../../../../data/login.data');
const { assert } = require('chai');



describe('Complete various Permission/Translations tests as a Distributor',() =>{

    before('Should log in as a Distributor', () => {
        browser.url('/user/');

        supportPage.getCookieBtn().click();

        const userField = LoginPage.UserNameField();
        const psdField = LoginPage.PasswordField();
        const login =  LoginPage.LoginBtn();

        userField.setValue(loginData.distributorUser.username);
        psdField.setValue(loginData.distributorUser.password);
        login.click();
              
        const pageUrl = browser.getUrl();

        assert.include(pageUrl, loginData.distributorUser.expectedRoute);

    });

    after('Should remove newly created dealer account', () => {
        browser.url('/user/logout');
        browser.url('/user/');
        const userField = LoginPage.UserNameField();
        const psdField = LoginPage.PasswordField();
        const login =  LoginPage.LoginBtn();

        userField.setValue(loginData.adminUser.username);
        psdField.setValue(loginData.adminUser.password);
        login.click();
        browser.url('/admin/people');

        const uname = permissionData.userName;

        permissions.deleteDealerAccount(uname);

        const msg = permissions.getDealerSuccessMessage();
        
        assert.include(msg, permissionData.deletedText);
    })



    it('Should add Canadian English Translation to a Worldwide English Bike Page', ()=>{
        browser.url('/admin/content');
        const bikeTitle = permissionData.bikeTitle;
        
        permissions.filterWorldwideBikePages(bikeTitle);
        permissions.addCanadianEnglishTranslation();
        const msg = permissions.getCreatedMessage()
                      
        assert.include(msg, permissionData.successText);
    })

    it('Should edit a Canadian English Translation of a Bike Page', ()=>{
        browser.url('/admin/content');
        const bikeTitle = permissionData.bikeTitle;
        
        permissions.filterCanadianBikePages(bikeTitle);
        permissions.editCanadianEnglishTranslation(permissionData.editText);
        browser.pause(5000);
        const msg = permissions.getSuccessMessage();
        browser.pause(5000);

                      
        assert.include(msg, permissionData.successText);
    })

    it('Should delete a Canadian English Translation of a Bike Page', ()=>{
        browser.url('/admin/content');
        const bikeTitle = permissionData.bikeTitle;

        permissions.filterCanadianBikePages(bikeTitle);
        permissions.deleteTranslatedRecord();

        const msg = permissions.getMessage();
                      
        assert.include(msg, permissionData.deletedText);
    })


    it('Should add Canadian English Translation to a Worldwide English Accessory Page', ()=>{
        browser.url('/admin/content');
        const accessoryTitle = permissionData.accessoryTitle;
        
        permissions.filterWorldwideAccessoryPages(accessoryTitle);
        permissions.addCanadianEnglishTranslation();
        const msg = permissions.getCreatedMessage();
                      
        assert.include(msg, permissionData.successText);
    })

    it('Should edit a Canadian English Translation of an Accessory Page', ()=>{
        browser.url('/admin/content');
        const accessoryTitle = permissionData.accessoryTitle;
        
        permissions.filterCanadianAccessoryPages(accessoryTitle);
        permissions.editCanadianEnglishTranslation(permissionData.editText);
        const msg = permissions.getSuccessMessage();
                      
        assert.include(msg, permissionData.successText);
    })

    it('Should delete a Canadian English Translation of an Accessory Page', ()=>{
        browser.url('/admin/content');
        const accessoryTitle = permissionData.accessoryTitle;

        permissions.filterCanadianAccessoryPages(accessoryTitle);
        permissions.deleteTranslatedRecord();
        const msg = permissions.getMessage();
                      
        assert.include(msg, permissionData.deletedText);
    })


    it('Should add a dealer location ("Bike City")', ()=> {
        browser.url('group/add/dealer_location');
        const name = permissionData.name;
        const number = permissionData.number;
        const websiteUrl = permissionData.websiteUrl;
        const websiteText = permissionData.websiteText;
        const email = permissionData.email;
        const mapUrl = permissionData.mapUrl;
        const mapText = permissionData.mapText;
        const address1 = permissionData.address1;
        const address2 = permissionData.address2;
        const city = permissionData.city;
        const postal = permissionData.postal;
        const latitude = permissionData.latitude;
        const longitude = permissionData.longitude;


        permissions.addDealerLocation(name, number, websiteUrl, websiteText, email, mapUrl, mapText, address1, address2, city, postal, latitude, longitude);
        
        const msg = permissions.getCreatedMessage();

        assert.include(msg, permissionData.createdText);
    })


    it('Should create a new account and assign it the "Dealer" role', ()=>{
        browser.url('/admin/people/create');
        const uname = permissionData.userName;
        const email = permissionData.userEmail;
        const pass1 = permissionData.password;
        const pass2 = permissionData.password;
        const firstName = permissionData.firstName;
        const lastName = permissionData.lastName;
        const address1 = permissionData.address1;
        const address2 = permissionData.address2;
        const city = permissionData.city;
        const postal = permissionData.postal;

        
        permissions.addDealerAccount(uname, email, pass1, pass2, firstName, lastName, address1, address2, city, postal);
        browser.url('/admin/people');
        permissions.assignDealerRole(uname);

        const msg = permissions.getDealerSuccessMessage();
                      
        assert.include(msg, permissionData.appliedText);
    })


});