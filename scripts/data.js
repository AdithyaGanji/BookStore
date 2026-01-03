import { shuffle } from './utils.js';

class Book {
  constructor(book) {
    this.bookId = book.bookId;
    this.title = book.title;
    this.author = book.author
    this.genre = book.genre;
    this.description = book.description;
    this.pages = book.pages;
    this.language = book.language
    this.priceInCents = book.priceInCents;
    this.imageSource = book.imageSource;
  }
}

export const books = [
  {
    "bookId": 0,
    "title": "The Monsters They Made Us",
    "author": "Frank J. Camacho",
    "genre": "Horror",
    "description": "In an isolated town shaped by fear and buried trauma, violence begins to surface in disturbing ways. As cruelty escalates, the boundary between victim and monster erodes. Through psychological dread and visceral horror, the story examines how abuse is learned, inherited, and excused, revealing how communities create horrors and how humanity becomes terrifying.",
    "pages": 388,
    "language": "English",
    "priceInCents": 1699,
    "imageSource": "images/book-images/book-1.png"
  },
  {
    "bookId": 1,
    "title": "New World City",
    "author": "Spencer Hey",
    "genre": "Sci-Fi",
    "description": "After ecological collapse, a sprawling metropolis offers safety in exchange for constant surveillance. Citizens accept stability at the cost of privacy. When a data analyst uncovers a system flaw, reality fractures. As truths unravel, the novel explores control, free will, and consequences of engineered perfection within a society built on data and compliance.",
    "pages": 368,
    "language": "English",
    "priceInCents": 1999,
    "imageSource": "images/book-images/book-2.jpg"
  },
  {
    "bookId": 2,
    "title": "Embers of the Republic",
    "author": "Matthew Jordan",
    "genre": "Fantasy",
    "description": "In a fractured republic nearing collapse, a loyal soldier is pulled into rebellion after witnessing unforgivable betrayal. Ancient magic stirs beneath political ambition as alliances fall apart. Battles, sacrifice, and moral uncertainty shape rising conflict. The novel explores power, loyalty, and resistance, showing how fading embers of hope ignite revolution.",
    "pages": 350,
    "language": "English",
    "priceInCents": 2299,
    "imageSource": "images/book-images/book-3.jpg"
  },
  {
    "bookId": 3,
    "title": "As The Fallen Rise",
    "author": "Sadie Hewitt",
    "genre": "Fantasy",
    "description": "In a realm scarred by war, fallen heroes return under mysterious circumstances. Legends are questioned as resurrection threatens balance. A reluctant commander must uncover the truth before devastation spreads. Through myth, warfare, and moral tension, the novel examines redemption, sacrifice, and the consequences of defying death when victory demands unbearable cost.",
    "pages": 445,
    "language": "English",
    "priceInCents": 2099,
    "imageSource": "images/book-images/book-4.jpg"
  },
  {
    "bookId": 4,
    "title": "Shadow Legacy",
    "author": "Colleen Mitchell",
    "genre": "Fantasy",
    "description": "In a kingdom ruled by secrets, a young heir uncovers a lineage tied to forbidden magic. As political tension rises, buried histories move in shadow. Betrayal and destiny intertwine as power shifts. The story explores how legacy shapes identity, how darkness tempts survival, and whether embracing it defines or destroys who we become.",
    "pages": 288,
    "language": "English",
    "priceInCents": 1899,
    "imageSource": "images/book-images/book-5.jpeg"
  },
  {
    "bookId": 5,
    "title": "Truth Stays Buried",
    "author": "Alexia Boland Herrick",
    "genre": "Thriller",
    "description": "A journalist investigates a decades-old crime hidden beneath a town’s polite surface. As secrets emerge, every discovery increases danger. Memories prove unreliable and trust collapses. This psychological thriller explores deception, guilt, and the destructive power of truth, questioning whether uncovering the past is worth the lives it threatens to ruin.",
    "pages": 304,
    "language": "English",
    "priceInCents": 1799,
    "imageSource": "images/book-images/book-6.jpg"
  },
  {
    "bookId": 6,
    "title": "I Know How This Story Ends",
    "author": "Nate Robb",
    "genre": "Contemporary Fiction",
    "description": "Convinced they already know their life’s ending, a reflective narrator moves through relationships with certainty. Unexpected moments disrupt that belief, forcing confrontation with chance and choice. As certainty fractures, the story explores fate, self-deception, and narrative control, revealing how people misunderstand their lives and futures.",
    "pages": 280,
    "language": "English",
    "priceInCents": 1599,
    "imageSource": "images/book-images/book-7.jpg"
  },
  {
    "bookId": 7,
    "title": "A Drying World",
    "author": "Alexander Brandon",
    "genre": "Dark Fantasy",
    "description": "In a land where water vanishes and hope fades, survivors battle over dwindling resources. Desperation reshapes morality as ancient curses awaken. Brutal choices define survival. This dark fantasy explores scarcity, sacrifice, and environmental collapse, showing how desperation transforms societies and forces decisions that blur necessity, cruelty, and extinction.",
    "pages": 413,
    "language": "English",
    "priceInCents": 1999,
    "imageSource": "images/book-images/book-8.jpg"
  },
  {
    "bookId": 8,
    "title": "The Silo",
    "author": "G. S. Heist",
    "genre": "Thriller",
    "description": "After global catastrophe, survivors live confined inside an underground silo. Resources shrink, trust erodes, and paranoia spreads. Authority is questioned when forbidden truths emerge. With no escape, survival depends on courage and cooperation. This claustrophobic thriller explores power, secrecy, and the fragile balance between order and rebellion.",
    "pages": 170,
    "language": "English",
    "priceInCents": 1799,
    "imageSource": "images/book-images/book-9.jpg"
  },
  {
    "bookId": 9,
    "title": "Of Ash and Salt",
    "author": "Daniel G.M. McGee",
    "genre": "Fantasy",
    "description": "In a world shaped by fire and sea, rival kingdoms battle for scarce resources. A reluctant heir and disgraced alchemist form an uneasy alliance to prevent annihilation. Political intrigue and elemental magic collide as loss and responsibility intertwine, exploring leadership, grief, and the fragile balance between destruction and renewal.",
    "pages": 362,
    "language": "English",
    "priceInCents": 2199,
    "imageSource": "images/book-images/book-10.jpg"
  },
  {
    "bookId": 10,
    "title": "Knot By Knot",
    "author": "Davis Moore",
    "genre": "Self-Help",
    "description": "This self-help book encourages untangling emotional struggles instead of forcing solutions. Through practical exercises and relatable examples, it teaches patience, awareness, and self-compassion. By understanding inner conflict rather than suppressing it, readers learn how meaningful change develops gradually, fostering resilience, clarity, and healthier relationships.",
    "pages": 194,
    "language": "English",
    "priceInCents": 1499,
    "imageSource": "images/book-images/book-11.jpg"
  },
  {
    "bookId": 11,
    "title": "A Slayer's Reckoning",
    "author": "Ariel Cross",
    "genre": "Urban Fantasy",
    "description": "In a modern city hiding supernatural threats, a seasoned monster slayer confronts consequences of past choices. Old enemies return alongside buried guilt. As danger escalates, action and emotion collide. This urban fantasy explores accountability, redemption, and the cost of survival in a world where monsters often wear familiar faces.",
    "pages": 199,
    "language": "English",
    "priceInCents": 1899,
    "imageSource": "images/book-images/book-12.jpg"
  },
  {
    "bookId": 12,
    "title": "Young Gun in New York",
    "author": "Eddie McBoon",
    "genre": "Crime Noir",
    "description": "A young criminal rises through New York’s underworld, driven by ambition and hunger for power. Success comes fast, but loyalty fractures and paranoia grows. Told with sharp dialogue and bleak realism, this noir explores corruption and survival, showing how achievement rots into isolation when fear becomes currency.",
    "pages": 160,
    "language": "English",
    "priceInCents": 1599,
    "imageSource": "images/book-images/book-13.jpeg"
  },
  {
    "bookId": 13,
    "title": "Dalia Does a Mitzvah",
    "author": "Jenna D.",
    "genre": "Children's",
    "description": "Dalia learns the importance of kindness through simple, everyday actions. Each choice becomes a lesson in empathy, gratitude, and responsibility. Told with warmth and gentle humor, this children’s story introduces meaningful values in an accessible way, helping young readers understand how small good deeds shape friendships and character.",
    "pages": 32,
    "language": "English",
    "priceInCents": 999,
    "imageSource": "images/book-images/book-14.jpg"
  },
  {
    "bookId": 14,
    "title": "The Happiness Handbook",
    "author": "Dr. Ken Harmon",
    "genre": "Self-Help",
    "description": "This practical guide focuses on building sustainable happiness through small, intentional habits. Emphasizing balance and resilience, it encourages self-awareness over forced positivity. Readers learn to manage stress, redefine success, and cultivate contentment, offering grounded strategies for developing a healthier, more realistic relationship with happiness.",
    "pages": 140,
    "language": "English",
    "priceInCents": 1199,
    "imageSource": "images/book-images/book-15.png"
  },
  {
    "bookId": 15,
    "title": "Manly Man of God",
    "author": "Katharine Strange",
    "genre": "Satire",
    "description": "This sharp satire critiques exaggerated masculinity within modern religious culture. Using irony and humor, it exposes insecurity beneath performative faith. Power, belief, and image collide as characters wrestle with identity. The novel questions how rigid ideals distort spirituality and how fear hides behind declarations of strength.",
    "pages": 302,
    "language": "English",
    "priceInCents": 1599,
    "imageSource": "images/book-images/book-16.jpg"
  },
  {
    "bookId": 16,
    "title": "Out of the Night",
    "author": "Jonathan C. Blazer",
    "genre": "Mystery",
    "description": "Years after her brother’s disappearance, a woman reopens a cold case that refuses rest. Each revelation challenges memory, truth, and grief. As the past resurfaces, wounds reopen. This slow-burning mystery blends suspense with introspection, exploring loss, uncertainty, and the lasting weight of unanswered questions.",
    "pages": 590,
    "language": "English",
    "priceInCents": 1699,
    "imageSource": "images/book-images/book-17.jpg"
  },
  {
    "bookId": 17,
    "title": "Dojo Dilemmas",
    "author": "Joseph Cucci",
    "genre": "Fiction",
    "description": "A struggling martial arts instructor fights to save his failing dojo while confronting regret. Humor and honesty shape this character-driven story about discipline and mentorship. As challenges mount, the novel explores rebuilding purpose beyond physical strength, showing growth through humility, perseverance, and redefining success.",
    "pages": 304,
    "language": "English",
    "priceInCents": 1499,
    "imageSource": "images/book-images/book-18.jpg"
  },
  {
    "bookId": 18,
    "title": "Dead Flowers",
    "author": "J.M. Petrick",
    "genre": "Crime",
    "description": "A detective investigates murders marked by strange floral symbols. Each clue reveals deeper corruption and personal loss. As violence escalates, justice grows complicated. This gritty crime novel explores grief, obsession, and moral compromise, revealing how brutality leaves lasting scars and how solving crimes demands confronting darkness.",
    "pages": 320,
    "language": "English",
    "priceInCents": 1599,
    "imageSource": "images/book-images/book-19.jpg"
  },
  {
    "bookId": 19,
    "title": "What Makes You Special?",
    "author": "Mohona Datta",
    "genre": "Self-Help",
    "description": "This self-help book challenges readers to rethink uniqueness in a comparison-driven world. Through reflection and practical advice, it promotes authenticity and self-acceptance. Rather than seeking validation, readers ground confidence in personal values, building a healthier sense of worth, identity, and purpose.",
    "pages": 150,
    "language": "English",
    "priceInCents": 1299,
    "imageSource": "images/book-images/book-20.jpg"
  },
  {
    "bookId": 20,
    "title": "The Summers of Us",
    "author": "Taylor Crooks",
    "genre": "Romance",
    "description": "Spanning several summers, this nostalgic romance traces a relationship shaped by timing and missed chances. Tender moments linger as paths diverge. The novel explores love, memory, and impermanence, showing how some connections endure emotionally even when they never fully last.",
    "pages": 338,
    "language": "English",
    "priceInCents": 1599,
    "imageSource": "images/book-images/book-21.jpg"
  },
  {
    "bookId": 21,
    "title": "Chalice of Fortune",
    "author": "Sarah L. Barnett",
    "genre": "Adventure",
    "description": "A daring treasure hunter pursues a legendary artifact rumored to grant immense wealth. Danger rises as rivals and greed close in. This fast-paced adventure questions ambition and morality, asking whether fortune justifies sacrifice and revealing how the pursuit of riches can cost more than promised.",
    "pages": 266,
    "language": "English",
    "priceInCents": 1699,
    "imageSource": "images/book-images/book-22.jpg"
  },
  {
    "bookId": 22,
    "title": "The Honorable Con",
    "author": "Michele C. Shaw",
    "genre": "Fantasy",
    "description": "A charming con artist lives by strict personal rules, balancing deception with honor. When a scheme collapses, unexpected alliances form. Humor and intrigue drive this fantasy, exploring identity, trust, and morality while questioning whether integrity survives in a world built entirely on lies.",
    "pages": 310,
    "language": "English",
    "priceInCents": 1899,
    "imageSource": "images/book-images/book-23.jpg"
  },
  {
    "bookId": 23,
    "title": "Shear Gifts",
    "author": "Christy Foldenauer",
    "genre": "Non-Fiction",
    "description": "This non-fiction collection highlights overlooked talents and quiet contributions. Rejecting fame, it reframes success as usefulness and generosity. Thoughtful and accessible, the book honors everyday excellence, showing how meaningful impact often comes from steady effort, compassion, and skills that rarely seek recognition.",
    "pages": 264,
    "language": "English",
    "priceInCents": 1399,
    "imageSource": "images/book-images/book-24.jpg"
  },
  {
    "bookId": 24,
    "title": "The Little Blue Door",
    "author": "Francesca Catlow",
    "genre": "Fiction",
    "description": "A mysterious blue door appears at pivotal moments in people’s lives, offering quiet revelation. Each encounter exposes regret, curiosity, and possibility. This atmospheric novel explores how small choices reshape futures, suggesting transformation often arrives subtly, through moments easily ignored yet profoundly life-altering.",
    "pages": 236,
    "language": "English",
    "priceInCents": 1499,
    "imageSource": "images/book-images/book-25.jpg"
  }
].map((book) => new Book(book) );

export const featuredBooks = shuffle([3, 7, 11, 14, 18, 22]);
