import {
    AuthenticationContent,
    AuthenticationFooter,
    AuthenticationForm,
    AuthenticationHeader,
    AuthenticationLayout,
    AuthenticationSubmitButton,
} from '@/components/AuthenticationLayout';
import FormField from '@/components/FormField';
import { Link } from 'react-router';

export default function SignInPage() {
    return (
        <AuthenticationLayout imageLink="https://www.militarytimes.com/resizer/v2/JOORVJXOCJAHVCGIIDAO2V5C3E.jpg?auth=ddc62ed69cee1fe395e0a074b52d4279fe93b454ad788b938cc494907474000d">
            <AuthenticationForm>
                <AuthenticationHeader
                    title="Welcome to Flypix"
                    subtitle="Login to your account to continue"
                />
                <AuthenticationContent>
                    <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={'formData' + '.email'}
                        onChange={'handleChange'}
                    />
                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={'formData' + '.password'}
                        onChange={'handleChange'}
                    />
                </AuthenticationContent>
                <AuthenticationSubmitButton>Sign In</AuthenticationSubmitButton>
            </AuthenticationForm>
            <AuthenticationFooter>
                <p>Don&apos;t have an account?</p>
                <Link
                    to="/signup"
                    className="font-medium text-[#77B526] underline"
                >
                    Sign Up
                </Link>
            </AuthenticationFooter>
        </AuthenticationLayout>
    );
}
