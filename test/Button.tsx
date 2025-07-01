import React, { useState } from 'react';

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  const [test, setTest] = useState<string>('gogog1');
  return (<>
    <button>{label}</button>
    {test}
  </>);
}