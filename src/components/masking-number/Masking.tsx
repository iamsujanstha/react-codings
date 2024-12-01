import { useState } from "react"

const Masking = () => {
  const [maskingValue, setMaskingValue] = useState('');
  const [maskedValue, setMaskedValue] = useState('');

  const handleMaskingNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaskingValue(e.target.value)
  }

  const handleMasked = () => {
    const inputType = typeof maskingValue;

    if (inputType !== 'number' && inputType !== 'string') return '';

    const mv = String(maskingValue);

    if (mv.length < 6) return mv;

    const first = mv.slice(0, 1);
    const lastFour = mv.slice(-4);
    // const masked = mv.slice(1, mv.length - 4).replace(/\d/g, '#');

    let masked = '';

    for (let i = 1; i < mv.length - 4; i++) {
      const current = mv[i];

      // parseInt('5', 10) => 5
      // pasrseInt('-', 10) => NaN
      masked += isNaN(parseInt(current, 10)) ? current : '#'
    }

    setMaskedValue(`${first}${masked}${lastFour}`)
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <div className=" flex mt-10 gap-4">
        <input
          type="text"
          className="border-2 border-gray-400 p-2 align-middle rounded-md"
          value={maskingValue}
          onChange={handleMaskingNumber}
        />
        <button className="bg-slate-200 rounded-md px-4 cursor-pointer" onClick={handleMasked}>
          Masked
        </button>
      </div>
      <p className="mt-4 text-start">{maskedValue && maskedValue}</p>
    </main>
  )
}

export default Masking