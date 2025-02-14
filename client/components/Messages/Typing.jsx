function Typing({ typing }) {
    return (
      typing.length > 0 && (
        <div className="flex items-center text-gray-700">
          <div className="p-10">
            <div className="flex items-center space-x-3 text-gray-600 text-sm">
              <div className="flex h-full items-center space-x-1">
                <div class="h-5 animate-bounce  animation-delay-200">
                  <div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                </div>
                <div class="h-5 animate-bounce animation-delay-300">
                  <div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                </div>
                <div class="h-5 animate-bounce animation-delay-400">
                  <div class="h-1.5 w-1.5 rounded-full bg-gray-400"></div>
                </div>
              </div>
              <p className="mb-4">
                {typing.join(", ")} {typing.length > 1 ? "are" : "is"} typing...
              </p>
            </div>
          </div>
        </div>
      )
    );
  }
  
  export default Typing;