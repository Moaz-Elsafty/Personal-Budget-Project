
const findEnvelopeById = (arr, id) => {
    id = Number(id);
    if (id) {
        return arr.find((ele) => ele.id === id) || `Not valid id: ${id}`
    } else {
        return "Id required"
    }
};

const updateSpecificEnvelope = (envelope, updates) => {
    return envelope.budget = updates;
}

module.exports = { findEnvelopeById , updateSpecificEnvelope };
