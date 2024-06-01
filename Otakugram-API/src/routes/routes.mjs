import { Router } from "express";

const router = Router();

//add all routes as a middleware here!
router.get('/', (req, res) => {
    res.status(200).send({msg: 'Welcome to Otakugram' })
})

export default router;