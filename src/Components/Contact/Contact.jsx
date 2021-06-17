export const Contact = () => {
    return (
        <div className='fixed lg:right-4   lg:bottom-4 bottom-0 bg-gray-200 lg:bg-white  lg:border lg:rounded-full w-full lg:w-16 z-10 '>
             <div className="flex lg:flex-col flex-row    lg:items-center justify-around shadow-lg   p-2">
            <a
              href="https://www.linkedin.com/in/madhusudan-das-8552ba196"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-linkedin fa-3x linkedin hover:text-blue-500"></i>
            </a>
            <a
              href="https://github.com/Xdev200"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-github fa-3x github hover:text-blue-500"></i>
            </a>
            <a
              href="https://twitter.com/xdev_200"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-twitter-square fa-3x twitter hover:text-blue-500"></i>
            </a>
            <a
              href="https://www.instagram.com/xdev200/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <i className="fab fa-instagram fa-3x instagram hover:text-blue-500"></i>
            </a>
          </div>
        </div>
    )
}
