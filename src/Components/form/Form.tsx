import React from 'react';
import {Button} from '../button/Button';
import {S} from './Form_Styles';

export const Form: React.FC = () => {
  return (
    <S.Form>
      <input type='text' placeholder='Enter your e-mail' required/>
        <Button btnType={'primary'}
                type={'submit'}
                className={'subscribe'} active>Subscribe</Button>
    </S.Form>
  );
};