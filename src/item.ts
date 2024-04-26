import axios from "axios";

const handleFormSubmit = async (e) => {
    e.preventDefault(); setIsLoading(true);
    if (!username) {
        toast.error("username required!",
            { position: toast.POSITION.TOP_CENTER, });
        setUsername(""); setIsLoading(false); return;
    }
    try {
        const response = await axios.post("https://evp-user-task-service-cea2e4kz5q-uc.a.run.app/user-submit-task",
            { full_name: username, tweet_link: data?.action_button_link, task_id: data?.task_id, },
            { headers: { Authorization: token }, });
        if (response?.status === 200) {
            toast.success("Task Submitted!", { position: toast.POSITION.TOP_CENTER, });
            setUserCompletedTaskCount(userCompletedTaskCount + 1);
            setUserUncompletedTaskCount(userUncompletedTaskCount - 1);
            setUserTotalPoints(userTotalPoints + data?.reward_points);
            setIsTaskCompleted(true); setIsLoading(false);
            setColorState("#04e66e");
            setIsTaskCompleted(true);
        }
        setIsLoading(false);
    } catch (error) {
        if (error) {
            toast.error(error?.response?.data?.message, { position: toast.POSITION.TOP_CENTER, });
            setIsTaskCompleted(false);
        }
    }
    finally {
        setIsLoading(false);
        setUsername("");
    }
};

function setIsLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}


function setUsername(arg0: string) {
    throw new Error("Function not implemented.");
}


function setUserCompletedTaskCount(arg0: any) {
    throw new Error("Function not implemented.");
}


function setUserUncompletedTaskCount(arg0: number) {
    throw new Error("Function not implemented.");
}


function setUserTotalPoints(arg0: any) {
    throw new Error("Function not implemented.");
}


function setIsTaskCompleted(arg0: boolean) {
    throw new Error("Function not implemented.");
}


function setColorState(arg0: string) {
    throw new Error("Function not implemented.");
}
