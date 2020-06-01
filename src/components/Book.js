import React from 'react';
import PropTypes from 'prop-types';

function NormalBook(props) {
  const { bookTitle, bookUrl } = props;
  return (
    <div
      style={{
        paddingTop: '0.5%',
        paddingBottom: '0.5%'
      }}
    >
      <a href={bookUrl} style={{ color: '#424241', fontWeight: '450' }}>
        {bookTitle}
      </a>
    </div>
  );
}

function GreatBook(props) {
  const { bookTitle, bookUrl } = props;
  return (
    <div style={{ paddingTop: '0.5%', paddingBottom: '0.5%' }}>
      <a href={bookUrl} style={{ color: '#424241', fontWeight: 'bold' }}>
        {bookTitle}
      </a>
    </div>
  );
}

function BestBook(props) {
  const { bookTitle, bookUrl } = props;
  return (
    <div style={{ paddingTop: '0.5%', paddingBottom: '0.5%' }}>
      <a href={bookUrl} style={{ color: '#385e94', fontWeight: 'bold' }}>
        {bookTitle}
      </a>
    </div>
  );
}

function BookTitle(props) {
  const { bookTitle } = props;
  const { bookType } = props;
  const { bookUrl } = props;
  switch (bookType) {
    case 'normal':
      return <NormalBook bookUrl={bookUrl} bookTitle={bookTitle} />;
    case 'great':
      return <GreatBook bookUrl={bookUrl} bookTitle={bookTitle} />;
    case 'best':
      return <BestBook bookUrl={bookUrl} bookTitle={bookTitle} />;
    default:
      return (
        <p>
          <a className='book_a_tag' href={bookUrl}>
            <NormalBook bookTitle={bookTitle} />
          </a>
        </p>
      );
  }
}

class Book extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <BookTitle
        bookTitle={data.title}
        bookType={data.book_type}
        bookUrl={data.amazon_url}
      />
    );
  }
}
Book.propTypes = {
  data: PropTypes.objectOf.isRequired
};

NormalBook.propTypes = {
  bookTitle: PropTypes.string.isRequired
};

GreatBook.propTypes = {
  bookTitle: PropTypes.string.isRequired
};

BestBook.propTypes = {
  bookTitle: PropTypes.string.isRequired
};

BookTitle.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookType: PropTypes.string.isRequired,
  bookUrl: PropTypes.string.isRequired
};
export default Book;
