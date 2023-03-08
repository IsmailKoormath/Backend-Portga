import express from "express";

import {
  createProperty,
  deleteproperty,
  getAllProperties,
  getPropertyDetail,
  updateProperty,
} from "../controllers/property.controller.js";

const router = express.Router()

router.route('/').get(getAllProperties)
router.route('/:id').get(getPropertyDetail)
router.route('/').post(createProperty)
router.route('/:id').patch(updateProperty)
router.route('/:id').delete(deleteproperty)

export default router
