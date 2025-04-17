import PropTypes from 'prop-types';
const Progress = ({ value, color }) => {
      color ? color : color = "#15411F";
      return (
            <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div
                        className="h-full rounded-full"
                        style={{
                              width: `${value}%`,
                              backgroundColor: color
                        }}
                  ></div>
            </div>
      );
};

Progress.propTypes = {
      value: PropTypes.any,
      color: PropTypes.any,
};

export default Progress;