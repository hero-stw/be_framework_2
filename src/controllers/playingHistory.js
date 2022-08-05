import History from "../models/playingHistory";

export const addHistory = async (req, res) => {
    try {
      const history = await new History(req.body).save();
      res.status(201).json(history);
    } catch (error) {
      res.status(400).json({ message: "Add new History failed!" });
    }
};

export const getHistorys = async (req, res) => {
    try {
      const history = await History.find({}).exec();
      res.status(200).json(history);
    } catch (err) {
      res.status(400).json({ message: "Can not find any record" });
    }
};

export const getHistory = async (req, res) => {
    try {
      const history = await History.findOne({_id: req.params._id}).exec();
      res.status(200).json(history.total);
    } catch (err) {
      res.status(400).json({ message: "Can not find any record" });
    }
};