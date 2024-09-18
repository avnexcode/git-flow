import React from 'react'

type InputTypeProps = {

} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ ...props }: InputTypeProps) {
    return (
        <input {...props}/>
    )
}
