import { useState } from 'react';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const { loading, handleRegister } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const getPasswordStrength = (pw) => {
    if (!pw) return { level: 0, label: '', color: '' };
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    const levels = [
      { level: 1, label: 'Weak', color: 'var(--color-error)' },
      { level: 2, label: 'Fair', color: 'var(--color-warning)' },
      { level: 3, label: 'Good', color: 'var(--color-sky-deep)' },
      { level: 4, label: 'Strong', color: 'var(--color-success)' },
    ];
    return levels[Math.min(score, 4) - 1] || levels[0];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === confirmPassword) {
      handleRegister({ username, email, password });
      navigate("/");
    } else {
      console.error("Passwords do not match!");
    }
  };

  const strength = getPasswordStrength(password);

  const userIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  const mailIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
  const lockIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
  const shieldIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

  return (
    <AuthLayout mode="register">
      <form className="flex flex-col gap-6" id="register-form" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-4.5">
          <InputField id="register-username" label="Username" type="text" placeholder="johndoe" onChange={(e) => {setUsername(e.target.value)}} autoComplete="username" icon={userIcon} />
          <InputField id="register-email" label="Email address" type="email" placeholder="you@example.com" onChange={(e) => {setEmail(e.target.value)}} autoComplete="email" icon={mailIcon} />
          <InputField id="register-password" label="Password" type="password" placeholder="Create a strong password" onChange={(e) => {setPassword(e.target.value)}} autoComplete="new-password" icon={lockIcon} />

          {/* Password strength meter */}
          {password && (
            <div className="flex items-center gap-3 animate-fade-in" id="password-strength">
              <div className="flex-1 flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-1 flex-1 rounded-full transition-colors duration-300" style={{ background: i <= strength.level ? strength.color : 'var(--color-edge)' }} />
                ))}
              </div>
              <span className="text-xs font-semibold min-w-12 text-right" style={{ color: strength.color }}>
                {strength.label}
              </span>
            </div>
          )}

          <InputField id="register-confirm-password" label="Confirm password" type="password" placeholder="Re-enter your password" onChange={(e) => {setConfirmPassword(e.target.value)}} autoComplete="new-password" icon={shieldIcon} />
        </div>

        <SubmitButton loading={loading}>Create account</SubmitButton>
      </form>
    </AuthLayout>
  );
}
