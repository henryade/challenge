import { FC, HTMLProps } from "react";

export interface IPaymentCard {
  Logo: FC;
  cardType: string;
  expiryDate: string;
  endingNumbers: string;
  isDefault: boolean;
  handleClick: () => void
}