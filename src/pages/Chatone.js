import {
  Drag,
  Search,
  Filter,
  Calendar,
  Chat,
  Stats,
  Columns,
  Like,
  Clip,
  Smile,
} from "../assets/images/svg.js";
function Chatone() {
  return (
    <div className="bg-white py-14 pl-4 md:pl-8 pr-8 xl:pr-0 ">
      <div className="mb-5">
        <div>
          <div className="flex">
            <div className="flex-1 sm:flex-none flex w-12 h-12 justify-center items-center border-slate-100 border-2 rounded-full">
              <Drag />
            </div>
            <div className="flex-[7_7_0%] sm:flex-none flex ml-3 sm:ml-5 flex-col">
              <p className="opensans-medium text-xl">
                Drag here to set row groups
              </p>
              <p className="text-slate-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-block w-full 2xl:w-3/5 lg:w-1/2 overflow-x-scroll no-scrollbar">
        <table className="inline-block w-full">
          <thead>
            <tr className="bg-seashell-500 opensans-semibold text-base">
              <th colspan={3} className="py-3 pl-2">
                <div className="w-full border-r-2 border-r-slate-300">
                  Airline Details
                </div>
              </th>
              <th colspan={2} className="py-3 pl-2">
                Invoice Details
              </th>
              <th colspan={3} className="py-3 pl-2">
                <div className="w-full border-r-2 border-r-slate-300">
                  Airline Details
                </div>
              </th>
              <th colspan={2} className="py-3 pl-2">
                Invoice Details
              </th>
            </tr>
            <tr className="opensans-medium text-base border-b-slate-200 border-b-2">
              <th colspan={1} className="py-3 pl-2">
                <div className="w-full border-r-2 border-r-slate-300">
                  Airline Name
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2 min-w-[200px]">
                <div className="w-full border-r-2 border-r-slate-300">Type</div>
              </th>
              <th colspan={1} className="py-3 pl-2 min-w-[200px]">
                <div className="w-full border-r-2 border-r-slate-300">
                  Name As Per GST Port
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2 min-w-[200px]">
                <div className="w-full border-r-2 border-r-slate-300">
                  Invoice Number
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2 w-7 min-w-[200px]">
                <div className="w-full">Invoice Date</div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="w-full border-r-2 border-r-slate-300">
                  Airline Name
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2 min-w-[200px]">
                <div className="w-full border-r-2 border-r-slate-300">Type</div>
              </th>
              <th colspan={1} className="py-3 pl-2 min-w-[200px]">
                <div className="w-full border-r-2 border-r-slate-300">
                  Name As Per GST Port
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2 min-w-[200px]">
                <div className="w-full border-r-2 border-r-slate-300">
                  Invoice Number
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2 w-7 min-w-[200px]">
                <div className="w-full">Invoice Date</div>
              </th>
            </tr>

            <tr className="opensans-medium text-base border-b-slate-200 border-b-2 opacity-60">
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between flex-row pr-4 items-center">
                  <p className="ml-2">DD-MM-YYYY</p>
                  <Calendar />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between border-r-2 border-r-slate-300 pr-4 items-center">
                  <div className="w-full flex items-center">
                    <Search />
                    <p className="ml-2">Search</p>
                  </div>
                  <Filter />
                </div>
              </th>
              <th colspan={1} className="py-3 pl-2">
                <div className="flex justify-between flex-row pr-4 items-center">
                  <p className="ml-2">DD-MM-YYYY</p>
                  <Calendar />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {Array(14)
              .fill(0)
              .map((n, i) => (
                <tr
                  key={i}
                  className="opensans-medium text-base text-black border-b-slate-200 border-b-2"
                >
                  <td colspan={1} className="pl-2">
                    <div className="flex border-r border-r-slate-300 justify-between pr-4 items-center">
                      <div className="w-full flex items-center">
                        <Drag />
                        <p className="ml-2">Indigo</p>
                      </div>
                      <div className="ml-4 opacity-60">
                        <Chat />
                      </div>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">Indian Carriers</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">Kotak Mahindra Bank</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">29AABCI2726B1ZY</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">26-06-2019</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="flex border-r border-r-slate-300 justify-between pr-4 items-center">
                      <div className="w-full flex items-center">
                        <Drag />
                        <p className="ml-2">Indigo</p>
                      </div>
                      <div className="ml-4 opacity-60">
                        <Chat />
                      </div>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">Indian Carriers</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">Kotak Mahindra Bank</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">29AABCI2726B1ZY</p>
                    </div>
                  </td>
                  <td colspan={1} className="pl-2">
                    <div className="text-black pr-4 border-r border-r-slate-300">
                      <p className="ml-2">26-06-2019</p>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="inline-block align-top bg-desert-500 p-4 sm:p-10 w-full 2xl:w-2/5 lg:w-1/2 shadow-[0_8px_20px_0_rgba(0,0,0,0.15)]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 block mb-7">
          <div className="flex flex-row h-11 items-center rounded-full bg-mercury-500 px-4">
            <div className="opacity-60">
              <Chat className="h-4 w-5" />
            </div>
            <p className="text-black opacity-60 pl-1">Chats</p>
          </div>
          <div className="flex flex-row h-11 items-center rounded-full border border-mercury-500 bg-white px-4">
            <div className="opacity-60">
              <Stats className="h-4 w-5" />
            </div>
            <p className="text-black opacity-60 pl-1">Stats</p>
          </div>
          <div className="flex flex-row h-11 items-center rounded-full border border-mercury-500 bg-white px-4">
            <div className="opacity-60">
              <Filter className="h-4 w-5" />
            </div>
            <p className="text-black opacity-60 pl-1">Filters</p>
          </div>
          <div className="flex flex-row h-11 items-center rounded-full border border-mercury-500 bg-white px-4">
            <div className="opacity-60">
              <Columns className="h-4 w-5" />
            </div>
            <p className="text-black opacity-60 pl-1">Columns</p>
          </div>
        </div>
        <p className="opensans-semibold text-xl text-black text-center mb-5">
          You, and <span className="text-cornflower-500">12 members</span> in
          chat
        </p>
        <div className="rounded-xl bg-white px-2 py-3.5 mb-4 shadow-[0_1px_5px_0_rgba(0,0,0,0.07)]">
          <div className="flex flex-row">
            <img
              src="./assets/images/dp.png"
              alt="dp"
              className="border rounded-full h-10"
            />
            <div className="flex flex-col">
              <div className="flex pl-4 flex-row pb-4">
                <div className="flex-[4_4_0%] sm:flex-[5_5_0%]">
                  <p className="opensans-semibold text-base text-black">
                    Jonus Nik
                  </p>
                  <p className="text-black text-sm opensans-medium mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do....
                  </p>
                </div>
                <p className="nunito-semibold text-xs text-chicago-500 flex-[1.5_1.5_0%] sm:flex-1">
                  10 min ago
                </p>
              </div>
              <div className="flex flex-row border-b border-b-slate-300 pb-2">
                <div className="flex flex-row">
                  <Like />
                  <p className="text-cornflower-500 opensans-semibold text-sm ml-2">
                    2 Likes
                  </p>
                </div>
                <div className="flex flex-row ml-4">
                  <p className="text-black opacity-50 opensans-semibold text-sm ml-2">
                    3 Replies
                  </p>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <img
                  src="./assets/images/dp.png"
                  alt="dp"
                  className="border rounded-full h-10"
                />
                <div className="flex flex-col">
                  <div className="flex pl-4 flex-row pb-4">
                    <div className="flex-[3_3_0%] sm:flex-[4_4_0%]">
                      <p className="opensans-semibold text-base text-black">
                        Jonus Nik
                      </p>
                      <p className="text-black text-sm opensans-medium mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do....
                      </p>
                    </div>
                    <p className="nunito-semibold text-xs text-chicago-500 flex-[1.5_1.5_0%] sm:flex-1">
                      10 min ago
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row">
                      <Like />
                      <p className="text-cornflower-500 opensans-semibold text-sm ml-1 sm:ml-2">
                        2 Likes
                      </p>
                    </div>
                    <div className="flex flex-row ml-2 sm:ml-4">
                      <p className="text-black opacity-50 opensans-semibold text-sm ml-1 sm:ml-2">
                        3 Replies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white px-2 py-3.5 mb-4 shadow-[0_1px_5px_0_rgba(0,0,0,0.07)]">
          <div className="flex flex-row">
            <img
              src="./assets/images/dp.png"
              alt="dp"
              className="border rounded-full h-10"
            />
            <div>
              <div className="flex pl-4 flex-row pb-4">
                <div className="flex-[4_4_0%] sm:flex-[5_5_0%]">
                  <p className="opensans-semibold text-base text-black">
                    Jonus Nik
                  </p>
                  <p className="text-black text-sm opensans-medium mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do....
                  </p>
                  <div className="flex flex-row">
                    <div className="flex flex-row">
                      <Like />
                      <p className="text-cornflower-500 opensans-semibold text-sm ml-2">
                        2 Likes
                      </p>
                    </div>
                    <div className="flex flex-row ml-4">
                      <p className="text-black opacity-50 opensans-semibold text-sm ml-2">
                        3 Replies
                      </p>
                    </div>
                  </div>
                </div>
                <p className="nunito-semibold text-xs text-chicago-500 flex-[1.5_1.5_0%] sm:flex-1">
                  10 min ago
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-full bg-white h-12 flex flex-row px-5 justify-between items-center border border-mercury-500">
          <p className="text-sm text-gray-500 opensans-semibold">
            Type Message
          </p>
          <div className="flex flex-row">
            <div className="mx-1">
              <Clip />
            </div>
            <div className="mx-1">
              <Smile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatone;
