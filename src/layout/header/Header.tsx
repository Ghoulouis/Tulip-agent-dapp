import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Header() {
    return (
        <header className="flex p-4 bg-gray-100 shadow-md">
            <div className="flex gap-2 ml-auto">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Sapphire Testnet</SelectItem>
                        <SelectItem value="dark">Binance Testnet</SelectItem>
                        <SelectItem value="system">ETH Sepoia</SelectItem>
                    </SelectContent>
                </Select>

                <Button onClick={() => alert("Thông tin khác")}>Connect Wallet</Button>
            </div>
        </header>
    );
}
