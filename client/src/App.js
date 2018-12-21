import Questions from './components/Questions/Questions';
import Header from './components/Header/Header';
import Letter from './components/Letter/Letter';
import Timer from './components/Timer/Timer';

/**
 * Main application for scattergories game.
 */
class App extends React.Component {
  state = {
    isPaused: true,
    gameTime: 120,
    secondsRemaining: 120,
    questions: [],
    numQuestions: 12,
    letters: INIT_LETTERS,
    letter: INIT_LETTERS[Math.floor(Math.random() * INIT_LETTERS.length)],
  }

  componentDidMount() {
    const { numQuestions } = this.state;

    this.timerID = setInterval(
      () => this.tick(), 1000,
    );

    fetch(`api/questions/${numQuestions}`)
      .then(res => res.json())
      .then((questions) => {
        this.setState({ questions });
      });
  }

  handlePauseResume = () => {
    this.setState(prevState => ({
      isPaused: !prevState.isPaused,
      questions: prevState.questions,
    }));
  }

  handleNewGame = () => {
    const { numQuestions, gameTime, letters } = this.state;

    fetch(`api/questions/${numQuestions}`)
      .then(res => res.json())
      .then((questions) => {
        this.setState({
          isPaused: true,
          secondsRemaining: gameTime,
          questions,
          letter: letters[Math.floor(Math.random() * letters.length)],
        });
      });
  }

  tick() {
    const { isPaused, secondsRemaining } = this.state;

    this.setState({
      secondsRemaining: !isPaused ? secondsRemaining - 1 : secondsRemaining,
    });

    if (secondsRemaining <= 1) {
      clearInterval(this.timerID);
    }
  }

  render() {
    const {
      isPaused, letter, secondsRemaining, questions,
    } = this.state;

    return (
      <div>
        <Header />
        <div className='game'>
          <div className='game-section'>
            <Letter letter={letter} />
          </div>
          <div className='game-section'>
            <Questions questions={questions} />
          </div>
          <div className='game-section'>
            <Timer
              secondsRemaining={secondsRemaining}
              isPaused={isPaused}
            />
            <button type='submit' onClick={this.handlePauseResume}>{isPaused ? 'Start' : 'Pause'}</button>
            <button type='reset' onClick={this.handleNewGame}>New Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
