import React from 'react';

const Controls = ({ feedbacks, onClickFeedback }) => {
	return (
		<>
			{feedbacks.map((feedback, index) => (
				<button key={index} type="button" name={feedback} onClick={onClickFeedback}>
					{feedback}
				</button>
			))}
		</>
	);
};

export default Controls;