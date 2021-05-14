const Airtable = require("airtable");

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const table = base("Activities");

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await table.select().firstPage();
    res.send(activities);
  } catch (err) {
    res.status(err.status).send({ err });
  }
};
