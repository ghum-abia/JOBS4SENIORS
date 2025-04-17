import { useState } from "react";
import { BsFilePlus } from "react-icons/bs";

const TextboxComponent = () => {
  const [showInput, setShowInput] = useState(false);
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setSubmittedText([...submittedText, text]); // Add text to the list
      setText(""); // Clear input
      setShowInput(false); // Hide input after submission
    }
  };

  return (
    <div className="px-4 py-2"   >
      {/* Button to show input field */}


      <div className='flex items-center border-b border-gray-200 py-1 cursor-pointer  justify-between'>
                            <div className='font-normal text-[12px] text-[#181818]'>FOLLOWED HASHTAGS</div>


          {!showInput && (
            <button
              onClick={() => setShowInput(true)}
            
            >


              <div ><BsFilePlus color="black" size={19} /></div>
            </button>
          )}
      </div>

      {/* Input field (shown when button is clicked) */}
      {showInput && (
        <form onSubmit={handleSubmit} className="my-2 flex items-center space-x-2">
          <input
            type="text"
            value={text} autoFocus
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            className="border border-gray-300 p-2 rounded-md w-full outline-none"
          />
          <button type="submit" className="bg-[#15411F] text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      )}

      {/* Display submitted text */}
      <div className="flex flex-wrap gap-2 mt-2">        {submittedText.map((item, index) => (
          <span key={index} className="bg-green-100 text-gray-800 text-xs px-2 py-1 rounded">#{item}</span>
        ))}
      </div>
    </div>
  );
};


export default TextboxComponent;
