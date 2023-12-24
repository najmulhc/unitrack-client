const NotFound = () => {
  return (
    <main className=" h-screen   flex justify-center items-center flex-col">
      <img
        src="https://draculatheme.com/images/hero/dracula-icon.svg"
        alt="Dracula face"
      />
      <div className="prose">
        <h1 className="text-error">The page does not exist!</h1>
      </div>
    </main>
  );
};

export default NotFound;
