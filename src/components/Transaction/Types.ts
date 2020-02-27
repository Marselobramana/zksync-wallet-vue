import { ContractTransaction } from 'ethers';
import { IEthBalance } from '../../types/Common';

export interface ITransactionProps {
  addressValue: string;
  amountValue?: number;
  balances?: IEthBalance[];
  hash: ContractTransaction | string | undefined;
  isExecuted: boolean;
  isInput: boolean;
  isLoading: boolean;
  onChangeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setHash: React.Dispatch<React.SetStateAction<string | ContractTransaction | undefined>>;
  setTransactionType: (transaction: 'deposit' | 'withdraw' | 'transfer' | undefined) => void;
  setExecuted: React.Dispatch<React.SetStateAction<boolean>>;
  price: number;
  propsMaxValue?: number;
  propsSymbolName?: string;
  propsToken?: string;
  title: string;
  transactionAction: (token?: any, type?: any) => Promise<void>;
  type?: string;
}
