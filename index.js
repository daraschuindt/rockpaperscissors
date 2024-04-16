 let score = JSON.parse(localStorage.getItem('score'));

      if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      };

      updateScoreElement();

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'Scissors') {
          if (computerMove === 'rock') {
          result = 'You lost!';
        } else if (computerMove === 'paper') {
          result = 'You won!'
        } else if (computerMove === 'scissors') {
          result = 'Tie'
        }

      } else if (playerMove === 'Paper') {
          if (computerMove === 'rock') {
          result = 'You won!';
        } else if (computerMove === 'paper') {
          result = 'Tie'
        } else if (computerMove === 'scissors') {
          result = 'You lost!'
        }
        
      } else if (playerMove === 'Rock') {
          if (computerMove === 'rock') {
          result = 'Tie';
        } else if (computerMove === 'paper') {
          result = 'You lost!'
        } else if (computerMove === 'scissors') {
          result = 'You won!'
        }
      }

      if (result === 'You won!') {
          score.wins += 1;
      } else if (result === 'You lost!') {
          score.losses += 1;
      } else if (result === 'Tie') {
          score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-moves')
        .innerHTML = `You picked
        <img class="icons" src="images/${playerMove}-icon.png">
        the computer picked
        <img class="icons" src="images/${computerMove}-icon.png">.`;

      document.querySelector('.js-result')
        .innerHTML = result;
        }

      function updateScoreElement () {
        document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';
        
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }