import React from 'react';

const CardTitle = ({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-24 text-third-color">{icon}</span>
      <h3 className="text-24 text-white font-semibold">{title}</h3>
    </div>
  );
};

export default CardTitle;
