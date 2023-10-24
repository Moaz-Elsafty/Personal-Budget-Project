const express = require('express');
const envelopesRouter = express.Router();
const { findEnvelopeById, updateSpecificEnvelope } = require('./helper')

let envelopeIdCounter = 1

let envelopes = [];

//Creaete a new envelope
envelopesRouter.post('/', (req, res, next) => {
    let newEnvelope = {
        id: envelopeIdCounter++,
        budget: `${req.query.budget}$`,
        title: req.query.title
    }
    envelopes.push(newEnvelope);
    res.status(201).send('New envelope successfully created');
})

//get an array of all envelopes
envelopesRouter.get('/', (req, res, next) => {
    res.status(200).json(envelopes);
});

//get an envelope by id
envelopesRouter.get('/:envelopeId', (req, res, next) => {
    const id = req.params.envelopeId;
    const requiredEnvelope = findEnvelopeById(envelopes, id);
    res.status(200).send(requiredEnvelope);
})

//Update a specific envelope
envelopesRouter.put('/:envelopeId', (req, res, next) => {
    const id = req.params.envelopeId;
    let specificEnvelope = findEnvelopeById(envelopes, id);
    const updatedEnvelope = updateSpecificEnvelope(specificEnvelope, req.query.budget)
    res.status(200).send(`Envelope with id: ${id} has been updated successfully`)
})


module.exports = envelopesRouter;