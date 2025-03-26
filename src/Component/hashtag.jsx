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
    <div className="p-4">
      {/* Button to show input field */}


      <div className='flex items-center p-2 cursor-pointer pb-2 justify-between'>
                            <div className='font-normal text-[12px] text-[#181818]'>FOLLOWED HASHTAGS</div>


          {!showInput && (
            <button
              onClick={() => setShowInput(true)}
            
            >


              <div className="p-3"><BsFilePlus /></div>
            </button>
          )}
      </div>

      {/* Input field (shown when button is clicked) */}
      {showInput && (
        <form onSubmit={handleSubmit} className="mt-2 flex items-center space-x-2">
          <input
            type="text"
            value={text}
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
      <div className="mt-4 grid grid-cols-3 gpa-2">
        {submittedText.map((item, index) => (
          <p key={index} className="bg-[#F0FFF3] text-[#181818] font-normal text-[12px] rounded-md">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default TextboxComponent;
