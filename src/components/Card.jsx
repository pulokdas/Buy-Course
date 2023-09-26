export default function Card({data,handleSelectButton}) {
  // console.log(props.data);
  const {title,img,description,price,credit_hour}= data;
  
  return (


    <div className="max-w-sm   bg-white border border-gray-200 rounded-lg shadow">
      <div className="px-5 pt-4">

        <img className="rounded-t-lg " src={img} alt="" />
      </div>

      <div class="p-5 space-y-4">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 text-justify dark:text-gray-400">{description}</p>
        <div className="flex justify-between ">
          <div className="flex items-center">
            <img src="src\assets\dollar-sign 1.png" alt="" />
            <h2>price:{price}</h2>
          </div>
          <div className="flex">
            <img src="src\assets\Frame.png" alt="" />
            <h2>credit:{credit_hour}hr</h2>
          </div>

        </div>
        <button type="button" onClick={()=>handleSelectButton(data)} href="#" class="w-full  px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Select

        </button>

      </div>
    </div>

  )
}
