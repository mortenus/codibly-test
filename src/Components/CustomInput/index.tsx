import React from 'react';

import styles from './CustomInput.module.scss';

type TCustomInput = {
  setSearch: Function;
};

const CustomInput = ({ setSearch }: TCustomInput) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;

    // validation
    if (/^\d+$/.test(target)) {
      setInputValue(target);
    }

    if (!target) {
      setSearch({});
      setInputValue('');
    }
  };

  // debounce for throttling search
  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!inputValue) {
        return;
      }
      setSearch({ search: inputValue });
    }, 500);

    return () => clearTimeout(delayDebounceFn);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <input
      value={inputValue}
      onChange={handleChange}
      className={styles.input}
      placeholder={'Search ID...'}
      type="text"
    />
  );
};

export default React.memo(CustomInput);
