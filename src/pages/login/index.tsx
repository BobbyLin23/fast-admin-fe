import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import AuthLayout from '@/layouts/auth-layout'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GithubIcon } from '@/components/github-icon'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function Login() {
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // handle login
    console.error(values)
  }

  return (
    <AuthLayout>
      <div className="h-full relative flex justify-center items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-[350px] space-y-2">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-semibold">
                Welcome back!
              </h1>
              <p className="text-muted-foreground">
                Enter your email below to login.
              </p>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" type="email" {...field} />
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
                      <Input placeholder="******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className="w-full" type="submit">Sign in</Button>
            <Separator />
            <Button className="w-full" variant="secondary">
              <GithubIcon className="w-5 h-5 mr-2" />
              Sign in with Github
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              By clicking continue, you agree to our
              {' '}
              <span className="hover:underline cursor-pointer">
                Terms of Service
              </span>
              {' '}
              and
              {' '}
              <span className="hover:underline cursor-pointer">
                Privacy Policy.
              </span>
            </div>
          </form>
        </Form>
      </div>
      <Button
        className="absolute right-6 top-4"
        variant="outline"
        onClick={() => navigate('/register')}
      >
        Sign up
      </Button>
    </AuthLayout>
  )
}
