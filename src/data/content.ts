/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Source of truth for WISE Crown application content and copy.
 * Maintained for OLAMII WISE Solutions.
 * Non-developers can safely update text and options in this file.
 */

export interface ChallengeValue {
  id: 'edu' | 'eq' | 'safe' | 'opp' | 'tom';
  name: string;
  cssVar: string;
  colorHex: string;
  accentBg: string;
}

export interface QuizQuestion {
  q: string;
  o: string[];
  b: number; // 0-based index of correct answer
  w: string; // explanation / encouragement
}

export interface CareerOption {
  n: string;
  t: string;
}

export interface BodyAgeBand {
  min: number;
  max: number;
  change: string;
  care: string[];
  ask: string[];
}

export interface MythFact {
  m: string;
  f: string;
}

export interface EarningCategory {
  t: string;
  items: [string, string][]; // [title, description]
}

export interface WisePillar {
  l: 'W' | 'I' | 'S' | 'E';
  n: string;
  t: string;
  d: string;
}

export interface CommunityContact {
  n: string;
  r: string;
  p?: string;
  whatsapp?: string;
}

export const VALUES: ChallengeValue[] = [
  { id: 'edu', name: 'Education', cssVar: '--c-edu', colorHex: '#E6197F', accentBg: '#FFE6F1' },
  { id: 'eq', name: 'Equality', cssVar: '--c-eq', colorHex: '#7B3FA0', accentBg: '#F3E8FF' },
  { id: 'safe', name: 'Safety', cssVar: '--c-safe', colorHex: '#129C7F', accentBg: '#E3F9F3' },
  { id: 'opp', name: 'Opportunity', cssVar: '--c-opp', colorHex: '#EE7F12', accentBg: '#FFF0E5' },
  { id: 'tom', name: 'A Brighter Tomorrow', cssVar: '--c-tom', colorHex: '#D9A400', accentBg: '#FEF9C3' }
];

export const QUIZ: QuizQuestion[] = [
  {
    q: "When is a girl's body ready to carry a baby safely?",
    o: [
      "As soon as her periods start",
      "After her body has fully grown, well into adulthood",
      "At any age"
    ],
    b: 1,
    w: "A first period means the body is maturing. It does not mean it is ready for pregnancy. Giving the body time to grow protects a girl's health."
  },
  {
    q: "Which helps a girl earn more over her life?",
    o: [
      "Finishing school",
      "Leaving school early",
      "Waiting for luck"
    ],
    b: 0,
    w: "Each extra year in school tends to raise what a girl can earn later, and gives her more say at home."
  },
  {
    q: "Under Nigeria's Child Rights Act, who counts as a child?",
    o: [
      "Anyone under 12",
      "Anyone under 18",
      "Anyone under 21"
    ],
    b: 1,
    w: "A person under 18 is a child, and a child should not be married."
  },
  {
    q: "What is a good way to remember what you learned?",
    o: [
      "Read it once and forget it",
      "Teach it to someone else",
      "Copy it without reading"
    ],
    b: 1,
    w: "Teaching someone else locks the idea in. Try it tonight with someone at home."
  },
  {
    q: "Who is allowed to force a child to marry?",
    o: [
      "Her family, if they are in need",
      "Nobody",
      "A community leader"
    ],
    b: 1,
    w: "Nobody. A child has the right to say no and to be protected. If anyone pushes you, tell a trusted adult."
  }
];

export const EQ: QuizQuestion[] = [
  {
    q: "Tunde plays football while Ada does all the cooking and washing, every day. Ada has homework. What can Ada do?",
    o: [
      "Say nothing and stay up late",
      "Ask a parent calmly to share the chores so she can study",
      "Refuse everything and shout"
    ],
    b: 1,
    w: "Calm and clear works best. Fair sharing of chores gives every child time to study and rest."
  },
  {
    q: "A relative says a girl does not need to go far in school. What could you say?",
    o: [
      "Agree quietly",
      "A girl who finishes school can help the whole family earn more",
      "Walk out angry"
    ],
    b: 1,
    w: "Facts said politely are hard to argue with. Girls who finish school tend to earn more and raise healthier families."
  },
  {
    q: "In class, only boys are chosen to lead the group. What can you do?",
    o: [
      "Volunteer, or suggest taking turns",
      "Give up on speaking in class",
      "Wait for someone else to fix it"
    ],
    b: 0,
    w: "Leadership is practice. Putting your hand up, or asking for turns, shows the class that girls lead too."
  }
];

