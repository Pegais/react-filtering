import React from 'react';

export default function Nike({ array }) {
  return (
    <div>
      {array.map((ele) => (
        <div>{ele.category}</div>
      ))}
    </div>
  );
}
