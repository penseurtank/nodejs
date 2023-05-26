const asyncHandler = require("express-async-handler");
const contactForm = require("../model/contactModel");
/**
 * @desc Get all contacts
 * @route GET /api/contacts
 * @access public
 */

const getContacts = asyncHandler(async(req, res) => {
  const contacts = await contactForm.find();
  //res.status(200).json({ message: "Get all constacts." });
  res.status(200).json(contacts);
});

/**
 * @desc Create new contacts
 * @route POST /api/contacts
 * @access public
 */

const createContact = asyncHandler(async(req, res) => {
  console.log("The request body is:",req.body);
    const {name, email, phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const createContact = await contactForm.create({
        name,
        email,
        phone,
    })
  res.status(201).json(createContact);
});

/**
 * @desc Get contact
 * @route GET /api/contacts/:id
 * @access public
 */
const getContact = asyncHandler(async(req, res) => {
    const findContactById = await contactForm.findById(req.params.id);
    if(!findContactById){
        res.status(404);
        throw new Error("Contact not found");
    }
  //res.status(200).json({ message: `Get contact for ${req.params.id}` });
  res.status(200).json(findContactById);
});

/**
 * @desc Update contact
 * @route PUT /api/contacts/:id
 * @access public
 */
const updateContact = asyncHandler(async(req, res) => {
    const updateContactById = await contactForm.findById(req.params.id);
    if(!updateContactById){
        res.status(404);
        throw new Error("Contact not found");
    }
const updatedContactById = await contactForm.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
);
  //res.status(200).json({ message: `Update contact for ${req.params.id}` });
  res.status(200).json(updatedContactById);
});

/**
 * @desc Delete contact
 * @route DELETE /api/contacts/:id
 * @access public
 */
const deleteContact = asyncHandler(async(req, res) => {
        const deleteContactById = await contactForm.findById(req.params.id);
        if(!deleteContactById){
            res.status(404);
            throw new Error("Contact not found");
        }
        await contactForm.deleteOne({_id: deleteContactById._id});
        console.log("one record deleted successfully.....")
        // res.status(200).json({ message: `Delete contact for ${req.params.id}` });
        res.status(200).json(deleteContactById);

}) ;

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
