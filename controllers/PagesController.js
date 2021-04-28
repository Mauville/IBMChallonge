exports.answers = (req, res) => {
    let data = {
      decision: req.body.decision,
      phoneNum: req.body.phoneNum,
      confirmationNum: req.body.confirmationNum,
    };
    // Log Response to PBB
    // PBB.init(apikey)
    // PBB.log(voteDecision, System.Date)

    // Log Resposne to GodsEye
    // GodsEye.init(apikey)
    // GodsEye.log(voteDecision, System.Date)

    // Send SMS
    // SMS.send(data.confirmationNum, data.phoneNum)

    // Deposit Vote
    // knex.store(voteDecision)

    res.send({confirmatedNum:data.confirmationNum, response:"OK"});
  }
