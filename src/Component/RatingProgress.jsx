import PropTypes from 'prop-types';
export const RatingProgress = ({ value }) => {
      return (
            <div className="flex-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${value}%` }}></div>
            </div>
      );
};

RatingProgress.propTypes = {
      value: PropTypes.string,
};

