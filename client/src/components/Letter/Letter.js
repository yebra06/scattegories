
/**
 * Letter component to render random letter from letter choices.
 */
const Letter = ({ letter }) => (
  <div>
    <h1>{letter}</h1>
  </div>
);

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default Letter;
