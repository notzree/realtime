import { useSession, signIn, signOut } from "next-auth/react"
export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="">
      Not signed in 
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}