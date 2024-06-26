import express from 'express';
import {getAllJobs, postJob, getmyJobs, updateJobs, deleteJob, getSinglejob} from "../controllers/jobController.js";
import {isAuthorized} from "../middlewares/auth.js";

const router = express.Router();
router.get("/getall",getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyJobs", isAuthorized, getmyJobs);
router.put("/updatejobs/:id", isAuthorized, updateJobs);
router.delete("/deletejob/:id", isAuthorized, deleteJob);
router.get("/:id", isAuthorized, getSinglejob);

export default router;