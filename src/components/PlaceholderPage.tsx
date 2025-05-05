import React from 'react';

interface PlaceholderPageProps {
  title: string;
  message?: string;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ 
  title, 
  message = "This page is under construction." 
}) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default PlaceholderPage;