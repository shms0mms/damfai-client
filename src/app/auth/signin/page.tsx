"use client";

import { Button } from "@/components/ui/button";
import { OPTIONS } from "@/config/options.config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const schema = z.object({
  email: z
    .string({
      message: OPTIONS.required,
    })
    .email("Введите правильный email"),
  password: z
    .string({
      message: OPTIONS.required,
    })
    .min(6, "Пароль должен быть не менее 6 символов"),
});
type FormSchema = z.infer<typeof schema>;
export default function SignInPage() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });
  const onSubmit = () => {};
  const passwordError = form.formState.errors.password?.message;
  const emailError = form.formState.errors.email?.message;
  return (
    <Form {...form}>
      <form
        method="post"
        className="flex flex-col min-w-[340px] gap-5 rounded-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {" "}
        <h1>Добро пожаловать</h1>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Ваша почта" {...field} />
              </FormControl>
              {!!emailError && <FormMessage>{emailError}</FormMessage>}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Пароль</FormLabel>
              <FormControl>
                <Input placeholder="Ваш пароль" {...field} />
              </FormControl>
              {!!passwordError && <FormMessage>{passwordError}</FormMessage>}
            </FormItem>
          )}
        />
        <Button type="submit">Войти</Button>
      </form>
    </Form>
  );
}
