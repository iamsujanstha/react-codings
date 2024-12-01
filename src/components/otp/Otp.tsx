import React, { useRef, useState } from 'react'

const TempArray = ["😀", "🙈", "🙉", "🙊"];

interface IOtp {
  count: number;
  onOtpComplete: (data: string) => void;
}

const Otp = ({ count, onOtpComplete }: IOtp) => {
  const [otps, setOtps] = useState<string[]>(new Array(count).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(count).fill(''));
  const [masking, setMasking] = useState(new Array(count).fill(''));

  const handleKeyUp = (index: number) => {
    return (e: React.KeyboardEvent) => {
      const updatedOtps = [...otps];
      const updatedMasking = [...masking];

      //send focus to next input
      const nextInput = inputRefs.current[index + 1];
      const prevInput = inputRefs.current[index - 1];

      //handle backspace
      if (e.key === "Backspace") {
        updatedOtps[index] = '';
        updatedMasking[index] = ''

        prevInput?.focus();

        setMasking(updatedMasking)
        setOtps(updatedOtps);
        return
      }

      if (e.key === "ArrowRight") {
        nextInput?.focus();
        return
      }

      if (e.key === "ArrowLeft") {
        prevInput?.focus();
        return
      }

      if (e.key.length > 1 || isNaN(Number(e.key))) {
        return; // Ignore special keys or non-numeric input
      }

      updatedOtps[index] = e.key;

      setMasking(updatedMasking)
      setOtps(updatedOtps);

      updatedMasking[index] = TempArray[index];

      setMasking(updatedMasking)
      setOtps(updatedOtps);

      const otpToSend = updatedOtps.join('')
      if (otpToSend.length === count) {
        onOtpComplete(otpToSend);
      }

      if (nextInput) {
        nextInput.focus();
      }

    }
  }

  const handleClick = (index: number) => {
    return (e: React.MouseEvent<HTMLInputElement>) => {
      console.log(e)
      const input = inputRefs.current[index];
      input?.setSelectionRange(1, 1); // Set cursor position
    };
  };

  const handlePaste = (index: number) => {
    return (e: React.ClipboardEvent) => {
      const pastedData = e.clipboardData.getData("Text").slice(index, 4);
      if (!isNaN(Number(pastedData))) {
        setOtps(pastedData.split(''));
        setMasking(TempArray)
      }
      // const pastedData = e.clipboardData.getData("Text")
    }
  }

  return (
    <>
      {new Array(count).fill("").map((_, index) => (
        <input
          ref={(inputRef) => {
            inputRefs.current[index] = inputRef; //refList
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            //for autocomplete otp
            const selectedData = e.target.value;
            if (selectedData.length === count) {
              if (!isNaN(Number(selectedData))) {
                setOtps(selectedData.split(''));
                setMasking(TempArray)
              }
            }
          }}
          key={index}
          className='w-16 h-16 border-2 border-red-500 rounded-md text-center font-bold text-xl'
          type='text'
          value={masking[index] ?? ""}
          onKeyUp={handleKeyUp(index)}
          onClick={handleClick(index)}
          inputMode='numeric'
          autoComplete='one-time-complete'
          onPaste={handlePaste(index)}
          maxLength={1} // avoid on autoComplete OTP
        />
      ))}
    </>
  )
}

export default Otp