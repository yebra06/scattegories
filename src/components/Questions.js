/**
 * Questions section of application.
 * Responsible for rendering list of random questions.
 */
class Questions extends React.Component {
  static propTypes = {
    questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    const { questions } = this.props;
    const questionList = questions.map((q, i) => (
      <li key={q[i]}>
        {q}
      </li>
    ));

    return (
      <div className='questions'>
        <ol>
          {questionList}
        </ol>
      </div>
    );
  }
}

export default Questions;
