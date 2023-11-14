import { useState } from 'react'

export function useInput<T>(defaultValue: T) {
    const [value, setValue] = useState<T>(defaultValue);

    const onChange = event => setValue(event.target.value);
    const reset = () => setValue(undefined);
    return {
        value,
        onChange,
        reset
    };
}
