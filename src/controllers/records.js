import Record from "../models/records";

export const getRecords = async (req, res) => {
  const type = req.query.type ? parseInt(req.query.type) : 1;
  try {
    const records = await Record.find({
      ...(type ? { questionType: type } : undefined),
    })
      .sort([{ error: "asc" }, { duration: "desc" }])
      .exec();
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

// export const updateRecord = async (req, res) => {
//   try {
//     const condition = { _id: req.params.id };
//     const update = { $set: req.body };
//     const option = { new: true };
//     const record = await Record.findOneAndUpdate(
//       condition,
//       update,
//       option
//     ).exec();
//     res.status(200).json(record);
//   } catch (error) {
//     res.status(400).json({
//       message: "Can not update record",
//     });
//   }
// };
