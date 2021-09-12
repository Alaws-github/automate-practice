const adminBasePage = require('../../../../pages/admin/admin-base.page')
const LoginPage = require('../../../../pages/login/login.page');
const loginData = require('../../../../data/login.data');
const { assert } = require('chai');


describe('Taxonomy terms translations tests for the Admin Console (Migration Data)', () => {

    before('Should log in as an admin user', () => {
        browser.url('/user/login');
        const userField = LoginPage.UserNameField();
        const psdField = LoginPage.PasswordField();
        const login =  LoginPage.LoginBtn();

        userField.setValue(loginData.adminUser.username);
        psdField.setValue(loginData.adminUser.password);
        login.click();

    });

    /* Translatable Taxonomy Vocabs Start*/

    it('Should verify that Accessory vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/accessory/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Accessory Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Accessory Category vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/accessory_category/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Accessory Category Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Bike Category vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/bike_category/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Bike Category Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Bike Model vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/bike_model/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Bike Model Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Color vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/color/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Color Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Dealer Level Classification vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/dealer_level_classification/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Dealer Level Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Dealer Offering vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/dealer_offering/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Dealer Offering Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Part Type vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/part_type/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Part Type Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Price Level vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/price_level/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Price Level Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Rider Type vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/rider_type/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Rider Type Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Special Features vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/special_feature/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Special Feature Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Wheel Size vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/wheel_size/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Translate",`Wheel Size Vocabularies are not translatable when they should be`)
    })

    /* Translatable Taxonomy Vocabs End*/



    /* Un-translatable Taxonomy Vocabs Start*/

    it('Should verify that Bike Model Generation Number vocabularies cannot be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/bike_model_generation_number/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Clone",`Bike Model Generation Number Vocabularies are translatable when they should not be`)
    })

    it('Should verify that Bosch Info vocabularies cannot be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/bosch_info/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Clone",`Bosch Info Vocabularies are translatable when they should not be`)
    })

    it('Should verify that Component Level vocabularies can be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/component_level/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Clone",`Component Level Vocabularies are not translatable when they should be`)
    })

    it('Should verify that Knowledge Base vocabularies cannot be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/knowledge_base_category/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Clone",`Knowledge Base Vocabularies are translatable when they should not be`)
    })

    it('Should verify that Generation vocabularies cannot be translated', ()=>{   /*  */
        browser.url("/admin/structure/taxonomy/manage/generation/overview");
        const taxonomyVocabularyFirstRecord = adminBasePage.getTaxonomyRecordFirstVocabulary();
        taxonomyVocabularyFirstRecord.click();
        const finalTabText = adminBasePage.getTaxonomyVocabularyFinalTab().getText();
        assert.equal(finalTabText,"Clone",`Generation Vocabularies are translatable when they should not be`)
    })

    /* Un-translatable Taxonomy Vocabs End*/

})