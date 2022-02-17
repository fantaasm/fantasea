import {useEffect, useState} from "react";
import {NextPage} from "next";
import {clearInterval} from "timers";
import {NextRouter, useRouter} from "next/router";

const ErrorPage: NextPage = () => {
  const [time, setTime] = useState<number>(5);
  const router: NextRouter = useRouter();

  useEffect(() => {
    const interval = setInterval(decrementTimer,1000)
    return () => clearInterval(interval);
  }, [])

  const decrementTimer = () => {
    if (time <= 0) {
      router.push("/home");
      return;
    }
    setTime((currentTime: number) => currentTime - 1);
  }

  return (
    <div className={"text-color-primary"}>
      <p>Page not found</p>
      <p>Redirecting in {time}</p>
    </div>
  );
}

export default ErrorPage