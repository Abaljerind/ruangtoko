import { ScrollRestoration } from "react-router-dom";
import myself from "../assets/myself.jpg";

const AccountPage = () => {
  return (
    <section className="mx-auto max-w-lg space-y-4 lg:space-y-8">
      <ScrollRestoration />
      <h1 className="text-center font-medium text-sky-500 lg:text-2xl">
        My Account
      </h1>
      <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-gray-400 p-4 lg:p-8">
        <h2 className="lg:text-xl">Created by:</h2>
        <img
          src={myself}
          alt="my self chill"
          className="size-72 rounded-full border-4 border-gray-400 object-cover object-top"
        />
        <p className="lg:text-xl">
          <a
            href="https://github.com/Abaljerind/"
            className="font-semibold duration-300 hover:text-sky-500"
          >
            AbalJerind
          </a>
        </p>
        <p className="font-medium underline underline-offset-2 lg:text-xl">
          Frontend Developer
        </p>
      </div>
    </section>
  );
};

export default AccountPage;
