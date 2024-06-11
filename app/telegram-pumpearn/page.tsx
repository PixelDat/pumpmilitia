"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Tapcomponent from '../components/telegramComp/tapComp/tapcomp';
import { ArrowBackIosNew, ArrowForward, ArrowLeft, ArrowRight, CheckCircle, KeyboardArrowLeft, KeyboardArrowRight, Person2Rounded } from '@mui/icons-material';
import IconButton from '../components/telegramComp/tapComp/iconbuttonComp';
import NavigationComp from '../components/telegramComp/tapComp/navigationComp';
import CustomModal from '../components/telegramComp/modalComp/modalComp';
import { tasks } from './utils';
import { createAccount, getUserDetails } from '@/lib/utils/request';
import TelegramLayout from '../telegramLayout/layout';
import axios from 'axios';
import CustomInput from '../components/customInput/customInput';
import { CircularProgress } from '@mui/material';
const Cookies = require("js-cookie");


export default function TelegramPumpEarn() {
    const [loading, setLoading] = useState(false)
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
    const [error, setError] = useState(false)
    let encrypt = Cookies.get('encrypt_id');
    const [completeTask, setCompleteTask] = useState<string[]>([]);
    const [uncompleteTask, setUnCompleteTask] = useState<string[]>([]);
    const [completedATask, setCompletedATask] = useState(0);
    const [selectTaskErr, setSelectTaskError] = useState({ id: '', status: false });

    const [errMessage, setErrMessage] = useState({
        type: '',
        message: '',
    })
    const [opened, setOpened] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState("")
    const [update, setUpdate] = useState(0);
    const [userBalance, setUserBalance] = useState(0);
    const [signedIn, setSignedIn] = useState(false);
    const [showCompletedTask, setShowCompletedTask] = useState(false)
    const [userName, setUserName] = useState('')

    const [selected, setSelected] = useState(0)


    useEffect(() => {
        (async () => {
            let response = await getUserDetails(encrypt);
            if (response.status) {
                setUserBalance(response.data.points)
                setSignedIn(true);
            }
        })()

    }, [update])

    async function createMiningAccount(id: number) {
        let title = tasks[id].title;
        let url = title.includes('X') ? "https://evp-follow-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account" : title.includes('Telegram') ? "https://evp-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account" : title.includes('Discord') ? "https://evp-discord-join-task-token-minner-service-cea2e4kz5q-uc.a.run.app/create-mining-account" : ""

        // let response = await createAccount(url, encrypt)
        // if (response.status == true) {
        setSelectedTask(id);
        setOpened(true);
        // console.log(response)
        // }

    }


    useEffect(() => {
        if (!encrypt) {
            location.href = '/pumpmilitiaAuth/type=login;data='
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
        userDetails();
        getCompleteTask()
        getUncompleteTask();
    }, [completedATask])


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
        setLoading(true)
        if (userName == '') {
            setError(true);
            setLoading(false);

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
            setLoading(false);
            setCompletedATask(Math.random() + 1)
            setTimeout(() => {
                setError(false);
            }, 2000)
        } catch (error: any) {
            if (error.response) {
                setError(true);
                setLoading(false);
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

        <TelegramLayout>
            <div className="bg-cover bg-[url('/telegram/bg2.png')] flex flex-row justify-center items-start pt-12 text-[#EDF9D0] w-screen" >
                <div className='flex  flex-col justify-between items-center space-y-8'>

                    <div className='text-center space-y-4 flex flex-col justify-center items-center'>
                        <div className=''>
                            <div><h2 className='font-bold text-[24px] text-[#D2F189]'>Coin Balance</h2></div>
                            <div className='flex flex-row justify-center items-center'>
                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={58} height={58} priority />
                                <p className='font-gameria text-[40px]'>{userBalance.toLocaleString()}</p>
                            </div>

                        </div>
                        <Image src='/telegram/dashpage/howbtn.png' alt='' width={130} height={58} priority />

                    </div>

                    <div className='px-4 space-y-3'>

                        <div>
                            <Image src='/telegram/task/campaigns.png' alt='' width={122} height={24} priority />
                        </div>
                        <p>Comfy tasks from PumpMilitia: perform these tasks and earn coins</p>
                        <div className='flex flex-row items-center gap-3'>
                            <div className='w-full border-[#374C07] border rounded-3xl p-3 justify-center items-center'>
                                <div className=' flex flex-row items-center justify-between '>
                                    <div>
                                        <h2 className='font-gameria text-[20px]'>pump militia campaign</h2>
                                        <p className='text-[#EDF9D0] w-10/12'>We have made coins pool for all users to earn for completing tasks</p>
                                    </div>
                                    <Image src='/telegram/boost/emojilovee.png' alt='' width={32} height={32} priority />
                                </div>
                                <div className='space-y-2'>
                                    <h2 className='font-gameria text-[14px]'>Total Completed</h2>
                                    <p className='p-1 w-[58px] text-center rounded-full text-[#D2F189] bg-[#282F20]'>
                                        0 / <span className='text-[#D2F189]'>7</span>
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='px-4 space-y-4 pb-8'>
                        <div>
                            <Image src='/telegram/task/tasks.png' alt='' width={66} height={24} priority />
                        </div>
                        <div className='flex flex-col  border-[#374C07] border rounded-2xl items-center divide-y divide-[#374C07]'>
                            {tasks.map((item, index) => {
                                return (
                                    <div key={index} className='flex flex-row w-full gap-2   p-3 justify-center items-center'>
                                        {item.title.includes('Telegram') ?

                                            <Image src='/telegram/social/telegram.png' alt='' width={32} height={32} priority />
                                            : item.title.includes('X') ?
                                                <Image src='/telegram/social/xicon.png' alt='' width={32} height={32} priority />
                                                : item.title.toLowerCase().includes('tiktok') ?
                                                    <Image src='/telegram/social/tiktok.jpeg' alt='' width={32} height={32} priority />
                                                    : item.title.includes('Instagram') ?
                                                        < Image src='/telegram/social/instagram.png' alt='' width={32} height={32} priority />
                                                        :
                                                        <Image src='/telegram/social/youtube.png' alt='' width={32} height={32} priority />

                                        }

                                        <div className='basis-4/5'>

                                            <h2 className='font-gameria text-[20px]'>{item.title}</h2>
                                            <div className='flex flex-row justify-start items-center'>
                                                <Image src='/telegram/dashpage/yellowcoin.png' alt='' width={24} height={24} priority />
                                                <p className='text-[#D2F189] text-[16px] font-bold'>+{item.amount}</p>
                                            </div>
                                        </div>
                                        <div className='basis-1/5'>
                                            <ArrowForward onClick={() => {
                                                createMiningAccount(index)

                                            }} className='text-[#20251A] rounded-full p-2 text-[40px] bg-[#A5E314]' />
                                        </div>

                                    </div>
                                )
                            })}


                        </div>


                        {/* Task Feature */}
                        <div className=" md:px-20 pb-20">

                            <div className="w-full m-auto">
                                <div>
                                    <h4 className="font-gameria text-[24px] text-start md:text-start mb-3">CHECK FOR NEW TASKS DAILY</h4>
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
                                                                    <div className="md:hidden h-[53px] w-[53px] bg-center bg-[url('/images/tasksItem.png')] rounded">
                                                                        {/* <Image
                                  className="m-auto"
                                  style={{ objectFit: 'fill' }}
                                  src={'/images/tasksItem.png'}
                                  fill={true}
                                  priority
                                  alt="" /> */}
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
                </div>
            </div >
            <CustomModal setUpdate={setUpdate} encrypt={encrypt} taskIndex={Number(selectedTask)} setOpened={setOpened} opened={opened} />
        </TelegramLayout>
    )
}
