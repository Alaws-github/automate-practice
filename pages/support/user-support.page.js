/*
 * Page object for support page
 */

const { assert } = require("chai");
const utils = require('../utils')

class user_supportPage {

    /*
    * User Support Page Elements Start
    */
        getServiceTagField(){
            return $('#edit-service-tag');
        }

        getSignUpNowBtn(){
            return  $('#edit-submit');
        }

        getContinueBtn(){
            return $('#edit-continue');
        }

        getFinishBtn(){
            return $('#edit-submit');
        }

    /*
     * Start of Non-authenticated user limited fields 
     */

        getCreateOwnerCheckBox(){
            return $('#create-owner');
        }

        getNameField(){
            return $('#edit-owner-0-inline-entity-form-name-0-value');
        }

        getEmailField(){
            return $('#edit-owner-0-inline-entity-form-mail-0-value')
        }

        getPasswordField(){
            return $('#edit-owner-0-inline-entity-form-pass-0-value-pass1');
        }

        getConfirmPasswordField(){
            return $('#edit-owner-0-inline-entity-form-pass-0-value-pass2');
        }

        getFirstNameField(){
            return $('#edit-owner-0-inline-entity-form-field-first-name-0-value');
        }

        getLastNameField(){
            return $('#edit-owner-0-inline-entity-form-field-last-name-0-value');
        }

        getCountryDropdown(){
            return $('#edit-owner-0-inline-entity-form-field-address-0-address-country-code--2');
        }

        getStreetAddressField(){
            return $('#edit-owner-0-inline-entity-form-field-address-0-address-address-line1');
        }

        getCityField(){
            return $('#edit-owner-0-inline-entity-form-field-address-0-address-locality');
        }

        getPostalCodeField(){
            return $('#edit-owner-0-inline-entity-form-field-address-0-address-postal-code');
        }

        getAddressButton(){
            const buttonElement = $('summary[aria-controls="edit-owner-0-inline-entity-form-field-address-0"]');
            return buttonElement
        }

     /*
      * End of Non-authenticated user limited fields
      */

        getOwnerBreifingNARadio(){
            return $('input#edit-manual-received-none.form-radio');
        }

        getOwnerBreifingYesRadio(){
            return $('input#edit-manual-received-yes.form-radio');
        }

        getOwnerBreifingNoRadio(){
            return $('edit-manual-received-no.form-radio');
        }

        getDealerSetUpNARadio(){
            return $('input#edit-dealer-set-up-none.form-radio');
        }

        getDealerSetUpYesRadio(){
            return $('input#edit-dealer-set-up-yes.form-radio');
        }

        getDealerSetUpNoRadio(){
            return $('input#edit-dealer-set-up-no.form-radio');
        }

