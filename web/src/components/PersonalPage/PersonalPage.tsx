import React, { FC } from 'react'
import { useNavigate } from "react-router-dom";

type Props = {}

const PersonalPage: FC = () => {
  console.log(window.location.href)
  return (
    <div>PersonalPage</div>
  )
}
export default PersonalPage;