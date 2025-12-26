import errorImage from "../assets/error-img.svg";

const ErrorPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <img
        src={errorImage}
        alt="Error 404 Not Found Illustration"
        className="w-4/5 object-cover md:w-1/2 lg:w-1/3"
      />
      <h2 className="text-3xl font-bold lg:text-4xl">
        Oops, something went wrong.
      </h2>
      <p className="text-sm font-medium lg:text-lg">
        An unexpected error occurred. We're looking into it.
      </p>
    </div>
  );
};

export default ErrorPage;
