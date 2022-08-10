import React from 'react';
import './Button.module.css';

interface Props {
  children: string;
}

export default function Button(props: Props) {
  return (
    <button type="submit">{props.children}</button>
  );
}
