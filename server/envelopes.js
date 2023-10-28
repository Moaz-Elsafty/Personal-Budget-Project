const express = require('express');
const envelopesRouter = express.Router();
const {
    findEnvelopeByCategory,
    updateSpecificEnvelope,
    chooseCategory,
    createEnvelope,
    transferBudget
} = require('./helper')


let envelopes = [];

//Creaete a new envelope
envelopesRouter.post('/', (req, res, next) => {
    const category = chooseCategory(req.query.type)
    const budget = req.query.budget
    const newEnvelope = createEnvelope(category, budget);
    if (newEnvelope) {
        envelopes.push(newEnvelope);
        res.status(201).send(`A new ${category} envelope successfully created`);
    } else {
        // incase user missed or misspelled the requirments
        res.status(404).send(`Invalid information. Please, checkout your inputs craiteria.`) //<<<<
    }
})

//get an array of all envelopes
envelopesRouter.get('/', (req, res, next) => {
    res.status(200).send(envelopes);
});

//get an envelope by category
envelopesRouter.get('/:envelopeCategory', (req, res, next) => {
    const category = req.params.envelopeCategory;
    const requiredEnvelope = findEnvelopeByCategory(envelopes, category);
    res.status(200).send(requiredEnvelope);
})

//Update a specific envelope
envelopesRouter.put('/:envelopeCategory', (req, res, next) => {
    const category = req.params.envelopeCategory;
    let specificEnvelope = findEnvelopeByCategory(envelopes, category);
    const updatedEnvelope = updateSpecificEnvelope(specificEnvelope, req.query.budget)
    res.status(200).send(`${category} Envelope has been updated successfully`)
})

//Transfer budgets from different envelopes
envelopesRouter.post('/transfer/:from/:to', (req, res, next) => {
    const transferFrom = req.params.from;
    console.log(transferFrom)
    const transferTo = req.params.to;
    console.log(transferTo)
    const envelope1 = findEnvelopeByCategory(envelopes, transferFrom)
    const envelope2 = findEnvelopeByCategory(envelopes, transferTo)
    const test = transferBudget(envelope1, envelope2);
    res.status(200).send(`Transfering budget operation done`)
})


//delete a specific envelope
envelopesRouter.delete('/:deletedEnvelove', (req, res, next) => {
    const deletedEnveloveCategory = req.params.deletedEnvelove;
    const envelopeToDeleteCategory= findEnvelopeByCategory(envelopes, deletedEnveloveCategory);
    if(envelopeToDeleteCategory) {
        const index = envelopes.findIndex((ele) => ele.category == envelopeToDeleteCategory)
        envelopes.splice(index, 1)
        res.status(204).send(`${deletedEnveloveCategory} envelope has been deleted successfully`);
    } else {
        res.status(500);
    }
})

module.exports = envelopesRouter;