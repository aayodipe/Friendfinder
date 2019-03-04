const friendsList = require("../data/friends");


// ROUTING

module.exports = function(app) {
 

  app.get("/api/friends", (req, res)=> {
    res.json(friendsList);
  });

    app.post("/api/friends", function(req,res){
       //holds the score of new Users
       let newUser = req.body.scores

       //converts all new users score to number
       newUser = newUser.map(Number); 
      console.log('new: ', newUser)

      //holds existing users scores
       for(let i = 0; i < friendsList.length; i++){

         //holds all the users scores
          let allUsersScore = friendsList[i].scores
          console.log(allUsersScore)
       }
       
    })
}