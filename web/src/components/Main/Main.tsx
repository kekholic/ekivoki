/* eslint-disable no-empty-pattern */
import React from 'react';
import { useAppDispatch } from '../../store/store';

type Props = {};

export default function Main({}: Props) {
  const dispatch = useAppDispatch();
  return <div>Main</div>;
}
