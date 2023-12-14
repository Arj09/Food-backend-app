const express  = require("express")
const { deleteFood, updateFood, getFood, getFoods, createFood } = require("../controller/foodController")
const router = express.Router()



router.route("/").get(getFoods).post(createFood)
router.route("/:id").get(getFood).put(updateFood).delete(deleteFood)


module.exports = router