function Header() {
    return (
        <header class="bg-[#f97316] text-white p-4">
            <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">Лого</h1>
            <nav class="space-x-3 hidden sm:flex">
            <a href="#" class="hover:underline">о нас</a>
            <a href="#" class="hover:underline">услуги</a>
            <a href="#" class="hover:underline">наши проекты</a>
            <a href="#" class="hover:underline">запись на обучение</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  