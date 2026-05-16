const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contacts");
//week 1
router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getSingle);
//week 2
router.post("/", contactsController.createContact);
router.put("/:id", contactsController.updateContact);
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
