import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export default function Header() {
  return (
    <div className="w-full flex justify-between p-[18px] border-b-[1px] border-[#585858] z-50 duration-300 transition-all backdrop-blur-sm bg-gray-700 bg-opacity-5">
      <div className="font-extrabold text-[28px] text-[#C4ACFF] uppercase">
        <h1 className="text-white">Loot Box</h1>
      </div>
      <div className="flex gap-[18px] items-center">
        <h1 className="font-bold text-white uppercase">Balance : 100 Sol</h1>
        <div className="bg-violet-500 rounded-xl wallet">
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div>
      </div>
    </div>
  );
}
