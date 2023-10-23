const express = require('express');
const envelopesRouter = express.Router();

let envelopeIdCounter = 1

let envelopes = [];

envelopesRouter.post('/', (req, res, next) => {
    const newEnvelope = {
        id: envelopeIdCounter++,
        budget: `${req.query.budget}$`,
        title: req.query.title
    }
    envelopes.push(newEnvelope);
    res.status(201).send('New envelope successfully created');
    next();
})

envelopesRouter.get('/', (req, res, next) => {
    res.status(200).json(envelopes);
})


module.exports = envelopesRouter;