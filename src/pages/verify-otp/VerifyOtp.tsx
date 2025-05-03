import { useState } from 'react';
import Otp from '../otp/Otp'

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const handleOtpComplete = (data: string) => {
    setOtp(data)
    console.log(data)
  }
  return (
    <div className='h-screen flex justify-center flex-col gap-4 align-middle'>
      <div className='flex gap-2 justify-center'>
        <Otp count={4} onOtpComplete={handleOtpComplete} />
      </div>
      <button onClick={() => otp && alert(otp)}>Verify</button>
    </div>
  )
}

export default VerifyOtp