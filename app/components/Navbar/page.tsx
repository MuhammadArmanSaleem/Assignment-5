export default function Navbar() {
  return (
    <header className="bg-[#A29875] h-[134px] flex items-center px-8">
      <div className="flex items-center justify-between w-full">
       
        <h1 className="text-white text-5xl font-extrabold">MANZRRAI</h1>

       
        <div className="flex-grow ml-32 mr-12">
          <input
            type="text"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
            className="w-full px-2 py-2 rounded border "
          />
        </div>

      
        <div className="flex gap-4 text-white text-2xl">
          <span>♡</span>
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  );
}
