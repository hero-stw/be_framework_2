import Record from "../models/records";

export const getRecords = async (req, res) => {
  try {
    const records = await Record.find().exec();
    res.status(200).json(records);
  } catch (err) {
    res.status(400).json({ message: "Can not find any record" });
  }
};

export const getRecord = async (req, res) => {
  try {
    const record = await Record.findOne({ _id: req.params.id }).exec();
    res.status(200).json(record);
  } catch (err) {
    res.status(400).json({ message: "Can not find any record" });
  }
};

export const addRecord = async (req, res) => {
  try {
    const record = await new Record(req.body).save();
    res.status(201).json(record);
  } catch (error) {
    res.status(400).json({ message: "Add new record failed!" });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const record = await Record.findOneAndDelete({ _id: req.params.id }).exec();
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: "Can not delete this record!" });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const condition = { _id: req.params.id };
    const update = { $set: req.body };
    const option = { new: true };
    const record = await Record.findOneAndUpdate(
      condition,
      update,
      option
    ).exec();
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({
      message: "Can not update record",
    });
  }
};

export const getRecordsByTypeWithSort = async (req, res) => {
  try {
    const query = req.body.type;
    const records = await Record.find({ questionType: query })
      .sort({ error: -1, duration: -1 })
      .limit(10)
      .exec();

    res.status(400).json(records);
  } catch (error) {
    res.status(400).json({ message: "Can not get leaderboard!" });
  }
};
