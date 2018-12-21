import './Questions.scss';

/**
 * Questions section of application.
 * Responsible for rendering list of random questions.
 */
class Questions extends React.Component {
  static propTypes = {
    questions: PropTypes.arrayOf(Object).isRequired,
  }

  render() {
    const { questions } = this.props;
    const questionList = questions.map(q => (
      <li key={q._id}>
        {q.question}
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
