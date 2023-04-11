import React, { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  number: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="mt-3">
            <label htmlFor="name">Name</label>
            <input
              {...register("name", { required: true, minLength: 4 })}
              type="text"
              id="name"
              className="form-current"
            />
            {errors.name?.type === "required" && (
              <p className="text-danger">The name field is required</p>
            )}
            {errors.name?.type === "minLength" && (
              <p className="text-danger">
                The name must be at least 3 characters{" "}
              </p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="number">Number</label>
            <input
              {...register("number", { required: true, minLength: 7 })}
              type="number"
              id="number"
              className="form-current"
            />
          </div>

          <button type="submit" className="btn mt-3 btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
