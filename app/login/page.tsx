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
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  return (
    <div className="flex flex-col justify-center items-center align-vertical">
        <div className="pt-36 pb-6 text-5xl font-semibold">Sign In</div>
        <div className="h-96 w-1/2 bg-chardonnay rounded-lg drop-shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="m-auto max-w-sm pt-10">
            <div>
              <label className="block">Email</label>
              <input placeholder="example@email.com.au"{...register("example")} className="block w-full rounded-lg mb-6 p-1 text-3xl ring-2 ring-dark-green"/>
            </div>
            <div>
              <label className="block">Password</label>
              <input placeholder="password" {...register("exampleRequired", { required: true })} className="block w-full rounded-lg mb-6 p-1 text-3xl ring-2 ring-dark-green"/>
              {errors.exampleRequired && <span>This field is required</span>}   
            </div>
            <input type="submit" value="Sign In" className="bg-dark-green rounded-lg w-1/2 h-10 text-white text-3xl mt-6"/>
          </form>
        </div>
    </div>
  )
}