function First() {
    return (
        <div class="relative w-full h-screen overflow-hidden">
            <img src="/images/image 2.png" class="absolute inset-0 w-full h-full object-cover blur scale-105"></img>
            <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2  h-full justify-center items-center">
                <div class="text-center font-bold">
                    <h1 class="text-5xl">Услуги</h1>
                    <button class="h-[100px] w-[300px] bg-white rounded-xl m-10 text-black text-3xl">Запись</button>

                </div>
                <div class="text-center font-bold">
                    <h1 class="text-5xl">Обучение</h1>
                    <button class="h-[100px] w-[300px] bg-white rounded-xl m-10 text-black text-3xl">Запись</button>

                </div>
            </div>
        </div>
    );
  }
  
  export default First;