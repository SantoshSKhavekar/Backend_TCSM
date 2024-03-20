const plans = [
  {
    id: 1,
    name: "Platinum365",
    cost: 499,
    validity: 365,
    status: "Expired",
  },
  { id: 2, name: "Gold180", cost: 299, validity: 180, status: "Active" },
  { id: 3, name: "Silver90", cost: 199, validity: 90, status: "Expired" },
];

const listofcustomers = [
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Street",
    selectedPlan: plans[0],
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    address: "456 Avenue",
    selectedPlan: plans[1],
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "111-222-3333",
    address: "789 Road",
    selectedPlan: plans[2],
  },
];

module.exports = {
  plans,
  listofcustomers,
};
