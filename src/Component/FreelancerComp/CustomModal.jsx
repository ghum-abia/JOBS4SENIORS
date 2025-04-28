import React, { useEffect } from 'react';

function CustomModal  ({ isOpen, onClose, children })  {
    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
  
      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }
  
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose]);
  
    if (!isOpen) return null;
  
    return (
      <>
        <div 
          className="fixed inset-0 z-50 bg-black/80 transition-opacity animate-fade-in"
          onClick={onClose}
        />
        <div className="fixed left-[50%] top-[50%] z-50 w-[525px] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg animate-scale-in">
          {children}
        </div>
      </>
    );
  };
  
  export default CustomModal