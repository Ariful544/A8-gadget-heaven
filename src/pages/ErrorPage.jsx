const ErrorPage = () => {
  return (
    <div className="text-center my-32">
      <h1 className="text-5xl font-medium">404</h1>
      <p className="text-xl my-4">
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" className="text-blue-500">
        Go to Home
      </a>
    </div>
  );
};

export default ErrorPage;
