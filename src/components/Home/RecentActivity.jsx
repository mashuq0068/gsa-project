
const RecentActivity = () => {
  const items = [
    {
      id: 1,
      src: "/images/activities/ac3.jpeg",
      title: "Item One",
      description:
        "REGISTER NOW: https://www.eventbrite.com/e/gsa-women-conference-tickets-1250085803289 Meet our panelist, Aicha Cisse! Aicha Cisse is a licensed therapist with a deep passion for mental health and trauma-informed care. Originally from Guinea, she immigrated to the United States in the 1990s and was raised in Connecticut alongside her four older brothers. She initially pursued a career in nursing but soon realized her true calling lay in social work. Determined to make a meaningful impact, she earned her undergraduate degree in Human Services from the University of Bridgeport and went on to complete her Master’s in Clinical Social Work at Fordham University. After graduate school, she obtained her license as a therapist and has since been dedicated to providing compassionate care to individuals struggling with trauma and other mental health disorders. Currently, she works as a therapist at Thrive Behavioral Health, where she helps clients navigate their mental health journeys through evidence-based practices, including Cognitive Behavioral Therapy (CBT). Committed to expanding her expertise and leadership in the field, she pursued an MBA with the long-term vision of establishing her own mental health company. Her future practice will focus on psychotherapy, specializing in trauma and other mental health disorders, with CBT as a core therapeutic approach. With a strong foundation in both clinical practice and business, she aspires to create a space where individuals receive high-quality, trauma-informed care tailored to their needs. 📍 Location: 114 West 26th Street, 3rd Floor, New York, NY 📅 Date: Saturday, April 12, 2025 ⏰ Time: 12 PM - 5 PM EST #GSAWomensConference #BreakingBarriers #WomenLeading #Networking #ProfessionalDevelopment #WomenEmpowerment",
        link:"https://www.instagram.com/p/DGyPgqRxa3F/",
    },
    {
      id: 2,
      src: "/images/activities/ac1.jpeg",
      title: "Item Two",
      description:
        "🚨We’ve updated the deadline🚨 🚀 GSA “Each One Lift One” Mentorship Program – Now Accepting Applications! 🚀 Are you a college student looking for career guidance, networking opportunities, and professional development? Or a professional eager to uplift the next generation? The Guineans Succeeding in America (GSA) “Each One Lift One” Mentorship Program is here to connect ambitious students with experienced mentors! 📅 Applications Open: NOW 📅 Deadline: April 15th, 2025 🖇️ Mentees: https://docs.google.com/forms/d/e/1FAIpQLSemCmMqmWDaAuomJnAiVpnBwW-nuQvu7jXZs1YXf-C_Ssu2vw/viewform?usp=header 🖇️ Mentors: https://docs.google.com/forms/d/1WJrSq4Kr-WfaCYsI8XZMtfrLtJbohawxw68du1YDfNo/edit?usp=drivesdk 📩 Apply now and take the next step in your journey! #EachOneLiftOne #GSAMentorship #CareerSuccess",
        link:"https://www.instagram.com/p/DGvr5hMR25l/"
    },
    {
      id: 3,
      src: "/images/activities/ac2.jpeg",
      title: "Item Three",
      description:
        "Did you register yet? Join us for the GSA Women’s Conference on Saturday, April 12th, 2025, from 12 PM - 5 PM EST in New York City! This is more than just a conference—it’s a space for empowerment, networking, and professional development. Get ready for impactful panel discussions, career growth opportunities, and meaningful connections with like-minded women leading the future. This is the event for YOU! Don’t wait—REGISTER NOW and be part of a transformative experience! 📍 Location: 114 West 26th Street, 3rd Floor, New York, NY 📅 Date: Saturday, April 12, 2025 ⏰ Time: 12 PM - 5 PM EST 🔗 https://www.eventbrite.com/e/gsa-women-conference-tickets-1250085803289 #GSAWomensConference #BreakingBarriers #WomenLeading #Networking #ProfessionalDevelopment #WomenEmpowerment",
        link:"https://www.instagram.com/p/DGlaNKixmX8/",
    },
  ];

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center text-white py-20">
        <h2 className="md:text-5xl text-3xl  font-semibold text-center mb-8">Recent Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5 max-w-7xl text-center">
        {items.map((item) => (
          <div
            key={item.id}
            className=" rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <a target="_blank" rel="noopener noreferrer" href={item?.link}>
              <img
                src={item.src}
                alt={item.title}
                className="w-full  md:max-w-[500px] object-contain rounded-lg mb-6"
              />
            </a>
           
            <p className=" max-w-[500px] md:max-w-[500px] text-sm font-light break-words  text-left">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
