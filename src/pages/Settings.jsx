import React from 'react'
import { Form, Link, useSearchParams,useNavigation} from 'react-router-dom'

function Settings() {
  const [searchParams] = useSearchParams()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  const isLogin = searchParams.get("mode") === "login"

  return (
    <Form className='form'>
      <div className='text'>
        <h2>{isLogin ? "Войти в аккаунт": "Авторизация"}</h2>
      </div>
      <label>Почта</label>
      <input type='email' name='email'/>
      <label>Пароль</label>
      <input type='password'/>
      <div className='btn'>
      <Link to={isLogin ? '?mode=signup': '?mode=login'}>{isLogin ? "Создать аккаунт" : "Войти в аккаунт"}</Link>
      <button disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Сохранить"}</button>
      </div>
    </Form>
  )
}

export default Settings