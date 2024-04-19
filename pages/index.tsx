import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/nav-bar";
import { MdStarRate } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-black text-white ">
      <section>
        <div>
          <NavBar />
        </div>
      </section>
      <section className=" text-white px-48 py-6">
        <div className=" max-w-[1000px]">
          <h1 className=" font-extrabold text-9xl py-20">
            Serious traking for serious gym workouts.
          </h1>
        </div>
        <div className="py-6">
          <Image
            src="/gym.svg"
            width={200}
            height={200}
            alt="gym workout-img"
          />
        </div>
      </section>
      <section className="px-48 flex flex-row gap-20 justify-between">
        <div className=" text-2xl py-40">
          <p className=" border-b border-gray-700">Workout</p>
          <p>Body metrics</p>
          <p>Streak and cooldown</p>
          <p>Highly customisable</p>
        </div>
        <div className="">
          <Image
            src="/workouts.png"
            width={400}
            height={300}
            alt="workout-img"
          />
        </div>
      </section>
      <section className="px-48 ">
        <div className="py-20">
          <h1 className=" text-[150px] font-extrabold leading-none">
            Athletic by design.
          </h1>
          <p className="text-2xl py-5">Made purely for the gym.</p>
        </div>
        <div>
          <div className="py-10">
            <Image
              src="/Athletic.svg"
              alt="Athletic-img"
              width={800}
              height={500}
            />
          </div>
          <div className="max-w-[700px]">
            <p className=" text-gray-500 font-medium text-2xl">
              Hands shaking from working out, using the app from across the
              room, divided attention, bad connection, switching exercises
              on-the-fly, knowing what weights you did the last time - all of it
              has been considered to get the ultimate gym tracking experience.
            </p>
          </div>
        </div>
      </section>
      <section className="px-48 py-12">
        <div>
          <h1 className=" text-[150px] font-extrabold leading-none">
            Not just <br /> reps.
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <div className=" py-20 text-2xl font-medium  items-center justify-center">
            <p>Distance and pace</p>
            <p>Duration timer</p>
            <p>Mark-to-complete</p>
            <p>Intervals</p>
            <p>Sets and reps</p>
          </div>
          <div>
            <Image src="/reps.png" alt="reps-img" width={400} height={300} />
          </div>
        </div>
        <div className="max-w-[700px] py-12">
          <p className=" text-2xl text-gray-500 font-medium">
            Wether you’re tracking a classic workout with sets and reps, using
            HIIT interval timers, calisthenics, running a distance, running for
            time or just want a simple list to check things off. Dropset is
            flexible enough to support it all.
          </p>
        </div>
      </section>
      <section className="px-48">
        <div>
          <div className="max-w-[400px]">
            <h1 className="text-[150px] font-extrabold leading-none">
              Fully featured.
            </h1>
          </div>
          <div className="py-8">
            <h3 className="text-8xl font-semibold">Supersets.</h3>
            <p className=" text-gray-500 text-4xl py-4 font-bold">
              contract superdets by links.
            </p>
          </div>
          <div>
            <Image
              src="/supersets.png"
              alt="supersets-img"
              width={1000}
              height={300}
            />
          </div>
        </div>
      </section>
      <section className="px-48 py-20">
        <div>
          <h1 className="text-8xl font-semibold">Dropsets.</h1>
          <p className="text-gray-500 text-4xl py-4 font-bold">
            Tags for dropsets, warmup and RPE.
          </p>
        </div>
        <div>
          <Image
            src="/dropsets.png"
            alt="dropsets-img"
            width={1000}
            height={300}
          />
        </div>
      </section>
      <section className="px-48 py-20">
        <div>
          <h1 className="text-8xl font-semibold">Notes.</h1>
          <p className="text-gray-500 text-4xl py-4 font-bold">
            Both for workouts and exercises.
          </p>
        </div>
        <div>
          <Image src="/notes.png" alt="notes-img" width={1000} height={300} />
        </div>
      </section>
      <section className="px-48">
        <div>
          <h1 className="text-8xl font-semibold">Pace.</h1>
          <p className="text-gray-500 text-4xl py-4 font-bold">
            For duration and distance logs.
          </p>
        </div>
        <div>
          <Image src="/pace.png" alt="pace-img" width={1000} height={300} />
        </div>
      </section>
      <section className="px-48 py-20">
        <div>
          <h1 className="text-8xl font-semibold max-w-10">
            Flexible scheduling.
          </h1>
          <p className="text-gray-500 text-4xl py-4 font-bold">
            The foundation of amazing results.
          </p>
        </div>
        <div>
          <Image
            src="/schdule.png"
            alt="schdule-img"
            width={1000}
            height={300}
          />
        </div>
      </section>
      <section className="px-48 py-20">
        <div className="py-12">
          <h1 className="text-8xl font-semibold max-w-10">Community.</h1>
          <p className="text-gray-500 text-4xl py-4 font-bold">
            Connect, gain visibility and share knowledge.
          </p>
        </div>
        <div>
          <Image
            src="/community.png"
            alt="community-img"
            width={1000}
            height={200}
          />
        </div>
      </section>
      <section className="px-48">
        <div>
          <h1 className="text-7xl font-semibold "> What other people think.</h1>
          <p className="text-gray-500 text-4xl py-4 font-bold">
            Reviews from our customers.
          </p>
        </div>
        <div className=" grid grid-cols-2  justify-between">
          <div className="max-w-[400px]">
            <div>
              <MdStarRate />
            </div>
            <h5 className="text-2xl py-4 font-semibold">
              An elegant and powerful workout tracker.
            </h5>
            <p className="text-[#A8A9B2] text-xl">
              I’ve used many workout trackers over the years and hoops is by far
              the best. It’s seamless, doesn’t get in your way, and the design
              is so pleasing to work with. Best of all, the devs are responsive
              and are quick to address any bugs as they come up!
            </p>
            <p className="text-[#525359] text-xl py-4">September 2023</p>
          </div>
          <div className="max-w-[400px]">
            <div>
              <MdStarRate />
            </div>
            <h5 className="text-2xl py-4">Brilliant app and service.</h5>
            <p className="text-[#A8A9B2] text-xl">
              Fantastic app not over complicated, have recommended it to
              individuals of all different training levels and they have found
              it useful and intuitive. When I thought being able to export data
              I emailed support who promptly got back to me asking my preferred
              data type after exporting and notified me this was a feature in
              the works. Within 2 weeks of the communication the the export
              feature was live
            </p>
            <p className="text-[#525359] text-xl py-4">Jul 2023</p>
          </div>

          <div className="max-w-[400px]">
            <div>
              <MdStarRate />
            </div>
            <h5 className="text-2xl py-4">Thank you!</h5>
            <p className="text-[#A8A9B2] text-xl">
              Very refreshing to see a fitness app that keeps workout logging
              quick and simple. Love the minimalistic design keeping only the
              essential functions in mind. I think linking an Apple ID should be
              optional as it’s not a necessity for keeping info on a local
              device (unless some would prefer a cloud backup). Looks like the
              app is still in its early days with the workout catalogue, but I’m
              excited to see where this app goes. Nice work!
            </p>
            <p className="text-[#525359] text-xl py-4">Jul 2023</p>
          </div>
          <div className="max-w-[400px]">
            <div>
              <MdStarRate />
            </div>
            <h5 className="text-2xl py-4">Best workout tracker.</h5>
            <p className="text-[#A8A9B2] text-xl">
              I started working out beginning of this year and was writing all
              my progress down in notebooks and on the notes app on my phone.
              Had this app pop up as an ad on instagram and I'm so glad I
              downloaded it. Its so easy to use, so clearly laid out, the team
              are constantly interacting with people and taking onboard feedback
              and its great to see. I use this every time I go to the gym and
              have recommended it to others because I think its so damn good.
            </p>
            <p className="text-[#525359] text-xl py-4">Jul 2023</p>
          </div>
          <div className="max-w-[400px]">
            <div>
              <MdStarRate />
            </div>
            <h5 className="text-2xl py-4">Amazed</h5>
            <p className="text-[#A8A9B2] text-xl">
              Amazed at the attention to detail and simplicity of the app.
              There’s no bloat, easy to understand (unlike most workout apps
              I’ve tried). Definitely sticking with this one. Incredible work.
            </p>
            <p className="text-[#525359] text-xl py-4">December 2023</p>
          </div>
          <div className="max-w-[400px]">
            <div>
              <MdStarRate />
            </div>
            <h5 className="text-2xl py-4">
              An elegant and powerful workout tracker.
            </h5>
            <p className="text-[#A8A9B2] text-xl">
              I’ve used many workout trackers over the years and hoops is by far
              the best. It’s seamless, doesn’t get in your way, and the design
              is so pleasing to work with. Best of all, the devs are responsive
              and are quick to address any bugs as they come up!
            </p>
            <p className="text-[#525359] text-xl py-4">September 2023</p>
          </div>
        </div>
      </section>
      <section className="px-48 py-10">
        <div className=" py-20">
          <h5 className="text-[#E6E6E6] text-[80px] font-bold leading-none">
            Jacob <br /> Capablanca on <br /> using Dropset.
          </h5>
          <p className=" py-8 text-3xl font-semibold text-[#A8A9B2]">
            How he uses Dropset to track his workouts.
          </p>
        </div>
        <div>
          <Image src="/jacob.png" alt="jacob-img" width={1000} height={300} />
        </div>
      </section>
      <section className="px-48 py-20">
        <div>
          <div className="flex flex-row ">
            <h5 className=" text-[80px] font-bold leading-none">
              Download from the app Store
            </h5>
            <div className=" ">
              <button className=" bg-white p-4 rounded-full">
                <FaArrowDown className="  text-black text-4xl" />
              </button>
            </div>
          </div>
          <div>
            <p className="text-[#A8A9B2] text-2xl py-8">
              Dropset is free to download and try for a few days. After that,
              it’s a $4 per month subscription, or equivalent in your area.
              Designed by 44 in Stockholm, Sweden. Fine Scandinavian minimalism
              since 2020. Get in touch with questions or feedback at
              <u> hello@getdropset.app.</u>
            </p>
            <p className="text-[#A8A9B2] text-2xl">Copyright © 44 · 2024.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
