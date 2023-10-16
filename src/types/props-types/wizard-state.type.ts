import { MODALITY, TYPE, NTRP, GENDER } from "@/utils/constants";

export declare type WizardStepInfoProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: GENDER | string;
  location: string | undefined;
};

export declare type InitialWizardState = {
  step: string;
  type: TYPE | undefined;
  modality: MODALITY | undefined;
  ntrp: NTRP | undefined;
  info: WizardStepInfoProps;
};

export declare type WizardStepProps = {
  wizardState: InitialWizardState;
  onChange: (_state: any) => void;
  onPrev?: () => void;
  onNext?: () => void;
};
