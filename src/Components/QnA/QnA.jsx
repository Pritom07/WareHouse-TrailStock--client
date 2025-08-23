import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { BiLogoMongodb } from "react-icons/bi";
import { FaHandPointRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import "./QnA.css";

const QnA = () => {
  return (
    <div className="bg-amber-100 min-h-screen w-full px-3 py-3 xs:px-4 xs:py-4 sm:px-6 md:px-8 lg:px-10 md:py-8 lg:py-11 blogs-container">
      <fieldset className="border-2 border-green-500 rounded-2xl xs:rounded-3xl px-3 py-3 xs:px-4 xs:py-4 sm:px-6 sm:py-5 md:px-8 blogs-fieldset">
        <legend className="font-vibes text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold px-2 blogs-legend">
          Question_Answering
        </legend>

        <section>
          <div className="bg-black text-white rounded-lg xs:rounded-xl px-3 py-2 xs:px-4 question-header">
            <h3 className="font-bebas text-base xs:text-lg sm:text-xl leading-tight">
              Q1 : Difference between Javascript and NodeJS ?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-5 bg-slate-50 rounded-lg xs:rounded-xl px-2 py-2 xs:px-3 xs:py-3 sm:px-4 sm:py-4 font-bebas text-xs xs:text-sm sm:text-lg md:text-xl mt-2 answer-section">
            <h3 className="hidden sm:block">Ans:</h3>
            <div className="overflow-x-auto rounded-box border border-slate-300 w-full">
              <table className="table font-bebas text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl min-w-full">
                <thead>
                  <tr className="border border-slate-300">
                    <th className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-2 py-2">
                      Aspect
                    </th>
                    <th className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-2 py-2">
                      Javascript{" "}
                      <span className="inline-flex items-center ml-1 text-yellow-500">
                        <TbBrandJavascript className="inline ml-0.5 text-sm xs:text-base sm:text-lg md:text-xl" />
                      </span>
                    </th>
                    <th className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-2 py-2">
                      NodeJS{" "}
                      <span className="inline-flex items-center ml-1 text-green-700">
                        <DiNodejs className="inline ml-0.5 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-4xl" />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-slate-300">
                    <td className="w-1/4 px-2 py-2 font-medium">Definition</td>
                    <td className="px-2 py-2 leading-tight">
                      A programming language mainly used for web development.
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      A runtime environment for executing JavaScript outside the
                      browser.
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Runs in</td>
                    <td className="px-2 py-2 leading-tight">
                      Browser (Chrome, Firefox, etc.)
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Server or terminal (built on Chrome V8 engine).
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Purpose</td>
                    <td className="px-2 py-2 leading-tight">
                      Frontend tasks like DOM manipulation, form validation,
                      animations.
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Backend tasks like server creation, database handling,
                      file operations.
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">
                      File System Access
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Cannot access directly.
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Can access files, system, OS.
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Networking</td>
                    <td className="px-2 py-2 leading-tight">
                      Limited to browser APIs.
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Can handle HTTP requests, sockets, etc.
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Use Case Example</td>
                    <td className="px-2 py-2 leading-tight">
                      Making a button interactive on a website.
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Building an API or running a server.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-4 xs:mt-5 sm:mt-8">
          <div className="bg-black text-white rounded-lg xs:rounded-xl px-3 py-2 xs:px-4 xs:py-3 sm:px-5 question-header">
            <h3 className="font-bebas text-base xs:text-lg sm:text-xl leading-tight">
              Q2 : When should you use NodeJS and when should you use MongoDB ?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-5 bg-slate-50 rounded-lg xs:rounded-xl px-2 py-2 xs:px-3 xs:py-3 sm:px-4 sm:py-4 font-bebas text-xs xs:text-sm sm:text-lg md:text-xl mt-2 answer-section">
            <h3 className="hidden sm:block">Ans:</h3>
            <div className="text-justify leading-relaxed">
              <p className="mb-2 xs:mb-3">
                <span className="text-green-700 font-semibold">Node.js</span>
                <span className="inline-flex items-center ml-1 text-green-700">
                  <DiNodejs className="inline ml-0.5 text-lg xs:text-xl md:text-2xl lg:text-4xl" />
                </span>
                is a JavaScript runtime environment that lets you run JavaScript
                outside the browser. It's mainly used for building fast,
                scalable backend servers and APIs.
              </p>
              <p className="mb-2 xs:mb-3">
                <span className="text-green-700 font-semibold">MongoDB</span>
                <span className="inline-flex items-center ml-1">
                  <BiLogoMongodb className="inline ml-0.5 text-sm xs:text-base sm:text-lg" />
                </span>
                is a NoSQL database that stores data in JSON-like documents.
                It's used for flexible, scalable data storage in modern
                applications.
              </p>
              <div className="flex flex-col mt-2 xs:mt-3">
                <p className="underline mb-1 font-medium">
                  <span className="inline-flex items-center mr-1">
                    <GoDotFill className="inline mr-0.5 text-xs xs:text-sm" />
                  </span>
                  When to Use Node.js :
                </p>
                <div className="ml-3 xs:ml-4 sm:ml-6">
                  <div className="flex flex-col space-y-1">
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Real-time applications (chat apps, gaming servers)
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      API development
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Streaming services (video/audio)
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Single-page applications (SPA) backend
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Microservices
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Cross-platform apps (with frameworks like Electron)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-2 xs:mt-3">
                <p className="underline mb-1 font-medium">
                  <span className="inline-flex items-center mr-1">
                    <GoDotFill className="inline mr-0.5 text-xs xs:text-sm" />
                  </span>
                  When to Use MongoDB :
                </p>
                <div className="ml-3 xs:ml-4 sm:ml-6">
                  <div className="flex flex-col space-y-1">
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Handling unstructured / semi-structured data
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Large datasets with frequent changes
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Real-time analytics
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Applications needing scalability
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      IoT, social media, content management systems
                    </span>
                    <span className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Fast prototyping
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 xs:mt-5 sm:mt-8">
          <div className="bg-black text-white rounded-lg xs:rounded-xl px-3 py-2 xs:px-4 xs:py-3 sm:px-5 question-header">
            <h3 className="font-bebas text-base xs:text-lg sm:text-xl leading-tight">
              Q3 : Difference between SQL and NoSQL Database ?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 xs:gap-3 sm:gap-5 bg-slate-50 rounded-lg xs:rounded-xl px-2 py-2 xs:px-3 xs:py-3 sm:px-4 sm:py-4 font-bebas text-xs xs:text-sm sm:text-lg md:text-xl mt-2 answer-section">
            <h3 className="hidden sm:block">Ans:</h3>
            <div className="overflow-x-auto rounded-box border border-slate-300 w-full">
              <table className="table font-bebas text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl min-w-full">
                <thead>
                  <tr className="border border-slate-300">
                    <th className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-2 py-2">
                      Aspect
                    </th>
                    <th className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-2 py-2">
                      SQL Database
                    </th>
                    <th className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl px-2 py-2">
                      NoSQL Database
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-slate-300">
                    <td className="w-1/4 px-2 py-2 font-medium">Full Form</td>
                    <td className="px-2 py-2 leading-tight">
                      Structured Query Language
                    </td>
                    <td className="px-2 py-2 leading-tight">Not Only SQL</td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Data Model</td>
                    <td className="px-2 py-2 leading-tight">
                      Table-based (rows & columns)
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Document, Key-Value, Column, or Graph-based
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Schema</td>
                    <td className="px-2 py-2 leading-tight">
                      Fixed schema (predefined structure)
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Flexible schema (can store unstructured data)
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Scalability</td>
                    <td className="px-2 py-2 leading-tight">
                      Vertically scalable (increase power of a single server)
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Horizontally scalable (add more servers)
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Query Language</td>
                    <td className="px-2 py-2 leading-tight">
                      SQL (standardized)
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Varies by database (MongoDB uses JSON-like queries, etc.)
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Best For</td>
                    <td className="px-2 py-2 leading-tight">
                      Complex queries, structured data, transactions (ACID)
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      Large volumes of unstructured/semi-structured data, fast
                      development
                    </td>
                  </tr>
                  <tr className="border border-slate-300">
                    <td className="px-2 py-2 font-medium">Examples</td>
                    <td className="px-2 py-2 leading-tight">
                      MySQL, PostgreSQL, Oracle, SQL Server
                    </td>
                    <td className="px-2 py-2 leading-tight">
                      MongoDB, Cassandra, CouchDB, Redis
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-4 xs:mt-5 sm:mt-8">
          <div className="bg-black text-white rounded-lg xs:rounded-xl px-3 py-2 xs:px-4 xs:py-3 sm:px-5 question-header">
            <h3 className="font-bebas text-base xs:text-lg sm:text-xl leading-tight">
              Q4 : What is the purpose of JWT and how does it work?
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 bg-slate-50 rounded-lg xs:rounded-xl px-2 py-2 xs:px-3 xs:py-3 sm:px-4 sm:py-4 font-bebas text-xs xs:text-sm sm:text-lg md:text-xl mt-2 answer-section">
            <h3 className="hidden sm:block">Ans:</h3>
            <div className="text-justify leading-relaxed">
              <p className="mb-2 xs:mb-3">
                JWT is mainly used for authentication and authorization in web
                applications.
              </p>
              <p className="mb-2 xs:mb-3">
                <span className="inline-flex items-center mr-1">
                  <GoDotFill className="inline mr-0.5 text-xs xs:text-sm" />
                </span>
                <span className="font-semibold text-green-700 underline">
                  Authentication :
                </span>{" "}
                After a user logs in successfully (with email/password, Google,
                GitHub, etc.), the server generates a token (JWT) that proves
                the user's identity.
              </p>
              <p className="mb-2 xs:mb-3">
                <span className="inline-flex items-center mr-1">
                  <GoDotFill className="inline mr-0.5 text-xs xs:text-sm" />
                </span>
                <span className="font-semibold text-green-700 underline">
                  Authorization :
                </span>{" "}
                The token is sent with every request to protected routes (like
                /dashboard, /profile, /orders). The server verifies the token
                before giving access.
              </p>
              <div className="flex flex-col mt-2 xs:mt-3">
                <p className="underline mb-1 xs:mb-2 font-medium">
                  How JWT Works :
                </p>
                <div className="ml-3 xs:ml-4 sm:ml-6">
                  <div className="flex flex-col space-y-1">
                    <p className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      User Login
                    </p>
                    <p className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Server Generates JWT
                    </p>
                    <p className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Token Sent to Client
                    </p>
                    <p className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Client Makes Requests
                    </p>
                    <p className="leading-tight">
                      <span className="inline-flex items-center mr-1 xs:mr-2 text-blue-500">
                        <FaHandPointRight className="inline mr-1 xs:mr-2 text-xs xs:text-sm" />
                      </span>
                      Server Verifies JWT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </fieldset>
    </div>
  );
};

export default QnA;
