
import { data } from "../../data"

function Main() {
  return (
    <main class="container max-w-[1200px] mx-auto bg-[#f1f3f7]  ">
        <div class="bg-[#f1f3f7] border-t-1 border-b-1 border-[#eaebf2] px-5 py-5 font-bold text-[16px]">
            <h1>PREMIUM ELANLAR</h1>
        </div>

        <div id="masinlar" class="container mt-1  flex flex-wrap justify-center items-center gap-5 bg-[#f6f7fa] mx-auto ">
            {data.map((item) =>(
                  <div  class="w-[300px]  h-[400px] bg-white rounded-[10px] relative overflow-hidden shadow-[0_0_15px_#ccc] mx-auto  ">
                            <div class="w-[300px]  h-[50%]">
                           <i onclick="addToBasket(event,${item.id})" id="favorite" class="fa-regular fa-bookmark  text-${item.status ? '[red]': 'white'} text-2xl  absolute right-2 top-2"></i> 
                            <img src={item.images[0]} alt="" class="object-cover object-center  rounded-t-md w-full  h-[100%] dark:bg-gray-500" />
                            </div>
                        <div class="flex flex-col justify-between p-6 space-y-8">
                            <div class="space-y-2">
                               <h2>{item.price} {item.currency}</h2>
                                <p>{item.brand} {item.model}</p>
                                <p>{item.year},{item.engine} L, {item.odometer} {item.odometerUnit}</p>
                                <p class="text-[#8d94ad]">Baki, {item.dates}</p>
                            </div>
                           
                        </div>
                    </div>
            ))}
        </div>

        <div class="text-center py-3.5">
            <button id="btn" onclick="artirmag()" 
                class="  w-[170px] h-[50px]  font-semibold    bg-[#85c01f] border-0  text-[#fff]  rounded-[7px] flex items-center justify-center ">
                artir
            </button>
        </div>
    </main>

  )
}

export default Main