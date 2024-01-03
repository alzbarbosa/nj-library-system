import { auth, signIn } from "@/lib/auth";
import styles from "./login.module.css";
import { handleGithubLogin, login } from "@/lib/action";

const LoginPage = async () => {
  // delete the two lines
  const session = await auth();
  console.log(session);

  return (
    <div className={styles.container}>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
