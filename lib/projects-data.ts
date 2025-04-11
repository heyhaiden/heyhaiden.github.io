export interface Project {
  id: number
  title: string
  category: string
  tags: string[]
  description: string
  shortDescription: string
  titleCard: string // Image for project preview card
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
    title: "Embodied Labs: HealthTech Training Platform",
    category: "WebXR",
    tags: ["Healthcare Training", "B2B", "WebXR"],
    description:
      "A WebXR platform providing immersive training experiences for healthcare professionals, improving empathy and skills through virtual reality.",
    shortDescription: "Immersive WebXR training for healthcare professionals",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
    slug: "embodied-labs-webxr",
    overview:
      "Embodied Labs is a pioneering WebXR platform designed to provide immersive training experiences for healthcare professionals. By leveraging virtual reality, the platform simulates real-world scenarios that help healthcare workers develop empathy, improve clinical skills, and better understand the challenges faced by patients. Embodied Labs focuses on aging, vision loss, and other healthcare-related topics, offering modules that are both educational and emotionally impactful. The platform has been widely adopted by healthcare organizations, demonstrating its effectiveness in enhancing training outcomes and fostering a deeper understanding of patient experiences.",
    challenge:
      "Healthcare training often lacks the immersive, hands-on experiences needed to develop empathy and practical skills. Embodied Labs addresses this gap by providing realistic, scenario-based training through WebXR technology.",
    outcomes: [
      "Developed immersive training modules for healthcare professionals",
      "Improved empathy and understanding of patient experiences",
      "Adopted by numerous healthcare organizations for training purposes",
      "Enhanced clinical skills through realistic, scenario-based learning",
    ],
    references: [
      {
        title: "Embodied Labs Website",
        url: "https://www.embodiedlabs.com/about",
      },
    ],
  },
  {
    id: 2,
    title: "Care Companion: Healthcare Chatbot App",
    category: "Mobile App",
    tags: ["Healthcare", "Chatbot", "Mobile App", "AI/ML"],
    description:
      "A mobile app featuring a healthcare chatbot designed to provide personalized support and information to users.",
    shortDescription: "Healthcare chatbot for personalized support",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
    slug: "care-companion-chatbot",
    overview:
      "Care Companion is a mobile app designed to provide personalized healthcare support through an AI-powered chatbot. The app offers users access to medical information, symptom checking, and reminders for medication or appointments. By leveraging natural language processing (NLP) and machine learning, the chatbot delivers accurate and context-aware responses, improving user engagement and satisfaction. Care Companion aims to bridge the gap between patients and healthcare providers, offering a convenient and accessible tool for managing health and wellness.",
    challenge:
      "Access to timely and accurate healthcare information can be challenging for many users. Care Companion addresses this by providing a chatbot that delivers personalized support and information, making healthcare more accessible and user-friendly.",
    outcomes: [
      "Developed a functional healthcare chatbot using AI/ML technologies",
      "Provided users with personalized medical information and reminders",
      "Improved accessibility to healthcare resources through a mobile app",
      "Enhanced user engagement with context-aware responses",
    ],
    references: [
      {
        title: "GitHub Repository: Care Companion",
        url: "https://github.com/heyhaiden/careCompanion",
      },
    ],
  },
  {
    id: 3,
    title: "Koji: Empowering Creators with Mini-Apps",
    category: "SaaS",
    tags: ["Creator Economy", "Monetization", "B2C"],
    description:
      "A leading creator economy platform enabling content creators to monetize and engage audiences through mini-apps and interactive experiences.",
    shortDescription: "Platform for creators to build mini-apps and monetize content",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
    slug: "koji-creator-platform",
    overview:
      "Koji is a cutting-edge platform designed to empower content creators by enabling them to build and deploy mini-apps that enhance audience engagement and monetization. Acquired by **Linktree** in December 2023, Koji allows creators to create interactive experiences such as games, quizzes, and custom storefronts directly within their link-in-bio profiles. The platform supports a wide range of use cases, from e-commerce to fan engagement, making it a versatile tool for creators across industries. Koji's acquisition by Linktree underscores its significance in the creator economy, as it continues to innovate and provide creators with the tools they need to succeed in a competitive digital landscape.",
    challenge:
      "Content creators often struggle to monetize their work and engage audiences effectively due to limited tools and platforms. Koji addresses this by providing a no-code solution for building interactive mini-apps, enabling creators to unlock new revenue streams and deepen audience connections.",
    outcomes: [
      "Acquired by Linktree in December 2023, marking a significant milestone in the creator economy",
      "Enabled creators to build and deploy mini-apps for monetization and engagement",
      "Supported a wide range of interactive experiences, including games, quizzes, and e-commerce",
      "Empowered creators to increase audience engagement and revenue streams",
    ],
    references: [
      {
        title: "TechCrunch: Linktree Acquires Koji",
        url: "https://techcrunch.com/2023/12/14/linktree-acquires-link-in-bio-platform-koji-in-its-second-investment-of-the-year/",
      },
    ],
  },
  {
    id: 4,
    title: "SAR 5G: Telemetry for First Responders",
    category: "Product Development",
    tags: ["Disaster Response", "B2B"],
    description: "Dual facing platform for real time streaming/telemetry for emergency response crews.",
    shortDescription: "5G and AR/VR platform for search and rescue operations",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
    slug: "sar-5g-search-rescue",
    overview:
      "SAR 5G is a Next Gen Search and Rescue platform designed to address the growing challenges of natural and man-made disasters. Built as part of the AT&T 5G Hackathon, where it won Best VR/AR/MR or Gaming Solution, the platform uses 5G connectivity and AR/VR technologies to enhance communication, coordination, and decision-making for first responders, emergency medical providers, and civilians. The application features two modes: 'God Mode,' which provides mission control with a bird's-eye view of disaster zones, and 'Scout Mode,' which equips on-ground responders with real-time mapping, GPS tracking, and live video streaming capabilities. The platform integrates with existing emergency systems and aims to reduce response times, improve resource allocation, and ultimately save lives. Future plans include expanding the platform into a global ecosystem for disaster relief and medical triage.",
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
    id: 5,
    title: "HighAR Ground: Flood Simulation Mapping",
    category: "Product Development",
    tags: ["Mixed Reality", "Disaster Response", "ESRI", "B2B"],
    description: "Microsoft Hololens solution for city-scale disaster preparedness and response simulations.",
    shortDescription: "AR platform for flood simulation disaster preparedness and response",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
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
    id: 6,
    title: "DreamFREQ: Brainwave-Powered Soundscapes",
    category: "AI/ML",
    tags: ["IoT", "Wearable Tech"],
    description: "A real-time synthesizer translating EEG brainwave data into auditory soundscapes.",
    shortDescription: "Real-time brainwave-to-music synthesizer",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
    slug: "dreamfreq-brainwave-soundscapes",
    overview:
      "DreamFREQ is an innovative project that translates EEG brainwave data into real-time auditory soundscapes, offering a unique musical representation of the user's mental state. Developed during a residency with **On Air Fest**, the project uses a Muse EEG headband to capture brainwave activity, focusing on delta waves associated with creativity and the early stages of sleep. The brainwave data is processed using **Mind Monitor** and synthesized in **Touch Designer**, creating a dynamic audio experience that changes in real-time based on the user's brain activity. During the residency, DreamFREQ was demonstrated live at the Wythe Hotel in Brooklyn, where participants could see their brainwave activity visualized and hear it translated into sound. The project culminated in a 15-minute composition that mimics the daily cycle of waking, sleeping, and dreaming. DreamFREQ represents a fusion of neuroscience, music technology, and interactive art, offering a glimpse into the future of human-computer interaction and creative expression.",
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
    id: 7,
    title: "HoloTRIAGE: CPR Training Simulation",
    category: "UX Design",
    tags: ["Mixed Reality", "Healthcare Training", "Interaction Design"],
    description: "Microsoft Hololens training for first responders",
    shortDescription: "Mixed reality training for first responders",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
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
    id: 8,
    title: "Firewall Scout: IoT-Based Fire Defense System",
    category: "IoT",
    tags: ["IoT", "Environmental Sensing", "Disaster Response"],
    description:
      "An IoT-based solution for creating a digital defensible space, enhancing network security and threat detection capabilities.",
    shortDescription: "IoT-based network defense system",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
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
  {
    id: 9,
    title: "Smart Helmet: Speech-to-Turn Signal",
    category: "IoT",
    tags: ["AI/ML", "Wearable Tech", "IoT"],
    description:
      "A smart helmet that converts voice commands into turn signals, enhancing cyclist safety and communication on the road.",
    shortDescription: "Voice-controlled turn signals for cyclists",
    titleCard: "/placeholder.jpg",
    heroType: "image",
    heroImage: "/placeholder.jpg",
    slug: "smart-helmet-voice-commands",
    overview:
      "The Smart Helmet project introduces a voice-controlled system that converts spoken commands into turn signals, improving cyclist safety and communication on the road. The helmet integrates IoT technology and ML voice recognition to detect commands such as 'left,' 'right,' and 'stop,' activating corresponding LED signals. This innovation addresses the challenge of hand-signal communication, which can be unreliable or unsafe in high-traffic environments. The project demonstrates the potential of wearable technology to enhance road safety and provide cyclists with a more intuitive way to signal their intentions.",
    challenge:
      "Cyclists often rely on hand signals to communicate their intentions, which can be unsafe or ineffective in high-traffic situations. The Smart Helmet addresses this by providing a hands-free, voice-controlled alternative for signaling turns and stops.",
    outcomes: [
      "Developed a functional prototype of the voice-controlled smart helmet",
      "Integrated IoT and voice recognition technology for real-time command processing",
      "Enhanced cyclist safety through hands-free turn signals",
      "Demonstrated the potential of wearable tech for road safety",
    ],
    references: [
      {
        title: "GitHub Repository: Smart Helmet",
        url: "https://github.com/heyhaiden/bikeHelmetCommands",
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
