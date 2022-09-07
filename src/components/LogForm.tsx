import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { loginFn } from "../lib/routes";
import ModalPassw from "./ModalPassw";

type Inputs = {
  email: string;
  password: string;
};

export const LogForm:React.FC = () => {
  const [eyeOpen, setEyeOpen] = useState<boolean>(false);
  const [userData, setUserData] = useState<object>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setUserData(data);
    console.log(data);
    // Send data to the backend:
    // const response = await loginFn(data);
    // If the response is OK -> login
    // if the response is not ok -> "email or pass isn't correct"
    // or "problem on server, try again later"
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 justify-center max-w-screen-md w-full justify-self-center self-center p-8 pt-4 pb-4"
      autoComplete="off"
    >
      <h1 className="text-center text-2xl font-semibold">Sign in</h1>

      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <div className="border-b border-gray-400">
          <input
            {...register("email", {
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              required: true,
            })}
            placeholder="Email Address"
            className="bg-oliveort text-white w-full"
            autoFocus
          />
        </div>
        {errors.email && (
          <span className="text-xs text-red-400">Invalid email</span>
        )}

      </div>
      <div>
        <div className="border-b border-gray-400 flex flex-row">
          <input
            {...register("password", { required: true })}
            type={eyeOpen ? "text" : "password"}
            placeholder="Password"
            className="bg-oliveort text-white w-full"
          />
          <div
            className="cursor-pointer text-3xl text-gray-400"
            onClick={() => setEyeOpen(!eyeOpen)}
          >
            {eyeOpen ?  <AiOutlineEye className="text-aquaorthree"/>: <AiOutlineEyeInvisible />}
          </div>
        </div>
        {errors.password && (
          <span className="text-xs text-red-400">Password is required</span>
        )}
      </div>
      {/* MODAL */}
      <ModalPassw/>
      <button
        type="submit"
        className="h-12 bg-aquaortwo text-white rounded-xl font-semibold transition hover:bg-aquaorthree"
      >
        Sign In
      </button>

      <div className="flex flex-row gap-2 justify-center items-center w-full">
        <div className="border border-gray-400 w-full"></div>
        <p className="text-xl text-gray-400">or</p>
        <div className="border border-gray-400 w-full"></div>
      </div>

      {/* Google BTN */}
      <button
        type="button"
        className="flex flex-row gap-2 items-center justify-center h-12 border border-gray-400 rounded-xl transition hover:bg-oliveortwo cursor-pointer font-semibold"
      >
        <FcGoogle className="text-2xl" />
        <p>Sign in with Google</p>
      </button>

      <div className="flex flex-row gap-2 font-semibold pt-4 justify-center">
        <p>No account?</p>
        <a
          href="https://app.ortex.com/register"
          target="_blank"
          className="text-aquaortwo transition hover:text-aquaorthree cursor-pointer"
        >
          Sign up
        </a>
      </div>
    </form>
  );
}

export default LogForm;