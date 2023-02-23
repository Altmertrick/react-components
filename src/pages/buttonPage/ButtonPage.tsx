import { FC } from 'react';
import { GoBell, GoGlobe } from 'react-icons/go';

import Button from '../../components/button/Button';

const ButtonPage: FC<any> = () => {
  const handleEvent = () => {
    console.log('Hello');
  };

  const buttonOptions = [
    '',
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  const renderedButtons = buttonOptions.map((option: string, i) => {
    const btnOption: any = {};
    btnOption[option] = option;
    return (
      <div key={i} className="m-2">
        <Button {...btnOption}>
          <GoBell />
          {option || 'default'}
        </Button>
      </div>
    );
  });
  const renderedButtonsRounded = buttonOptions.map((option: string, i) => {
    const btnOption: any = { rounded: true };
    btnOption[option] = option;
    return (
      <div key={i} className="m-2">
        <Button {...btnOption}>
          <GoGlobe />
          {option || 'default'}
        </Button>
      </div>
    );
  });
  const renderedButtonsLoading = buttonOptions.map((option: string, i) => {
    const btnOption: any = { rounded: true, loading: true };
    btnOption[option] = option;
    return (
      <div key={i} className="m-2">
        <Button {...btnOption}>
          <GoBell />
          {option || 'default'}
        </Button>
      </div>
    );
  });

  return (
    <div className="flex">
      <div>{renderedButtons}</div>
      <div>{renderedButtonsRounded}</div>
      <div>{renderedButtonsLoading}</div>
    </div>
  );
};

export default ButtonPage;
