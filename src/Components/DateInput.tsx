import React from 'react';

const generalStyle: React.CSSProperties = {
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontSize: '1rem',
  padding: 'var(--gap-s) .75rem',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: '600',
  marginBottom: 'var(--gap-s)',
  ...generalStyle,
};

const inputStyle: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
};

type IdateInput = React.ComponentProps<'input'> & {
  label: string;
};

const DateInput = ({ label, ...props }: IdateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input
        style={inputStyle}
        id={label}
        name={label}
        type="date"
        {...props}
      />
    </div>
  );
};

export default DateInput;
