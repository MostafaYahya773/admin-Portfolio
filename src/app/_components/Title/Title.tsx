import React from 'react';

const Title = React.memo(
  ({ title, description }: { title: string; description: string }) => {
    return (
      <div className="flex flex-col gap-2 text-white">
        <h1 className="text-35 font-bold">{title}</h1>
        <p className="text-fourth-color text-16">{description}</p>
      </div>
    );
  },
);

export default Title;
