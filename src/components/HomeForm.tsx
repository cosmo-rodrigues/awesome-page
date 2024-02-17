'use client';

import React, { useState } from 'react';

import * as MyForms from './Forms';
import { Card } from './ui';

export const HomeForm = ({ containerStyles }: { containerStyles: string }) => {
  const [status, setStatus] = useState<string>('sign-in');

  const renderizarComponente = () => {
    switch (status) {
      case 'sign-in':
        return <MyForms.SignIn handleChangeType={setStatus} />;
      case 'recovery':
        return <MyForms.Recovery handleChangeType={setStatus} />;
      case 'recovery-success':
        return <MyForms.RecoverySuccess handleChangeType={setStatus} />;
      case 'sign-up':
        return <MyForms.SignUp handleChangeType={setStatus} />;
      default:
        return null;
    }
  };

  return <Card className={`${containerStyles}`}>{renderizarComponente()}</Card>;
};
