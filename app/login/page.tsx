"use client"
import { SubmitHandler, useForm } from "react-hook-form";

export const metadata = {
    title: 'sign in',
}

type Inputs = {
  example: string,
  exampleRequired: string,
}

export default function SigninPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center align-vertical">
        <div className="pt-36 pb-10 text-5xl font-semibold">Sign In</div>
        <div className="h-96 w-1/2 bg-chardonnay">
          <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
            <div>
              <label className="block">Your email</label>
              <input defaultValue="username" {...register("example")} className="block w-full"/>
            </div>
            <div>
              <label className="block">Your Password</label>
              <input defaultValue="password" {...register("exampleRequired", { required: true })} className="block"/>
              {errors.exampleRequired && <span>This field is required</span>}   
            </div>
            <input type="submit" />
          </form>
        </div>
    </div>
  )
}