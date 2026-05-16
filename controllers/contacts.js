const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
//week 1
const getAll = async (req, res) => {
  const result = await mongodb.getDb().db().collection("contacts").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};
//week 2
//POST create a new contact
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .insertOne(contact);

  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(response.error || "Some error ocurred while creating the contact");
  }
};
//PUT: update a existent contact
const updateContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const response = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .replaceOne({ _id: userId }, contact);

  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error ocurred while updating the contact.");
  }
};
// DELETE: delete a contact
const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const response = await mongodb
    .getDb()
    .db()
    .collection("contacts")
    .deleteOne({ _id: userId }); // <-- Corregido: Usamos deleteOne

  console.log(response);
  if (response.deletedCount > 0) {
    // <-- Corregido: deletedCount es la propiedad real de MongoDB
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || "Some error ocurred while deleting the contact");
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
