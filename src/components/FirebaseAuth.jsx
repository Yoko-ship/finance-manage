import React, { use, useState } from "react";
import { Form, Link, useSearchParams, useNavigation } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "./Firebase";
import "firebaseui/dist/firebaseui.css";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../store/expensesData";

function FirebaseAuth() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isLogin = searchParams.get("mode") === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const user = useSelector((state) => state.expenses.user)
  const [error,setError] = useState("")

  const handleRegister = async () => {
    try{

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(authUser(userCredential.user))
    }catch(error){
        setError(error.message)
    }
  };
  const handleLogin = async () => {
    try{

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(authUser(userCredential.user))
    }catch(err){
        setError(err.message)
    }
  };

  const handleLogout = async () => {
    try{

        await signOut(auth);
        setUser(null)
    }catch(err){
        setError(err.message)
    }
  };

  return (
    <>
      <div className="form">
        {user ? (
          <>
            <h3>Привет,{user.email}!</h3>
            <button onClick={handleLogout}>Выйти</button>
          </>
        ) : (
          <div className="form">
            <div className="text">
              <h2>{isLogin ? "Войти в аккаунт" : "Авторизация"}</h2>
            </div>
            <label>Почта</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Пароль</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="btn">
              <Link to={isLogin ? "?mode=signup" : "?mode=login"}>
                {isLogin ? "Создать аккаунт" : "Войти в аккаунт"}
              </Link>
              <button
                disabled={isSubmitting}
                onClick={isLogin ? handleLogin : handleRegister}
              >
                {isSubmitting ? "Submitting..." : "Сохранить"}
              </button>
            </div>
            {error && <p style={{color:"red"}}>{error}</p>}
          </div>
        )}
      </div>
    </>
  );
}

export default FirebaseAuth;
