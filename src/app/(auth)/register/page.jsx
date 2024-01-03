import RegisterForm from "@/components/registerForm.jsx/registerForm";
import styles from "./register.module.css";
import { register } from "@/lib/action";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;

/*
<form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="email" placeholder="email" name="email" />
          <input type="password" placeholder="password" name="password" />
          <input
            type="password"
            placeholder="password again"
            name="passwordRepeat"
          />
          <button>Register</button>
        </form>
        */
