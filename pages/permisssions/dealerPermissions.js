const { assert } = require("chai");

class permissions{

    /*
     * Edit Store Info methods start 
     */

    getMyDealershipsBtn(){
         return $('li.border-r:nth-child(4) > a:nth-child(1)');
    }

    getEditBtn() {
        return $('.edit.dropbutton-action');
    }

    getShopNameField(){
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

    getMapUrlField(){
        return $('#edit-field-map-0-uri');
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

    getStatusCheckbox(){
        return $('#edit-status-value');
    }

    getSaveBtn() {
        return $('#edit-submit');
    }

    getDeleteBtn() {
        return $('#edit-delete');
    }

    getUpdatedMessage(){
        return $('.messages__item.font-bold.pl-10').getText();
    }
/*
     * Edit Store Info methods end 
*/


/*
     * Create Bike registration methods start 
*/

getOwnerBreifingNARadio(){
    return $('input#edit-manual-received-none.form-radio')
}

getOwnerBreifingYesRadio(){
    return $('input#edit-manual-received-yes.form-radio')
}

getOwnerBreifingNoRadio(){
    return $('input#edit-manual-received-no.form-radio')
}

getDealerSetUpNARadio(){
    return $('input#edit-dealer-set-up-none.form-radio')
}

getDealerSetUpYesRadio(){
    return $('input#edit-dealer-set-up-yes.form-radio')
}

getDealerSetUpNoRadio(){
    return $('input#edit-dealer-set-up-no.form-radio')
}

getOwnerBriefingButton(){
    const buttonElement= $('summary[aria-controls="briefing-dealer-setup"]');
    return buttonElement
}

getAccountInformationButton(){
    const buttonElement= $('summary[aria-controls="edit-group-account-information"]');
    return buttonElement
}

getBikeInformationButton(){
    const buttonElement= $('summary[aria-controls="edit-group-bike-information"]');
    return buttonElement
}

getRiderResponsibilityButton(){
    const buttonElement= $('summary[aria-controls="edit-group-rider-responsibility"]');
    return buttonElement
}

getFrequentRiderType(){
    return $('#edit-rider-type-1483');
}

getHeavyRiderType(){
    return $('#edit-rider-type-1482');
}

getLightRiderType(){
    return $('#edit-rider-type-1485');
}

getRecreationalRiderType(){
    return $('#edit-rider-type-1484');
}

getBikeDescriptionField(){
    return $('#edit-label-0-value');
}

getServiceTagField(){
    return $('#edit-bike-registration-0-inline-entity-form-service-tag-0-value');
}

getBikeModelDropdown(){
    return $('#select2-edit-bike-registration-0-inline-entity-form-model-container');
}

getBikeModelSearchField(){
    return $('.select2-search__field');
}

getFrameNumberField() {
    return $('input#edit-bike-registration-0-inline-entity-form-frame-number-0-value');
}

getBatteryNumberField() {
    return $('input#edit-battery-number-0-value');
}

getDateOfPurchaseField(){
    return $('#edit-date-of-purchase-0-value-date');
}

getPurchaseReceiptBtn() {
    return $('input#edit-receipt-open-button');
}

getBrowseBtn(){
    return $('#edit-receipt-0-upload');
}

getDealerDropdown(){
    return $('#select2-edit-dealer-container > span:nth-child(1)');
}

getDealerSearchField(){
    return $('.select2-search__field');
}

getTernWarrantyCheckBox(){
    return $('#edit-tern-warranty-value');
}

getMaxLoadCheckBox(){
    return $('#edit-maxload-value');
}

getCheckBeforeRideCheckBox(){
    return $('#edit-check-before-each-ride-value');
}

getEditDocumentationCheckBox(){
    return $('#edit-documentation-value');
}

getOriginalWarrantyCheckBox(){
    return $('#edit-original-warranty-owner-value');
}

getAdditionalFeesCheckBox(){
    return $('#edit-additional-fees-outside-country-value');
}

getOwnerRegistrationSubmitBttn(){
    return $('#edit-submit');
}


getDynamicRiderType(){
    const integer = utils.getRandomArbitrary(2,6);
    if(integer == 2){
        return this.getHeavyRiderType();
    }
    else if (integer == 3){
        return this.getFrequentRiderType();
    }
    else if (integer == 4){
        return this.getRecreationalRiderType();
    }
    else if (integer == 5){
        return this.getLightRiderType()
    }
}

/*
     * Create Bike registration methods end 
*/


/*
     * Edit Bike registration methods start 
*/

    getMyBikesBtn() {
        return $('li.border-r:nth-child(3) > a:nth-child(1)');
    }
    
    getBikeRegistrationDropdown() {
        return $('#select2-edit-bike-registration-container')
    }

    getBikeView(){
        return $('td.views-field:nth-child(1) > a:nth-child(1)');
    } 

    getBikePage() {
        return $('.cols-5 > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1) > a:nth-child(1)');
    }

    getTagSearchField() {
        return  $('.select2-search__field')
    }

    getServiceTag() {
        return $('#block-content > article:nth-child(1) > div:nth-child(2) > div:nth-child(2) > article:nth-child(1) > div:nth-child(1) > div:nth-child(2)').getText();
    }

    getServiceTagView(){
        return $('.service-tag > div:nth-child(2)').getText();
    }

/*
     * Edit Bike registration methods end 
*/

//Service tag entry

getServiceTagField(){
    return $('#edit-service-tag');
}

enterServiceTag(tag){
    this.getServiceTagField().setValue(tag);
    this.getOwnerRegistrationSubmitBttn().click();
}


/*
     * Edit Store Info functions start 
*/

editStoreInfo(address1, address2, city, postal, latitude, longitude) {
    this.getMyDealershipsBtn().click();
    this.getEditBtn().click();
    this.getCountryDropdown().selectByIndex(40); //Should select Canada
    browser.pause(2700);
    this.getStreetAddress1().setValue(address1);
    this.getStreetAddress2().setValue(address2);
    this.getCityField().setValue(city);
    this.getProvinceDropdown().selectByIndex(9); //Should select Ontario
    this.getPostalCodeField().setValue(postal);
    this.getLatitudeField().setValue(latitude);
    this.getLongitudeField().setValue(longitude);
    this.getSaveBtn().click()       
}

/*
     * Edit Store Info functions end 
*/



/*
     * Edit Bike registration functions start 
*/

    viewBikeRegistration() {
        this.getMyBikesBtn().click();
        this.getBikeView().click();
    }

/*
     * Edit Bike registration functions end 
*/

/*
     * Admin delete functions and methods start
*/

    getServiceTagFilter() {
        return $('#edit-service-tag');
    }

    getApplyBikeBtn() {
        return $('#edit-submit-bike-registrations');
    }

    getApplyOwnerBtn() {
        return $('#edit-submit-owner-registrations');
    }

    getDropdownToggle() {
        return $('.dropbutton__toggle');
    }

    getDeleteOption() {
        return $('.delete > a:nth-child(1)');
    }

    getConfirmDeleteBtn() {
        return $('#edit-submit');
    }

    getDeleteMessage() {
        return $('.messages__content').getText();
    }

    findServiceTag(tag) {
        this.getServiceTagFilter().setValue(tag);
        this.getApplyOwnerBtn().click();
    }

    deleteServiceTag() {
        this.getDropdownToggle().click()
        this.getDeleteOption().click()
        this.getConfirmDeleteBtn().click()
    }

    findOwnerRegistration(tag) {
        this.getServiceTagFilter().setValue(tag);
        this.getApplyOwnerBtn().click();
    }

    deleteOwnerRegistration() {
        this.getDropdownToggle().click()
        this.getDeleteOption().click()
        this.getConfirmDeleteBtn().click()
    }


/*
     * Admin delete functions and methods end
*/

}

module.exports = new permissions()