"use client"
import { useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";
import NavBar from "../components/navbar/navbar";
import { Avatar, CircularProgress } from "@mui/material";
import Image from "next/image";
import CustomInput from "../components/customInput/customInput";
import { Check, CheckCircle, People, Person, Person2Rounded } from "@mui/icons-material";
import axios from "axios";
import { ToastComponent } from "../components/toastComponent/toastComponent";
const Cookies = require('js-cookie');

interface UserType {
  username: string,
  email: string,
  role: string,
  profilePhoto: string,
  user_id: string,
  twitter_id: string,
  google_id: string,
  points: number,
  updated_at: string
}

export default function Dashboard() {
  const [error, setError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setloading] = useState(false)
  const [resMessage, setResMessage] = useState('')
  const [errMessage, setErrMessage] = useState({
    type: '',
    message: ''
  })
  const [user, setUser] = useState<UserType>({
    username: "",
    email: "",
    role: "",
    profilePhoto: "",
    user_id: "",
    twitter_id: "",
    google_id: "",
    points: 0,
    updated_at: ""
  })
  const [completeTask, setCompleteTask] = useState<string[]>([]);
  const [uncompleteTask, setUnCompleteTask] = useState<string[]>([]);
  const [allTasks, setAllTasks] = useState<string[]>([]);
  const [showCompletedTask, setShowCompletedTask] = useState(false)
  const [completedATask, setCompletedATask] = useState(0);
  const [selected, setSelected] = useState(0)
  let encrypt = Cookies.get('encrypt_id');

  const [selectedTask, setSelectedTask] = useState('');

  const [selectTaskErr, setSelectTaskError] = useState({ id: '', status: false });

  console.log(selectTaskErr.id)

  useEffect(() => {
    if (!encrypt) {
      location.href = '/auth'
      return
    }
    let userDetails = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://evp-user-service-cea2e4kz5q-uc.a.run.app/get-user-details',
        headers: {
          'Authorization': `${encrypt}`
        }
      };
      try {
        const response = await axios.request(config);
        setUser({
          username: response.data.username,
          email: response.data.email,
          role: response.data.role,
          profilePhoto: response.data.profilePhoto,
          user_id: response.data.user_id,
          twitter_id: response.data.twitter_id,
          google_id: response.data.google_id,
          points: response.data.points,
          updated_at: response.data.updated_at
        });
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
        } else {
          console.log(`An error occurred: ${error.message}`);
        }
      }

    }

    let getCompleteTask = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://evp-user-task-service-cea2e4kz5q-uc.a.run.app/user-completed-tasks?page=1&limit=10',
        headers: {
          'Authorization': `${encrypt}`
        }
      };
      try {
        const response = await axios.request(config);
        // setCompleteTask(response.data);
        getAllCompletedTask(response.data)

      } catch (error: any) {
        if (error.response && error.response.status === 400) {
        } else {
          console.log(`An error occurred: ${error.message}`);
        }
      }

    }
    let getUncompleteTask = async () => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://evp-user-task-service-cea2e4kz5q-uc.a.run.app/user-uncompleted-tasks?page=1&limit=10',
        headers: {
          'Authorization': `${encrypt}`
        }
      };
      try {
        const response = await axios.request(config);
        // setUnCompleteTask(response.data);
        getAllUnCompletedTask(response.data)
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
        } else {
          console.log(`An error occurred: ${error.message}`);
        }
      }

    }
    let getAllCompletedTask = async (completed_items: any) => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://evp-task-service-cea2e4kz5q-uc.a.run.app/list-tasks-with-pagination?page=1&limit=10',
        headers: {
          'Authorization': `${encrypt}`
        }
      };
      try {
        const response = await axios.request(config);
        let collatedTask = response.data
        const filteredTasks = collatedTask.filter((task: any) => {
          let task_item = completed_items.some((task_completed: any) => task.task_id === task_completed.task_id);
          return task_item;
        });
        setCompleteTask(filteredTasks)
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
        } else {
          console.log(`An error occurred: ${error.message}`);
        }
      }

    }
    let getAllUnCompletedTask = async (uncompleted_items: any) => {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://evp-task-service-cea2e4kz5q-uc.a.run.app/list-tasks-with-pagination?page=1&limit=10',
        headers: {
          'Authorization': `${encrypt}`
        }
      };
      try {
        const response = await axios.request(config);
        let collatedTask = response.data
        const filteredTasks = collatedTask.filter((task: any) => {
          let task_item = uncompleted_items.some((task_completed: any) => task.task_id === task_completed.task_id);
          return task_item;
        });
        setUnCompleteTask(filteredTasks)
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
        } else {
          console.log(`An error occurred: ${error.message}`);
        }
      }

    }
    userDetails()
    getCompleteTask()
    getUncompleteTask();
  }, [completedATask])
  let tasksCount = [
    {
      number: completeTask.length,
      image: '/svg/roadmap_1.svg',
      status: 'Completed',
      iconType: 'light',
    },
    {
      number: uncompleteTask.length,
      image: '/svg/roadmap_2.svg',
      status: 'Uncompleted',
      iconType: 'light',
    },
    {
      number: completeTask.length + uncompleteTask.length,
      image: '/svg/roadmap_3.svg',
      status: 'Total',
      iconType: 'light',
    },

  ]

  const [userName, setUserName] = useState('')

  const markTaskCompleted = async (taskId: string, tweet_link: string, index: any) => {
    setSelected(index)
    if (selectedTask !== taskId) {
      setSelectTaskError({ id: taskId, status: true })
      setTimeout(() => {
        setSelectTaskError({ id: '', status: false });
      }, 2000)
      console.log('task not selected')
      return false;
    }
    setloading(true)
    if (userName == '') {
      setError(true);
      setloading(false);

      setErrMessage({ type: 'error', message: 'Kindly add the username' });
      return false
    }

    let params = {
      full_name: user.username,
      email: user.email || user.twitter_id || user.google_id,
      tweet_link: tweet_link,
      tweeter_username: userName,
      tg_username: userName,
      task_id: taskId,
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://evp-user-task-service-cea2e4kz5q-uc.a.run.app/user-submit-task',
      headers: {
        'Authorization': `${encrypt}`
      },
      data: params
    };
    try {
      const response = await axios.request(config);
      setError(true);
      setErrMessage({ type: 'success', message: response.data.message });
      setloading(false);
      setCompletedATask(Math.random() + 1)
      setTimeout(() => {
        setError(false);
      }, 2000)
    } catch (error: any) {
      if (error.response) {
        setError(true);
        setloading(false);
        setErrMessage({ type: 'error', message: error?.response.data.message });
        setTimeout(() => {
          setError(false);
        }, 2000)
      } else {
        console.log(`An error occurred: ${error.message}`);
      }
    }
  }


  return (
    <div className="bg-contain bg-[url('/images/dashboardbg.png')] h-full w-full">
      {error &&
        <ToastComponent addOnStart={<CheckCircle color="inherit" />} content={errMessage.message} type={errMessage.type} />
      }
      <NavBar />
      <div className="pt-28 w-11/12 m-auto text-[#EDF9D0] font-kanit">
        {/* Dashboard airdrop and avatar */}
        <div className="p-4 md:p-20 ">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="order-2 md:order-1" >
              <h1 className="font-gameria text-center md:text-start text-[32px] md:text-[52px]">AIRDROP QUESTS</h1>
            </div>
            <div className="order-1 md:order-2 mb-3 flex flex-col md:flex-row text-center md:text-start items-center gap-x-4" >
              <div className="order-2 md:order-1">
                <p>{user?.username}</p>
                <p className="text-[12px]">{user?.google_id || user?.twitter_id || user?.email}</p>
              </div>
              <Avatar
                className="order-1 md:order-2"
                sx={{ width: 62, height: 62 }}
                src={user?.profilePhoto}
              />
            </div>
          </div>
          <p className="text-[16px] text-center md:text-start">Complete simple missions and get rewarded in $PUMP. Own a slice of the ecosystem.</p>
        </div>
        {/* Dashboard Items */}
        <div className="md:flex  md:flex-row  md:gap-x-14 px-4 md:w-11/12 m-auto  pb-20  items-start justify-between">
          <div className="basis-1/4">
            <div >
              <h1 className="font-gameria text-[32px] mb-[24px]">$PUMP BALANCE</h1>
            </div>

            <div className="bg-gradient-to-r from-[#A5E314]/50 to-black p-0.5 rounded-3xl">
              <div className="md:h-[261px] relative w-full md:w-[411px] bg-black/80 px-[24.8px] py-[24px] space-y-4  rounded-3xl">
                <p className="text-[15px] font-[300]">Your balance today</p>
                <h4 className="text-[45px] font-gameria font-[500]">{Number(user?.points).toLocaleString()}</h4>
                <Image
                  className="absolute top-[10px] right-[20px]"
                  src={'/images/coins.png'}
                  width={80}
                  height={80}
                  priority
                  alt="" />
                <div>
                  <a href="/withdraw" className="navbar-auth-btn">Withdraw</a>
                </div>

                <p className="text-[15px] font-[300]">Claim or stake tokens at TGE</p>

              </div>
            </div>

          </div>
          <div className="basis-3/4">
            <h1 className="font-gameria text-[24px] mb-[24px] text-start md:text-start">YOUR TASK</h1>
            <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-5 pt-3">
              {tasksCount.map((task, index) => {
                let gradient = index % 2 != 0 ? 'bg-gradient-to-t md:bg-gradient-to-b' : 'bg-gradient-to-t';
                return (
                  <div className={`${gradient} basis-1/3 from-[#A5E314]/50 to-black flex flex-row justify-center p-0.5 rounded-3xl`}>
                    <div key={`${index}-${task}`} className="h-[261px] relative px-[34.7px] py-[13px] w-full text-center md:text-start md:w-full bg-black/80 rounded-3xl">
                      <h4 className="text-[45px] font-[500]">{task.number}</h4>
                      <p className="text-[17px]">{task.status}</p>
                      <div className="flex flex-row justify-center md:justify-start">
                        <Image
                          className="absolute bottom-[10px]"
                          src={task.image}
                          width={100}
                          height={100}
                          priority
                          alt="" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Task Feature */}
        <div className="px-3 md:px-20 pb-20">

          <div className="w-full m-auto">
            <div>
              <h4 className="font-gameria text-[24px] text-center md:text-start mb-3">CHECK FOR NEW TASKS DAILY</h4>
            </div>
            <div className="flex flex-row">
              <div style={{ cursor: 'pointer' }} onClick={() => setShowCompletedTask(false)} className={`${showCompletedTask ? 'bg-[#10130D] text-[#ff0000]' : 'bg-[#A5E314] text-[#ff0000 '}} p-4 rounded-tl-2xl `}>
                <h4 className="font-gameria text-[14px] md:text-[24px]">UNCOMPLETED TASK</h4>
                <hr />
                <p className="py-1 md:py-3 text-[10px] text-[14px]">Perform the task below and win prizes.</p>
              </div>

              <div>
                <div style={{ cursor: 'pointer' }} onClick={() => setShowCompletedTask(true)} className={`${showCompletedTask ? 'bg-[#A5E314] hover:text-[#374C07] text-[#374C07]' : 'bg-[#10130D]'}  p-4 rounded-tr-2xl `}>
                  <h4 className="font-gameria text-[14px] md:text-[24px]">COMPLETED TASK</h4>
                  <hr />
                  <p className="py-1 md:py-3 text-[10px] text-[14px]">See all previously completed tasks here.</p>
                </div>

              </div>
            </div>
            {
              showCompletedTask ?
                <>{
                  completeTask.length > 0 ?
                    <div className="  m-auto w-full  rounded-tr-3xl rounded-b-3xl">
                      {completeTask.map((task: any, index: number) => {
                        return (
                          <div key={`${index}-${task.task_head}`} className="md:flex  bg-[#10130D99] hover:scale-x-105 space-y-5 flex-row p-[24px] justify-between items-center gap-8">
                            <div className="flex flex-row items-center justify-center md:justify-between gap-x-4">
                              <div className="hidden md:inline">
                                <Image
                                  className="m-auto "
                                  src={'/images/tasksItem.png'}
                                  width={272}
                                  height={82}
                                  priority
                                  alt="" />
                              </div>
                              <div className="md:hidden">
                                <Image
                                  className="m-auto "
                                  style={{ objectFit: 'cover' }}
                                  src={'/images/smallScreentask.png'}
                                  width={53}
                                  height={53}
                                  priority
                                  alt="" />
                              </div>
                              <div>
                                <div className="flex flex-row gap-8 items-center">
                                  <h4 className="text-[14px] md:text-[25px] font-gameria text-center">{task.task_head}</h4>
                                  {/* <div>
                                    <Image
                                      src={task.icon}
                                      width={20}
                                      height={20}
                                      priority
                                      alt="" />
                                  </div> */}
                                </div>
                                <p className="text-[#C3EC62] font-bold">$PUMP: {task.reward_points}</p>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                              <div>
                                <p className="text-[#B4E83B]"><CheckCircle color="inherit" /> You have completed this task</p>
                                <div className="mt-2 bg-[#52594BBF] w-full rounded-2xl h-[48px] p-3">

                                </div>
                              </div>
                            </div>
                            {/* <hr /> */}
                          </div>
                        )
                      })}
                    </div>
                    :
                    <div className="h-[701px] flex justify-center items-center m-auto w-full bg-[#10130D99] md:rounded-tr-3xl rounded-b-3xl">
                      <div>
                        <Image
                          src={'/images/emptystate.png'}
                          width={571}
                          height={363}
                          priority
                          alt="" />
                        <h4 className="text-[24px] font-bold text-center">You do not have any completed task yet</h4>
                      </div>
                    </div>
                }
                </>

                :
                <>
                  {uncompleteTask.length > 0 ?
                    // Items in the task
                    <div className="  m-auto w-full  rounded-tr-3xl rounded-b-3xl">
                      {uncompleteTask.map((task: any, index: number) => {
                        return (
                          <div key={`${index}-${task.task_head}`} className="md:flex  bg-[#10130D99] hover:scale-x-105 space-y-5 flex-row p-[24px] justify-between items-center gap-8">
                            <div className="flex flex-row items-center  justify-center md:justify-between gap-x-4">
                              <div className="hidden md:inline">
                                <Image
                                  className="m-auto max-w-[272px] "
                                  src={'/images/tasksItem.png'}
                                  width={272}
                                  height={82}
                                  priority
                                  alt="" />
                              </div>
                              <div className="md:hidden">
                                <Image
                                  className="m-auto"
                                  style={{ objectFit: 'cover' }}
                                  src={'/images/smallScreentask.png'}
                                  width={53}
                                  height={53}
                                  priority
                                  alt="" />
                              </div>
                              <div>
                                <div className="flex flex-row gap-8 items-center">
                                  <h4 className="text-[14px] md:text-[25px] w-full font-gameria text-center">{task.task_head}</h4>
                                  {/* <div>
                                    <Image
                                      src={task.icon}
                                      width={20}
                                      height={20}
                                      priority
                                      alt="" />
                                  </div> */}
                                </div>
                                <p className="text-[#C3EC62] font-bold">$PUMP: {task.reward_points}</p>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
                              <a href={task.action_button_link} onClick={() => { setSelectedTask(task.task_id) }} target="_blank" className="flex flex-row justify-center items-center gap-2 bg-[#A5E314] min-w-60 text-centere p-3 rounded-xl text-[#10130D]">
                                {task.action_button_text}</a>
                              <div className="relative">
                                <CustomInput
                                  className="max-w-[250px]"
                                  onChange={(e) => { setUserName(e.target.value) }}
                                  sx={{ marginBottom: '10px', }}
                                  placeholder={task.task_type == 'FOLLOW' || task.task_type == 'JOIN' || task.task_type == "RETWEET" ? "Enter username" : "Enter tweet link"}
                                  type={"text"}
                                  required={true}
                                  autocomplete="off"
                                  addOnStart={<Person2Rounded color="inherit" className="border rounded-full" />}
                                  addOnEnd={
                                    <button onClick={() => { markTaskCompleted(task.task_id, task.action_button_link, index) }} className="text-[#E1F6B1] buttonTracker" >
                                      {loading && selected === index ? <CircularProgress size={18} color="inherit" /> : 'Continue'}
                                    </button>
                                  }
                                />
                                {selectTaskErr.status && selectTaskErr.id === task.task_id &&
                                  <div className="bg-[#EDF9D0] absolute top-[-60px] right-0 p-2 text-[#181C13] text-[12px] rounded-2xl">
                                    Please {task.task_head}, for this field to be available to you. Thank you
                                  </div>
                                }

                              </div>
                            </div>
                            {/* <hr /> */}
                          </div>
                        )
                      })}

                    </div>
                    :
                    <div className="h-[701px] flex justify-center items-center m-auto w-full bg-[#10130D99] md:rounded-tr-3xl rounded-b-3xl">
                      <div>
                        <Image
                          src={'/images/emptystate.png'}
                          width={571}
                          height={363}
                          priority
                          alt="" />
                        <h4 className="text-[24px] font-bold text-center">You do not have any uncompleted task!</h4>
                      </div>
                    </div>
                  }
                </>
            }
          </div>

        </div>
      </div>
      <Faqs />
      <Footer />
    </div >
  )
}
