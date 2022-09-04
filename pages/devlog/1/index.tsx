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
        <h1 className="text-6xl">DevLog[1]</h1>
        <h1 className="text-1xl pt-16">
          Array&lt;Topic&gt; Topics[3] = [
          <Link href="/devlog/1/#prisma">
            <a className="underline">Prisma</a>
          </Link>
          ,&ensp;
          <Link href="/devlog/1/#trpc">
            <a className="underline">tRPC</a>
          </Link>
          ,&ensp;
          <Link href="/devlog/1/#everything_else">
            <a className="underline">Everything else</a>
          </Link>
          ];
        </h1>
        <h1 className="text-3xl pt-20 pb-20" id="prisma">
          Prisma
        </h1>
        <div className="w-1/3 text-left">
          <p>
            &emsp;&emsp;PRISMA. This week I have been playing around with
            Prisma. For a quick explanation as to what prisma is, Prisma is an
            ORM for Node.JS and Typescript. It essentially allows you to access
            your database and query data from it in a Typesafe easy manner. It
            is kinda hard to explain exatcly what I am talking about so I will
            give a quick demonstration.
          </p>
          <p>
            &emsp;&emsp; For normal SQL language, say if you want to insert
            something into your table. You would have to do the following.
            INSERT INTO TABLENAME (xx, xxx) VALUES ($xxx ,$xxx) RETURNING *
            [xxx, xxx ,xxx]
          </p>
          <p>
            &emsp;&emsp;The issue with this, is that you can literally try to
            insert any kind of data since you query as a string since that is
            just how the query language works. What prisma allows, is you can
            declare a schema to decide exactly what types you need for the
            database, thus you get compile errors before you even can run your
            server if there are type mismatches. Additionally, since you have a
            schema, it is similar to GraphQL where you basically insert a object
            without needing a lot of buffer code. So, with the same code as
            above, this is what it looks like in prisma:
          </p>
          <p>&emsp;&emsp; prisma.tablename.create(data:(xxx, xxx, xxx))</p>
          <p>
            Look at that so much less amount of code, and it is typesafe. If you
            need to build a typesafe backend, I would HIGHLY RECOMMEND Prisma.
            One issue, however, is that in order for Prisma to work correctly,
            it does need to make another connection instance to the database
            which can slow down request speeds. I did some significant testing,
            and it seems that my requests take around a 10-20% longer time per
            request. Now this may seem a lot, but in reality, say a request
            takes 800 ms, it just takes 880ms with prisma, which honestly is not
            bad. However, as more requests come in, there will definitely be an
            increase in latency, which could result in the latency increase
            become closer to the 20%. I will say, there definitely could be room
            for me to optimize the Prisma connection, but I wil have to see in
            the future.
          </p>
        </div>

        <h1 className="text-3xl pt-20 pb-20" id="trpc">
          tRPC
        </h1>
        <div className="w-1/3 text-left">
          <p>
            &emsp;&emsp;Rest APIs are extrememly common, and I would say that is
            what most people use at least in the past. However the issue with
            REST again is in my opinion typesafety. When making requests or
            creating endpoints, there is no barrier for the developer to insert
            completely wrong typings to send. Thus this can cause a lot of
            issues with debugging. This is where tRPC comes in. tRPC replaces
            your classic POST GET PUT DELETE and replaces it all with just Query
            and Mutate. Which is basically just Get and Post respectively.
          </p>
          <p>
            &emsp;&emsp;These changes from Rest Endpoints to tRPC endpoints make
            the developer experience significantly improved. Less problems with
            typesafety, and the amount of code needed to write the endpoint
            basically the same. Additionally, tRPC has a built in Express server
            adapter which allows you to convert from Rest to tRPC very easily.
            Moreover, tRPC has a great middleware api which allows easy
            middleware creation to manage authentication and other filters you
            would need. So at the end of the day, what does this mean? Less bugs
            go into production, quicker development, and just overall better
            flow of work.
          </p>
          <p>
            &emsp;&emsp;However, as all good things do, there are some negative
            sides I have found. One large issue I have with tRPC is that because
            you are required to use tRPCs routing, they have their routes all
            under one singular api. As a result, your code can easily be
            clumped, and it is hard to read the code sometimes. Yes you can
            separate your routes, and use tRPCs merge api, however, this all
            takes extra code to be written which does not seem like it is worth
            it. This might be a hot take, idk but that is where I stand on tRPC
            right now. Additionally, tRPC is only available in Typescript, which
            is what the t in tRPC stands for. It may make it hard to move to a
            different server language, if you do want to scale since Typescript
            is not exactly the quickest language out there. From my
            understanding, at least for front end development, browsers cannot
            naturally run Typescript, so it must be compiled into Javascript
            before it can run, thus there is just an extra layer in b/w your
            code and the user. These are my initial thoughts on tRPC, I would
            definitely recommend, but there are some understandable non
            favorable qualities if you do not wish to use tRPC.
          </p>
        </div>

        <h1 className="text-3xl pt-20 pb-20" id="everything_else">
          Other stuff I want to quickly touch on and future plans and final
          thoughts
        </h1>
        <div className="w-1/3 text-left">
          <p>
            &emsp;&emsp; One big question, that has come into my mind is
            scalablity server wise. One issue I have is that Node.js is
            inherently single threaded. Thus the more requests that are coming
            in, the harder it is for the server to handle. An analogy for this
            is , say you are a fast food worker, you can probably handle 3 or 4
            people at a time, but during rush hour, if you are the only person
            working, then it is just a quit angle. The way I am resolving this
            is by making every api server its own server. What this means is,
            say for example, authentication is its own server, I will separate
            this from getting data, and getting user profile data. Each function
            will have their own server, splitting the workload. This is called
            horizontal scaling, as there are the same amount of resources to be
            used, but I am splitting it among more workiers. Although, I do not
            know how well it will go long term use, hopefully this is enough to
            handle around 10000 requests per second in production.
          </p>
          <p>
            &emsp;&emsp;With this devlog coming to an end, I have finished most
            of my authentication server, and will hopefully start to make more
            progression that everyone can see. Thus, when moving to the front
            end, I will want to explore React query and data fetching patterns
            in the next few weeks. Thanks for reading, I hope that you all have
            learned something new, or just found something interesting, of
            course if you have any questions about this or would like to see
            some more in depth/real world examples (codebase will not be open
            source until application is officially launched), you can contact me
            on discord : anduru#7914
          </p>
          <h1>Connection.close();</h1>
        </div>
      </div>
    </div>
  );
}
