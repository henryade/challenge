import { IInputProps } from 'interfaces';
import React, { FC } from 'react';

const DefaultInput: FC<IInputProps> = ({ labelProps = {}, labelPlacement, labelText, Logo, ...inputProps }) => {
  return (
    <label className='border focus-within:border-primary-300 focus-within:shadow-focusedInput rounded-lg border-gray-300 flex row my-2 shadow-input md:w-8/12 w-full' {...labelProps}>
      {labelPlacement === "before" && labelText}
      {Logo && <span className="pl-3 pr-2 flex rounded-l-lg justify-center items-center bg-white">
        <Logo />
      </span>}
      <input className='py-2 w-full rounded-lg outline-0' {...inputProps} />
      {labelPlacement === "after" && labelText}
    </label>
  )
}

const RadioInput: FC<IInputProps> = ({ labelProps, labelClassName = "", labelPlacement, labelText, ...inputProps }) => {
  return (
    <label className={'flex row mb-4 ' + labelClassName} {...labelProps}>
      <input className='appearance-none w-4 h-4 rounded-full outline-0 text-primary-600 bg-white border border-gray-300 checked:bg-primary-50 checked:border-primary-600 checked:before:bg-primary-600 mt-1 mr-2 default-radio' {...inputProps} />
      {labelPlacement === "before" && labelText}
      {labelPlacement === "after" && labelText}
    </label>
  )
}


export {
  DefaultInput,
  RadioInput
}