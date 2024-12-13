function Header() {
    return (
      <header class="bg-[#201F1F] text-white py-4 border-b-4 border-orange-500">
        <div class="container mx-auto">
          <nav class="flex justify-center items-center" >
            <div class="size-20">
              <img src="/images/logo.png"></img>
            </div>
            <text class="ml-20 grid grid-cols-5 gap-40 hidden sm:flex text-lg"> 
              <a href="#"> Добро пожаловать!</a>
              <a href="#" class="hover:underline">о компании</a>
              <a href="#" class="hover:underline">услуги</a>
              <a href="#" class="hover:underline">проекты</a>
              <a href="#" class="hover:underline">обучение</a>
            </text>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  