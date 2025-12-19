import React, { useState, useRef } from 'react';
import { Image, Video, Calendar, FileText, X } from 'lucide-react';
import CustomModal from './CustomModal';

export default function CreatePostModal({ isOpen, onClose, type, onSubmit }) {
  const [content, setContent] = useState('');
  const [attachmentType, setAttachmentType] = useState(type);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() && !selectedFile) return;

    let mediaUrl = '';
    let fileName = '';
    if (selectedFile) {
      mediaUrl = URL.createObjectURL(selectedFile);
      fileName = selectedFile.name;
    }

    const post = {
      id: Date.now(),
      content,
      type: attachmentType,
      media: mediaUrl,
      fileName,
      author: {
        name: 'Udo Emmanuel',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        role: 'UX/UI Designer',
      },
      timestamp: new Date().toISOString(),
    };

    onSubmit(post);
    setContent('');
    setAttachmentType(null);
    setSelectedFile(null);
    onClose();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  const fileAcceptMap = {
    photo: 'image/*',
    video: 'video/*',
    article: '.pdf,.doc,.docx',
    event: '.ics,.pdf',
  };

  const triggerFileInput = (type) => {
    setAttachmentType(type);
    if (fileInputRef.current) {
      fileInputRef.current.accept = fileAcceptMap[type] || '';
      fileInputRef.current.click();
    }
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Create Post</h2>
        <button
          onClick={onClose}
          className="rounded-sm opacity-70 hover:opacity-100"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3 items-start">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Write something..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 h-10 rounded-md border px-3 py-2"
          />
        </div>

        {selectedFile && (
          <div className="px-4">
            <p className="text-sm text-gray-600">
              Selected {attachmentType}: {selectedFile.name}
            </p>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileSelect}
        />

        <div className="flex justify-between items-center px-4 py-2 border-t">
          <div className="flex gap-4">
            {['photo', 'video', 'event', 'article'].map((t) => {
              const icons = { photo: Image, video: Video, event: Calendar, article: FileText };
              const Icon = icons[t];
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => triggerFileInput(t)}
                  className={`flex items-center gap-2 p-2 rounded-lg ${
                    attachmentType === t ? 'bg-gray-100' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              );
            })}
          </div>
          <button
            type="submit"
            disabled={!content.trim() && !selectedFile}
            className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
          >
            Post
          </button>
        </div>
      </form>
    </CustomModal>
  );
}