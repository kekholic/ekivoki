import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ModalSettings from '../ModalSettings/ModalSettings';
import style from './GameStart.module.css';

export default function GameStart() {
  const navigate = useNavigate();
  const [modalActivate, setModalActivate] = useState(false);
  const submitHandler = (path:string) => {
    setModalActivate(true);
    return navigate(path);
  };

  return (
    <div className={style.gameContainer}>
      <button type="submit" onClick={() => submitHandler('new')} className={style.gameItem}>
        <svg className={style.gameSvg} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 54">
          <path opacity="0.2" d="M53.466 22.529a.44.44 0 00.176-.5c-1.016-4.004-2.875-7.543-5.786-10.915-.03-.058-.058-.118-.09-.177a.428.428 0 00-.265-.226c-1.783-1.999-3.94-3.94-6.522-5.89-2.8-2.112-5.237-3.402-8.15-4.308C31.712.163 30.54 0 29.15 0c-.887 0-1.747.063-2.66.128-.91.067-1.85.134-2.811.134L20.51 1.35C12.79 3.626 3.9 10.22 1.833 18.428v.013l-.026.096-.04.043a.39.39 0 00-.117.221c-.518 3.123-.39 6.873.355 10.286l.157.717c.382 1.764.744 3.431 1.264 5.153.396 1.3 1.008 2.415 1.656 3.597a33.02 33.02 0 011.077 2.073c.067.143.165.22.301.23l.096.01.059.078c2.149 2.818 5.11 4.972 7.973 7.053.526.383 1.05.764 1.564 1.147 2.621 1.945 5.59 4.152 10.711 4.174h.058c2.192 0 6.234-.45 7.813-1.262 3.995-2.06 8.153-4.338 11.205-7.56 5.746-6.068 8.523-14.219 7.527-21.968z" fill="#fff" />
          <path d="M26.861 53.664c-5.119-.02-8.09-2.227-10.71-4.175-.517-.382-1.04-.763-1.565-1.146-2.864-2.082-5.824-4.235-7.974-7.053l-.058-.079-.096-.009c-.136-.01-.234-.087-.301-.23a32.497 32.497 0 00-1.077-2.073c-.648-1.182-1.263-2.3-1.656-3.597-.52-1.722-.882-3.39-1.264-5.154l-.157-.716c-.744-3.414-.873-7.163-.355-10.286a.397.397 0 01.116-.222l.043-.042.026-.096v-.014C3.9 10.566 12.79 3.972 20.511 1.695a.55.55 0 01.152-.025c.26 0 .411.228.44.44.03.205-.044.455-.34.543C13.497 4.795 4.72 11.28 2.774 19.079a.462.462 0 01-.124.215l-.063.065.002.12c-.567 3.461-.033 7.068.483 10.558l.016.114c.456 3.105 1.702 5.697 3.023 8.441.187.39.375.782.56 1.175l.02.04.034.03c.07.058.09.076.103.096 1.946 2.926 4.888 5.08 7.732 7.163.387.282.769.565 1.147.844 1.362 1.014 6.182 4.363 10.925 4.894.438.049.891.074 1.354.074 4.162 0 7.947-1.99 8.105-2.075 4.261-2.27 7.347-4.527 9.167-6.707 5.872-7.04 8.34-14.584 7.139-21.815a.514.514 0 01.111-.427.628.628 0 01.459-.215c.145 0 .328.058.375.334 1.33 8.007-1.437 16.544-7.402 22.84-3.052 3.223-7.208 5.501-11.205 7.559-1.58.812-5.62 1.262-7.813 1.262h-.06z" fill="#fff" />
          <path d="M26.92 54h-.061c-5.228-.022-8.245-2.263-10.908-4.24-.489-.362-.985-.723-1.48-1.085l-.081-.059c-2.871-2.088-5.838-4.244-8.014-7.082-.23-.036-.416-.184-.526-.417-.332-.718-.706-1.397-1.065-2.052-.657-1.198-1.278-2.328-1.683-3.663-.525-1.741-.887-3.413-1.27-5.182l-.157-.716C.922 26.05.79 22.255 1.317 19.09a.72.72 0 01.186-.378l.004-.023c2.098-8.327 11.1-15.016 18.908-17.317a.867.867 0 01.248-.038c.458 0 .722.376.773.728.052.353-.107.772-.576.91C13.68 5.09 5.015 11.485 3.1 19.16a.77.77 0 01-.176.33v.012l-.005.03c-.558 3.41-.029 6.99.483 10.453l.018.114c.449 3.054 1.684 5.621 2.991 8.341.186.385.371.77.554 1.157a.615.615 0 01.141.148c1.915 2.877 4.83 5.012 7.65 7.076l.176.13.972.714c1.348 1 6.104 4.31 10.763 4.83.426.048.869.072 1.318.072 4.086 0 7.793-1.952 7.95-2.035 4.222-2.247 7.271-4.476 9.066-6.625 5.806-6.962 8.248-14.414 7.064-21.544a.856.856 0 01.186-.698.955.955 0 01.715-.334c.37 0 .64.235.706.616 1.347 8.11-1.453 16.755-7.49 23.126-3.085 3.259-7.272 5.556-11.294 7.629C33.26 53.537 29.142 54 26.92 54zM2.17 18.804v.002l-.062.253-.107.105c-.016.013-.018.02-.02.038-.512 3.08-.384 6.785.353 10.158l.156.717c.38 1.755.74 3.414 1.258 5.126.384 1.267.99 2.368 1.629 3.535.348.636.744 1.354 1.086 2.093a.11.11 0 00.024.04l.246.018.15.197C9 43.864 11.94 46.002 14.785 48.07l.083.06c.498.363.996.726 1.486 1.088 2.58 1.917 5.502 4.088 10.51 4.108h.057c2.203 0 6.185-.465 7.661-1.227 3.97-2.045 8.1-4.309 11.113-7.492 5.892-6.218 8.627-14.651 7.315-22.553a.235.235 0 00-.015-.054c0 .003-.012 0-.03 0a.285.285 0 00-.2.094c-.036.043-.047.092-.038.157 1.22 7.329-1.274 14.967-7.21 22.085-1.85 2.216-4.967 4.5-9.268 6.79-.16.087-4.013 2.113-8.264 2.115-.472 0-.94-.024-1.392-.076-4.826-.54-9.706-3.93-11.086-4.958-.32-.238-.644-.475-.968-.714l-.176-.13C11.5 45.267 8.543 43.1 6.56 40.135c-.011-.012-.03-.025-.054-.045l-.089-.08-.05-.104c-.185-.392-.372-.783-.56-1.17-1.332-2.77-2.587-5.384-3.052-8.538l-.016-.114c-.518-3.502-1.054-7.123-.484-10.631l-.005-.23.161-.164a.126.126 0 00.04-.065c1.975-7.918 10.86-14.495 18.22-16.664.043-.013.12-.035.103-.17-.005-.031-.038-.152-.11-.152a.3.3 0 00-.058.009C12.996 4.26 4.231 10.745 2.171 18.804z" fill="#fff" />
          <path d="M53.108 22.99c-.131 0-.364-.045-.44-.345-2.08-8.184-7.692-13.1-13.264-17.434-1.993-1.549-4.31-2.643-7.514-3.543-.958-.271-1.91-.394-2.998-.394-.86 0-1.676.076-2.54.159-.858.08-1.745.163-2.672.163-.383 0-.485-.311-.485-.495 0-.183.102-.494.485-.494.962 0 1.9-.068 2.81-.135.914-.067 1.774-.127 2.661-.127 1.39 0 2.558.163 3.68.512 2.913.907 5.35 2.196 8.15 4.31 7.094 5.354 11 10.662 12.661 17.207a.447.447 0 01-.071.4.596.596 0 01-.462.216z" fill="#fff" />
          <path d="M53.108 23.326a.761.761 0 01-.764-.598c-2.053-8.081-7.618-12.952-13.143-17.25-1.958-1.523-4.241-2.597-7.4-3.486a10.416 10.416 0 00-2.907-.383c-.842 0-1.649.077-2.502.157-.87.083-1.763.166-2.71.166-.539 0-.82-.419-.82-.83 0-.413.281-.831.82-.831.956 0 1.888-.067 2.788-.134.918-.068 1.783-.13 2.686-.13 1.425 0 2.625.168 3.78.526 2.951.92 5.418 2.225 8.253 4.363 7.158 5.401 11.102 10.767 12.784 17.393a.78.78 0 01-.132.69.947.947 0 01-.733.347zM28.892.94c1.12 0 2.1.13 3.088.408 3.246.91 5.598 2.021 7.63 3.6 5.616 4.369 11.276 9.327 13.382 17.614.016.063.032.092.117.092a.276.276 0 00.198-.085c.011-.016.032-.038.011-.112C51.676 15.99 47.81 10.74 40.78 5.435c-2.768-2.088-5.177-3.362-8.047-4.258C31.644.84 30.507.681 29.15.681c-.878 0-1.732.062-2.636.127-.912.067-1.855.134-2.835.134-.045 0-.15 0-.15.16 0 .158.105.158.15.158.913 0 1.791-.083 2.64-.163.876-.08 1.698-.157 2.572-.157zm-2.404 27.968a13.5 13.5 0 01-.675-.015c-2.232-.105-4.343-1.214-6.385-2.284-.539-.282-1.068-.56-1.59-.814-2.81-1.366-5.582-3.314-7.608-5.344a.427.427 0 01-.11-.497c.083-.201.288-.349.487-.349.116 0 .224.05.322.145 3.394 3.4 10.371 8.191 15.25 8.191.117 0 .23-.002.345-.009 4.788-.223 10.755-2.65 15.963-6.49a.419.419 0 01.246-.093c.165 0 .33.148.4.358.029.09.103.403-.188.616-2.683 1.983-9.66 6.585-16.457 6.585z" fill="#fff" />
          <path d="M26.488 29.244c-.235 0-.467-.004-.69-.015-2.306-.108-4.449-1.234-6.522-2.322l-.043-.022c-.534-.28-1.036-.544-1.539-.788-2.842-1.384-5.648-3.354-7.7-5.409a.763.763 0 01-.182-.861.893.893 0 01.797-.556c.206 0 .398.085.559.244 3.354 3.36 10.23 8.093 15.014 8.093.112 0 .221-.003.328-.007 4.723-.222 10.624-2.623 15.78-6.424a.746.746 0 01.445-.16c.313 0 .603.238.717.59.099.297.067.716-.306.99-2.712 1.998-9.761 6.647-16.658 6.647zm-5.836-2.377c1.676.853 3.398 1.607 5.175 1.69.212.009.435.016.659.016 6.698 0 13.602-4.558 16.26-6.517.03-.022.119-.087.067-.242a.224.224 0 00-.087-.125c-.002.002-.018.009-.042.027-5.26 3.877-11.296 6.326-16.147 6.554-1.765.079-3.811-.479-5.885-1.403zm-10.045-6.924c-.056 0-.143.058-.176.141-.018.043-.023.072.038.13 1.984 1.988 4.696 3.897 7.453 5.247-2.847-1.647-5.5-3.738-7.232-5.47-.047-.048-.074-.048-.083-.048zm35.169.228c-.181 0-.373-.14-.46-.335a.477.477 0 01.087-.538c1.68-1.88 2.784-5.148 1.521-7.501a.459.459 0 010-.472.585.585 0 01.478-.28c.157 0 .284.083.367.24 1.506 2.811.293 6.52-1.685 8.732a.418.418 0 01-.308.154z" fill="#fff" />
          <path d="M45.776 20.507c-.31 0-.626-.22-.767-.535a.817.817 0 01.146-.898c1.604-1.795 2.667-4.9 1.474-7.118a.795.795 0 01.01-.804.926.926 0 01.763-.443c.28 0 .52.152.664.419 1.58 2.946.326 6.816-1.732 9.113a.743.743 0 01-.558.266zm1.626-9.129a.257.257 0 00-.19.117c-.022.036-.029.074.007.14 1.336 2.49.19 5.922-1.566 7.885-.045.05-.067.098-.031.177.04.09.123.136.154.136.009 0 .031-.013.06-.044 1.9-2.125 3.072-5.675 1.638-8.35-.034-.06-.058-.06-.072-.06zm-39.344 6.64a.434.434 0 01-.32-.15c-2.004-2.08-2.699-5.762-.536-7.927a.45.45 0 01.322-.145c.199 0 .404.145.487.349.051.125.074.311-.11.497-1.751 1.755-1.139 4.79.532 6.523.195.2.148.405.103.51-.085.197-.286.343-.478.343z" fill="#fff" />
          <path d="M8.058 18.354a.767.767 0 01-.559-.253c-2.115-2.194-2.833-6.093-.531-8.4a.78.78 0 01.558-.243c.335 0 .661.228.798.557.125.305.06.62-.183.862-1.611 1.616-1.024 4.434.536 6.053.237.244.3.573.17.875-.139.323-.463.549-.79.549zm-.534-8.222c-.01 0-.038 0-.083.047-2.024 2.025-1.354 5.49.54 7.456.032.031.057.047.08.047.046 0 .13-.054.169-.139.024-.056.013-.094-.036-.145-1.78-1.847-2.417-5.097-.527-6.993.06-.06.054-.092.038-.13-.038-.085-.125-.143-.181-.143zm16.263 43.006c-.262 0-.47-.22-.519-.432-.03-.136-.018-.322.228-.443 3.839-1.885 2.241-9.872 1.383-14.161-.098-.492-.187-.933-.254-1.305-.932-5.115-3.73-8.213-7.644-11.293-.145-.115-.192-.247-.14-.392a.603.603 0 01.547-.374c.118 0 .23.04.33.119 2.798 2.2 4.891 3.989 6.364 6.986 1.074 2.183 1.535 4.61 1.981 6.955.099.522.2 1.043.304 1.56.514 2.528.51 5.709.434 8.487-.05 1.873-1.037 3.375-2.78 4.233a.475.475 0 01-.234.06z" fill="#fff" />
          <path d="M23.787 53.474c-.443 0-.767-.356-.845-.692-.08-.351.072-.656.407-.821 3.608-1.773 2.042-9.592 1.202-13.794-.1-.502-.188-.94-.255-1.312-.911-5.01-3.666-8.056-7.52-11.09-.26-.203-.351-.483-.25-.767a.94.94 0 01.864-.598.86.86 0 01.539.193c2.83 2.225 4.95 4.038 6.457 7.1 1.094 2.223 1.559 4.672 2.01 7.04l.007.032c.096.51.194 1.018.297 1.526.523 2.563.516 5.767.44 8.563-.053 2.003-1.106 3.61-2.965 4.526a.871.871 0 01-.388.094zm-.195-.873s0 .011.005.029c.015.07.098.172.192.172a.209.209 0 00.09-.024c1.624-.8 2.544-2.198 2.591-3.94.074-2.758.08-5.914-.427-8.41a168.65 168.65 0 01-.3-1.536l-.006-.029c-.442-2.324-.9-4.728-1.955-6.868-1.443-2.934-3.51-4.698-6.269-6.87a.188.188 0 00-.123-.047.28.28 0 00-.228.139.311.311 0 00.03.027c3.974 3.127 6.814 6.279 7.765 11.497.067.367.155.804.25 1.29.879 4.39 2.51 12.54-1.561 14.539-.042.015-.054.03-.054.03z" fill="#fff" />
          <path d="M26.336 45.102c-.183 0-.494-.1-.494-.47v-.202c.519-4.063 1.383-8.36 4.243-12.43 1.15-1.637 2.54-2.89 4.01-4.215a79.14 79.14 0 001.223-1.115l.243-.229c1.35-1.262 2.746-2.567 4.466-3.257a.495.495 0 01.179-.038c.217 0 .333.202.364.372.043.217-.02.512-.328.636-3.655 1.464-7.063 5.652-9.551 8.707l-.282.348c-2.574 3.158-3.155 7.814-3.58 11.214l-.002.206c.003.374-.308.473-.491.473z" fill="#fff" />
          <path d="M26.336 45.438c-.411 0-.829-.278-.829-.806l.002-.244c.523-4.101 1.406-8.462 4.301-12.583 1.173-1.668 2.576-2.933 4.06-4.269a99.81 99.81 0 001.22-1.11l.243-.228c1.374-1.285 2.793-2.61 4.57-3.325.464-.186.902.088.998.582.071.37-.067.824-.532 1.012-3.575 1.433-6.95 5.58-9.415 8.61l-.281.346c-2.51 3.078-3.084 7.667-3.504 11.025l-.002.186c-.002.528-.42.804-.831.804zm-.159-.985v.179c0 .04 0 .134.159.134s.159-.094.159-.134l.004-.249c.429-3.443 1.019-8.152 3.65-11.385l.282-.347c2.512-3.087 5.95-7.313 9.686-8.809.14-.055.138-.188.123-.261a.206.206 0 00-.047-.103c.004.004-.014.004-.045.018-1.66.667-3.032 1.95-4.36 3.19l-.245.23c-.404.376-.809.743-1.213 1.106-1.472 1.327-2.849 2.565-3.977 4.17-2.802 3.994-3.666 8.252-4.176 12.26zm16.665-9.577c-.11-.866-1.097-1.5-1.885-1.206-.492.181-.983.61-1.374.947-1.017.873-1.7 2.332-1.995 3.613-.22.94-.068 1.714.853 2.102.657.277 1.526-.088 2.288-.468 1.246-.914 1.966-2.514 2.109-3.739l.002-.053c.103-.448.114-.864.002-1.196zM7.624 23.272c-.623-.36-1.465-.441-2.008.103-.983.982-.436 2.507.13 3.541.656 1.198 1.369 2.375 2.529 3.156 1.045.703 2.11-.107 2.265-1.222.215-1.547-.987-5.149-2.916-5.578zm23.279-11.314c-.83-1.003-2.154-1.388-3.414-1.424a.975.975 0 00-.313-.009c-.076.003-.156-.008-.228-.006a5.063 5.063 0 00-1.202.23c-.596.103-1.184.238-1.794.58-1.233.692-1.64 2.142-.849 3.351 1.638 2.507 5.943 1.93 7.844.18.74-.679.523-2.215-.044-2.902zm16.846 12.455c-1.698.287-2.905 1.462-3.854 2.834-.874 1.267-1.283 3.672.824 3.942 1.926.247 3.22-1.3 4.174-2.789.444-.694.614-1.52.578-2.348-.056-1.401-1.36-1.7-1.722-1.639zM36.98 43.557c-.583-1.146-2.176-.703-2.958-.087l-.043.04a.796.796 0 00-.255.139c-1.099.913-1.88 1.657-2.176 3.138-.24 1.212.46 2.102 1.631 2.326 1.182.229 2.382-.92 3.097-1.721.804-.898 1.265-2.74.704-3.835zm-15.25-.246c-.504-1.55-1.625-3.318-3.258-3.613-.298-.054-1.332.334-1.35.36-.127.027-1.736 1.572-.071 4.448.766 1.323 2.129 2.98 3.83 2.65 1.73-.335 1.208-2.735.848-3.845z" fill="#fff" />
        </svg>
        <span className={style.gameText}>Создать игру</span>
      </button>
      <button type="submit" onClick={() => submitHandler('list')} className={style.gameItem}>
        <svg className={style.gameSvg} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74 58">
          <path opacity="0.2" d="M37.505 35.34a.312.312 0 00.126-.355c-.724-2.846-2.046-5.361-4.117-7.757l-.064-.126a.304.304 0 00-.19-.16c-1.267-1.42-2.801-2.8-4.639-4.185-1.991-1.502-3.726-2.418-5.798-3.063-.798-.248-1.63-.364-2.618-.364-.631 0-1.243.045-1.893.09a26.38 26.38 0 01-2 .096l-2.254.772C8.563 21.906 2.24 26.592.77 32.423v.01l-.02.068-.03.03a.277.277 0 00-.082.158c-.369 2.22-.278 4.883.253 7.31l.11.508c.273 1.254.53 2.439.9 3.662.282.924.717 1.717 1.178 2.556.261.473.53.961.766 1.473.048.102.118.156.215.164l.068.007.042.055c1.529 2.003 3.635 3.533 5.673 5.013.373.272.747.542 1.112.814 1.865 1.382 3.977 2.95 7.62 2.967h.042c1.56 0 4.434-.32 5.558-.897 2.842-1.464 5.8-3.083 7.972-5.372 4.09-4.311 6.065-10.103 5.358-15.61zm2.397-7.105c-.054.099-.048.21.022.32.876 1.39 2.256 2.407 3.59 3.39.298.22.597.44.886.661 2.028 1.554 4.047 3.043 6.438 4.201 2.29 1.11 4.442 1.672 6.396 1.672 1.62 0 3.15-.386 4.565-1.15.005.04.016.078.032.116a28.353 28.353 0 002.597-1.72l.337-.327c.311-.304.628-.61.958-.923 1.096-1.032 2.61-2.629 3.58-4.018 1.68-2.403 2.906-4.76 3.64-6.996.61-2.604.966-5.098 1.057-7.396-.078-1.117-.273-2.103-.598-3.018-.66-1.864-1.86-3.22-3.128-4.656a41.201 41.201 0 01-1.337-1.567l-.01-.013c-.13-.163-.26-.33-.385-.5a.412.412 0 00-.093-.091c-1.874-2.21-4.463-3.942-7.572-5.048-1.845-.657-3.702-.99-5.517-.99-2.163 0-4.365.475-6.546 1.41-.135.058-.175.147-.176.226-1.3.675-2.979 1.732-4.31 3.196a.33.33 0 00-.171-.054.305.305 0 00-.227.113c-.286.313-.577.623-.868.934-1.383 1.47-2.804 2.984-3.607 4.851-.08.027-.165.09-.202.232-.225.879-.636 1.726-1.031 2.544-.266.547-.54 1.112-.749 1.673-.509 1.353-.755 2.713-.8 4.415-.073 2.726 1.16 6.046 2.93 7.891.07.073.299.622.299.622z" fill="#fff" />
          <path d="M37.596 35.422a.549.549 0 00.093-.49c-.73-2.874-2.063-5.416-4.148-7.833-.018-.033-.034-.068-.051-.102a.56.56 0 00-.263-.252c-1.27-1.416-2.803-2.792-4.633-4.171-2.015-1.52-3.772-2.447-5.872-3.1-.821-.257-1.675-.374-2.689-.374a25.9 25.9 0 00-1.91.092c-.641.046-1.302.095-1.984.095-.383 0-.584.298-.584.59 0 .293.2.59.584.59.672 0 1.31-.06 1.928-.117.607-.057 1.18-.111 1.78-.111a7.38 7.38 0 012.068.272c2.248.63 3.872 1.393 5.264 2.476 1.902 1.477 3.807 3.05 5.435 4.928.595 1.545-.133 3.544-1.198 4.734a.581.581 0 00-.104.638c.1.224.324.38.545.38a.525.525 0 00.398-.19c.892-.996 1.569-2.406 1.71-3.83a17.175 17.175 0 012.403 5.007.612.612 0 00-.036.33c.844 5.069-.894 10.362-5.026 15.31-1.277 1.527-3.446 3.11-6.45 4.708-.112.059-2.749 1.446-5.656 1.446a8.643 8.643 0 01-1.651-.16c.66-.645 1.023-1.494 1.05-2.477.026-.93.038-1.922.008-2.902a.645.645 0 00.01-.099l.001-.132c.3-2.384.71-5.645 2.493-7.834l.202-.248c1.314-1.613 2.993-3.673 4.82-5.031a29.618 29.618 0 002.022-1.168 31.64 31.64 0 001.831-1.245.613.613 0 00.218-.705c-.082-.25-.287-.419-.51-.419a.531.531 0 00-.316.113c-.642.473-1.3.915-1.968 1.324a6.979 6.979 0 00-1.076.627c-2.82 1.555-5.726 2.5-8.185 2.616a5.627 5.627 0 01-.233.005c-1.642 0-3.63-.784-5.517-1.861-.116-.092-.234-.186-.355-.28a.618.618 0 00-.338-.132c-1.762-1.087-3.38-2.383-4.473-3.477a.558.558 0 00-.398-.174.637.637 0 00-.567.395.538.538 0 00.13.612c1.264 1.265 2.931 2.485 4.67 3.428a.577.577 0 00.156.183c2.742 2.156 4.702 4.32 5.35 7.88.048.266.111.581.181.933.237 1.183.555 2.77.694 4.334l-.012.085-.001.173a.59.59 0 00.052.25c.129 2.093-.122 4.056-1.39 4.848-2.518-.83-4.745-2.386-5.494-2.941l-.658-.483-.159-.117c-2.006-1.466-4.082-2.984-5.444-5.028a.511.511 0 00-.1-.105c-.13-.275-.262-.549-.394-.822-.93-1.933-1.81-3.758-2.129-5.927l-.012-.081c-.364-2.46-.741-5.005-.344-7.429l.003-.02v-.009a.583.583 0 00.126-.235c.33-1.322.944-2.591 1.756-3.776a5.092 5.092 0 001.374 3.023c.113.118.25.18.397.18.232 0 .463-.16.56-.39a.556.556 0 00-.121-.621c-1.11-1.15-1.528-3.152-.382-4.302a.57.57 0 00.156-.262c2.542-2.544 5.899-4.473 8.897-5.355.332-.098.445-.396.41-.647-.037-.248-.224-.517-.55-.517a.626.626 0 00-.177.027C8.258 21.708 1.853 26.461.361 32.38l-.003.016a.523.523 0 00-.132.269c-.373 2.247-.281 4.945.254 7.4l.112.509c.272 1.256.529 2.443.904 3.679.288.95.73 1.753 1.197 2.602.258.468.523.952.758 1.459a.49.49 0 00.374.296c1.546 2.015 3.657 3.549 5.701 5.033l.078.057c.347.253.693.504 1.035.757 1.893 1.405 4.04 2.997 7.76 3.013h.043c1.581 0 4.51-.33 5.668-.924 2.861-1.473 5.838-3.105 8.035-5.421 4.109-4.332 6.107-10.143 5.435-15.685.008-.01.012-.012.016-.017zm-19.456 4.45c1.688 0 3.389-.39 4.973-.962-.952.86-1.85 1.702-2.61 2.783-1.2 1.703-1.912 3.466-2.371 5.217l-.053-.272-.004-.024c-.321-1.681-.652-3.421-1.43-5.001a10.443 10.443 0 00-1.65-2.428c.856.363 1.737.632 2.652.675.16.008.326.013.493.013z" fill="#fff" />
          <path d="M28.434 43.018c-.35.128-.7.434-.978.672-.723.62-1.21 1.658-1.42 2.568-.155.668-.047 1.218.608 1.493.467.198 1.085-.061 1.627-.332.887-.649 1.4-1.786 1.5-2.656l.002-.039c.074-.32.082-.614.002-.85-.08-.615-.78-1.065-1.341-.856zM4.72 35.629c-.444-.256-1.043-.314-1.43.073-.699.698-.31 1.781.093 2.516.467.851.974 1.688 1.8 2.243.743.5 1.501-.076 1.611-.868.153-1.101-.703-3.659-2.074-3.964zm16.593-5.979c.526-.481.37-1.574-.032-2.062-.59-.713-1.532-.987-2.429-1.012a.695.695 0 00-.223-.006c-.054.001-.11-.007-.162-.005-.25.013-.553.07-.855.164-.424.073-.842.168-1.275.412-.877.491-1.166 1.522-.604 2.381 1.164 1.785 4.227 1.373 5.58.129zm9.799 11.604c1.37.175 2.29-.925 2.97-1.982.315-.494.436-1.08.41-1.67-.04-.995-.969-1.206-1.226-1.164-1.208.204-2.067 1.04-2.742 2.014-.622.902-.911 2.61.588 2.802zM23.5 49.983l-.03.029a.564.564 0 00-.182.099c-.782.649-1.338 1.177-1.548 2.23-.171.86.328 1.493 1.16 1.652.841.163 1.695-.653 2.204-1.223.572-.64.9-1.948.5-2.726-.415-.815-1.548-.5-2.104-.06zM14.15 52.6c1.232-.239.859-1.944.604-2.731-.357-1.101-1.155-2.358-2.317-2.568-.212-.038-.948.237-.96.256-.09.02-1.235 1.117-.051 3.161.545.939 1.515 2.116 2.724 1.882zM65.4 12.936c1.61-.664 1.983-2.736.872-3.953-.898-.982-2.003-.923-3.054-.532a.416.416 0 00-.281.018c-1.586.663-2.802 1.885-1.896 3.663.791 1.555 3.023 1.356 4.358.804zm-21.666-1.658c-.534.51-.89.862-1.105 1.583-.217.727.31 1.495.732 2.023.904 1.134 2.637.83 3.66.123.978-.675 1.485-2.377.703-3.355-1-1.253-2.605-1.424-3.728-.5a.478.478 0 00-.262.126zm14.063-5.811a.445.445 0 00-.496 0c-.546.336-1.02.614-1.458 1.098-.394.433-.688 1.514-.377 2.06.833 1.463 2.58 2.042 4.087 1.285 1.32-.658 2.515-2.556 1.275-3.806-.867-.877-2.002-.974-3.032-.637zm-4.623-2.909c-.346.008-.728.151-1.093.339a.471.471 0 00-.506-.02c-1.11.608-1.99 2.566-.88 3.596 1.072.997 2.767.776 3.981.17 1.215-.606 1.703-2.526.74-3.516-.51-.525-1.574-.583-2.242-.57zM58.742 17.4c-.691-.359-1.565-.373-2.304-.204-.608.138-1.011.36-1.366.674a.496.496 0 00-.269.113c-1.308 1.098-1.355 3.062.117 4.01 1.295.837 3.665.543 4.542-.848.78-1.239.649-3.04-.72-3.746zm-9.054 1.78c1.515.457 2.965-.09 3.866-1.356.92-1.297.23-3.368-1.373-3.738-1.526-.352-3.486.28-3.912 1.958a.479.479 0 00.02.294c-.285 1.157.088 2.445 1.4 2.841zm13.96 8.393c.348-.567.794-1.525.656-2.206a.456.456 0 00-.143-.23c-.363-.185-1.206.53-1.737 1.199-.446.712-1.696 2.515-1.014 2.666 1.018.12 2.095-1.195 2.238-1.429zm6.399-11.483c-.407.48-.707 1.113-.936 1.686-.23.578-.671 1.227-.243 1.8.557.524 1.764-1.421 1.98-1.763.426-.829.862-1.7.388-2.312-.379-.175-.874.287-1.19.589zm-3.467 8.45c-.376.487-.707.862-.979 1.406-.22.44-.7 1.207-.464 1.73.505.763 2.08-1.455 2.168-1.598.313-.504.663-1.362.57-1.77-.15-.452-.93-.277-1.295.232zm-2.418 6.617c-.033-.014-.061-.014-.09-.017-.192.06-.378.132-.54.232-.194.12-.193.122-.37.266-.014.038-.201.22-.207.259l-.137.188c-.336.437-.688.889-.954 1.374-.189.347-.392.841-.059 1.176.023.02.048.027.072.044.397.32 1.265-.51 1.756-.97.388-.468.738-.988.887-1.488.12-.413.067-.868-.358-1.064zm5.712-8.203c-.267.32-.4.647-.64 1.013-.215.584-.573 1.328-.46 1.783.101.404.183.425.645.196.126-.06.232-.15.35-.22.065-.078.127-.155.184-.229l.076-.097a6.93 6.93 0 00.35-.618c.16-.328.512-.816.652-1.537.144-.6-.539-1.125-1.157-.291zm-26.246 6.983c.386.306 1.306.65 1.74.236.634-.605-.447-1.54-.84-1.959-.652-.698-1.45-1.396-2.426-1.547-.245-.039-.448.015-.574.235-.17.296-.013 1.362 2.1 3.035zm7.607 3.203c-.172.028-.31.198-.356.354-.056.194-.01 1.005.358 1.473.248.315.988.73 1.66.988.678.26 1.34.78 2.075.458.172-.075.235-.274.253-.44.08-.79-1.016-1.41-1.563-1.814-.643-.476-1.583-1.161-2.427-1.02zm1.162-5.117c-.67-.454-1.723-1.358-2.492-.588-.118.118-.221.45-.23.625-.012.293.277.713.41.951.452.83 4.162 3.716 4.29 1.477.023-.427-.412-.904-.65-1.203a5.746 5.746 0 00-1.328-1.262zm-9.172-4.182c-.144-.528-.66-1.103-1.05-1.449-.558-.494-.986-.76-1.736-1.27-.141-.096-.432-.206-.598-.263-.08-.108-.271-.073-.451-.067a1.427 1.427 0 00-.358.05.512.512 0 00-.356.356c-.116.466.064.795.387 1.132.538.564 1.063 1.058 1.708 1.499.534.364 1.016.67 1.644.845.478.133.94-.363.81-.832z" fill="#fff" />
          <path d="M73.994 16.101c-.08-1.139-.28-2.146-.61-3.08-.676-1.905-1.89-3.28-3.175-4.735a39.398 39.398 0 01-1.323-1.55l-.015-.02a23.773 23.773 0 01-.382-.493.637.637 0 00-.116-.12c-1.9-2.233-4.519-3.984-7.66-5.1C58.843.336 56.96 0 55.118 0c-2.195 0-4.43.48-6.64 1.428-.24.104-.36.32-.31.565.053.263.308.533.642.533a.654.654 0 00.252-.052c1.84-.79 3.85-1.19 5.97-1.19 4.736 0 9.313 2.009 12.25 5.375.021.116.07.213.144.296 2.017 2.192 2.475 4.196 1.505 6.922-.022.037-.043.073-.067.11a.589.589 0 00-.094.315c-.066.169-.138.339-.214.512-.235.53-.574 1.021-.906 1.473l-.029.051c-.422 1.028-1.144 2.493-2.176 3.633l-.062.069v.063c-1.666 2.506-5.461 4.505-7.973 4.803-.618.073-1.244.11-1.864.11a16.58 16.58 0 01-4.84-.74 2.043 2.043 0 00-.115-.057.625.625 0 00-.268-.063c-1.824-.594-3.672-1.503-5.573-2.732a.566.566 0 00-.31-.099c-.286 0-.485.234-.548.45a.586.586 0 00.25.678c2.005 1.298 3.986 2.246 5.974 2.862 3.739 1.805 6.722 5.473 7.617 9.383.03.124.092.226.188.304-.008.227-.024.7-.03.938v.02c-.017.478-.03.94-.05 1.379a.609.609 0 00.017.168c-.274.026-.551.04-.83.04-1.927 0-4.052-.595-6.69-1.87-1.064-.516-2.004-1.21-2.918-1.886-.53-.39-1.08-.796-1.651-1.165-1.755-1.135-4.21-2.835-5.26-4.5a.568.568 0 00-.493-.28l-.016.001a.662.662 0 00.16-.224.568.568 0 00-.121-.632c-2.038-2.123-2.693-5.58-2.625-8.106.035-1.312.466-2.502.97-3.646.189 1.161.664 2.273 1.348 3.562a.534.534 0 00.478.302.665.665 0 00.55-.318.574.574 0 00.008-.582c-1.427-2.69-1.599-5.005-.54-7.286.717-1.545 1.937-2.81 3.121-4.037.338-.35.687-.711 1.015-1.072a.582.582 0 00.11-.643.639.639 0 00-.559-.388.542.542 0 00-.403.19c-.28.306-.566.61-.852.915l-.015.015c-1.38 1.466-2.797 2.974-3.619 4.844a.565.565 0 00-.245.345c-.22.855-.623 1.69-1.015 2.499-.267.55-.544 1.12-.759 1.692-.518 1.376-.769 2.762-.815 4.492-.075 2.786 1.186 6.176 2.996 8.064a.553.553 0 00.391.181.536.536 0 00-.099.72c.9 1.429 2.3 2.46 3.65 3.456l.03.022c.288.213.576.423.854.638 2.038 1.56 4.067 3.059 6.479 4.226 2.322 1.125 4.51 1.696 6.5 1.696a9.722 9.722 0 004.43-1.05l.052.121.235-.14a28.05 28.05 0 002.62-1.734l.394-.38c.298-.291.602-.587.921-.886 1.102-1.039 2.63-2.65 3.612-4.055 1.693-2.42 2.928-4.796 3.67-7.058l.006-.02c.614-2.617.972-5.12 1.064-7.443v-.013l-.003-.013zm-2.188 7.044c-.675 1.95-1.726 3.794-2.746 5.582l-.364.64c-.502.883-1.297 1.696-2.068 2.485-.477.487-.927.948-1.321 1.43-.307.377-.668.775-1.133 1.252l-.012.013c-.015.018-.027.037-.042.06a.23.23 0 01-.03.042l-.112.094-.08.068-.015.013a25 25 0 01-1.205 1.108l-.008-.006-.129-.087-.132.08a9.295 9.295 0 01-2.026.954l-.02.008c-.43.182-.875.326-1.328.434.017-.401.03-.826.043-1.268l.001-.046c.115-3.754.27-8.894 3.082-11.34a.582.582 0 00.17-.245c1.884-1.128 3.575-2.687 4.389-4.217.351-.425.593-.944.828-1.45.129-.276.262-.562.412-.826.257-.455.547-.893.826-1.314l.016-.023c.518-.782 1.006-1.524 1.351-2.41.215-.342.415-.579.894-.742a.779.779 0 01.496-.004l.04.01c.47.068.84.37 1.01.803.035.142.067.287.096.43l.003.033.003.007c.288 1.522.204 3.152.072 4.743-.053 1.196-.363 2.397-.951 3.671l-.01.018zm-.187-10.931a4.318 4.318 0 00-.204-.005c-.273 0-.527.032-.76.092a6.232 6.232 0 00.03-1.583c.341.431.672.875.977 1.341.036.057.07.116.105.174a1.433 1.433 0 00-.148-.02zM59.86 25.587c-1.18 1.987-1.581 4.481-1.762 6.46-1.003-2.322-2.63-4.422-4.607-6.008.728.087 1.46.13 2.195.13.768 0 1.556-.047 2.343-.14a8.833 8.833 0 001.831-.442z" fill="#fff" />
        </svg>
        <span className={style.gameText}>Присоединиться к игре</span>
      </button>
      <button type="submit" onClick={() => submitHandler('achievements')} className={style.gameItem}>
        <svg className={style.gameSvg} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 54">
          <path d="M44.941 23.457c-.217-1.32-.456-2.664-.905-3.932a17.712 17.712 0 00-2.008-3.302 15.484 15.484 0 00-2.952-2.526c-2.054-1.362-4.315-2.401-6.656-3.16-2.104-.682-4.357-1.287-6.592-1.162.02.19 0 .383-.064.556.003.013.009.027.013.04.055.192.083.386.09.579.003.01.009.02.012.032.238.112.43.295.561.516a13.03 13.03 0 012.868.028c.816.1 1.613.263 2.39.506a15.765 15.765 0 017.165 3.912c1.485 1.044 2.75 2.344 3.558 4.053.911 1.925 1.44 4.159 1.324 6.317a15.508 15.508 0 01-.692 5.83c-.177.889-.444 1.75-.858 2.558-.453.879-1.057 1.661-1.742 2.379a15.779 15.779 0 01-10.625 6c-1.491.296-2.967.225-4.46-.112a15.674 15.674 0 01-5.612-2.105 17.625 17.625 0 01-1.674-.982c-1.573-1.052-2.588-2.318-3.357-3.943a15.72 15.72 0 01-2.521-8.55c0-.148.007-.293.011-.441-.091-1.833.18-3.658 1.037-5.417.86-1.764 1.624-3.962 3.128-5.292.432-.383.92-.756 1.442-1.085a1.491 1.491 0 01-.073-.341l-.017-.019a6.554 6.554 0 01-.633-.896 1.538 1.538 0 01-.525-.014 17.946 17.946 0 00-4.365 5.527c-3.217 6.346-2.033 14.002 2.353 19.508a14.171 14.171 0 003.33 3c2.265 1.439 4.82 2.495 7.483 2.874 1.389.197 2.811.258 4.24.234 5.794-.528 10.788-3.862 13.613-8.631 1.082-2.657 2.232-5.39 2.206-8.226-.012-1.456-.257-2.883-.493-4.313z" fill="#fff" />
          <path d="M55.272 25.484c-.206.067-.415.131-.622.19a2.696 2.696 0 01-.653.606c.061.23.097.466.097.713 0 .973-.467 1.858-1.095 2.737a4.32 4.32 0 01-1.516 1.957c-.612.807-1.177 1.657-1.498 2.622-.444 1.333-.385 2.74-.328 4.1.065 1.553.126 3.018-.614 4.025-.526.718-1.508.893-2.645 1.098-1.109.2-2.366.425-3.378 1.247a9.025 9.025 0 00-.456.401 19.12 19.12 0 00-.92 1.552c-.77 1.486-1.651 2.733-3.186 3.517-.027.013-.053.024-.08.038-.658.689-1.362 1.235-2.183 1.505-.947.314-1.991.173-3.094-.095-2.172.101-4.247-.66-6.385-.91-.852.149-1.673.413-2.476.674-1.377.45-2.677.874-3.805.533-1.07-.324-1.815-1.083-2.556-2.017a5.623 5.623 0 01-.586-.448c-.822-.715-1.426-1.638-2.157-2.44-.701-.77-1.475-1.102-2.546-1.58a15.742 15.742 0 01-.825-.395 85.904 85.904 0 00-.672-.204c-1.493-.445-2.902-.868-3.642-1.81-.793-1.01-.71-2.424-.612-4.06.066-1.126.133-2.283-.09-3.417-.38-1.569-1.808-2.497-2.729-3.748-.583-.794-.901-1.682-1.3-2.571-.35-.78-.822-1.401-.822-2.313 0-1.256.527-1.676 1.308-2.527.852-.929 1.472-2.057 1.914-3.234.618-1.648.903-3.399 1.184-5.134l.43-2.652c.114-.7.084-1.747.457-2.367.677-1.127 2.55-1.392 3.702-1.628 1.31-.27 2.667-.55 3.775-1.338 1.136-.805 1.921-1.975 2.68-3.106.902-1.343 1.754-2.61 3.037-3.003.204-.063.415-.09.635-.09.892 0 1.9.461 2.956.943 1.27.58 2.584 1.18 4.02 1.18 1.442 0 2.762-.596 4.04-1.17 1.329-.6 2.586-1.166 3.632-.844 1.404.43 2.185 1.719 3.138 2.737a38.977 38.977 0 002.128 2.107c.506.462 1.189 1.34 1.791 1.639.837.414 1.72.68 2.581.938 1.495.447 2.786.833 3.576 1.886.724.965.585 2.527.439 4.181-.029.314-.055.63-.078.948.038.284.072.57.105.853a2.715 2.715 0 011.163.087c.04-.042.084-.08.126-.118.124-.226.234-.458.337-.696a1.92 1.92 0 01.192-.335c.015-.189.03-.379.047-.573.171-1.938.348-3.944-.814-5.493-1.23-1.64-3.273-2.229-5.163-2.721-2.128-.556-3.488-2.045-4.817-3.727C39.065 2.021 37.449.171 35.27.011c-1.8-.131-3.393.908-4.998 1.548-2.068.822-3.538.46-5.512-.44-1.577-.721-3.21-1.465-4.932-.942-1.375.419-2.174 1.172-2.716 2.465-1.179 2.809-3.733 4.345-6.606 4.938-1.24.255-2.796.5-3.795 1.321-.989.815-1.405 2.275-1.534 3.495-.16 1.518.028 3.058-.145 4.575-.224 1.953-1.082 3.82-2.38 5.29-.585.661-1.416 1.135-1.87 1.883-.49.817-.782 1.91-.782 2.851 0 2.183 1.373 3.818 2.702 5.4.856 1.018 1.665 1.98 2.022 2.997.291.822.304 1.755.262 2.743.147.797.115 1.61-.053 2.447-.015.075-.03.147-.047.22.026 1.229.25 2.428 1.074 3.478.662.843 1.556 1.373 2.531 1.77.685.172 1.38.272 2.064.453a6.527 6.527 0 012.109.961c.33.147.639.31.909.5.852.606 1.506 1.47 2.197 2.386 1.068 1.417 2.175 2.885 4.12 3.473.3.091.598.145.893.177l.015-.004c1.41-.337 2.765-.915 4.193-1.168a8.386 8.386 0 011.841-.122 5.89 5.89 0 011.17-.13c1.105 0 2.214.31 3.389.638 1.635.457 3.322.927 5.028.5.293-.099.582-.203.866-.306.049-.017.097-.038.146-.057.753-.35 1.41-.845 2.006-1.42a34.158 34.158 0 011.566-1.8c.247-.324.49-.651.73-.978.82-1.112 1.595-2.163 2.49-2.888.633-.514 1.547-.677 2.517-.852 1.343-.242 2.866-.516 3.842-1.845.38-.52.624-1.075.776-1.653l.004-.025c.456-2.794-.816-5.853.924-8.39C53.724 31.405 56 29.785 56 27c0-.499-.084-.96-.219-1.393-.17-.038-.34-.078-.51-.122z" fill="#fff" />
          <path d="M39.924 22.496c-.33-.853-.776-1.551-1.287-2.208-.265.069-.531.132-.8.195a2.39 2.39 0 01-.315.485c1.305 2.02 1.968 4.47 1.67 6.781a11.246 11.246 0 01-.5 2.152 11.16 11.16 0 01-1.282 2.941 10.997 10.997 0 01-6.481 4.844c-.886.312-1.794.5-2.756.45-1.202-.06-2.57-.024-3.735-.359-1.124-.324-2.345-1.009-3.332-1.635-.785-.498-1.394-1.231-1.919-1.99-1.227-1.778-2.109-3.961-2.398-6.099-.266-1.975.087-4.434 1.346-6.109a11.015 11.015 0 017.333-5.744 11.087 11.087 0 012.528-.293c1.792 0 3.524.442 5.067 1.237a9.763 9.763 0 01.734.345c.087-.103.184-.198.29-.286.02-.285.048-.573.054-.87 0-.04.007-.076.011-.116l-.09-.053c-1.06-.603-2.148-1.313-3.33-1.65a5.036 5.036 0 00-.501-.118c-.816-.15-1.653-.095-2.478-.01-1.438.149-2.345.096-3.75.429-.634.15-1.847.56-2.418.883a12.925 12.925 0 00-4.617 4.448 12.899 12.899 0 00-1.938 7.435 115.9 115.9 0 00.983 4.024c.082.314.158.634.251.948 1.42 3.022 4.117 4.94 7.092 6.28 1.17.528 2.398.988 3.678 1.142 1.28.154 2.678-.04 3.925-.33a12.906 12.906 0 008.071-5.8 12.99 12.99 0 001.39-3.066c.208-.681.345-1.374.417-2.073.215-2.1-.152-4.244-.913-6.21z" fill="#fff" />
          <path d="M31.878 26.687c.255-.162.485-.293.55-.339.97-.681 1.873-1.452 2.799-2.189.207-.163.076-.496-.188-.475l-1.223.102c-.704.16-1.417.263-2.142.295-.72.033-1.624.295-2.328.096a.834.834 0 00-.036-.012c-.74-.23-1.116-.993-1.51-1.602-.412-.64-.79-1.287-1.076-1.987l-.283-.392a.288.288 0 00-.521.15l-.288 4.465-4.78.82a.38.38 0 00-.027.143c.01.32.41.443.639.57.37.21.732.44 1.097.66.842.506 1.687 1.01 2.537 1.503l-.458 4.008-.018.156-.157 1.372c-.035.292.33.45.519.225l1.582-1.879c.044-.059.088-.12.13-.18.138-.204.292-.375.463-.524l1.286-1.524 1.78.584c.333.01.666.093 1.035.248.431.18.873.336 1.304.513a.323.323 0 00.352-.468l-.336-.641c-.683-.86-1.054-1.919-1.505-2.912-.083-.183.39-.523.803-.786z" fill="#fff" />
          <path opacity="0.2" d="M54.956 27.188c0-3.064-3.682-4.614-4.62-7.36-.926-2.712.902-6.627-.783-8.873-1.697-2.26-5.038-1.974-7.347-3.608-2.308-1.633-3.583-5.19-6.348-6.04-2.514-.772-5.184 1.972-7.951 1.972-2.744 0-5.392-2.75-7.887-1.99-2.797.852-3.657 4.588-5.99 6.242-2.148 1.523-5.809.91-7.429 2.979-1.866 2.383-.453 6.389-1.441 9.316-.917 2.72-4.302 4.33-4.302 7.36 0 3.155 3.678 5.262 4.67 8.079.99 2.805-.713 6.32 1.086 8.616 1.617 2.063 5.274 1.977 7.414 3.496 2.346 1.665 3.225 4.872 6.042 5.723 2.48.75 5.11-1.287 7.835-1.287 2.969 0 5.825 1.96 8.497 1.078 3.13-1.036 4.618-5.147 7.124-7.18 1.807-1.465 4.812-.64 6.19-2.52 1.651-2.247.18-5.688 1.077-8.389.898-2.683 4.163-4.628 4.163-7.614zM27.909 43.942c-9.247 0-16.742-7.5-16.742-16.754 0-9.254 7.495-16.754 16.742-16.754 9.246 0 16.741 7.5 16.741 16.754 0 9.253-7.495 16.754-16.741 16.754z" fill="#fff" />
          <path opacity="0.2" d="M39.622 24.441c-1.516-6.475-7.988-10.492-14.456-8.977-6.47 1.516-10.484 7.993-8.97 14.466 1.513 6.473 7.987 10.492 14.455 8.977 6.47-1.514 10.487-7.991 8.97-14.466zm-4.485-.09l-4.18 3.312 1.868 3.553a.327.327 0 01-.39.463l-4.081-1.342-3.462 4.107c-.188.225-.553.067-.519-.224l.634-5.537-4.382-2.493a.2.2 0 01.064-.37l4.854-.833.287-4.465a.288.288 0 01.521-.15l2.87 3.983 5.728-.481c.265-.02.396.314.188.478z" fill="#fff" />
        </svg>
        <span className={style.gameText}>Достижения</span>
      </button>
      <button type="submit" onClick={() => submitHandler('kypi')} className={style.gameItem}>
        <svg className={style.gameSvg} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 55">
          <path d="M16.561 14.306a6.85 6.85 0 01.287-.032c.032-1.377.042-2.752.01-4.13-.032-1.415-.113-2.85.105-4.255.214-1.373 1.21-1.18 2.39-.921l1.346.136a7.9 7.9 0 01.504.007c1.177.06 2.32.31 3.506.327.245.004.461.056.645.141l5.816.595.197-1.914-15.54-1.602c-.229.06-.457.124-.678.205a.754.754 0 01-.083.103c-.094.092-.192.18-.297.26l-.051.125-.013.023-.354 11.475a12.012 12.012 0 012.21-.543zm17.532 35.03l-14.129-.768c-1.337-.072-2.704-.198-4.035-.211v-.007c.047-.588-.211-1.202-.233-1.8a60.337 60.337 0 01-.019-2.981c.024-1.94.107-3.877.19-5.814l.626-14.481c-.807-.002-1.613-.028-2.399-.148l-.807 26.276.038.096c.056.131.113.261.175.39.022.043.05.083.075.124l.007.002c.053.017.106.034.158.053l.108.045 28.605 1.604.107-1.92c.005.002-7.978-.434-8.467-.46z" fill="#fff" />
          <path d="M35.987 49.614L5.402 51.67l-.087-.992a.625.625 0 01-.195-.38c-.307-1.904-.269-3.826-.348-5.74l-.235-2.664c-.013-.086-.023-.17-.038-.255-.464-2.743-.667-5.508-.859-8.282-.188-2.724-.581-5.435-.626-8.166a54.106 54.106 0 01-.008-.588l-.654-7.388-.02-.075a.729.729 0 01-.016-.336l-.304-3.42 4.413-.728c.535-.148 1.07-.306 1.62-.455 1.53-.42 6.412-.866 6.412-.866l-.109 3.51a12.465 12.465 0 011.94-.495l.162-5.295L.767 11.64a5.87 5.87 0 00-.767.783l3.631 41.05c.133.079.274.151.421.22l32.123-2.325-.188-1.753z" fill="#fff" />
          <path d="M16.015 23.27a14.175 14.175 0 01-1.919-.144l-.35 11.39 1.922.06.347-11.306zm39.146 9.363c-.841 2.65-1.583 5.333-2.313 8.026-.462 1.702-.893 3.472-1.733 5.012-.01.021-.021.043-.027.066l-1.438 4.824c-.158.443-2.254.158-2.53.096-3.573-.801-7.268-1.041-10.776-2.136-3.36-1.048-11.34-3.15-11.34-3.15-.637-.175-.548-1.266-.483-2.448.258-4.685 1.544-9.31 3.048-13.773.243-.72 5.394-24.781 5.394-24.781a.37.37 0 01.448-.287c.346.086 5.231.982 6.938 1.433 1.946.513 3.907.962 5.851 1.486 4.14 1.118 8.431 1.6 12.528 2.874.287.088 2.01.943 2.329 1.022a.366.366 0 01.263.464c-.408 1.36-.814 2.705-1.068 4.093l-.013.077a58.803 58.803 0 01-1.25 5.427c.729.07 1.455.15 2.183.229.746-2.117 1.605-4.213 2.237-6.355.09-.3.177-.599.267-.898.18-.603.359-1.209.54-1.812l.782-2.625c.01-.272-.021-.505-.16-.702-.015-.021-.032-.04-.047-.06-.171-.214-1.188-.293-1.44-.355-1.002-.248-1.971-.586-2.973-.795a443.802 443.802 0 01-7.304-1.587c-7.292-1.65-14.41-3.706-21.65-5.491L31.1.427a.368.368 0 00-.45.287l-1.31 6.503c-.78 3.866-1.203 7.79-1.993 11.665-.887 4.351-2.094 8.615-2.967 12.952l-2.083 10.338-.908 4.506a.37.37 0 00.273.432l29.599 7.296a.368.368 0 00.442-.255l2.552-8.576c.658-2.207 1.235-4.457 1.976-6.638.616-1.811 1.06-3.682 1.487-5.555a21.22 21.22 0 01-2.557-.749z" fill="#fff" />
          <path opacity="0.2" d="M63.315 10.942L31.884 3.195l-.615 3.056L15.66 4.643l-.203 6.588L.978 13.61l3.548 40.115 31.525-2.12-.258-.194 6.718.377-.013-.054 8.08 1.991 12.737-42.784zM14.765 33.64l-.06 1.937.06-1.938z" fill="#fff" />
        </svg>
        <span className={style.gameText}>Дополнительные наборы карт</span>
      </button>
      <ModalSettings active={modalActivate} setActive={setModalActivate}>
        <Outlet />
      </ModalSettings>
    </div>
  );
}
