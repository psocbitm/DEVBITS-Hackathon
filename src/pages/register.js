import { LockClosedIcon } from '@heroicons/react/20/solid';
import { useState, useContext } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/router';

const auth = getAuth();

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const { setUser } = useContext(UserContext);
  const router = useRouter();
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);
      router.push('/trade'); // Redirect to trade page
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        try {
          const newUserCredential = await createUserWithEmailAndPassword(auth, email, password);
          const newUser = newUserCredential.user;
          setUser(newUser);
          router.push('/trade'); // Redirect to trade page
        } catch (error) {
          setErrorMessage(error.message);
          console.error(error.code, error.message);
        }
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('The password entered is incorrect. Please try again.');
        console.error(error.code, error.message);
      } else {
        setErrorMessage(error.message);
        console.error(error.code, error.message);
      }
    }
  }
  

  return (
    <div className="flex min-h-full items-center justify-center ">
      <div className="w-full max-w-md p-8 bg-white rounded rounded-lg shadow-lg">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          SignUp / Login
          </h2>
        </div>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div >
            <div className='py-2'>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Email address"
              />
            </div>
            <div className='py-2'>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Password"
              />
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-xs italic">{errorMessage}</p>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="mr-2">
                <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              Sign up/ Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
