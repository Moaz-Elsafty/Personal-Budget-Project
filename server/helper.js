
const chooseCategory = (type) => {
    switch(type.toLowerCase()){
        case 'groceries':
            return 'Groceries';
        case 'gas':
            return 'Gas';
        case 'clothing':
            return 'Clothing';
        case 'tax':
            return 'Tax';
    }
}

const createEnvelope = (category, budget) => {
    if(category && budget) {
        return {
            category: category,
            budget: budget
        }
    } 
}

const findEnvelopeByCategory = (arr, category) => {
    const wantedEnvelope = category;
    if (category) {
        const requiredEnvelope = arr.find((ele) => ele.category.toLowerCase() == wantedEnvelope.toLowerCase())
        if (requiredEnvelope) {
            return requiredEnvelope;
        } else {
            return `Invalid ${category} category.`
        }
    } else {
        return "Category Required"
    }
};

const transferBudget = (envelope1, envelope2) => {
    console.log(envelope1.budget)
    console.log( envelope2.budget)
    envelope2.budget = envelope1.budget
    return envelope2;
}

const updateSpecificEnvelope = (envelope, updates) => {
    return envelope.budget = updates;
}

module.exports = {
    findEnvelopeByCategory,
    updateSpecificEnvelope,
    chooseCategory,
    createEnvelope,
    transferBudget
};
