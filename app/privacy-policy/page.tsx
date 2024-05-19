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

  // console.log(selectTaskErr.id)

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
    <div className="bg-contain bg-[url('/images/dashboardbg.jpeg')] h-full w-full">
      {error &&
        <ToastComponent addOnStart={<CheckCircle color="inherit" />} content={errMessage.message} type={errMessage.type} />
      }
      <NavBar />
      <div className="pt-28 w-11/12 m-auto text-[#EDF9D0] font-kanit">
      <div style={{padding:"20px"}}>
      <h1>Privacy Policy</h1>
      <br></br>
      <p>If You Face Any Problems Regarding Services Or Any Difficulties You Can Contact Us At contact@pumpmilitia.game</p>
      <br></br>
      <p>This Privacy Policy governs the manner in which Pump Militia Mods collects, uses, maintains and discloses information collected from users of the https://everpump.io website. This privacy policy applies to the Site and all products and services offered by Pump Militia Mods.</p>
      <br></br>
      <h2>Personal identification information</h2>
      <br></br>
      <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
      <br></br>
<h2>Non-personal identification information</h2>
<br></br>
<p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.
</p>
<br></br>
<h2>Web browser cookies</h2>
<br></br>
<p>Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
</p>
<br></br>
<h2>How we use collected information</h2>
<br></br>
<p>Pump Militia  may collect and use Users personal information for the following purposes:</p>
<br></br>
<h2>To improve customer service</h2>
<br></br>
<p>Information you provide helps us respond to your customer service requests and support needs more efficiently.</p>
<br></br>
<h2>To personalize user experience</h2>
<br></br>
<p>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</p>
<br></br>
<h2>To improve our Site</h2>
<br></br>
<p>We may use feedback you provide to improve our products and services.</p>
<br></br>
<h2>To share your information with third parties.</h2>
<br></br>
<p>We may share or sell information with third parties for marketing or other purposes.</p>
<br></br>
<h2>How we protect your information</h2>
<br></br>
<p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
</p>
<br></br>
<h2>Sharing your personal information</h2>
<br></br>
<p>We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.
</p>
<br></br>
<h2>Third party websites</h2>
<br></br>
<p>Users may find advertising or other content on our Site that link to the sites and services of our partners, suppliers, advertisers, sponsors, licensor’s and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our Site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our Site, is subject to that website’s own terms and policies.
</p>
<br></br>
<h2>Advertising</h2>
<br></br>
<p>Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.
</p>
<br></br>
<h2>Changes to this privacy policy</h2>
<br></br>
<p>Pump Militia  has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page and send you an email. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
</p>
<br></br>
<h2>Your acceptance of these terms</h2>
<br></br>
<p>By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
</p>
<br></br>
<h2>Contacting us</h2>
<br></br>
<p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
    <br></br>
Pump Militia 
<br></br>
<a href="https://pumpmilitia.io">https://pumpmilitia.io</a>
<br></br>
<a href="mailto:support@pumpmilitia.io">support@pumpmilitia.io</a>
</p>

    </div>
      </div>
      <Faqs />
      <Footer />
    </div >
  )
}
