import React, { useState } from "react";

import {
  Search,
  Cog,
  Bell,
  Download,
  Plus,
  DownArrow,
  Delete,
  Edit,
  DownAngle,
  Upload,
} from "../assets/images/svg.js";
function DribbleChat() {
  const [selectedTab, setSelectedTab] = useState("Team");
  const [checkedElements, setCheckedElements] = useState([]);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [addingUser, setAddingUser] = useState(false);
  const [newData, setNewData] = useState({
    name: "",
    status: "",
    email: "",
    image: "dp.png",
    teams: [],
  });
  const [data, setData] = useState([
    {
      id: 1,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
    {
      id: 2,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design", "Product"],
    },
    {
      id: 3,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Offline",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
    {
      id: 4,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
    {
      id: 5,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
    {
      id: 6,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
    {
      id: 7,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
    {
      id: 8,
      name: "Olivia Rhye",
      username: "@olivia",
      image: "dp.png",
      status: "Active",
      email: "abcd@gmail.com",
      teams: ["Design"],
    },
  ]);

  const teams = ["Design", "Product"];
  return (
    <div className="bg-white">
      <div className="py-5 px-20 border-b border-slate-200">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <img src="./assets/images/logo.png" alt="dp" className="h-7" />
            <p className="opensans-semibold text-sm mx-3 cursor-pointer">
              Home
            </p>
            <p className="opensans-semibold text-sm mx-3 cursor-pointer">
              Dashboard
            </p>
            <p className="opensans-semibold text-sm mx-3 cursor-pointer">
              Projects
            </p>
            <p className="opensans-semibold text-sm mx-3 cursor-pointer">
              Tasks
            </p>
            <p className="opensans-semibold text-sm mx-3 cursor-pointer">
              Reporting
            </p>
            <p className="opensans-semibold text-sm mx-3 cursor-pointer">
              Users
            </p>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-slate-500 cursor-pointer mx-1.5">
              <Search />
            </div>
            <div className="text-slate-700 cursor-pointer mx-1.5 p-1 bg-slate-100 rounded">
              <Cog />
            </div>
            <div className="text-slate-600 cursor-pointer mx-1.5 p-1">
              <Bell />
            </div>
            <div className="text-slate-600 cursor-pointer mx-1.5 p-1">
              <img
                src="./assets/images/dp.png"
                alt="dp"
                className="border rounded-full h-7"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-20 px-20">
        <p className="text-2xl nunito-bold mb-4">Settings</p>
        <div className="text-xs flex flex-row items-center opensans-semibold text-slate-600 border-b border-slate-200">
          <div
            className={
              "mr-3 pb-4 cursor-pointer" +
              (selectedTab == "My details"
                ? " border-b-2 border-slate-700"
                : "")
            }
            onClick={() => {
              setSelectedTab("My details");
            }}
          >
            My details
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Profile" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("Profile");
            }}
          >
            Profile
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Password" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("Password");
            }}
          >
            Password
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Team" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("Team");
            }}
          >
            Team
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Plan" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("Plan");
            }}
          >
            Plan
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Billing" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("Billing");
            }}
          >
            Billing
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Email" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("Email");
            }}
          >
            Email
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "Notifications"
                ? " border-b-2 border-slate-700"
                : "")
            }
            onClick={() => {
              setSelectedTab("Notifications");
            }}
          >
            Notifications
          </div>
          <div
            className={
              "mx-3 pb-4 cursor-pointer" +
              (selectedTab == "API" ? " border-b-2 border-slate-700" : "")
            }
            onClick={() => {
              setSelectedTab("API");
            }}
          >
            API
          </div>
        </div>
      </div>
      <div className="py-10 px-20">
        <div className="border border-slate-200 rounded">
          <div className="flex flex-row justify-between items-center py-4 px-4 border-b-2 border-slate-200">
            <div className="flex flex-row items-center">
              <p className="nunito-bold text-lg">Team members</p>
              <div className="flex items-center rounded-full h-7 ml-2 px-2 text-xs nunito-bold bg-slate-100 text-slate-600">
                48 users
              </div>
            </div>
            <div className="flex flex-row items-center">
              <button className="rounded-lg flex items-center h-10 px-4 bg-white border-2 border-slate-200 mr-4 cursor-pointer">
                <div className="flex flex-row items-center">
                  <Download />
                  <p className="sm text-black ml-2">Download CSV</p>
                </div>
              </button>
              <button className="rounded-lg flex items-center h-10 px-4 bg-black cursor-pointer">
                <div className="flex flex-row items-center">
                  <Plus />
                  <p
                    className="sm text-white ml-2"
                    onClick={() => {
                      setAddingUser(!addingUser);
                    }}
                  >
                    Add user
                  </p>
                </div>
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-slate-500 opensans-semibold text-xs text-left">
                <th colspan={1} className="py-3 pl-2">
                  <div className="flex flex-row items-center">
                    <div>
                      <input
                        type="checkbox"
                        id="name"
                        name="name"
                        value="name"
                        checked={checkedElements.length == data.length}
                        class="opacity-0 absolute h-4 w-4 cursor-pointer"
                        onChange={() => {
                          if (checkedElements.length == data.length) {
                            setCheckedElements([]);
                          } else {
                            setCheckedElements(data.map((d) => d.id));
                          }
                        }}
                      />
                      <div class="bg-white border rounded-md border-slate-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer">
                        <svg
                          class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                          version="1.1"
                          viewBox="0 0 17 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <g
                              transform="translate(-9 -11)"
                              fill="#1F73F1"
                              fill-rule="nonzero"
                            >
                              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </th>
                <th colspan={5} className="py-3 pl-2">
                  <p>Name</p>
                </th>
                <th colspan={3} className="py-3 pl-2">
                  <div className="flex flex-row items-center">
                    <p>Status</p>
                    <DownArrow />
                  </div>
                </th>
                <th colspan={4} className="py-3 pl-2">
                  Email address
                </th>
                <th colspan={4} className="py-3 pl-2">
                  Teams
                </th>
                <th colspan={3}></th>
              </tr>
            </thead>
            <tbody>
              {addingUser && (
                <tr>
                  <td colspan={1}></td>
                  <td colspan={5} className="py-3 pl-2 text-sm nunito-bold">
                    <div className="flex flex-row items-center flex flex-row max-rw-fit items-center">
                      <input
                        type="text"
                        className="h-10 border border-slate-200 rounded-sm p-2"
                        placeholder="Name"
                        onChange={(e) => {
                          setNewData((prevData) => ({
                            ...prevData,
                            name: e.target.value,
                            id: data.length,
                            username: e.target.value.split(" ")[0],
                          }));
                        }}
                      />
                    </div>
                  </td>
                  <td colspan={3} className="py-3 pl-2 text-sm nunito-bold">
                    <div className="relative flex flex-row items-center flex flex-row max-rw-fit items-center">
                      <button
                        id="dropdownDefault"
                        data-dropdown-toggle="dropdown"
                        class="bg-slate-200 hover:bg-slate-500 focus:ring-2 focus:outline-none focus:ring-slate-300 font-sm rounded-lg text-sm text-black px-4 py-2.5 text-center inline-flex items-center dark:bg-slate-200 hover:text-white dark:hover:bg-slate-400 dark:focus:ring-slate-500"
                        type="button"
                        onClick={() => {
                          setStatusDropdown(!statusDropdown);
                        }}
                      >
                        {newData.status && newData.status.length > 0
                          ? newData.status
                          : "Status"}{" "}
                        <DownAngle />
                      </button>
                      {statusDropdown && (
                        <div
                          id="dropdown"
                          class="absolute z-10 top-12 bg-white divide-y rounded shadow w-44 dark:bg-gray-300 text-black"
                        >
                          <ul
                            class="py-1"
                            aria-labelledby="dropdownDefault"
                            className="bg-slate-100 border border-slate-400"
                          >
                            <li
                              onClick={(e) => {
                                setStatusDropdown(false);
                                setNewData((prevData) => {
                                  return {
                                    ...prevData,
                                    status: "Active",
                                  };
                                });
                              }}
                              className="p-2 border-b border-slate-400 cursor-pointer"
                            >
                              Active
                            </li>
                            <li
                              onClick={(e) => {
                                setStatusDropdown(false);
                                setNewData((prevData) => {
                                  return {
                                    ...prevData,
                                    status: "Offline",
                                  };
                                });
                              }}
                              className="p-2 cursor-pointer"
                            >
                              Offline
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                  <td colspan={4} className="py-3 pl-2 text-sm nunito-bold">
                    <div className="flex flex-row items-center flex flex-row max-rw-fit items-center">
                      <input
                        type="text"
                        className="h-10 border border-slate-200 rounded-sm p-2"
                        placeholder="Email address"
                        onChange={(e) => {
                          setNewData((prevData) => ({
                            ...prevData,
                            email: e.target.value,
                          }));
                        }}
                      />
                    </div>
                  </td>
                  <td colspan={4} className="py-3 pl-2 text-sm nunito-bold">
                    <div className="flex flex-row items-center flex flex-row max-rw-fit items-center">
                      {teams.map((t, index) => (
                        <div
                          onClick={() => {
                            let newDataTeams = [...newData.teams];
                            if (newDataTeams.includes(t)) {
                              newDataTeams = newDataTeams.filter(
                                (nd) => nd != t
                              );
                            } else {
                              newDataTeams.push(t);
                            }
                            setNewData((prevState) => {
                              return { ...prevState, teams: newDataTeams };
                            });
                          }}
                          className={
                            "flex flex-row items-center px-3 h-7 rounded-full mr-1 cursor-pointer border " +
                            (newData.teams.includes(t)
                              ? t == "Design"
                                ? "bg-violet-50 text-violet-500 border-white"
                                : "bg-blue-50 text-blue-500 border-white"
                              : "bg-white text-black border-slate-300")
                          }
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td colspan={3} className="py-3 pl-2">
                    <div className="flex flex-row">
                      <div
                        className="text-slate-500 mx-3 cursor-pointer"
                        onClick={() => {
                          if (
                            newData.name &&
                            newData.email &&
                            newData.teams &&
                            newData.status &&
                            newData.name.length > 0 &&
                            newData.email.length > 0 &&
                            newData.teams.length > 0 &&
                            newData.status.length > 0
                          ) {
                            setData((prevState) => {
                              return [...prevState, newData];
                            });
                            setAddingUser(false);
                          }
                        }}
                      >
                        <Upload />
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {data.map((rowdata, index) => {
                return (
                  <tr>
                    <td colspan={1} className="py-3 pl-2">
                      <div className="flex flex-row items-center">
                        <div>
                          <input
                            type="checkbox"
                            id="name"
                            name={rowdata.id}
                            value={rowdata.id}
                            checked={checkedElements.includes(rowdata.id)}
                            onChange={() => {
                              var checkedE = [...checkedElements];
                              if (checkedE.includes(rowdata.id)) {
                                checkedE = checkedE.filter(
                                  (c) => c != rowdata.id
                                );
                              } else {
                                checkedE.push(rowdata.id);
                              }
                              setCheckedElements(checkedE);
                            }}
                            class="opacity-0 absolute h-4 w-4 cursor-pointer"
                          />
                          <div class="bg-white border rounded-md border-slate-300 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer">
                            <svg
                              class="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                              version="1.1"
                              viewBox="0 0 17 12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g fill="none" fill-rule="evenodd">
                                <g
                                  transform="translate(-9 -11)"
                                  fill="#1F73F1"
                                  fill-rule="nonzero"
                                >
                                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td colspan={5} className="py-3 pl-2">
                      <div className="flex flex-row items-center">
                        <img
                          src="./assets/images/dp.png"
                          alt="dp"
                          className="border rounded-full h-10"
                        />
                        <div className="flex flex-col ml-2">
                          <p className="nunito-semibold text-sm">
                            {rowdata.name}
                          </p>
                          <p className="text-sm nunito-semibold text-slate-400">
                            {rowdata.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      colspan={3}
                      className="py-3 pl-2 nunito-semibold text-sm"
                    >
                      <div
                        className={
                          "flex flex-row h-7 max-w-fit px-3 items-center rounded-full " +
                          (rowdata.status == "Active"
                            ? "bg-green-50 text-green-600"
                            : "bg-slate-100 text-slate-700")
                        }
                      >
                        <div
                          className={
                            "h-2 w-2 mr-2 rounded " +
                            (rowdata.status == "Active"
                              ? "bg-green-600"
                              : "bg-slate-700")
                          }
                        ></div>
                        {rowdata.status}
                      </div>
                    </td>
                    <td colspan={4} className="py-3 pl-2">
                      <p className="text-sm nunito-semibold text-slate-600">
                        {rowdata.email}
                      </p>
                    </td>
                    <td colspan={4} className="py-3 pl-2 text-sm nunito-bold">
                      <div className="flex flex-row items-center flex flex-row max-rw-fit items-center">
                        {rowdata.teams.map((team, index) => {
                          return (
                            <div
                              className={
                                "flex flex-row items-center px-3 h-7 rounded-full mr-1 " +
                                (team == "Design"
                                  ? "bg-violet-50 text-violet-500"
                                  : "bg-blue-50 text-blue-500")
                              }
                            >
                              {team}
                            </div>
                          );
                        })}
                      </div>
                    </td>
                    <td colspan={3} className="py-3 pl-2">
                      <div className="flex flex-row">
                        <div
                          className="text-slate-500 mx-3 cursor-pointer"
                          onClick={() => {
                            var data1 = [...data];
                            data1 = data1.filter((d) => d.id != rowdata.id);
                            setData(data1);
                          }}
                        >
                          <Delete />
                        </div>
                        <div className="text-slate-500 mx-3 cursor-pointer">
                          <Edit />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DribbleChat;
