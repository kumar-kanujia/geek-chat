"use client";
import { newVerification } from "@/actions/authActions/register";
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const onSubmit = useCallback(() => {
    if (success || error) return;
    if (!token) {
      setError("Token is missing");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong");
      });
  }, [error, success, token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex w-full items-center justify-center">
      {!success && !error && <BeatLoader />}
      {!success && <FormError message={error} />}
      <FormSuccess message={success} />
    </div>
  );
};
export default NewVerificationForm;
