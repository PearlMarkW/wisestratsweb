// pages/index.tsx

export default function Home() {
  return (
    <div>
      <h1>Welcome to Wise Strategies</h1>
      <p>Your partner for data-driven private equity due diligence.</p>
      <p>Contact us for more information.</p>
      <section class="w-full bg-cover bg-center h-[500px] relative" style="background-image: url('/path/to/your/image.jpg');">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div class="text-center text-white">
            <h1 class="text-4xl font-bold">Your Title Here</h1>
            <p class="text-lg mt-4">Some description or text goes here over the background.</p>
          </div>
        </div>
    </section>  
    </div>
  );
}

