const page = () => {
  const handleForm = async () => {
    "use server";
    console.log("hello");
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" />
        <button>Sent</button>
      </form>
    </div>
  );
};

export default page;
