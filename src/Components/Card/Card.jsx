export const Card = ({ libraryComponent }) => {
  return (
    <div className="common flex flex-row   ">
      <div className="shadow-md rounded-lg mt-4 p-4 border-t-4 border-blue-500">
        {libraryComponent}
      </div>
    </div>
  );
};
