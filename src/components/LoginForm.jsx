import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(8, { message: "At least 8 characters" })
    .refine((value) => /[a-z]/.test(value), {
      message: "At least one lowercase letter",
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "At least one uppercase letter",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "At least one number",
    })
    .refine((value) => /[^a-zA-Z0-9]/.test(value), {
      message: "At least one special character",
    }),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user?.length) {
      navigate("/home", { replace: true });
    }
  }, []);

  async function onSubmit() {
    try {
      localStorage.setItem("user", "test");
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    type="email"
                    placeholder="email@email.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    type="password"
                    placeholder="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 underline"
            >
              Forgot Your Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#28328C] hover:bg-[#03045e]"
          >
            Sign In
          </Button>
        </form>
        <Link className="w-full" to={"/register"}>
          <Button
            variant="outline"
            className="w-full bg-gray-100"
            type="button"
          >
            Create an account
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default LoginForm;
