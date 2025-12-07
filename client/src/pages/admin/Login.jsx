import React, { useState, useEffect, useCallback } from 'react';
import { Mail, Key, LogIn, Clock, RefreshCw } from 'lucide-react';

// --- MessageToast Component (Replaces alert()) ---
const MessageToast = ({ message, type, onClose }) => {
  if (!message) return null;

  let bgColor, icon;
  switch (type) {
    case 'success':
      bgColor = 'bg-green-500';
      icon = '✅';
      break;
    case 'error':
      bgColor = 'bg-red-500';
      icon = '❌';
      break;
    default:
      bgColor = 'bg-blue-500';
      icon = '💡';
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`p-4 rounded-xl shadow-2xl text-white font-semibold flex items-center space-x-3 transition-opacity duration-300 ${bgColor}`}>
        <span>{icon}</span>
        <p>{message}</p>
        <button onClick={onClose} className="ml-4 font-bold text-lg leading-none opacity-80 hover:opacity-100">
          &times;
        </button>
      </div>
    </div>
  );
};

// --- Main login Component ---
export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('info');

  const showMessage = (msg, type = 'info') => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(null), 5000);
  };

  // Timer countdown hook
  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleSendOtp = () => {
    if (timer > 0) return; // Prevent clicking while countdown is active

    if (!email || !email.includes('@')) {
      return showMessage("Please enter a valid email address.", 'error');
    }
    
    setLoading(true);
    setOtp(""); // Clear previous OTP
    
    // Simulate API call delay for OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setTimer(60); // Start 60 sec timer
      setLoading(false);
      showMessage(`OTP sent to ${email}. Check your inbox!`, 'success');
      // In a real app, the server would generate and send the OTP here.
    }, 1500);
  };

  const handleLogin = () => {
    if (!otpSent) return showMessage("Please send OTP first.", 'error');
    if (!otp || otp.length !== 6) return showMessage("Please enter the 6-digit OTP.", 'error');

    setLoading(true);

    // Simulate API call for login/verification
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would verify the OTP against the server-side stored code.
      if (otp === "123456") {
        showMessage("Login successful! Welcome to ADKAMP.", 'success');
        // Clear form/redirect user
        setEmail('');
        setOtp('');
        setOtpSent(false);
        setTimer(0);
      } else {
        showMessage("Invalid OTP. Please try again or resend the code.", 'error');
      }
    }, 1500);
  };

  const isResendDisabled = timer > 0 || loading;
  const isLoginDisabled = !otpSent || loading || otp.length !== 6;
  const a=" "

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 antialiased">
      <style>{`
        /* Custom CSS to apply Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        // body {
        //   font-family: 'Inter', sans-serif;
        // }
      `}</style>
      
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden grid lg:grid-cols-2">
        
        {/* LEFT PANEL: Branding & Aesthetics (Large Screens) */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-amber-600 text-white relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-yellow-600 opacity-90"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              ADKAMP Event Portal
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Your seamless access to event management tools and resources.
            </p>
          </div>
          <div className="relative z-10 text-sm opacity-80 mt-auto">
            Secure One-Time Password Verification
          </div>
        </div>

        {/* RIGHT PANEL: Login Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center lg:text-left">
            Secure Login
          </h2>

          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            {/* 1. Email Input */}
            <label className="block mb-4">
              <span className="text-sm font-medium text-gray-600 block mb-1">Email Address</span>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition duration-150 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={otpSent && timer > 0 && !loading} // Disable if OTP sent and timer running
                  required
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <p className='text-amber-600 text-xs pt-1'> {"&nbsp;"}</p>
            </label>

            {/* 2. Send / Resend OTP Button */}
            <button
              type="button"
              className={`w-full py-3 rounded-xl font-semibold text-lg transition duration-200 shadow-md ${
                isResendDisabled
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700 active:shadow-none'
              } flex items-center justify-center space-x-2`}
              disabled={isResendDisabled}
              onClick={handleSendOtp}
            >
              {loading && <RefreshCw className="h-5 w-5 animate-spin" />}
              {!loading && timer > 0 && <Clock className="h-5 w-5" />}
              
              {!loading && timer > 0 ? (
                <span>Resend in {timer}s</span>
              ) : otpSent ? (
                <span>Resend OTP</span>
              ) : (
                <span>Send OTP</span>
              )}
            </button>
            
            {otpSent && <p className="text-xs text-amber-600 pt-1">otp senr</p>}


            {/* 3. OTP Input */}
            <label className="block mt-4 mb-6">
              <span className="text-sm font-medium text-gray-600 block mb-1">Enter 6-Digit OTP</span>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="------"
                  maxLength="6"
                  className={`w-full pl-12 pr-4 py-3 rounded-xl tracking-widest text-center text-xl font-mono transition duration-150 outline-none ${
                    otpSent 
                    ? 'border-2 border-amber-500 bg-amber-50 focus:ring-2 focus:ring-amber-500' 
                    : 'border border-gray-300 bg-gray-100 cursor-not-allowed'
                  }`}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))} // Only allow digits
                  disabled={!otpSent || loading}
                  required
                />
                <Key className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
              <p className='text-xs text-amber-600 pt-1'>Enter again</p>
            </label>
            

            {/* 4. Login Button */}
            <button
              type="submit"
              className={`w-full py-3 rounded-xl font-bold text-lg transition duration-200 shadow-xl ${
                isLoginDisabled 
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-lg active:shadow-none'
              } flex items-center justify-center space-x-2`}
              disabled={isLoginDisabled}
            >
              {loading && <RefreshCw className="h-5 w-5 animate-spin" />}
              {!loading && <LogIn className="h-5 w-5" />}
              <span>{loading ? 'Verifying...' : 'Login Securely'}</span>
            </button>
          </form>

        </div>
      </div>
      
      {/* Custom Message Toast */}
      <MessageToast 
        message={message} 
        type={messageType} 
        onClose={() => setMessage(null)} 
      />
    </div>
  );
}