export const CAREERS: CareerOption[] = [
  { n: "Doctor", t: "Strong sciences, then medical school at university. It takes about six years." },
  { n: "Nurse", t: "Nursing school or a nursing degree, then a licence to practise." },
  { n: "Teacher", t: "A college of education or a university education degree. Good with people, patient with ideas." },
  { n: "Engineer", t: "Strong maths and physics, then an engineering degree." },
  { n: "Lawyer", t: "A law degree, then Law School. Speaking up for others is the job." },
  { n: "Business owner", t: "Learn a skill, save, start small and keep records of every naira." },
  { n: "Designer", t: "Practise daily, build a portfolio, learn design apps on a phone or computer." },
  { n: "Software developer", t: "Learn to code online, build small projects, keep going. Practice counts as much as certificates." },
  { n: "Pharmacist", t: "Study pharmacy at university, then register to practise. You help people use medicine safely." },
  { n: "Midwife", t: "Train as a nurse, then as a midwife. You help mothers and babies stay safe and healthy." },
  { n: "Accountant", t: "Study accounting, then professional exams. Every business needs someone who understands money." },
  { n: "Architect", t: "A degree in architecture. You design the buildings people live and work in." },
  { n: "Journalist", t: "Study mass communication or learn by writing. You tell true stories people need to hear." },
  { n: "Fashion designer", t: "Learn to sketch and sew, build a collection, and sell. Many start by training with a tailor." },
  { n: "Farmer and agribusiness owner", t: "Learn modern farming, start small, and process or sell what you grow." },
  { n: "Scientist", t: "Strong sciences and curiosity, then a degree and further study." },
  { n: "Pilot", t: "Strong maths and English, then flight school." },
  { n: "Counsellor", t: "Study psychology or counselling. You help people through hard times." },
  { n: "Musician or songwriter", t: "Practise often, record, share, and learn the business side of music." },
  { n: "Content creator", t: "Make videos or posts about something you know well. Learn to edit and to earn from it." },
  { n: "Public leader", t: "Learn to speak, serve your community, and join school and youth groups early." },
  { n: "Lecturer", t: "A degree, then further study. You teach and research at a college or university." },
  { n: "Chef or caterer", t: "Learn to cook well, train at a catering school or restaurant, and start with small orders." },
  { n: "Social entrepreneur", t: "Solve a problem in your community through a small business or project." }
];

export const BODY: BodyAgeBand[] = [
  {
    min: 9,
    max: 10,
    change: "Your body is getting ready to grow. You may shoot up in height, notice new body smell, oilier skin and the first small breast buds. Some girls start now and some start later. Both are normal.",
    care: [
      "Wash every day and change your underwear daily",
      "Drink water and eat three meals",
      "Sleep about 9 to 11 hours at your age",
      "Chores should never take away your sleep or study time"
    ],
    ask: [
      "You have pain you cannot explain",
      "Someone touches you in a way that feels wrong",
      "A change scares you and you do not know why"
    ]
  },
  {
    min: 11,
    max: 12,
    change: "Your first period may come any time from about age 9 to 15, often around 12. It is a normal, healthy sign that your body is growing up. You can still go to school, play and study.",
    care: [
      "Keep a pad and spare underwear in your school bag",
      "Wash daily and change pads every few hours",
      "Eat beans, leafy greens and fish to keep your blood strong",
      "Rest when you are tired. Your growing body needs it"
    ],
    ask: [
      "Bleeding is very heavy or lasts more than 7 days",
      "Pain is so bad you cannot go to school",
      "You have not had a period by age 15"
    ]
  },
  {
    min: 13,
    max: 14,
    change: "Periods can be uneven in the first few years. Moods may swing and skin may break out. Your body is close to adult size, but you are still a child, and your mind is still growing.",
    care: [
      "Mark your first period day in My Plan so you know your pattern",
      "Keep eating iron-rich food and stay active",
      "Learn about your body from a trusted woman, a nurse or a teacher, not from rumours",
      "Say no to work that leaves you too tired to study"
    ],
    ask: [
      "Periods are very painful or very heavy",
      "A regular period stops for three months",
      "Anyone pressures you about marriage or leaving school"
    ]
  },
  {
    min: 15,
    max: 16,
    change: "Your body looks nearly grown, but it is still developing, and so is your brain. This is the time to build your education and skills. Your body needs time before it is ready to carry a baby safely.",
    care: [
      "Protect your sleep, meals and study time",
      "Know your rights: you can say no, and no one may force you to marry",
      "Plan your next steps in My Plan and My Money",
      "Talk to a nurse or a trusted woman about any health question"
    ],
    ask: [
      "Anyone pressures you about marriage, or about sex",
      "Your family is planning for you to leave school",
      "You feel unsafe at home, at school or on the way"
    ]
  }
];

export const MYTHS: MythFact[] = [
  {
    m: "Once a girl has her period, she is ready to marry.",
    f: "A first period means the body is maturing. It is not ready for pregnancy yet, and under 18 she is still a child."
  },
  {
    m: "Marrying early solves money problems.",
    f: "It usually makes them worse. Girls who leave school early earn less and have less say."
  },
  {
    m: "A girl's education is wasted because she will marry.",
    f: "Educated girls tend to have healthier children and bring more income to the family."
  },
  {
    m: "A girl who has her period is unclean.",
    f: "A period is a natural, healthy sign of growing up. Wash, change pads and carry on with school and life."
  },
  {
    m: "Early marriage keeps a girl safe.",
    f: "Girls married as children face more health risks and more violence. Safety comes from school, support and time."
  },
  {
    m: "A girl who goes far in school will not find a husband.",
    f: "Educated women marry too, and they have more say in when and whom."
  },
  {
    m: "Poor families have no other choice.",
    f: "There are other paths: school support, skills training and small savings plans. Talk to a teacher, counsellor or community leader before deciding."
  }
];

