import Link from "next/link";

export default function Page() {

  return (
    <main>
      <header>
        <h2>Bike Root</h2>
      </header>
      <div>
        <h2>Login</h2>
        <label className=' text-xl'>Email:</label>
        <input type="username"/>
        <label>Password:</label>
        <input type="password"/>
        <Link href="/home"><button>Login</button></Link>
      </div>
    </main>
  );
}