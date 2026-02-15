import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <>
        <div className="flex justify-between">
            <div>
                <img src="/Knowell.svg" className="h-8 w-auto"></img>
            </div>

            <div className="flex gap-4 items-center">
                <p> Public Feed</p>
                <Button> Log in</Button>
                <Button> Sign up</Button>
            </div>

        </div>     
        </>   
    );
}