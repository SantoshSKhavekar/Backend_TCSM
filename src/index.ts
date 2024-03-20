import express from "express";
import cors from "cors";
const { listofcustomers, plans } = require("./utils/data.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/customers", async (req, res) => {
  res.json(listofcustomers);
});

app.get("/api/plans", async (req, res) => {
  res.json(plans);
});

app.post("/api/chooseplan", async (req, res) => {
  const { planName, planCost, validity, planStatus } = req.body;

  if (!planName || !planCost || !validity) {
    return res
      .status(400)
      .send("planName, planCost and validity fields required");
  }

  try {
    res.json({ message: "Successfully selected the plan" });
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }
});

app.put("/api/renewplan/:id", async (req, res) => {
  const { planName, validity, planStatus } = req.body;
  const id = parseInt(req.params.id);

  if (!validity) {
    return res.status(400).send("planName and validity fields required");
  }

  if (!id || isNaN(id)) {
    return res.status(400).send("ID must be a valid number");
  }

  try {
    const renewedPlans = plans.map((plan: any) =>
      plan.id === id ? { ...plan, validity: validity, status: "Active" } : plan
    );
    res.json({ message: `Successfully Renewed plan for id: ${id}` });
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }
});

app.put("/api/updowngrade/:id", async (req, res) => {
  const { oldPlanName, newPlanName, cost, validity, planStatus } = req.body;
  const id = parseInt(req.params.id);

  if (!oldPlanName || !newPlanName || !cost || !validity) {
    return res
      .status(400)
      .send("oldPlanName, newPlanName, cost and validity fields required");
  }

  if (!id || isNaN(id)) {
    return res.status(400).send("ID must be a valid number");
  }

  try {
    const renewedPlans = plans.map((plan: any) =>
      plan.id === id
        ? {
            ...plan,
            name: newPlanName,
            cost: cost,
            validity: validity,
            status: "Active",
          }
        : plan
    );
    res.json({
      message: `Successfully Upgraded/Downgraded plan for id: ${id}`,
    });
  } catch (error) {
    res.status(500).send("Oops, something went wrong");
  }
});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});