        getMultipleBikesCheckbox(){
            return $('input#edit-multiple-bikes-value');
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

        getBikeModelDropdown(){
            return $('#select2-edit-bike-registration-0-inline-entity-form-model-container');
        }

        getModelStatus() {
            return $('#select2-edit-bike-registration-0-inline-entity-form-model-container').isEnabled();
        }

        getBikeModelSearchField(){
            return $('.select2-search__field');
        }

        getFrameNumberField() {
            return $('input#edit-bike-registration-0-inline-entity-form-frame-number-0-value');
        }

        getFrameFieldStatus(){
            return $('#edit-bike-registration-0-inline-entity-form-frame-number-0-value').isEnabled();
        }

        getBatteryNumberField() {
            return $('input#edit-battery-number-0-value');
        }

        getDateOfPurchaseField(){
            return $('//*[@id="edit-date-of-purchase-0-value-date"]');
        }

        getBrowseBtn(){
            return $('#edit-receipt-0-upload');
        }

        getDealerDropdown(){
            return $('#select2-edit-dealer-container');
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

        getCookieBtn(){
            return $('.agree-button');
        }
        
        getDynamicIndex(){
            return utils.getRandomIndex(0,3);
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
                return this.getLightRiderType();
            }
        }
    /*
    * User Support Page Elements End
    */

    
    /*
    * User Support Page Functions Start
    */

        enterServiceTag(tag){
            this.getServiceTagField().setValue(tag);
            this.getSignUpNowBtn().click();
        }

        /**
         * Start of Non-Authenticated Users limited functions
         */

        completeGuestFirstPage(){
            this.getOwnerBreifingYesRadio().click();
            this.getDealerSetUpYesRadio().click();
            this.getContinueBtn().click();
        }
        completeGuestSecondPageWithAcc(name,email,firstName,lastName,password,streetAddress,city,postalCode){
            this.getCreateOwnerCheckBox().click();
            this.getNameField().setValue(name);
            this.getEmailField().setValue(email);
            this.getPasswordField().setValue(password);
            this.getConfirmPasswordField().setValue(password)
            this.getFirstNameField().setValue(firstName);
            this.getLastNameField().setValue(lastName);
            this.getStreetAddressField().setValue(streetAddress);
            this.getCityField().setValue(city);
            this.getPostalCodeField().setValue(postalCode); 
            this.getFrequentRiderType().click();
            this.getContinueBtn().click();
        }
        completeGuestSecondPageNoAcc(email,firstName,lastName,streetAddress,city,postalCode){
            this.getEmailField().setValue(email);
            this.getFirstNameField().setValue(firstName);
            this.getLastNameField().setValue(lastName);
            this.getStreetAddressField().setValue(streetAddress);
            this.getCityField().setValue(city);
            this.getPostalCodeField().setValue(postalCode); 
            this.getLightRiderType().click()
            this.getContinueBtn().click();
        }
        completeGuestThirdPage(bikeDescription,frameNumber,bikeModel,dateOfPurchase,dealer){
            this.getBikeDescriptionField().setValue(bikeDescription);

            if(this.getFrameFieldStatus()){
                this.getFrameNumberField().setValue(frameNumber);
            }

            if(this.getModelStatus()){
                this.getBikeModelDropdown().click();
                browser.keys(bikeModel);
                browser.pause(3000);
                browser.keys('Enter');

            }
            this.getDateOfPurchaseField().setValue(dateOfPurchase);
            browser.pause(50);            
            this.getDealerDropdown().click();
            this.getDealerSearchField().setValue(dealer);
            browser.pause(3000);
            browser.keys('Enter');
            this.getContinueBtn().click();
        }
        completeGuestFourthPage(){
            this.getTernWarrantyCheckBox().click();
            this.getMaxLoadCheckBox().click();
            this.getCheckBeforeRideCheckBox().click();
            this.getEditDocumentationCheckBox().click();
            this.getOriginalWarrantyCheckBox().click();
            this.getAdditionalFeesCheckBox().click();
            this.getFinishBtn().click();
        }

        /**
         * End of Non-Authenticated Users limited functions
         */
        
        completeUserFirstPage(){
            this.getOwnerBreifingYesRadio().click();
            this.getDealerSetUpYesRadio().click();
            this.getContinueBtn().click();
        }
        completeUserSecondPage(){
            this.getMultipleBikesCheckbox().click();
            this.getHeavyRiderType().click();
            this.getContinueBtn().click();
        }
      
        completeUserThirdPage(bikeDescription,frameNumber,bikeModel,batteryNum,dateOfPurchase,dealer){
            this.getBikeDescriptionField().setValue(bikeDescription);

            if(this.getFrameFieldStatus()){
                this.getFrameNumberField().setValue(frameNumber);
            }

            if(this.getModelStatus()){
                this.getBikeModelDropdown().click();
                browser.keys(bikeModel);
                browser.pause(3000);
                browser.keys('Enter');
            }

            this.getBatteryNumberField().setValue(batteryNum);
            this.getDateOfPurchaseField().setValue(dateOfPurchase);
            browser.pause(50);            
            this.getDealerDropdown().click();
            this.getDealerSearchField().setValue(dealer);
            browser.pause(3000);
            browser.keys('Enter');
            this.getContinueBtn().click();
        }
        completeUserFourthPage(){
            this.getTernWarrantyCheckBox().click();
            this.getMaxLoadCheckBox().click();
            this.getCheckBeforeRideCheckBox().click();
            this.getEditDocumentationCheckBox().click();
            this.getOriginalWarrantyCheckBox().click();
            this.getAdditionalFeesCheckBox().click();
            this.getFinishBtn().click();
        }


    /*
    * User Support Page Functions End
    */


    /*
     * Methods & Function required to delete bike registration 
     */


    getServiceTagFilter() {
        return $('#edit-service-tag');
    }

    getApplyBikeBtn() {
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
        this.getApplyBikeBtn().click();        
    }

    deleteServiceTag() {
        this.getDropdownToggle().click()
        this.getDeleteOption().click()
        this.getConfirmDeleteBtn().click()
    }

}

module.exports = new user_supportPage()