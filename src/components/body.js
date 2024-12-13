function Body() {
    return (
        <main class="flex-grow bg-gray-100 p-4">
          <div class="container mx-auto">
            <h2 class="text-2xl font-bold mb-4">Добро пожаловать!</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div class="bg-white p-4 shadow rounded">Контент 1</div>
              <div class="bg-white p-4 shadow rounded">Контент 2</div>
              <div class="bg-white p-4 shadow rounded">Контент 3</div>
              <div class="bg-white p-4 shadow rounded">Контент 4</div>
              <div class="bg-white p-4 shadow rounded">Контент 5</div>
              <div class="bg-white p-4 shadow rounded">Контент 6</div>
            </div>
          </div>
        </main>
    );
  }
  
  export default Body;