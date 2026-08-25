export default function TailwindDev(){
    return (
        <div className="fixed top-5 right-5 ">
            {/* <div className=" rounded-full bg-red-500 size-[60px] bg-blue-500 text-center rounded-full flex items-center justify-center">
                hello
            </div> */}
            <div class="text-center font-bold text-lg">

  {/* <!-- 1. Default / Mobile (< 640px) --> */}
  <div class="block sm:hidden bg-blue-50 text-blue-600 p-6 rounded-xl border border-blue-200 shadow-sm">
    📱 Mobile Screen ( 640px)
    <div class="text-sm font-normal text-blue-400 mt-1">Class: block sm:hidden</div>
  </div>

  <div class="hidden sm:block md:hidden bg-blue-100 text-blue-700 p-6 rounded-xl border border-blue-300 shadow-sm">
    📟 Small (sm) Screen (640px - 767px)
    <div class="text-sm font-normal text-blue-500 mt-1">Class: hidden sm:block md:hidden</div>
  </div>

  <div class="hidden md:block lg:hidden bg-blue-200 text-blue-800 p-6 rounded-xl border border-blue-400 shadow-sm">
    💻 Medium (md) Screen (768px - 1023px)
    <div class="text-sm font-normal text-blue-600 mt-1">Class: hidden md:block lg:hidden</div>
  </div>

  <div class="hidden lg:block xl:hidden bg-blue-500 text-white p-6 rounded-xl shadow-md">
    🖥️ Large (lg) Screen (1024px - 1279px)
    <div class="text-sm font-normal text-blue-100 mt-1">Class: hidden lg:block xl:hidden</div>
  </div>

  <div class="hidden xl:block 2xl:hidden bg-blue-700 text-white p-6 rounded-xl shadow-md">
    📺 Extra Large (xl) Screen (1280px - 1535px)
    <div class="text-sm font-normal text-blue-200 mt-1">Class: hidden xl:block 2xl:hidden</div>
  </div>

  <div class="hidden 2xl:block bg-blue-900 text-white p-6 rounded-xl shadow-lg">
    🚀 2X Large (2xl) Screen (≥ 1536px)
    <div class="text-sm font-normal text-blue-300 mt-1">Class: hidden 2xl:block</div>
  </div>

</div>

        </div>
    )
}