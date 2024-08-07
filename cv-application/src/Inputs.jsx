/* eslint-disable react/prop-types */
export function TextInput({ name, defaultValue }) {
    return (
        <input name={name} defaultValue={defaultValue}></input>
    );
}

export function TextareaInput({ name, defaultValue }) {
    return (
        <textarea name={name} defaultValue={defaultValue}></textarea>
    );
}