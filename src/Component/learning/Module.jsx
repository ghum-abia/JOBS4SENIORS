import PropTypes from 'prop-types';
export const Module = ({ moduleNo, moduleTitle, moduleStart, moduleEnd, moduleCompleted }) => {
      return (
            <div className="flex justify-between">
                  <div className="grid">
                        <h1 className={moduleCompleted ? 'text-green-400 font-bold text-lg' : 'text-grayish font-bold text-lg'}>Module {moduleNo}</h1>
                        <p className="text-sm text-gray-400 capitalize">{moduleTitle}</p>

                  </div>
                  <div className="flex gap-3">
                        <p className={moduleCompleted ? "text-green-400 font-light text-md" : "text-grayish font-light text-md"} >{moduleStart} - {moduleEnd}</p>
                        <div className="items-center">
                              <label className="flex items-center cursor-pointer relative">
                                    {moduleCompleted ? <input defaultChecked type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-grayish checked:bg-green-400 checked:border-green-400" id="check" /> : <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-grayish checked:bg-green-400 checked:border-green-400" id="check" disabled />}
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                          </svg>
                                    </span>
                              </label>
                        </div>
                  </div>
            </div>

      )
}

Module.propTypes = {
      moduleNo: PropTypes.any,
      moduleTitle: PropTypes.any,
      moduleStart: PropTypes.any,
      moduleEnd: PropTypes.any,
      moduleCompleted: PropTypes.any,
}