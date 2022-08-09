import React, { FC, ReactElement, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


interface IProps {
  publicRoutes?: Array<Object>;
}


export default function PersonalPage(props: IProps): ReactElement {
  const [publicRoutes, setpublicRoutes] = useState(props.publicRoutes)
  console.log(window.location.pathname)
  console.log(publicRoutes)
  // console.log(publicRoutes)
  return (
    <div></div>
  )
}

