const { assert } = require("chai");

class permissions{

/*
 * Delete Translation methods Start
 */
    getTitleField(){
        return $('#edit-title');
    }

    getContentTypeDropdown(){
        return $('#edit-type');
    }

    getLanguageDropdown(){
        return $('#edit-langcode');
    }
    
    getFilterBtn(){
        return $('#edit-submit-content');
    }

    getActionElement(){
        return $('.dropbutton__toggle');       
    }
    getTranslateOption(){
        return $('.translate > a:nth-child(1)');
    }

    getAddTranslation(){
        return $('tr.even:nth-child(6) > td:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)');
    } 

    getEditTranslation(){
        return $('li.edit.dropbutton__item.dropbutton__item.dropbutton__item--extrasmall.dropbutton-action');
    }

    getTaglineField(){
        return $('#edit-field-tagline-0-value')
    }

    getSaveTranslation(){
        return $('.button.button--primary.js-form-submit.form-submit');
    }

    getDeleteTranslation(){
        return $('#edit-delete-translation');
    }

    getStatusMessage(){
        return $('span.messages__item.font-bold.pl-10').getText();
    }

/*
 * Delete methods End
 */

 /*
  * Add dealer location methods start
  */

    getAddGroupBtn(){
        return $('a.button.button-action');
    }

    getNameField(){
        return $('#edit-label-0-value');
    }

    getPhoneNumberField(){
        return $('#edit-field-phone-number-0-value');
    }

    getWebsiteUrlField(){
        return $('#edit-field-website-0-uri');
    }

    getWebsiteLinkTextFeild(){
        return $('#edit-field-website-0-title');
    }

    getEmailField(){
        return $('#edit-field-email-0-value');
    }

    getMapLinkTextField(){
        return $('#edit-field-map-0-title');
    }

    getCountryDropdown(){
        return $('.country.form-select.required');
    }

    getStreetAddress1(){
        return $('.address-line1.form-text.required');
    }

    getStreetAddress2(){
        return $('.address-line2.form-text');
    }
    
    getCityField(){
        return $('.locality.form-text.required');
    }

    getPostalCodeField(){
        return $('.postal-code.form-text.required');
    }

    getProvinceDropdown(){
        return $('select.administrative-area.form-select.required');
    }

    getLatitudeField(){
        return $('#edit-field-location-0-lat');
    }

    getLongitudeField(){
        return $('#edit-field-location-0-lng');
    }

    getClassLevelDropdown(){
        return $('#edit-field-classification-level');
    }

    getOfferingsDropdown(){
        return $('#edit-field-offerings');
    }

    getBoschInfoDropdown(){
        return $('#edit-field-bosch-info');
    }

    getCreateBtn(){
        return $('#edit-submit');
    }

    getCreatedMessage(){
        return $('.bg-messages-status > span:nth-child(2)').getText()
    }
  /*
   * Add dealer location methods end
   */

/*
 * Add Dealer Account Methods start 
 */


    getUserNameField(){
        return $('#edit-name-0-value');
    }

    getUserEmailField(){
        return $('#edit-mail-0-value');
    }

    getPasswordField(){
        return $('#edit-pass-0-value-pass1');
    }

    getConfirmPasswordField(){
        return $('#edit-pass-0-value-pass2');
    }

    getFirstNameField(){
        return $('#edit-field-first-name-0-value');
    }

    getLastNameField(){
        return $('#edit-field-last-name-0-value');
    }

    getNotifyCheckbox(){
        return $('#edit-notify');
    }

    //Getter for Country dropdown created above

    getAddress1Field(){
        return $('.address-line1.form-text');
    }

    getAddress2Field(){
        return $('.address-line2.form-text')
    }

    getFieldCity(){
        return $('.locality.form-text');
    }

    getDropdownProvince(){
        return $('.administrative-area.form-select');
    }

    getFieldPostal(){
        return $('.postal-code.form-text');
    }

    getSiteLangDropdown(){
        return $('#edit-preferred-langcode');
    }

    getNameFilterField(){
        return $('#edit-user');
    }

    getPeopleFilterBtn(){
        return $('.button.js-form-submit.form-submit');
    }

    getUserCheckbox(){
        return $('#edit-user-bulk-form-0');
    }

    getActionDropdown(){
        return $('#edit-action');
    }

    getApplyBtn(){
        return $('.button--small.button.js-form-submit.form-submit');
    }

    getDeleteAccountRadio(){
        return $('#edit-user-cancel-method-user-cancel-delete');
    }

    getCancelAccountBtn(){
        return $('#edit-submit');
    }

    getSuccessMessage(){
        return $('div.messages-list__item:nth-child(2) > div:nth-child(2)').getText();
    }

    getDealerSuccessMessage(){
        return $('.messages__content').getText();
    }

    getAdminApplyBtn(){
        return $('#edit-submit');
    }


/*
 * Add Dealer Account methods end 
 */

 /*
    * Translations Functions Start
*/

