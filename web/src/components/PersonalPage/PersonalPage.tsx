import React, { FC, ReactElement, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


interface IProps {
  test?: boolean;
  publicRoutes?: Array<Object>;
}

export default function PersonalPage(props: IProps): ReactElement {
  console.log(props)
  // console.log(publicRoutes)
  return (
    <div>PersonalPage</div>
  )
}