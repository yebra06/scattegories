import { getRandomQuestions } from './utils/questions';
import Questions from './components/Questions';
import Header from './components/Header';

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

    this.setState({
      questions: getRandomQuestions(numQuestions),
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
    this.setState({
      isPaused: true,
      secondsRemaining: gameTime,
      questions: getRandomQuestions(numQuestions),
      letter: letters[Math.floor(Math.random() * letters.length)],
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
            <h1 className='letter'>{letter}</h1>
          </div>
          <div className={isPaused ? 'game-section blurred' : 'game-section'}>
            <Questions questions={questions} />
          </div>
          <div className='game-section'>
            <h1 className='time'>{secondsRemaining}</h1>
          </div>
        </div>
        <div className='controls'>
          <button className='controls-btn' type='submit' onClick={this.handlePauseResume}>
            {isPaused || secondsRemaining === 0 ? 'Start' : 'Pause'}
          </button>
          <button className='controls-btn' type='submit' onClick={this.handleNewGame}>New Game</button>
        </div>
      </div>
    );
  }
}

export default App;
