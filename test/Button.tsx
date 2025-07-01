import React, { useState } from 'react';

interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  const [test, setTest] = useState<string>('gogog');
  return (<>
    <button>{label}</button>
    {test}
  </>);
}