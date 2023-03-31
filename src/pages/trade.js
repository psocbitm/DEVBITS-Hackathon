import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";

export default function Trade() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // If the user is not logged in, redirect to the login page
      router.push("/register");
    }
  }, [user, router]);

  if (!user) {
    // If the user is not logged in, don't render the component
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      <h1>Welcome to the Private Page!</h1>
      <p>This page is only accessible to authenticated users.</p>
      <p>Here user will be able to buy sell stocks</p>
    </div>
  );
}
