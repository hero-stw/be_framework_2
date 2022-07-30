import Setting from "../models/settings";

export const getSettings = async (req, res) => {
  try {
    const settings = await Setting.find().exec();
    res.status(200).json({ mess: "Get setting done!" });
  } catch (error) {
    res.status(400).json({ mess: "Get settings failed!" });
  }
};

export const updateSettings = async (req, res) => {
  try {
    const condition = { _id: req.params.id };
    const update = { $set: req.body };
    const option = { new: true };
    const setting = await Setting.findOneAndUpdate(
      condition,
      update,
      option
    ).exec();
    res.status(200).json(setting);
  } catch (error) {
    res.status(400).json({
      message: "Can not update settings",
    });
  }
};
