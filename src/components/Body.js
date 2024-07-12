import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="bg-gray-100 mt-20 min-h-screen overflow-hidden">
      {/* Header Section */}
      <header className="bg-green-50 text-black py-8">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Unlocking the Gates to Knowledge, One Click at a Time.
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Welcome to{" "}
            <Link className="text-green-700" to="/">
              NET CS
            </Link>
            , where curiosity meets opportunity, and learning transcends
            boundaries.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-12">
        {/* Image and Text Section */}
        <section className="flex items-center justify-between mb-16">
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-2xl text-green-500 font-serif font-bold leading-relaxed mb-8">
              "Unlock the doors to success by starting your learning journey
              with our comprehensive resources."
            </p>
            <Link
              to="/login"
              className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full transition duration-300"
            >
              Get Started
            </Link>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto rounded-lg shadow-xl"
              src="https://plus.unsplash.com/premium_photo-1671069848075-c9faefe4df18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZHlpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Welcome Image"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What we offers
          </h2>
          <div className="w-3/6 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-1 mb-12 ml-96"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature Card */}
            <Link to="/pyqP2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-60 object-cover"
                  src="https://elearnbuzz.net/wp-content/uploads/2019/11/ELearnBuzz-Previous-Years-Questions.jpg"
                  alt="placeholder"
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Previous Year Questions (PYQ)
                  </p>
                  <p className="text-gray-600">
                    Access a vast collection of previous year questions for
                    comprehensive preparation.
                  </p>
                </div>
              </div>
            </Link>
            {/* Feature Card */}
            <Link to="/mocktest1">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-60 object-cover"
                  src="https://www.lotus-qa.com/wp-content/uploads/2020/02/testing.jpg"
                  alt="placeholder"
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Free Mock Exams
                  </p>
                  <p className="text-gray-600">
                    Practice with our free mock exams to assess your knowledge
                    and improve your skills.
                  </p>
                </div>
              </div>
            </Link>
            {/* Feature Card */}
            <Link to="/study-notes">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-60 object-cover"
                  src="https://assets.teenvogue.com/photos/58868fac5cd1193a662d056d/master/pass/04.png"
                  alt="placeholder"
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Free Study Notes
                  </p>
                  <p className="text-gray-600">
                    Explore our curated collection of study notes covering
                    essential topics for your exam preparation.
                  </p>
                </div>
              </div>
            </Link>
            {/* Additional Feature Cards */}
            <Link to="/ebooks">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-60 object-cover"
                  src="https://shoutem.com/wp-content/uploads/2022/04/Who-Can-Use-eBook-App-Builder-740x457.jpg"
                  alt="placeholder"
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    e books
                  </p>
                  <p className="text-gray-600">
                  eBooks are digital publications designed to be read on various electronic devices. 
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/syllabuspaper2">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-60 object-cover"
                  src="https://www.eduvast.com/wp-content/uploads/2023/08/png_20230812_122721_0000-1536x864.jpg"
                  alt="placeholder"
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Syllabus
                  </p>
                  <p className="text-gray-600">
                    Detailed syllabus for Paper1 and Paper2 for UGC net covering each topic
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/experiment">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer">
                <img
                  className="w-full h-60 object-cover"
                  src="https://image.shutterstock.com/image-vector/word-cloud-computer-science-related-260nw-314781404.jpg"
                  alt="placeholder"
                />
                <div className="p-6">
                  <p className="text-xl font-bold text-gray-800 mb-2">
                    Subjects
                  </p>
                  <p className="text-gray-600">
                    covering  all 10 units of cs branch with topics and subtopics
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
