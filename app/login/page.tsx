'use client';

import { useActionState, useState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { Card, AccentBars, ArrowIcon, buttonClass } from '@/app/components/ui';

const inputClass =
  'block w-full rounded-xl border border-slate-300 bg-white/90 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-uia-blue focus:ring-2 focus:ring-uia-blue/25';

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card>
      <AccentBars />
      <h1 className="text-4xl font-extrabold tracking-tight text-uia-navy">
        Silakan <span className="text-uia-blue">Masuk</span>
      </h1>
      <p className="mt-3 text-sm text-slate-700">
        Gunakan email dan kata sandi yang sudah terdaftar.
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-uia-navy">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="nama@email.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-uia-navy">
            Kata sandi
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              autoComplete="current-password"
              placeholder="Minimal 6 karakter"
              className={`${inputClass} pr-28`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1.5 text-xs font-semibold text-uia-blue hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-uia-blue"
            >
              {showPassword ? 'Sembunyikan' : 'Tampilkan'}
            </button>
          </div>
        </div>

        <div className="min-h-5" role="alert" aria-live="polite">
          {errorMessage && <p className="text-sm font-medium text-red-600">{errorMessage}</p>}
        </div>

        <button type="submit" disabled={isPending} className={buttonClass}>
          {isPending ? 'Memproses...' : 'Log in'}
          {!isPending && <ArrowIcon />}
        </button>
      </form>
    </Card>
  );
}
