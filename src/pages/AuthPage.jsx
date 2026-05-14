import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'

import {
  signInWithPopup
} from "firebase/auth"

import {
  auth,
  provider
} from "../firebase"

export default function AuthPage() {

  const { setUser, user } = useApp()

  const navigate = useNavigate()

  useEffect(() => {

    if (user?.email) {

      navigate('/location')
    }

  }, [user])

  const [step, setStep] = useState('phone')

  const [phone, setPhone] = useState('')

  const [otp, setOtp] = useState([
    '',
    '',
    '',
    '',
    '',
    ''
  ])

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [resendTimer, setResendTimer] = useState(0)

  const otpRefs = useRef([])

  useEffect(() => {

    if (resendTimer > 0) {

      const t = setTimeout(() => {

        setResendTimer(r => r - 1)

      }, 1000)

      return () => clearTimeout(t)
    }

  }, [resendTimer])

  async function sendOTP() {

    setError('')

    const cleaned = phone.replace(/\D/g, '')

    if (cleaned.length !== 10) {

      setError('Please enter a valid 10-digit phone number')

      return
    }

    setLoading(true)

    setTimeout(() => {

      setStep('otp')

      setResendTimer(30)

      setLoading(false)

    }, 1000)
  }

  function handleOtpChange(val, idx) {

    if (!/^\d*$/.test(val)) return

    const newOtp = [...otp]

    newOtp[idx] = val.slice(-1)

    setOtp(newOtp)

    if (val && idx < 5) {

      otpRefs.current[idx + 1]?.focus()
    }

    if (!val && idx > 0) {

      otpRefs.current[idx - 1]?.focus()
    }
  }

  function handleOtpKeyDown(e, idx) {

    if (
      e.key === 'Backspace' &&
      !otp[idx] &&
      idx > 0
    ) {

      otpRefs.current[idx - 1]?.focus()
    }
  }

  async function verifyOTP() {

    setError('')

    const code = otp.join('')

    if (code.length !== 6) {

      setError('Enter the complete 6-digit OTP')

      return
    }

    setLoading(true)

    setTimeout(() => {

      if (code === '123456') {

        setUser({
          phone: `+91${phone}`
        })

        navigate('/location')

      } else {

        setError('Invalid OTP')
      }

      setLoading(false)

    }, 800)
  }

  async function googleLogin() {

    try {

      const result =
        await signInWithPopup(
          auth,
          provider
        )

      const user = result.user

      setUser({
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber,
        photo: user.photoURL
      })

      navigate('/location')

    } catch (e) {

      console.log(e)

      setError(e.message)
    }
  }

  return (

    <div className="min-h-screen bg-warm flex items-center justify-center px-4 py-12 page-background">

      <div className="w-full max-w-md">

        <div className="card p-8 shadow-xl">

          <div className="text-center mb-8">

            <div
              className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg"
              style={{
                boxShadow:
                  '0 4px 20px rgba(255,107,43,0.35)'
              }}
            >
              🍽️
            </div>

            <h1 className="font-display text-3xl font-bold text-gray-900">

              {step === 'phone'
                ? 'Welcome!'
                : 'Verify OTP'}

            </h1>

            <p className="text-gray-500 mt-2">

              {step === 'phone'
                ? 'Sign in or create your account'
                : `OTP sent to +91 ${phone}`}

            </p>

          </div>

          {step === 'phone' && (

            <div className="space-y-4">

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">

                  Mobile Number

                </label>

                <div className="flex gap-2">

                  <div className="bg-gray-50 border-2 border-gray-200 rounded-xl px-3 flex items-center font-bold text-gray-600 text-sm">

                    +91

                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={e =>
                      setPhone(
                        e.target.value
                          .replace(/\D/g, '')
                          .slice(0, 10)
                      )
                    }
                    onKeyDown={e =>
                      e.key === 'Enter' &&
                      sendOTP()
                    }
                    placeholder="10-digit phone number"
                    className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 font-semibold text-lg focus:outline-none transition-all"
                    autoFocus
                  />

                </div>

              </div>

              {error && (

                <p className="text-red-500 text-sm font-medium">

                  {error}

                </p>

              )}

              <button
                onClick={sendOTP}
                disabled={loading}
                className="btn-primary w-full text-base gap-2"
                style={{ width: '100%' }}
              >

                {loading
                  ? '⏳ Sending OTP...'
                  : '📱 Send OTP'}

              </button>

              <div className="relative flex items-center">

                <div className="flex-grow border-t border-gray-200"></div>

                <span className="mx-4 text-sm text-gray-400">

                  OR

                </span>

                <div className="flex-grow border-t border-gray-200"></div>

              </div>

              <button
                onClick={googleLogin}
                className="w-full border-2 border-gray-200 rounded-xl py-3 font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
              >

                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />

                Continue with Google

              </button>

            </div>

          )}

          {step === 'otp' && (

            <div className="space-y-6">

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">

                  Enter 6-digit OTP

                </label>

                <div className="flex gap-2 justify-center">

                  {otp.map((d, i) => (

                    <input
                      key={i}
                      ref={el =>
                        otpRefs.current[i] = el
                      }
                      type="tel"
                      maxLength={1}
                      value={d}
                      onChange={e =>
                        handleOtpChange(
                          e.target.value,
                          i
                        )
                      }
                      onKeyDown={e =>
                        handleOtpKeyDown(e, i)
                      }
                      className="otp-input"
                      autoFocus={i === 0}
                    />

                  ))}

                </div>

              </div>

              {error && (

                <p className="text-red-500 text-sm font-medium text-center">

                  {error}

                </p>

              )}

              <button
                onClick={verifyOTP}
                disabled={loading}
                className="btn-primary w-full text-base"
                style={{ width: '100%' }}
              >

                {loading
                  ? '⏳ Verifying...'
                  : '✅ Verify & Continue'}

              </button>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 text-center">

                <p className="text-xs text-orange-700 font-medium">

                  Demo OTP : 123456

                </p>

              </div>

              <div className="text-center">

                {resendTimer > 0 ? (

                  <p className="text-gray-400 text-sm">

                    Resend OTP in

                    <span className="font-bold text-primary">

                      {' '}
                      {resendTimer}s

                    </span>

                  </p>

                ) : (

                  <button
                    onClick={() => {

                      setStep('phone')

                      setOtp([
                        '',
                        '',
                        '',
                        '',
                        '',
                        ''
                      ])
                    }}
                    className="text-primary font-semibold text-sm hover:underline"
                  >

                    ← Change number

                  </button>

                )}

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}