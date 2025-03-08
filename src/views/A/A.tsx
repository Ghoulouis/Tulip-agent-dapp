import { Button } from "../../components/ui/button";

export default function A() {
    return (
        <div className="flex items-center justify-center bg-gray-100 w-full h-screen">
            {/* Box with border, takes full space of its parent */}
            <div className="flex items-center justify-center border-2 border-black w-full h-full">
                <Button>A</Button>
            </div>
        </div>
    );
}
