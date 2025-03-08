import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function HomeLayout() {
    const [isJoined, setIsJoined] = useState(false);
    const { isConnected, isConnecting, address } = useAccount();
    const { connect, connectors } = useConnect();
    const { disconnect } = useDisconnect();

    const handleJoinClick = () => {
        if (!isConnected) {
            try {
                connect({ connector: connectors[0] }); // Kết nối với connector MetaMask
            } catch (error) {
                console.error("Error connecting:", error);
            }
        }
        //  setIsJoined(true);
    };

    const handleDisconnect = () => {
        disconnect();
        // setIsJoined(false);
    };

    useEffect(() => {
        if (!isConnected) {
            setIsJoined(false);
        }
    }, [isConnected]);

    useEffect(() => {
        if (isConnected && address && !isJoined) {
            setIsJoined(true);
        }
    }, [isConnected, address, isJoined]);

    return (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-white">
            {/* Header */}
            <header className="flex justify-between items-center p-4 w-4/5 mx-auto">
                <div className="flex items-center space-x-4">
                    <img
                        src="/assets/thorn-icon.png" // Thay bằng đường dẫn thực tế của bạn
                        alt="USDC Icon"
                        className="h-10 w-10"
                    />
                    <div className="text-2xl font-bold">Thorn</div>
                </div>

                <nav className="space-x-4">
                    {/* <a href="#" className="text-gray-600 hover:text-black">
                        Docs
                    </a> */}
                    <a href="#" className="text-gray-600 hover:text-black">
                        About
                    </a>
                </nav>
            </header>

            {/* Main Content */}
            <main className="relative flex items-center justify-center">
                <div className="relative text-center w-full max-w-md">
                    <AnimatePresence>
                        {/* Animate Tulip Agent and subheadline */}
                        <motion.div
                            key="tulip-agent"
                            initial={{ y: 0, scale: 1 }}
                            animate={{ y: isJoined ? -250 : 0, scale: isJoined ? 0.8 : 1 }}
                            exit={{ y: 0, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className=" left-1/2 transform -translate-x-1/2"
                            style={{ left: "50%", transform: "translateX(-50%)" }}
                        >
                            <h1 className="text-6xl md:text-7xl font-black text-black mb-4">Tulip Agent</h1>
                            <p className="text-xl md:text-2xl text-black mb-8  font-ibm-plex-mono">TVL: 32.323 $</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Nút Join cố định vị trí dưới Tulip Agent */}
                    <AnimatePresence>
                        {!isJoined && (
                            <motion.button
                                initial={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleJoinClick}
                                className={` left-1/2 transform -translate-x-1/2 top-[150px] py-3 px-6 rounded-md text-lg font-semibold transition-colors duration-300 ${
                                    isConnecting
                                        ? "bg-white text-black border border-gray-300 rounded-lg"
                                        : "bg-black text-white hover:bg-gray-800"
                                }`}
                                disabled={isConnecting}
                            >
                                {isConnecting ? "Connecting to MetaMask..." : "Join"}
                            </motion.button>
                        )}
                    </AnimatePresence>

                    {/* Dashboard hiển thị sau khi nhấn Join */}
                    <AnimatePresence>
                        {isJoined && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="fixed inset-0 flex items-center justify-center"
                            >
                                <motion.div
                                    initial={{ scale: 0.9, y: 50 }}
                                    animate={{ scale: 1, y: 0 }}
                                    exit={{ scale: 1, y: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-6 bg-white border border-gray-300 rounded-lg "
                                >
                                    <div className="flex justify-between items-center mb-6  space-x-20">
                                        <div className="flex flex-col items-start space-y-1">
                                            <div className="flex items-center space-x-1">
                                                <img
                                                    src="https://github.com/trustwallet/assets/blob/master/blockchains/binance/assets/USDC-CD2/logo.png?raw=true"
                                                    alt="USDC Icon"
                                                    className="h-5 w-5"
                                                />
                                                <span className="text-xl font-bold text-black">USDC</span>
                                            </div>
                                            <span className="text-sm text-gray-600">Balance: 3223.32</span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="bg-black text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-800">
                                                Stake
                                            </button>
                                            <button className="bg-gray-200 text-black py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-300">
                                                Unstake
                                            </button>
                                            <button
                                                onClick={handleDisconnect}
                                                className="bg-red-200 text-black py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-300"
                                            >
                                                X
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center mb-6">
                                        <h2 className="text-4xl font-bold text-black">0</h2>
                                        <p className="text-gray-600">~$0</p>
                                        <button className="mt-2 text-gray-600 underline hover:text-black">Max</button>
                                    </div>
                                    <div className="border-t border-gray-300 pt-4 mb-6">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-lg font-semibold text-black">Staked Positions</h3>
                                            <div className="flex items-center space-x-2">
                                                <span className="text-gray-600">Auto compound</span>
                                                <span role="img" aria-label="fire">
                                                    🔥
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-gray-600">
                                                <span>Your deposit</span>
                                                <span>0</span>
                                            </div>
                                            <div className="flex justify-between text-gray-600">
                                                <span>Profit</span>
                                                <span>20%</span>
                                            </div>
                                            <div className="flex justify-between text-gray-600">
                                                <span>% Shared</span>
                                                <span>0</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-4 w-4/5 mx-auto text-center">
                <p className="text-gray-600 mb-2">Backed by:</p>
                <div className="flex justify-center space-x-10 mb-4">
                    <div className="flex items-center space-x-2">
                        <img
                            src="/assets/thorn-icon.png" // Thay bằng đường dẫn thực tế của bạn
                            alt="USDC Icon"
                            className="h-8 w-8"
                        />
                        <div className="text-black">Thorn</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            src="/assets/oasis-icon.png" // Thay bằng đường dẫn thực tế của bạn
                            alt="USDC Icon"
                            className="h-10 w-10"
                        />
                        <div className="text-black">Oasis</div>
                    </div>
                    {/* <div className="flex items-center space-x-2">
                        <img
                            src="/assets/orai-icon.png" // Thay bằng đường dẫn thực tế của bạn
                            alt="USDC Icon"
                            className="h-8 w-8"
                        />
                        <div className="text-black">Oraichain</div>
                    </div> */}
                </div>
                <div className="flex justify-center space-x-4 mb-4">
                    <span></span>
                    <span></span>
                </div>
            </footer>
        </div>
    );
}
