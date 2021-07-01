export const Container = ({ libraryComponent }) => {
  return (
    <div className="common flex  items-center justify-center p-4 mb-10">
      <div className="flex flex-col  shadow-md rounded-lg mt-4 p-4 border-t-4 border-blue-500 w-full">
        {libraryComponent}
      </div>
    </div>
  );
};
