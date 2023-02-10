import {
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <section className="text-white flex justify-center items-center flex-col h-full md:h-screen">
      <h1 className="text-2xl text-center md:text-6xl mb-3 font-bold">AI Messenger</h1>
      <p className="text-sm  text-gray-400 mb-8">
        <span className="text-gray-300">Next JS 13</span>,{" "}
        <span className="text-blue-500">Tailwind CSS</span>,{" "}
        <span className="text-yellow-500">Firebase</span>,{" "}
        <span className="text-green-500">Open AI API</span>
      </p>
      <section className="flex space-y-8 md:space-y-0 md:space-x-8 justify-center items-center flex-col md:flex-row">
        {/* Examples */}
        <article>
          <section className="flex flex-col items-center justify-center mb-5">
            <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />
            <h2 className="font-bold text-xl underline decoration-blue-600 underline-offset-4 uppercase tracking-widest">
              Examples
            </h2>
            
          </section>
          <section className="space-y-2">
            <p className="infoText examplesInfo">
              Write an article on Aritficial Intelligence
            </p>
            <p className="infoText examplesInfo">
              What is a difference between Cite, Site and Sight?
            </p>
            <p className="infoText examplesInfo">What is the color of Sun?</p>
          </section>
        </article>
        {/* //Examples */}

        {/* Limitations */}
        <article>
          <section className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 text-green-600" />
            <h2 className="font-bold text-xl underline decoration-green-600 underline-offset-4 uppercase tracking-widest">
              Limitations
            </h2>
          </section>
          <section className="space-y-2">
            <p className="infoText limitationsInfo">
              May occasionally generate incorrect information.
            </p>
            <p className="infoText limitationsInfo">
              May occasionally produce harmful instructions or biased content.
            </p>
            <p className="infoText limitationsInfo">
              Limited knowledge of world and events after 2021.
            </p>
          </section>
        </article>
        {/* //Limitations */}
        {/* Capabilities */}
        <article>
          <section className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 text-purple-600" />
            <h2 className="font-bold text-xl underline decoration-purple-600 underline-offset-4 uppercase tracking-widest">
              Capabilities
            </h2>
          </section>
          <section className="space-y-2">
            <p className="infoText capabilitiesInfo">
              Use the ChatGPT Open AI model.
            </p>
            <p className="infoText capabilitiesInfo">
              Messages are stored in Firebase's Firestore.
            </p>
            <p className="infoText capabilitiesInfo">
              Toast Notifications when AI is thinking and replies.
            </p>
          </section>
        </article>
        {/* //Capabilities */}
      </section>
    </section>
  );
};

export default HomePage;
