import { auth, signIn } from "@/lib/auth";
import styles from "./login.module.css";
import { handleGithubLogin } from "@/lib/action";
import LoginForm from "@/components/rating/loginForm/LoginForm";

const LoginPage = () => {
  // delete the two lines
  // const session = await auth();
  // console.log(session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

/*
<form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
      */
