
/**
 * Timer to render time remaining in game.
 */
const Timer = ({ secondsRemaining }) => (
  <div>
    {secondsRemaining}
  </div>
);

Timer.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
};

export default Timer;
