import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Image from "./Image";

interface AppCardProps {
  image: string;
  title: string;
  alt: string;
  url: string;
  description: string;
}
const AppCard = ({ image, title, description, url, alt }: AppCardProps) => {
  return (
    <Card className="border-0">
      <CardHeader className="hidden">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={"aspect-video w-full"}>
          <Image
            image_name={image}
            className="object-cover rounded-xl"
            alt={alt}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Launch Button */}
        </div>
      </CardContent>
      <CardFooter>
        <button
          onClick={() => {
            window.open(url, "_blank", "noopener,noreferrer");
          }}
          type="button"
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 
            bg-black hover:opacity-60 hover:-translate-y-0.5 hover:shadow-lg`}
        >
          Launch App
        </button>
      </CardFooter>
    </Card>
  );
};

export default AppCard;