    filterWorldwideBikePages(bikeTitle){
        this.getTitleField().setValue(bikeTitle);
        this.getContentTypeDropdown().selectByIndex(3);
        this.getLanguageDropdown().selectByIndex(3);
        this.getFilterBtn().click();        
    }

    filterWorldwideAccessoryPages(accessoryTitle){
        this.getTitleField().setValue(accessoryTitle);
        this.getContentTypeDropdown().selectByIndex(1);
        this.getLanguageDropdown().selectByIndex(3);
        this.getFilterBtn().click();        
    }

    filterCanadianBikePages(bikeTitle){
        this.getTitleField().setValue(bikeTitle);
        this.getContentTypeDropdown().selectByIndex(3);
        this.getLanguageDropdown().selectByIndex(8);
        this.getFilterBtn().click();        
    }

    filterCanadianAccessoryPages(accessoryTitle){
        this.getTitleField().setValue(accessoryTitle);
        this.getContentTypeDropdown().selectByIndex(1);
        this.getLanguageDropdown().selectByIndex(8);
        this.getFilterBtn().click();        
    }

    addCanadianEnglishTranslation() {
        this.getActionElement().click();
        this.getTranslateOption().click();
        this.getAddTranslation().click();
        this.getSaveTranslation().click();
    }

    editCanadianEnglishTranslation(tagline) {
        this.getEditTranslation().click();
        this.getTaglineField().setValue(tagline)
        this.getSaveTranslation().click();
    }


 /*
    * Translations Functions Start
*/

 /*
    * Dealer Location Functions Start
*/


    addDealerLocation(name, number, websiteUrl, websiteText, email, mapUrl, mapText, address1, address2, city, postal, latitude, longitude) {
        this.getNameField().setValue(name);
        this.getPhoneNumberField().setValue(number);
        this.getWebsiteUrlField().setValue(websiteUrl);
        this.getWebsiteLinkTextFeild().setValue(websiteText);
        this.getEmailField().setValue(email);
        this.getCountryDropdown().selectByIndex(40); //Should select Canada
        browser.pause(5000);
        this.getStreetAddress1().setValue(address1);
        this.getStreetAddress2().setValue(address2);
        this.getCityField().setValue(city);
        this.getProvinceDropdown().selectByIndex(9); //Should select Ontario
        this.getPostalCodeField().setValue(postal);
        this.getLatitudeField().setValue(latitude);
        this.getLongitudeField().setValue(longitude);
        this.getClassLevelDropdown().selectByIndex(3);
        this.getOfferingsDropdown().selectByIndex(4);
        this.getBoschInfoDropdown().selectByIndex(1);
        this.getCreateBtn().click();        
    }


 /*
    * Dealer Location Functions End
*/

/*
 *   Dealer Account Functions start
 */

    addDealerAccount(uname, email, pass1, pass2, firstName, lastName, address1, address2, city, postal){
        this.getUserNameField().setValue(uname);
        this.getUserEmailField().setValue(email);
        //this.getPasswordField().setValue(pass1);
        //this.getConfirmPasswordField().setValue(pass2);
        this.getFirstNameField().setValue(firstName);
        this.getLastNameField().setValue(lastName);
        this.getCountryDropdown().selectByIndex(40); //Should select Canada
        browser.pause(3500);
        this.getAddress1Field().setValue(address1);
        this.getAddress2Field().setValue(address2);
        this.getFieldCity().setValue(city);
        this.getDropdownProvince().selectByIndex(9); //Should select Ontario
        this.getFieldPostal().setValue(postal);
        this.getCreateBtn().click();

       // assert.include(this.getCreatedMessage(), 'Created a new user account');
    }

    assignDealerRole(uname){
        this.getNameFilterField().setValue(uname);
        this.getPeopleFilterBtn().click();
        this.getUserCheckbox().click();
        this.getActionDropdown().selectByIndex(2);
        this.getApplyBtn().click();
    }

    deleteDealerAccount(uname){
        this.getNameFilterField().setValue(uname);
        this.getPeopleFilterBtn().click();
        this.getUserCheckbox().click();
        this.getActionDropdown().selectByIndex(6);
        this.getAdminApplyBtn().click();
        this.getDeleteAccountRadio().click()
        this.getCancelAccountBtn().click()
    }

/*
 *   Dealer Account Functions End
 */



/**
 * Admin Translation Deletion Start
 */

getDeleteDropdown(){
    return $('.dropbutton__toggle');
}

getDeleteOption(){
    return $('li.delete.dropbutton__item.dropbutton__item.dropbutton__item--extrasmall.dropbutton-action.secondary-action');
}

getConfirmDelete(){
    return $('#edit-submit');
}

getMessage(){
    return $('div.messages__content').getText();
}

deleteTranslatedRecord() {
    this.getDeleteDropdown().click();
    this.getDeleteOption().click();
    this.getConfirmDelete().click();
}

/**
 * Admin Translation Deletion End
 */

}

module.exports = new permissions()