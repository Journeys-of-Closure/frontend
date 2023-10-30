import { useState } from 'react';

function useRegister() {
    const [isRegister, setIndex] = useState(false);

    function changeIndex() {
        setIndex(!isRegister);
    }

    return {
        isRegister,
        changeIndex
    };
}

export default useRegister;
