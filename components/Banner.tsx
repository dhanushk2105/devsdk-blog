function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5
    justify-between font-bold px-10 py-5 mb-10">
        <div>
        <h1 className="text-7xl">Dhanush's Dev Blog</h1>
        <h2 className="mt-5 md:mt-0">Explore web development{" "}
        <span className="underline decoration-4 decoration-yellow-500">insights, tips, and projects here</span>. Your gateway to the world of development.</h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Learn JS | Developer log | tech news | projects | and more...
        </p>    
</div>
  )
}

export default Banner