export const IDEAS: EarningCategory[] = [
  {
    t: "Creative and craft",
    items: [
      ["Handcraft", "Beads, bags, resin keyrings, tie-and-dye. Start with one product and sell to friends and family."],
      ["Graffiti and wall art", "Lettering and murals for shops, schools and events. Practise on paper first."],
      ["Beauty and styling", "Learn from a trusted professional in the holidays, then take small bookings."]
    ]
  },
  {
    t: "Digital creativity",
    items: [
      ["Design", "Make flyers, cards and CVs on a phone. Learn one free design tool well."],
      ["Apps and websites", "Build simple apps and web pages, starting with free tools and online lessons."],
      ["Video editing", "Cut short videos for schools, shops and events."]
    ]
  },
  {
    t: "Food and baking",
    items: [
      ["Snacks and cakes", "Puff-puff, chin-chin, cakes and packed snacks. Cost every batch so you know your profit."]
    ]
  },
  {
    t: "Agriculture",
    items: [
      ["Home vegetable garden", "Grow pepper, ugu and scent leaf in sacks or buckets."],
      ["Poultry and snails", "Rear a small number with an adult who knows the work, and keep records."],
      ["Processing and packing", "Clean, pack and label produce like beans, groundnuts or garri so it sells for more."]
    ]
  },
  {
    t: "Health and wellness",
    items: [
      ["Health ambassador", "Share facts that a nurse or teacher has checked, through school talks, posters and group chats. OLAMII WISE began with this idea."],
      ["Peer educator", "Help younger girls understand their bodies and their rights. Good work builds a name that can lead to paid roles."]
    ]
  }
];

export const WISE: WisePillar[] = [
  {
    l: "W",
    n: "Wellness",
    t: "Wellness is caring for your whole self: your body, your mind and your feelings. OLAMII WISE began by teaching women how their bodies work, because a girl who understands her body makes better choices.",
    d: "Drink a glass of water and eat one fruit or vegetable."
  },
  {
    l: "I",
    n: "Indulgence",
    t: "Indulgence means a small treat you give yourself on purpose: a favourite fruit, a song, time with a friend, a rest after hard work. A treat is a reward, not a habit, and it never replaces meals, sleep or school.",
    d: "Choose one small joy for today and enjoy it fully."
  },
  {
    l: "S",
    n: "Self-care",
    t: "Self-care is looking after yourself every day: washing, resting, eating well, asking for help, and saying no when something feels wrong. Caring for yourself is not selfish. It gives you strength for school, family and your dreams.",
    d: "Tell one trusted adult how your day was."
  },
  {
    l: "E",
    n: "Elegance",
    t: "Elegance is carrying yourself with dignity: neat and clean, kind words, standing tall, and respect for yourself and others. It comes from inside, not from expensive things.",
    d: "Stand tall, smile, and say one kind thing to someone."
  }
];

export const STARTERS = [
  "In five years I will be...",
  "By then I will have finished...",
  "I will be proud because...",
  "I will help my family by...",
  "The girl I am becoming is..."
];

export const EXAMPLES = [
  "In five years I will be a nurse, and I will have finished secondary school with good grades.",
  "I will be proud because I stayed in school and learned a skill.",
  "I will help my family by running a small business and saving every month.",
  "By then I will be speaking up for girls in my community."
];

export const SAVEWAYS = [
  "Keep part of any gift money",
  "Ask a parent to keep a small amount for me each week",
  "Join a family or school savings box",
  "Save part of what I earn from a small job",
  "Put aside a little of my pocket money"
];

/**
 * Community contacts directory.
 * Vetted support and counsellor contacts for Charity Schools / Salem City / Warri community.
 */
export const CONTACTS: CommunityContact[] = [
  {
    n: "Theodore",
    r: "Counselor",
    p: "+234 703 135 2492",
    whatsapp: "2347031352492"
  },
  {
    n: "Fortune Akioya",
    r: "Community Support",
    p: "+234 905 212 7886",
    whatsapp: "2349052127886"
  },
  {
    n: "Efeiconic",
    r: "Community Support",
    p: "+234 805 200 0034",
    whatsapp: "2348052000034"
  }
];

export const FOODS: [string, string][] = [
  ["Iron-rich foods", "beans (ewa, moi-moi, akara), ugu and other dark green leaves, liver, fish and eggs."],
  ["Vitamin C", "oranges, guava, tomatoes and peppers help your body use the iron."],
  ["Strong bones", "milk, yoghurt and small fish eaten whole."],
  ["Energy", "rice, yam, sweet potato, plantain and oats."],
  ["Water", "drink through the day, and more when it is hot."]
];

export const MEALS: [string, string][] = [
  ["Morning", "pap (ogi) with akara or moi-moi, and milk."],
  ["Midday", "beans and plantain, or rice with ugu stew and fish, and an orange."],
  ["Evening", "yam or sweet potato with egg and vegetable sauce."],
  ["Snacks", "groundnuts, fruit, boiled corn. Sweets and soft drinks are for sometimes."]
];
