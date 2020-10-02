import React from 'react';

export default function BasicForm({ className, buttonName, type, placeholder }) {
  return (
    <>
      <form>
        <input
          className={className}
          type={type}
          placeholder={placeholder}
        />
        <input
          className={className}
          type={type}
          placeholder={placeholder}
        />
        <button className='user-button'>
          {buttonName}
        </button>
      </form>
    </>
  );
}
