const Card = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React jobs and start your career today
          </p>
          <a
            href="/jobs.html"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Jobs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Card;
