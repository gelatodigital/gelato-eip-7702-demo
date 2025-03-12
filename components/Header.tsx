import {Button} from '@/components/ui/button'
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from '@/components/ui/dialog'
import {shortenAddress} from "@/app/blockchain/utils";

interface HeaderProps {
  isLoggedIn: boolean
  onLogin: () => void
  addLog: (message: string) => void
  walletAddress?: string
  setShowLoginDialog: (value: boolean) => void;
  showLoginDialog: boolean;
}

export default function Header({ isLoggedIn, onLogin, addLog, walletAddress, setShowLoginDialog, showLoginDialog }: HeaderProps) {

  const handleLogin = () => {
    setShowLoginDialog(true)
    // addLog('User clicked Log in.')
    onLogin()
  }

  return (
    <header className="w-full bg-[#101010] py-4 px-8 flex justify-between items-center">
      <div className="flex flex-col md:flex-row gap-x-4 items-start md:items-center">
        <span className="text-xl flex flex-row"><span className="mr-4 hidden md:block"></span>Gelato EIP 7702 Demo</span>
      </div>
      {!isLoggedIn && (
        <Button onClick={handleLogin}
                className="text-white font-bold duration-200 font-semibold px-6 py-2 rounded-full bg-gradient-to-r from-[#00AEFA] to-[#00AEFA] hover:from-[#1093CD] hover:to-[#00CECB]">
          LOGIN
        </Button>
      )}
      {isLoggedIn && (
  <div className="flex items-center">
    {/* <span className="text-[#00AEFA] font-semibold mr-2">Logged In</span> */}
    {walletAddress && (
      <a target={"_blank"} href={`https://gelato-eip7702-demo.cloud.blockscout.com/address/${walletAddress}`} className="text-white hover:text-[#00AFFA]/80 transition-colors duration-200">
        {shortenAddress(walletAddress)}
      </a>
    )}
  </div>
)}

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="bg-black border-2 border-[#00AEFA]">
          <DialogHeader>
            <DialogTitle className="text-[#00AEFA]">Logging in...</DialogTitle>
            <DialogDescription className="text-white">
              Please wait while we authenticate your account.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  )
}

