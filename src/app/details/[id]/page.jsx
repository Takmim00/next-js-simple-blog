

const Details = async ({params}) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  console.log(data);

  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold text-center">
        {data.title} Details Page
      </h1>
      <div className="md:w-6/12 mx-auto my-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Title : {data.title}</h2>
            <p>
              <strong>Description : </strong>
              {data.body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
