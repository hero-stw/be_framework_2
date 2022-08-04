import History from "../models/playingHistory";

export const addHistory = async (req, res) => {
    try {
      const history = await new History(req.body).save();
      res.status(201).json(history);
    } catch (error) {
      res.status(400).json({ message: "Add new History failed!" });
    }
};

export const getHistory = async (req, res) => {
    try {
      const history = await History.find({}).exec();
      res.status(200).json(history);
    } catch (err) {
      res.status(400).json({ message: "Can not find any record" });
    }
  };