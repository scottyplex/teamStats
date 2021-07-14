const team = {
    _players: [
      {
        firstName: 'Timmay',
        lastName: 'Johnson',
        age: 24
      },
      {
        firstName: 'June',
        lastName: 'Bug',
        age: 20
      },
      {
        firstName: 'Lonny',
        lastName: 'Peppers',
        age: 30
      }
    ],

    _games: [
      {
        opponent: 'Eagles',
        teamPoints: 21,
        opponentPoints: 14
      },
      {
        opponent: 'Giants',
        teamPoints: 24,
        opponentPoints: 7
      },
      {
        opponent: 'Cowboys',
        teamPoints: 28,
        opponentPoints: 17
      },
    ],

    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
  
    addPlayer (firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
  
    addGame (oppName, teamPoints, oppPoints) {
      let game = {
        opponent: oppName,
        teamPoints: teamPoints,
        opponentPoints: oppPoints
      };
      this._games.push(game);
    }
};
  
team.addPlayer('Steph', 'Curry', 28)
team.addPlayer('Lisa', 'Leslie', 44)
team.addPlayer('Bugs', 'Bunny', 76)
 
team.addGame('Ravens', 42, 28)
team.addGame('Falcons', 14, 7)
team.addGame('Dolphins', 10, 7)
  
console.log(team._players)
console.log(team._games)