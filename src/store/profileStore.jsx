import { create } from 'zustand';

const useProfileStore = create((set) => ({
    stats: {
        earnings: 3670.00,
        totalJobs: 15,
        totalHours: 90,

      },
      courses: [
        {
          id: 1,
          title: "UX Foundations: Prototyping",
          viewers: 27959,
          thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          id: 2,
          title: "Designing with Adobe XD and pro",
          viewers: 9122,
          thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          id: 3,
          title: "UX Foundations: Styles and GUIs",
          viewers: 13858,
          thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
      ],
      // Visitors data
    visitors: [
        {
          id: 1,
          name: "Darlene Black",
          position: "HR-manager, 10 000 connec...",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          id: 2,
          name: "Theresa Steward",
          position: "iOS developer",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          id: 3,
          name: "Brandon Wilson",
          position: "Senior UX designer",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          id: 4,
          name: "Kyle Fisher",
          position: "Product designer at Com...",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
          id: 5,
          name: "Audrey Alexander",
          position: "Team lead at Google",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
      ],
    // Profile data
    // This is a mock data, you can replace it with your own data
    // or fetch it from an API
    // The profile data is used to display the user's information on the profile page
    
  profile: {
    name: "Udo Emmanuel",
    location: "Saint Petersburg, Russian Federation",
    title: "Freelance UX/UI designer",
    biodetails: "Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.",
    bio: "Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android) and creative projects. Open to offers.",
    about: "I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. I have a good experience in web design and mobile apps (iOS & android). I can create a full design for your project, including wireframes, prototypes, UI and UX design. I can also help you with your corporate identity, such as logo, business cards, etc.",
    connections: 1043,
    coverImage: "https://s3-alpha-sig.figma.com/img/b67d/1192/91643c519bd401351e695a6f6faf60bc?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iOgsMH3imY-F2Biu4QlQCaMWj4jpSHLzWje1Agf8rQ5ljk4kjo1grqUYbiQRmIXrZomFf5NXYnNpkzR0GvJPKTySXcqZ8bvqK92-Ks8Zd32MlXF-bPv0ML9H7HeiyQEhNlCRzyCH5vVLmcAiYHGzH65hIyNdzAIY7ImzyEKnOJjxaypuX9qk3M0WIUY9pldeTJi3M3yLRf5vLpOfcha6NFuJNs1SD1ngyBkoscX1rvXNXtdQEphLaDckBZX2iJApM0ABtE9sXNlWoMq28YVpYONJ62ApqJJwUS3nnLa8XjmKq64TUI6Tg93RGnt4PxOl7DIMS8yCkd4GodRO~B~ZXg__",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  projects: [
    {
      id: 1,
      title: "Zara redesign concept",
      type: "UX/UI design",
      date: "10.31.2015",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 2,
      title: "SCTHON event brand identity",
      type: "Graphic design",
      date: "03.15.2015",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: 3,
      title: "Drozzd. Brand identity 2015",
      type: "Graphic design",
      date: "05.24.2015",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
  ],
  skills: [
    { id: 1, name: "User experience (UX)", rating: 6 },
    { id: 2, name: "User interface (UI)", rating: 7 },
    { id: 3, name: "Brand identity", rating: 5 }
  ],
  experience: [
    {
      id: 1,
      role: "Freelance UX/UI designer",
      type: "Self Employed",
      period: "July 2018 — Present",
      description: "Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects, creative landing pages, iOS and Android apps, corporate web sites and corporate identity sometimes."
    },
    {
      id: 2,
      role: "UX/UI designer",
      company: "Upwork",
      type: "International",
      period: "Jun 2016 — Present",
      description: "New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research."
    }
  ],
  education: [
    {
      id: 1,
      school: "Moscow State Linguistic University",
      degree: "Bachelor's degree Field Of Study Computer and Information Systems Security/Information Assurance",
      period: "2013 - 2017",
      details: "Additional English classes and UI profile courses."
    }
  ],
  updateProfile: (updates) => set((state) => ({
    profile: { ...state.profile, ...updates }
  }))
}));

export default useProfileStore;