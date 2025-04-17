
import React from 'react';

const ArticlesTab = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of UI Design",
      preview: "Exploring upcoming trends in user interface design...",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mastering Figma Auto Layout",
      preview: "A comprehensive guide to using Figma's auto layout feature...",
      date: "March 10, 2024",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Design Systems in 2024",
      preview: "Best practices for creating and maintaining design systems...",
      date: "March 5, 2024",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Articles</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-medium">{article.title}</h3>
            <p className="text-gray-600 mt-2">{article.preview}</p>
            <div className="flex gap-4 mt-2 text-sm text-gray-500">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesTab;