import Image from "next/image";

import NavBar from "@/components/nav-bar";
import { MdStarRate } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black">
      <NavBar />

      <div className="px-4 max-w-[1100px] mx-auto">
        <section className=" text-white md:py-6">
          <div className=" md:max-w-[1000px] max-w-[400px]">
            <h1 className=" font-extrabold md:text-9xl text-5xl md:py-20 py-10">
              Serious traking for serious gym workouts.
            </h1>
          </div>
          section
          <div className=" md:py-6 py-2">
            <Image
              src="/gym.svg"
              width={200}
              height={200}
              alt="gym workout-img"
            />
          </div>
        </section>
        <section className="py-10 text-white">
          <div className="flex md:flex-row justify-between ">
            <div
              className={` flex-1 flex-col hidden md:block space-y-32 py-32 font-semibold text-xl`}
            >
              <p className="border-b border-[#A8A9B2] pb-2">Workout</p>
              <p className="border-b border-[#A8A9B2] pb-2">Body metrics</p>
              <p className="border-b border-[#A8A9B2] pb-2">
                Streak and cooldown
              </p>
              <p className=" border-b border-[#A8A9B2] pb-2">
                Highly customisable
              </p>
            </div>
            <div className="">
              <Image
                src="/workouts.png"
                width={420}
                height={420}
                alt="workout-img"
                className=""
              />
            </div>
          </div>
        </section>

        <section className="">
          <div className="py-20">
            <h1 className=" md:text-[150px] text-6xl font-extrabold leading-none text-white">
              Athletic by design.
            </h1>
            <p className="text-[32px] py-5 text-[#A8A9B2]">
              Made purely for the gym.
            </p>
          </div>
          <div>
            <div className="py-10">
              <div className="hidden md:block">
                <Image
                  src="/Athletic.svg"
                  alt="Athletic-img"
                  width={800}
                  height={500}
                />
              </div>
              <div className=" md:hidden block">
                <Image
                  src="/Athletic-2.svg"
                  alt="Athletic-img"
                  width={800}
                  height={500}
                />
              </div>
            </div>
            <div className="md:max-w-[750px] py-9">
              <p className=" text-[#A8A9B2] text-2xl font-medium md:text-[26px]">
                Hands shaking from working out, using the app from across the
                room, divided attention, bad connection, switching exercises
                on-the-fly, knowing what weights you did the last time - all of
                it has been considered to get the ultimate gym tracking
                experience.
              </p>
            </div>
          </div>
        </section>
        <section className=" md:py-12 ">
          <div className="py-6">
            <h1 className=" md:text-[150px] text-6xl font-extrabold leading-none text-white">
              Not just <br /> reps.
            </h1>
          </div>
          <div className="flex flex-row  justify-between relative overflow-hidden md:gap-20">
            <div className=" text-xl flex flex-col md:py-40 py-72 w-1/2 gap-8  text-white">
              <p className="border-b border-t border-[#A8A9B2] py-4 ">
                Distance and pace
              </p>
              <p className="border-b border-[#A8A9B2] py-4">Sets and reps</p>
              <p className="border-b border-[#A8A9B2] py-4">Intervals</p>
              <p className="border-b border-[#A8A9B2] py-4">Mark-to-complete</p>
              <p className=" py-4">Duration timer</p>
            </div>
            <div className="">
              <Image
                src="/reps.png"
                alt="reps-img"
                width={420}
                height={420}
                className="absolute h-full object-contain left-44 md:left-80"
              />
            </div>
          </div>
          <div className="max-w-[700px] py-24 px-4">
            <p className=" text-2xl text-[#A8A9B2] font-medium">
              {`Wether you’re tracking a classic workout with sets and reps, using
              HIIT interval timers, calisthenics, running a distance, running
              for time or just want a simple list to check things off. Dropset
              is flexible enough to support it all.`}
            </p>
          </div>
        </section>
        <section className=" py-4">
          <div>
            <div className="md:max-w-[400px] md:py-16 py-20 text-white">
              <h1 className=" md:text-9xl text-6xl font-extrabold leading-none">
                Fully featured.
              </h1>
            </div>
            <div className=" md:py-28">
              <h3 className="md:text-[80px] text-4xl font-bold text-white">
                Supersets.
              </h3>
              <p className=" text-[#A8A9B2] text-3xl py-4 md:py-8 font-bold">
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
        <section className=" md:py-20 py-4">
          <div>
            <h1 className="text-6xl md:text-8xl font-semibold text-white">
              Dropsets.
            </h1>
            <p className="text-[#A8A9B2] text-3xl py-4 font-bold">
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
        <section className="md:py-20 py-4">
          <div>
            <h1 className="text-6xl md:text-8xl font-semibold text-white">
              Notes.
            </h1>
            <p className="text-[#A8A9B2] text-4xl py-4 font-bold">
              Both for workouts and exercises.
            </p>
          </div>
          <div>
            <Image src="/notes.png" alt="notes-img" width={1000} height={300} />
          </div>
        </section>
        <section className="py-4">
          <div>
            <h1 className="text-6xl md:text-8xl font-semibold text-white">
              Pace.
            </h1>
            <p className="text-[#A8A9B2] text-4xl py-4 font-bold">
              For duration and distance logs.
            </p>
          </div>
          <div>
            <Image src="/pace.png" alt="pace-img" width={1000} height={300} />
          </div>
        </section>
        <section className=" md:py-20  py-4">
          <div>
            <h1 className="md:text-8xl text-6xl font-semibold max-w-10 text-white">
              Flexible scheduling.
            </h1>
            <p className="text-[#A8A9B2]  text-4xl py-4 font-bold">
              The foundation of amazing results.
            </p>
          </div>
          <div>
            <Image
              src="/schdule.png"
              alt="schdule-img"
              width={1000}
              height={300}
              className="hidden md:block"
            />
            <Image
              src="/schdule-2.png"
              alt="schdule-2-img"
              width={1000}
              height={300}
              className=" block md:hidden"
            />
          </div>
        </section>
        <section className=" md:py-20 py-4">
          <div className="py-12">
            <h1 className="md:text-8xl text-6xl font-semibold max-w-10 text-white">
              Community.
            </h1>
            <p className="text-[#A8A9B2]  text-4xl py-4 font-bold">
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
        <section className="">
          <div>
            <h1 className="text-7xl font-semibold max-w-[600px] text-white">
              What other people think.
            </h1>
            <p className="text-[#A8A9B2]  text-4xl py-4 font-bold">
              Reviews from our customers.
            </p>
          </div>
          <div className=" grid md:grid-cols-2 grid-cols-1  justify-between md:gap-14 gap-5 py-5 md:py-32">
            <div className="max-w-[400px]">
              <div className="flex flex-row text-3xl text-white">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <h5 className="text-2xl py-4 font-semibold text-white">
                An elegant and powerful workout tracker.
              </h5>
              <p className="text-[#A8A9B2] text-xl">
                {` I’ve used many workout trackers over the years and hoops is by
                far the best. It’s seamless, doesn’t get in your way, and the
                design is so pleasing to work with. Best of all, the devs are
                responsive and are quick to address any bugs as they come up!`}
              </p>
              <p className="text-[#525359] text-xl py-4">September 2023</p>
            </div>
            <div className="max-w-[400px]">
              <div className="flex flex-row text-3xl text-white">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <h5 className="text-2xl py-4 text-white">
                Brilliant app and service.
              </h5>
              <p className="text-[#A8A9B2] text-xl">
                Fantastic app not over complicated, have recommended it to
                individuals of all different training levels and they have found
                it useful and intuitive. When I thought being able to export
                data I emailed support who promptly got back to me asking my
                preferred data type after exporting and notified me this was a
                feature in the works. Within 2 weeks of the communication the
                the export feature was live
              </p>
              <p className="text-[#525359] text-xl py-4">Jul 2023</p>
            </div>

            <div className="max-w-[400px]">
              <div className="flex flex-row text-3xl text-white">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <h5 className="text-2xl py-4 text-white">Thank you!</h5>
              <p className="text-[#A8A9B2] text-xl">
                Very refreshing to see a fitness app that keeps workout logging
                quick and simple. Love the minimalistic design keeping only the
                essential functions in mind. I think linking an Apple ID should
                be optional as it’s not a necessity for keeping info on a local
                device (unless some would prefer a cloud backup). Looks like the
                app is still in its early days with the workout catalogue, but
                I’m excited to see where this app goes. Nice work!
              </p>
              <p className="text-[#525359] text-xl py-4">Jul 2023</p>
            </div>
            <div className="max-w-[400px]">
              <div className="flex flex-row text-3xl text-white">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <h5 className="text-2xl py-4 text-white">
                Best workout tracker.
              </h5>
              <p className="text-[#A8A9B2] text-xl">
                {`I started working out beginning of this year and was writing all
                my progress down in notebooks and on the notes app on my phone.
                Had this app pop up as an ad on instagram and I'm so glad I
                downloaded it. Its so easy to use, so clearly laid out, the team
                are constantly interacting with people and taking onboard
                feedback and its great to see. I use this every time I go to the
                gym and have recommended it to others because I think its so
                damn good.`}
              </p>
              <p className="text-[#525359] text-xl py-4">Jul 2023</p>
            </div>
            <div className="max-w-[400px]">
              <div className="flex flex-row text-3xl text-white">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <h5 className="text-2xl py-4 text-white">Amazed</h5>
              <p className="text-[#A8A9B2] text-xl">
                Amazed at the attention to detail and simplicity of the app.
                There’s no bloat, easy to understand (unlike most workout apps
                I’ve tried). Definitely sticking with this one. Incredible work.
              </p>
              <p className="text-[#525359] text-xl py-4">December 2023</p>
            </div>
            <div className="max-w-[400px]">
              <div className="flex flex-row text-3xl text-white">
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
                <MdStarRate />
              </div>
              <h5 className="text-2xl py-4 text-white">
                An elegant and powerful workout tracker.
              </h5>
              <p className="text-[#A8A9B2] text-xl">
                I’ve used many workout trackers over the years and hoops is by
                far the best. It’s seamless, doesn’t get in your way, and the
                design is so pleasing to work with. Best of all, the devs are
                responsive and are quick to address any bugs as they come up!
              </p>
              <p className="text-[#525359] text-xl py-4">September 2023</p>
            </div>
          </div>
        </section>
        <section className=" md:py-10  py-4">
          <div className=" md:py-20">
            <h5 className="text-[#E6E6E6] md:text-[80px] text-5xl font-bold leading-none">
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
        <section className=" md:py-20 py-52">
          <div className="max-w-[750px]">
            <div className="flex flex-row ">
              <h5 className=" md:text-[80px] text-6xl  font-bold leading-none text-white">
                Download from the app Store.
              </h5>
              <div className="py-6">
                <button className=" bg-white p-6 rounded-full">
                  <FaArrowDown className="text-black text-4xl" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-[#A8A9B2] text-2xl py-8">
                {` Dropset is free to download and try for a few days. After that,
                it’s a $4 per month subscription, or equivalent in your area.
                Designed by 44 in Stockholm, Sweden. Fine Scandinavian
                minimalism since 2020. Get in touch with questions or feedback
                at`}
                <u> hello@getdropset.app.</u>
              </p>
              <p className="text-[#A8A9B2] text-2xl">Copyright © 44 · 2024.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
