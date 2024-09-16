import {Card, CardHeader, Image} from "@nextui-org/react";
import Cat from "@/public/images.jpeg";
export default function PortfolioCard() {
    return (
        <div className="mt-5">
            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 ">
                <Card className="col-span-12 sm:col-span-4 h-[300px]">
                    <CardHeader className=" z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
                        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
                    </CardHeader>
                    <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={Cat}
                    />
                </Card>
            </div>
        </div>
    );
}