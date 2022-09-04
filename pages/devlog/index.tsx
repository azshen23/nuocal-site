import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";

export default function Devlog() {
  const router = useRouter();
  const [devLogNum, setDevLogNum] = React.useState("__");
  const totalDevLogs: number = 1;
  function handleRedirect(keyDown: string) {
    if ((parseInt(devLogNum) || devLogNum === "0") && keyDown == "Enter") {
      if (parseInt(devLogNum) <= totalDevLogs) {
        router.push("/devlog/" + devLogNum);
      } else {
        alert("DevLog index " + devLogNum + " does not exist yet");
      }
    } else if (keyDown == "Enter") {
      alert("ENTER A FRICKING NUMBER NOT DAMN WORDS");
    }
  }

  return (
    <div className="flex flex-col items-center text-center justify-center pt-10 font-bold">
      <div className="text-left text-4xl font-bold pt-40">
        <h1>
          Array&lt;Logs&gt; DevLogs[2] = [
          <Link href="/devlog/0">
            <a className="underline">Log0</a>
          </Link>
          ,&ensp;
          <Link href="/devlog/1">
            <a className="underline">Log1</a>
          </Link>
          ];
        </h1>
        <h1 className="pt-10">
          for (int i = 0; i &lt; DevLogs.size(); i++)&#123;
        </h1>
        <h1 className="pt-5">
          &emsp;&emsp;if (i =={" "}
          <input
            className="w-20"
            type="text"
            name="name"
            onChange={(e) => setDevLogNum(e.target.value)}
            onKeyDown={(e) => handleRedirect(e.key)}
          />
          &ensp;) &#123;
        </h1>
        <h1 className="pt-5">
          &emsp;&emsp;&emsp;&emsp;Redirect to DevLog Index {devLogNum} on ENTER;
        </h1>
        <h1 className="pt-5">&emsp;&emsp;&#125;</h1>
        <h1 className="pt-5">&#125;</h1>
        <h1 className="pt-5 text-gray-500 text-xl">
          &#47;&#47; Credit to Ben Awad for the Inspiration of this DevLog
        </h1>
      </div>
    </div>
  );
}
