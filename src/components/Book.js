import React from 'react';
import PropTypes from 'prop-types';

function NormalBook(props) {
	const { bookTitle } = props;
	return <div id='book_title_div'>{bookTitle}</div>;
}

function GreatBook(props) {
	const { bookTitle } = props;
	return (
		<div id='book_title_div' className='lightblue_text'>
			{bookTitle}
		</div>
	);
}

function BestBook(props) {
	const { bookTitle } = props;
	return (
		<div id='book_title_div' className='green_text'>
			{bookTitle}
		</div>
	);
}

function BookTitle(props) {
	const { bookTitle } = props;
	const { bookType } = props;
	const { bookUrl } = props;
	switch (bookType) {
		case 'normal':
			return (
				<p>
					<a className='book_a_tag' href={bookUrl}>
						<NormalBook bookTitle={bookTitle} />
					</a>
				</p>
			);
		case 'great':
			return (
				<p>
					<a className='book_a_tag lightblue_text' href={bookUrl}>
						<GreatBook bookTitle={bookTitle} />
					</a>
				</p>
			);
		case 'best':
			return (
				<p>
					<a className='book_a_tag green_text' href={bookUrl}>
						<BestBook bookTitle={bookTitle} />
					</a>
				</p>
			);
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
	constructor(props) {
		super(props);
		const { data } = this.props;
	}

	render() {
		const { data } = this.props;
		return (
			<div>
				<div className='ui container left aligned mobile-content-padding'>
					<BookTitle
						bookTitle={data.title}
						bookType={data.book_type}
						bookUrl={data.amazon_url}
					/>
				</div>
			</div>
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
