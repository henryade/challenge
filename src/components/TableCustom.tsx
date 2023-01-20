import { DownloadLogo, TickLogo } from "assets";
import { FC } from "react";
import { Cell } from "react-table";

export const StatusCell: FC<any> = ({ value, ...args }) => {
  return <div><div className="py-[2px] bg-success-50 rounded-2xl flex row justify-center items-center w-16"><TickLogo />&ensp;<span className="text-success-700 text-sm capitalize">{value}</span></div></div>;
}

export const UserCell: FC<any> = ({ value, ...args }) => {
  return <div className=" flex items-center">{value.map((t: string, i: number) => <img src={t} style={{ zIndex: (i + 1) * 100, left: (i * 14) + 5 }} className="absolute w-6 h-6 rounded-full" alt="img" />)}</div>;
}
export const AmountCell: FC<any> = ({ value, ...args }) => {
  return <span className="text-gray-500 text-sm capitalize">{value}</span>;
}
export const IconCell: FC<any> = ({ value, ...args }) => {
  return <DownloadLogo />;
}

