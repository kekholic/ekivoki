import React, { ReactElement } from 'react'

type Props = {}

export default function Auth({ }: Props): ReactElement {
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log('submit')
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="mail">Mail:      </label>
      <input type='text' name='mail' /> <br />
      <label htmlFor="password">Password: </label>
      <input type='password' name='password' /> <br />
      <button type='submit'>Submit</button>
    </form>
  )
}

// const Auth: FC = () => {
//   return (
//     <div> Auth </div>
//   )
// }
// export default Auth;