
class admin_basePage{

    getTaxonomyTable(){
        return $('#taxonomy > tbody');
    }

    getTaxonomyRecordFirstVocabulary(){
        return $('tbody > tr:first-child .td__operations > div')
    }

    getTaxonomyVocabularyEditBttn(){
        return $('.tabs tabs--primary clearfix > li[data-original-order="3"]')
    }

    getTaxonomyVocabularyFinalTab(){
        return $('ul[class="tabs tabs--primary clearfix"] > :last-child')
    }  
    
    getTaxonomyTableContentsCount(){
        const tableBodyElement = this.getTaxonomyTable();
        const total = driver.executeScript(`
            const tableRecords = arguments[0].children;
            const tableRecordsCount = tableRecords.length;
            return tableRecordsCount;
        `,[tableBodyElement])

        return total;
    }

}

module.exports = new admin_basePage()