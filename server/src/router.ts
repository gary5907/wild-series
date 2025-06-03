import express from "express";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Item-related routes
import itemActions from "./modules/item/itemActions";
router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

// Program-related routes
import programActions from "./modules/program/programAction";
router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

// Category-related routes (ajout manquant)
import categoryActions from "./modules/category/categoryActions";
router.get("/api/categories", categoryActions.browse);
router.get("/api/categories/:id", categoryActions.read);

/* ************************************************************************* */
// Welcome route
import sayActions from "./modules/say/sayActions";
router.get("/", sayActions.sayWelcome);

/* ************************************************************************* */

export default router;
