export interface Project {
  id: number
  title: string
  date: string
  category: string
  tags: string[]
  description: string
  shortDescription: string
  heroType: "image" | "video"
  heroImage?: string
  heroVideo?: string
  slug: string
  overview: string
  challenge: string
  outcomes: string[]
  references?: { title: string; url: string }[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SAR 5G: Telemetry for First Responders",
    date: "2023-05-15",
    category: "Product Development",
    tags: ["Real-Time Systems", "Emergency Response"],
    description: "Dual facing platform for real time streaming/telemetry for emergency response crews.",
    shortDescription: "5G and AR/VR platform for search and rescue operations",
    heroType: "image",
    heroImage: "/placeholder.svg",
    slug: "sar-5g-search-rescue",
    overview:
      "SAR 5G is a Next Gen Search and Rescue platform designed to address the growing challenges of natural and man-made disasters. Built as part of the AT&T 5G Hackathon, where it won **Best VR/AR/MR or Gaming Solution**, the platform uses 5G connectivity and AR/VR technologies to enhance communication, coordination, and decision-making for first responders, emergency medical providers, and civilians. The application features two modes: 'God Mode,' which provides mission control with a bird's-eye view of disaster zones, and 'Scout Mode,' which equips on-ground responders with real-time mapping, GPS tracking, and live video streaming capabilities. The platform integrates with existing emergency systems and aims to reduce response times, improve resource allocation, and ultimately save lives. Future plans include expanding the platform into a global ecosystem for disaster relief and medical triage.",
    challenge:
      "Disaster response operations often suffer from fragmented communication, delayed decision-making, and inefficient resource allocation. The challenge was to create a scalable, real-time platform that could integrate with existing emergency systems while leveraging 5G and AR/VR technologies to improve coordination and response times.",
    outcomes: [
      "Won Best VR/AR/MR or Gaming Solution at the AT&T 5G Hackathon",
      "Real-time GPS tracking and live video streaming for responders",
      "Shared persistence of markers and device locations across all users",
      "Improved coordination and decision-making for disaster relief teams",
      "Scalable platform with potential for global integration into emergency systems",
    ],
    references: [
      {
        title: "Devpost Project: SAR 5G",
        url: "https://devpost.com/software/sar-5g",
      },
      {
        title: "GitHub Repository: SAR 5G",
        url: "https://github.com/tomthecarrot/SAR-5G",
      },
    ],
  },
  {
    id: 2,
    title: "HighAR Ground: Flood Simulation Mapping",
    date: "2023-03-20",
    category: "Product Development",
    tags: ["AR/VR", "Emergency Response", "ESRI"],
    description: "Microsoft Hololens solution for city-scale disaster preparedness and response simulations.",
    shortDescription: "AR platform for flood simulation disaster preparedness and response",
    heroType: "video",
    heroVideo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    slug: "highar-ground",
    overview:
      "HighAR Ground is an innovative AR platform developed during the Reality Virtually Hackathon at the MIT Media Lab, where it won Best Use of ESRI, Best Use of AR in the Public Realm, and Best in Social Good. The platform addresses the lack of public preparedness for natural disasters by providing a dual-application system: a mobile app for civilians and a Hololens app for emergency personnel. The mobile app sends real-time alerts, provides navigation to safe locations, and includes an SOS feature to notify emergency services. The Hololens app visualizes disaster zones using ESRI maps, displays SOS beacons with a triage system, and helps emergency personnel coordinate response efforts. HighAR Ground aims to bridge the gap between public awareness and emergency response, ultimately saving lives during disasters.",
    challenge:
      "A significant portion of the population lacks preparedness for natural disasters, and existing warning systems often fail to prompt timely action. The challenge was to create a user-friendly, dual-application AR platform that could educate the public, improve disaster response coordination, and provide real-time guidance during emergencies.",
    outcomes: [
      "Won Best Use of ESRI, Best Use of AR in the Public Realm, and Best in Social Good at the Reality Virtually Hackathon",
      "Mobile app provides real-time alerts, navigation, and SOS functionality for civilians",
      "Hololens app visualizes disaster zones and SOS beacons for emergency personnel",
      "Improved public awareness and preparedness for natural disasters",
      "Enhanced coordination and efficiency for emergency response teams",
    ],
    references: [
      {
        title: "Devpost Project: HighAR Ground",
        url: "https://devpost.com/software/highar-ground",
      },
      {
        title: "GitHub Repository: HighAR Ground",
        url: "https://github.com/RealityVirtually2019/HighAR-Ground/",
      },
    ],
  },
  {
    id: 3,
    title: "DreamFREQ: Brainwave-Powered Soundscapes",
    date: "2022-11-01",
    category: "AI/ML",
    tags: ["IoT", "Real-Time Systems", "Neuroscience"],
    description: "A real-time synthesizer translating EEG brainwave data into auditory soundscapes.",
    shortDescription: "Real-time brainwave-to-music synthesizer",
    heroType: "image",
    heroImage: "/placeholder.svg",
    slug: "dreamfreq-brainwave-soundscapes",
    overview:
      "DreamFREQ is an innovative project that translates EEG brainwave data into real-time auditory soundscapes, offering a unique musical representation of the user’s mental state. Developed during a residency with **On Air Fest**, the project uses a Muse EEG headband to capture brainwave activity, focusing on delta waves associated with creativity and the early stages of sleep. The brainwave data is processed using **Mind Monitor** and synthesized in **Touch Designer**, creating a dynamic audio experience that changes in real-time based on the user’s brain activity. During the residency, DreamFREQ was demonstrated live at the Wythe Hotel in Brooklyn, where participants could see their brainwave activity visualized and hear it translated into sound. The project culminated in a 15-minute composition that mimics the daily cycle of waking, sleeping, and dreaming. DreamFREQ represents a fusion of neuroscience, music technology, and interactive art, offering a glimpse into the future of human-computer interaction and creative expression.",
    challenge:
      "Translating complex brainwave data into meaningful and aesthetically pleasing sound in real-time posed significant technical and creative challenges. The goal was to create a system that was both accurate and intuitive, allowing users to directly experience the connection between their brain activity and the resulting sound.",
    outcomes: [
      "Successfully demonstrated live at On Air Fest, engaging dozens of participants",
      "Created a 15-minute composition representing the cycle of waking, sleeping, and dreaming",
      "Developed a real-time synthesizer using Touch Designer and Mind Monitor",
      "Generated meaningful conversations about the future of brainwave-based art and technology",
      "Plans to expand the project by mapping all five brainwave types to different audio filters",
    ],
    references: [
      {
        title: "Medium Article: The Process Behind DreamFREQ",
        url: "https://medium.com/noctvrnal/the-process-behind-dreamfreq-90af7ae45725",
      },
      {
        title: "On Air Fest",
        url: "https://www.onairfest.com/",
      },
    ],
  },
  {
    id: 4,
    title: "HoloTRIAGE",
    date: "2022-09-15",
    category: "UX Design",
    tags: ["Mixed Reality", "Healthcare", "Training", "UX Design"],
    description: "Microsoft Hololens training for first responders",
    shortDescription: "Mixed reality training for first responders",
    heroType: "image",
    heroImage: "/placeholder.svg",
    slug: "holotriage-first-response",
    overview:
      "HoloTRIAGE is a mixed reality training platform designed to prepare first responders for high-pressure emergency situations. The platform provides immersive simulations that replicate real-world scenarios, enabling trainees to practice triage and emergency response in a safe yet realistic environment. By leveraging MR technology, HoloTRIAGE improves decision-making and response times, with organizations reporting a 40% improvement in training outcomes. The platform has been adopted by multiple emergency response teams, who praise its ability to enhance confidence and preparedness. This project represents a significant step forward in how first responders are trained, ultimately leading to better outcomes in life-or-death situations.",
    challenge:
      "Traditional training methods for first responders often lack realism and fail to prepare trainees for high-pressure situations. The challenge was to create an immersive MR experience that could replicate real-world emergencies.",
    outcomes: [
      "40% improvement in training outcomes",
      "Increased confidence among trainees",
      "Slated as first aid training option for corporate partners",
    ],
    references: [
      {
        title: "Avatar Medic: HoloTRIAGE Project",
        url: "https://www.avatarmedic.com/projects",
      },
    ],
  },
  {
    id: 5,
    title: "Firewall Scout: IoT-Based Fire Defense System",
    date: "2022-06-20",
    category: "IoT",
    tags: ["IoT", "Product Development"],
    description:
      "An IoT-based solution for creating a digital defensible space, enhancing network security and threat detection capabilities.",
    shortDescription: "IoT-based network defense system",
    heroType: "image",
    heroImage: "/placeholder.svg",
    slug: "firewall-scout-iot",
    overview:
      "Firewall Scout is an IoT-based system designed to create a digital defensible space, enhancing network security and threat detection capabilities. The solution integrates with existing infrastructure to provide real-time monitoring and alerts, enabling organizations to proactively defend against cyber threats. During testing, the system demonstrated a 30% improvement in threat detection and reduced response times by 50%. Its scalable architecture makes it suitable for both small businesses and large enterprises. Firewall Scout represents a significant advancement in cybersecurity, offering a cost-effective and efficient way to protect digital assets in an increasingly connected world.",
    challenge:
      "Traditional network defense systems are often reactive and fail to provide comprehensive coverage. The challenge was to design an IoT-based solution that could proactively detect and mitigate threats.",
    outcomes: [
      "30% improvement in threat detection",
      "Reduced response times by 50%",
      "Scalable solution for enterprise networks",
    ],
    references: [
      {
        title: "GitHub Repository: Firewall Scout",
        url: "https://github.com/heyhaiden/firewall-dissertation",
      },
    ],
  },
]

export const getAllTags = () => {
  const tagsSet = new Set<string>()
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
}

