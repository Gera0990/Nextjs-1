export default function Yamahar6() {
  const urlVideo = 'https://www.youtube.com/embed/7gV217ZQgEM';

  return (
    <main className="flex flex-col items-center h-200 justify-start p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 mt-4">Reyna de las motos</h1>

      <div className="w-full px-2 sm:px-4">
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg w-full">
          <iframe
            src={urlVideo}
            title="YouTube video"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </main>
  )
}

