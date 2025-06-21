// const aiService = require("../services/ai.service")

// module.exports.getReview = async (req , res) =>{
//   const code = req.body.code;

//   if(!code){
//     return res.status(400).send("Prompt is required");
//   }

//   const response = await aiService(code);
//   res.send(response);
// }


const aiService = require("../services/ai.service")

module.exports.getReview = async (req, res) => {
  try {
    const { code } = req.body;

    if(!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    const response = await aiService(code);
    res.json(response);
    
  } catch (error) {
    console.error("Review error:", error);
    res.status(500).json({ error: "AI processing failed" });
  }
}
