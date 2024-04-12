import { Link } from "react-router-dom";

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
  confirmPassword: z
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

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div className="grid gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit()} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    placeholder="your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-gray-100"
                    type="password"
                    placeholder="confirm password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#28328C] hover:bg-[#03045e]"
          >
            Create an Account
          </Button>
        </form>
        <Link className="w-full" to={"/credchainmd-layouts/login"}>
          <Button
            variant="outline"
            className="w-full bg-gray-100"
            type="button"
          >
            Already have an account?
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default RegisterForm;
