'use client';

import * as Shad from '@/components/ui';
import { CardBase } from './CardBase';

interface RecoveryProps {
  handleChangeType: (type: string) => void;
}

export function RecoverySuccess({ handleChangeType }: RecoveryProps) {
  async function onSubmit() {
    handleChangeType('sign-in');
  }

  return (
    <CardBase>
      <Shad.Button onClick={onSubmit}>voltar para o login</Shad.Button>
    </CardBase>
  );
}
