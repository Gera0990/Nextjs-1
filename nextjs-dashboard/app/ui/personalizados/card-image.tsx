interface CardProps { 
    title: string;
    image: string;
    description?: string;
}

export default function CardImage({ title, image, description }: CardProps) {
    return (
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h2>
            <div className="w-full h-64 overflow-hidden rounded-lg flex items-center justify-center bg-gray-100">
                <img src={image} alt={title} className="h-full object-contain" />
            </div>
            {description && (
                <p className="text-gray-600 text-sm mt-3 text-center">{description}</p>
            )}
        </div>
    );
}
