const friendsList = require("../data/friends");


// ROUTING

module.exports = function(app) {
 

  app.get("/api/friends", (req, res)=> {
    res.json(friendsList);
  });

    app.post("/api/friends", function(req,res){
       //holds the score of new Users
       let newUser = req.body.scores
       newUser = newUser.map(Number)
       let bestMatch = 18;
       let bestIndex = 0;

      for (let i = 0; i < friendsList.length; i++){
        let eachMatch =  friendsList[i].scores
           let match=[];
           console.log('user: ', newUser)
             console.log(friendsList[i].scores)
             
           for (let z=0; z<10; z++){
             
               let difference = Math.abs((newUser[z])-eachMatch[z]);
               match.push(difference);
             
               
             
                   let totalDiff = match.reduce((accumulator,value)=> accumulator + value);
                   console.log(totalDiff)
                   if (totalDiff < bestMatch) {
                       bestMatch = bestIndex;
                       bestIndex = i;
                   };
              
           };
           console.log(match)
           
           if (i === (friendsList.length -1)){
               res.json(friendsList[bestIndex])
               console.log(friendsList[bestIndex])
           }
    
           
       }

       friendsList.push(newUser);
       
    })
}