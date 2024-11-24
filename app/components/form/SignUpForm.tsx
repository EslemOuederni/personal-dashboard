import * as z from 'zod';
import { useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod';

    // validation schema with zod
const userSchema = z.object({
    username: z.string().min(1, 'Username is required').max(20, 'Username must be less than 20 characters'),
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(1, 'Confirm password is required')
})
    .refine(data => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword']
});

// type for user data
type User = z.infer<typeof userSchema>;

export default function SignUpForm() {
    const {register, handleSubmit, formState: {errors}} = useForm<User>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = async(data: User) => {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(response);
    }
    return (
        <div>
            <div></div>
            <div>
                <form action="">
                    <h1>Hello Again</h1>
                </form>
            </div>
        </div>
    );
}

