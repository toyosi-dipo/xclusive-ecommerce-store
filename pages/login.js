import Image from "next/image";
import { IconGoogleColored } from "../assets/icons";
import SingleFormInput from "../components/SingleFormInput";

function Login() {
  const signUp = true;

  return (
    <main className="mb-36 mt-14">
      <div className="mx-auto grid max-w-[2000px] items-center lg:grid-cols-2 lg:gap-6 xl:gap-32">
        {/* grid item 1 - picture */}
        <div className="hidden bg-[#CBE4E8] lg:flex">
          <Image
            src={"/images/phone-beside-cart.png"}
            width={805}
            height={600}
            alt="a standing phone"
          />
        </div>

        {/* grid item 2 - form */}
        <div className="lg:x mx-auto w-[90vw] max-w-md px-6 lg:px-0 lg:pr-6">
          <div className="">
            <h3 className="mb-6 font-medium">Create an account</h3>
            <p className="mb-12">Enter your details below</p>

            {/* login form */}
            <form className="">
              {signUp && <SingleFormInput placeholder="Name" name="username" />}
              <SingleFormInput
                placeholder={"Email"}
                type={"email"}
                name={"email"}
              />
              <SingleFormInput
                placeholder="Password"
                type="password"
                name="password"
              />
              {signUp && (
                <SingleFormInput
                  placeholder="Confirm password"
                  type="password"
                  name="matching_password"
                />
              )}

              {/* error message */}
              <small className="-mt-4 block font-semibold text-red-500"></small>

              {/* submit button */}
              <button
                type="submit"
                className="btn2 mb-4 mt-10 block w-full max-w-none rounded font-medium text-text duration-300 disabled:cursor-not-allowed disabled:bg-button2/40"
                // onClick={submitHandler}
                // disabled={isLoading ? true : false}
              >
                {signUp ? "Create Account" : "Log In"}
              </button>
              <button
                className="flex w-full items-center justify-center gap-2 rounded border p-2 duration-300 hover:bg-hoverButton1 hover:text-white xs:p-3"
                type="button"
                // onClick={() => signIn("google")}
              >
                <IconGoogleColored className="text-4xl" /> Sign in with Google
              </button>

              {/* toggle sign in & sign up */}
              <p className="mt-8 flex items-center justify-center gap-4 text-center opacity-75">
                {signUp
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <button
                  type="button"
                  className="border-b border-black duration-200 hover:text-text1"
                  // onClick={toggleSignUp}
                >
                  {signUp ? "Login In" : "Create account"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
