export default function Comment() {
  return (
    <div className="my-5">
      <div className="flex">
        <div>
          <div className="w-10 border-1 border-gray-300 overflow-hidden bg-gray-200 rounded-full cursor-pointer">
            <img
              src="/guest.jpg"
              alt=""
              className="w-full h-auto rounded-full hover:opacity-80"
            />
          </div>
        </div>
        <div className="w-full ml-3 p-2 bg-gray-200 rounded-xl break-words overflow-hidden">
          <h4 className="font-bold cursor-pointer hover:underline">
            Jun Hao Tee
          </h4>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            doloribus non sint distinctio odit, explicabo dolorum. Eos, tempora
            architecto. Veniam facilis consectetur libero deserunt quidem
            eveniet adipisci explicabo dicta fugit?
          </p>
        </div>
      </div>
    </div>
  );
}
