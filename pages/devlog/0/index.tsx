import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function index() {
  return (
    <div className="flex flex-col items-center text-center justify-center pt-10 font-bold">
      <Head>
        <title>Nuocal DevLog</title>
        <meta name="description" content="Devlog of this project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center text-center justify-center">
        <h1 className="text-6xl">DevLog[0]</h1>
        <h1 className="text-1xl pt-16">
          Array&lt;Topic&gt; Topics[3] = [
          <Link href="/devlog/0/#styling">
            <a className="underline">Styling</a>
          </Link>
          ,&ensp;
          <Link href="/devlog/0/#database">
            <a className="underline">Database</a>
          </Link>
          ,&ensp;
          <Link href="/devlog/0/#everything_else">
            <a className="underline">Everything else</a>
          </Link>
          ];
        </h1>
        <h1 className="text-3xl pt-20 pb-20" id="styling">
          Styling
        </h1>
        <div className="w-1/3 text-left">
          <p>
            &emsp;&emsp;Good ol styling. When coming accross a new project,
            there are many ways to go about styling. You can use plan CSS and
            SCSS. There is also the direction of using a utility css framework.
            And then there is using Bootstrap. I want to touch on all 3 ways of
            styling.
          </p>
          <p>
            &emsp;&emsp;I think I am a big advocate of using straight up CSS ans
            SCSS. I think decoupling your html from your styling is a big plus
            when developing. Being able to straight up write flex-direction:
            column and justify-content:center and other css descriptions like
            that all under a single CSS class makes development not quicker, but
            easier. Although, I said I was a big advocator, I do not think I can
            defend the use of plain CSS. When decoupling your html from your CSS
            the code is significantly harder to read, which results in much
            harder maintenance. When projects become larger, needing to go
            between a CSS file and your javascript/html file to just change a
            simple font size will get messier than the League of Legends
            Spaghetti code client. I think a good argument about using standard
            CSS are things like animations, but nowadays there are plenty of npm
            libraries that do that for us. So, uness you have a really good
            reason to use standard CSS or are new to CSS, I do not think this is
            a good method long-term for large projects.
          </p>
          <p>
            &emsp;&emsp;This leads me to Tailwind. I was originally a massive
            hater of Utility based CSS frameworks. I think for front end
            development, it is traditionally taught to never have your html and
            CSS coupled, inlining is never good. That is straight CAP. Using
            Tailwind CSS classes couples your CSS and HTML, having all your CSS
            inlined. This method of styling increases speed of development
            significantly and increases readabilty and decrease maintenece since
            you know exactly what css attributes are to applied to which html
            tags without needing to look away at another file. The idea behind
            decoupling your CSS and HTML originally was to increase readabilty
            of your HTML page, however as as projects get larger, your HTML file
            will not be readable regardless if you inline your CSS or not. And
            with the addition of component based Front-End Frameworks like
            REACT, code and HTMl is just a lot cleaner. Thus this argument does
            not really fit the modern developer. However, I do recommend first
            learning how to do standard CSS from scratch before using Tailwind.
          </p>
          <p>
            &emsp;&emsp;Lastly, CSS frameworks like bootstrap. Do not use these,
            for the love of god, if you want anything to be your own and do not
            want your company to die isntantly, DO NOT USE BOOTSTRAP.
          </p>
        </div>

        <h1 className="text-3xl pt-20 pb-20" id="database">
          Database
        </h1>
        <div className="w-1/3 text-left">
          <p>
            &emsp;&emsp;So I think this a pretty important topic/decision you
            have to make when you make your own startup/application. There is
            tons of advice out there on the internet, and the large rule of
            thumb is, implement then worry about scalabilty. Although I think
            this is true, I believe there are flaws to argument.
          </p>
          <p>
            &emsp;&emsp;One big thing people mention is Firebase. For those who
            do not know what Firebase is, Firebase is a large suite of different
            tools for people to use. The main tools are Auth, Firestore
            Database, Cloud Storage, and hosting. These all however, are what we
            call BaaS, or Backend as a Service. BaaS is essentially a service
            that allows you to not need a real backend. This results in you
            making all your api calls and database calls in your frontend, and
            not needing to learn the skills on how to create a backend server.
            Firebase is heavely recommended by a lot of developers and it even
            ranked very highly in Stack Overflow 2021 survey report. It was like
            2nd or 3rd in most liked Dev tool. The main benefit of Firebase is
            that you can spin up a database, authentication, and hosting
            extremely quickly. Probably in like 2 or 3 hours.
          </p>
          <p>
            &emsp;&emsp; So this sounds great yeah? Ehhh, we will see. My main
            issue with Firebase is scalabilty. Firebase prices are EXTREMELY
            DANGEROUS. As your application grows, so do your costs, but with
            Firebase, the cost grows quicker than the beanstalk Jack has. So,
            just move off Firebase when the costs increases right? Lets move
            back to the point where the idea is you implement then scale. Not so
            much. Because if you opt in to using Google Firebase as your
            backend, you never actually have a backend yourself and Google has
            all your data, essentially locking yourself into Google services.
            This what we call vendor locking and Google are the kings of it. As
            a result, if you are about to go bankrupt because you cannot afford
            Firebase pricing, you will not be able to move off the Firebase
            platform since you have no viable way to move all your data off the
            platform. Additionally, since you have no real backend, you do not
            really even have a way to effectively move to a new platform.
          </p>
          <p>
            &emsp;&emsp;Additionally, the issue of Firebase is that hey solely
            use NOSQL Database. NOSQL has been extremely popular in the past few
            years, however, I think the hype has died down on it as people have
            realized that SQL is just better at most tasks. NOSQL is essentially
            just a JSON file. And with many database architectures, NOSQL
            (especially on Firebase) do not have an effect way to query.
            Additionally, they just lack so many query features SQL has. There
            is a reason why people have been using SQL since like the 1980s.
            Many database queries are extremely innefficent, maybe even
            requiring you to have 2-3 times more steps needed costing you double
            or triple your costs. This is extremely bad since most modern
            applications are extremely dynamic, reacting to changes immediately.
            And if the more users use your application, then your wallet is
            going to cry harder than mine when I play Genshin Impact.
          </p>
          <p>
            &emsp;&emsp;So, what did we learn? Decoupling your backend database
            from your frontend is great. Putting a server in between your
            frontend and database will help you loads. Scalabilty is much easier
            to manage, and if you use a backend server and host it to something
            like AWS, you are not charged for read/writes, you are charged for
            memory and storage which is much cheaper. You are in charge of your
            data, and do not have to worry about Google shutting Firebase down
            since Google is notorious for killing their products often. NOSQL
            should be used for niche situations, only use it if you explored
            that SQL does not have what you want. Firebase is good for small,
            school projects, or if you have a c6 Raiden Shogun and have buttload
            of money to spend. I wanted to touch on Firebase hosting for a bit,
            but I do not want to make this super long. So just real quickly, I
            think there are tons of better alternatives to hosting than
            Firebase, such as Netlfiy and Vercel as they have significantly more
            features built into their site. Also, using Google Nameservers
            restricts you from using something like Cloudflare to rate limit
            your users. Being able to use cloudflare significantly helps your
            security. There is definitly a way to use Cloudflare and Firebase
            hosting, but there are just better alternatives.
          </p>
        </div>

        <h1 className="text-3xl pt-20 pb-20" id="everything_else">
          Other stuff I want to quickly touch on and future plans
        </h1>
        <div className="w-1/3 text-left">
          <p>
            &emsp;&emsp;So one big thing I want to talk about is Type Safety. As
            project complexity increases, please for the love of god use a
            statically typed language. Do not use Javascript, use Typescript. It
            is annoying, but it will save you so much time. Having a Type-safe
            language will save you from a lot of bugs where there are type
            mismatches. Addtionally, it increases your code readability which
            will result in less maintenance. Yes, I am obssessed with
            readability of code. Please use a statically typed language.
          </p>
          <p>
            &emsp;&emsp;With this being the first devlog, there is not too much
            technical info here. I will include more technical info in my next
            devlog. A few things I want to touch on next devlog are backend
            technologies. Mainly GraphQL, Prisma, and tRPC, and maybe some auth
            stuff if I feel like it. There might be some other stuff I want to
            talk about, but this is mainly it for now.
          </p>
          <h1>Connection.close();</h1>
        </div>
      </div>
    </div>
  );
}
