import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useActivateAccount from '../../../hooks/useActivateAccount';

export default function Activate() {
  const { link } = useParams();
  console.log(link);

  if (link) {
    const { isActivated, errorMsg, chekActivateLink } = useActivateAccount(link);
    
    useEffect(() => {
      chekActivateLink();
    }, []);

    if (isActivated) {
      return (
        <div>Активация прошла успешно </div>
      );
    }
    return (
      <div>
        Ошибка активации:
        {' '}
        {errorMsg}
        .
        Если ошибка повторится обратитесь в техническую поддержку.
      </div>
    );
  }

  return (
    <div>
      Отсутствует код активации, запросите его заного.
      Если ошибка повторится обратитесь в техническую поддержку.
    </div>
  );
}
