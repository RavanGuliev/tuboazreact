function header() {
  return (
  <header className="flex   flex-col  bg-[#fff]  w-full  ">
        <div className="flex flex-row items-center justify-evenly w-full mx-auto px-[30px] h-[40px] text-[#8d94ad]   ">
            <div className="flex flex-row gap-[20px]">
                <span className="hover:text-red-500">Tap.az</span>
                <span className="hover:text-red-500">Bina.az</span>
                <span className="hover:text-red-500">Boss.az</span>
            </div>
            <div className="flex flex-row gap-[25px]">
                Destek:<span className="hover:text-red-500">(012) 526-47-47</span>
                <span className="hover:text-red-500">Yardim</span>
                <span className="hover:text-red-500">Ru</span>
                <span onclick="likedBaskets()"  className="hover:text-red-500 cursor-pointer"><i className="fa-solid fa-heart"></i> Secilmisler</span>
                <span className="hover:text-red-500"><i className="fa-solid fa-circle-user"></i> Giris</span>
            </div>
        </div>


            <div id="likedbar"  className="hidden bg-[#cecece]    absolute w-[500px] h-[100vh] p-3 right-0  shadow-xl   z-[1000] ">
                <div className=" flex justify-around items-center gap-3 p-3">
                    <p className="font-bold  text-2xl  text-[#fff] p-3  bg-indigo-500 shadow-lg shadow-indigo-500/50 ">Seçilmişlər</p>
                   <button onclick="" className="bg-[#b80d16] text-[white] rounded-[7px] p-[10px] cursor-pointer hover:bg-[#b80d18] hover:">Delete All</button> 
                    <button onclick="closebaskets()" className=" text-[#000] text-2xl  cursor-pointer   hover:bg-[#615fff] hover p-3"><i className="fa-solid fa-x"></i></button>
                  </div>
                  <div id="likedCard" ></div>
            </div>  

        

        <nav className="p-3  bg-[#ca1016]">
            <div className="container flex justify-around h-10 mx-auto">
                <div className="flex">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center ">

                        <a href="#"  className="font-bold text-2xl text-[#fff]">TURBO AZ</a>
                    </a>
                    <ul className="items-stretch flex ">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#"
                                className="flex items-center px-5 dark:border- text-[#fff]">Butun Elanler</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#"
                                className="flex items-center px-2 dark:border- text-[#fff] ">Dilerler</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#"
                                className="flex items-center px-2 dark:border- text-[#fff]">Avtokatalog</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#"
                                className="flex items-center px-2  dark:border- text-[#fff]">Moto</a>
                        </li>

                        <li className="flex">
                            <a rel="noopener noreferrer" href="#"
                                className="flex items-center px-2  dark:border- text-[#fff]">Ehtiyat hisseleri ve
                                aksesuarlar</a>
                        </li>

                        <li className="flex">
                            <a rel="noopener noreferrer" href="#"
                                className="flex items-center px-2  dark:border- text-[#fff]">Icare</a>
                        </li>


                    </ul>
                </div>
                <div className="items-center flex-shrink-0  flex">
                    <button
                        className="px-3 py-2 font-semibold    bg-[#85c01f] border-0  text-[#fff] hover:bg-[rgb(133,192,31)] rounded-[10px]"><a
                            href=""><i className="fa-solid fa-circle-plus"></i><span> Yeni Elan</span></a></button>
                </div>


            </div>
        </nav>
         <div className=" container max-w-[1200px]  mx-auto bg-[#ebedf3]">

        <div className="" >
            <div className="bg-[#ebedf3] flex gap-[20px] pt-3  mx-auto  justify-center px-2">
                <select  id="marka" name="brand"  onchange="filtirleme(this)" className="w-[235px] h-[50px] bg-[#fff] rounded-[8px]   ">
                    <option value="Marka">Marka</option>
                </select>
                <select id="model" onchange="filtirleme(this)" name="model"  className="w-[235px] h-[50px] bg-[#fff] rounded-[8px] ">
                    <option value="Model">Model</option>
                </select>
                <div className="  border-[#dfe3e9]  grid grid-cols-3 divide-x-2 divide-[#dfe3e9] text-center  ">

                    <button  className="bg-[#ca1016] p-2 rounded-l-[10px] text-[#fff] cursor-pointer">Hamisi</button>
                    <button className="bg-[#fff] p-2   hover:bg-[#ca1016] hover:text-[#fff] cursor-pointer">Yeni</button>
                    <button
                        className="bg-[#fff] p-2   hover:bg-[#ca1016] hover:text-[#fff] mx-auto rounded-r-[10px]">Surulmus</button>
                </div>


                <select id="city" onchange="filtirleme(this)" name="city"  className="w-[194px] h-[50px] bg-[#fff] rounded-[8px] ">
                    <option value="seher">Şəhər</option>
                </select>
            </div>

            <div id="maintwo" className="flex    mx-auto pl-29 pb-2 ">
                <div className="flex pt-2 ">
                    <input type="text" placeholder="Qiymət, min."
                        className="bg-[#fff]  rounded-l-[8px]   text-center  w-[120px] h-[50px]" />
                    <input type="text" placeholder="maks."
                        className="bg-[#fff] border-none rounded-r-[8px]  border-l-[#dfe3e9] text-center w-[112px] h-[50px] " />

                    <div className=" flex gap-[17px] pl-5">
                        <select id="val" onchange="filtirleme(this)" name="currency" className="bg-[#fff] rounded-[8px] w-[82px] text-[center]">
                            <option>AZN</option>
                        </select>
                        <button className="bg-[#fff] rounded-[8px]  w-[60px] hover:bg-gray-300">Kredit</button>
                        <button className="bg-[#fff] rounded-[8px] w-[60px] hover:bg-gray-300">Barter</button>
                    </div>

                    <div className="pl-6">
                        <select  id="banType" onchange="filtirleme(this)" name="banType"
                            className="w-[246px] bg-[#fff] h-[50px] rounded-[8px] ">
                            <option>Ban Novu</option>
                        </select>
                    </div>

                    <div className="flex pl-4">
                        <select id="il"  onchange="filtirleme(this)" name="year"
                            className="w-[97px] bg-[#fff] h-[50px] rounded-l-[8px] text-[14px]">
                            <option>İL, min.</option>
                        </select>
                        <select id="maxs" onchange="filtirleme(this)" name="year"
                            className="w-[99px] bg-[#fff] h-[50px] rounded-r-[8px]  text-[14px]">
                            <option>maks.</option>
                        </select>
                    </div>
                </div>
            </div>

            <div id="mainthree" className="flex justify-between p-5">

                <p className="inline-block pt-3">Bu gun: <span><a href="#" className="inline-block text-[#4c88f9]"> 2016 yeni
                            elan</a></span></p>

                <div className="flex items-center gap-[20px]">
                    <a href=" " className="text-[#8d96b0]">Sıfırla</a>
                    <p className="inline-block text-[#ca1016]">Daha cox filtr <i className="fa-solid fa-angle-down"></i></p>
                    <button
                        className=" w-[170px] h-[50px]  font-semibold    bg-[#ca1016] border-0  text-[#fff] hover:bg-[#b80d16] rounded-[7px]"><a
                            href="">Elanları göstər</a></button>

                </div>
            </div>
        </div>
    </div>
    </header>

    
  )
}

export default header