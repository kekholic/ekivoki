import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  publicRoutes?: Array<Object>;
  privateRoutes?: Array<Object>;
}

export default function ErrorPage(props: IProps): any {
  const navigate = useNavigate();
  const { publicRoutes, privateRoutes } = props;

  const [fiveHundred, setfiveHundred] = useState(false);

  useEffect(() => {
    const findInPublic = publicRoutes?.find((el: any) => el.path === window.location.pathname);
    const findInPrivate = privateRoutes?.find((el: any) => el.path === window.location.pathname);
    console.log(findInPublic);
    if (findInPublic) {
      alert('Вы уже авторизованы!');
      navigate('/personal');
    } else if (findInPrivate) {
      alert('У вас нет доступа к этой странице!');
      navigate('/login');
    }
    setfiveHundred(true);
  });
  return (

    fiveHundred
      ? <div> 500: Страница не существует</div>
      : <div />

  );
}
