export const Contact = () => {
    return (
        <div className='absolute right-4 bottom-4  border rounded-full  '>
             <div className="flex flex-col items-center  p-4">
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
