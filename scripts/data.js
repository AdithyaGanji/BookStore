import { shuffle } from './utils.js';

class Book {
  constructor(book) {
    this.bookId = book.bookId;
    this.title = book.title;
    this.genre = book.genre;
    this.priceInCents = book.priceInCents;
    this.imageSource = book.imageSource;
    this.description = book.description;
  }
}

export const books = [
  {
    bookId: 0,
    title: 'The Monsters They Made Us',
    genre: 'Horror',
    priceInCents: 1699,
    imageSource: 'images/book-images/book-1.png',
    description: 'In an isolated town shaped by fear and buried trauma, violence begins to surface in disturbing ways. As cruelty escalates, the boundary between victim and monster erodes. Through psychological dread and visceral horror, the story examines how abuse is learned, inherited, and excused, revealing how communities create horrors and how humanity becomes terrifying.'
  },
  {
    bookId: 1,
    title: 'New World City',
    genre: 'Sci-Fi',
    priceInCents: 1999,
    imageSource: 'images/book-images/book-2.jpg',
    description: 'After ecological collapse, a sprawling metropolis offers safety in exchange for constant surveillance. Citizens accept stability at the cost of privacy. When a data analyst uncovers a system flaw, reality fractures. As truths unravel, the novel explores control, free will, and consequences of engineered perfection within a society built on data and compliance.'
  },
  {
    bookId: 2,
    title: 'Embers of the Republic',
    genre: 'Fantasy',
    priceInCents: 2299,
    imageSource: 'images/book-images/book-3.jpg',
    description: 'In a fractured republic nearing collapse, a loyal soldier is pulled into rebellion after witnessing unforgivable betrayal. Ancient magic stirs beneath political ambition as alliances fall apart. Battles, sacrifice, and moral uncertainty shape rising conflict. The novel explores power, loyalty, and resistance, showing how fading embers of hope ignite revolution.'
  },
  {
    bookId: 3,
    title: 'As The Fallen Rise',
    genre: 'Fantasy',
    priceInCents: 2099,
    imageSource: 'images/book-images/book-4.jpg',
    description: 'In a realm scarred by war, fallen heroes return under mysterious circumstances. Legends are questioned as resurrection threatens balance. A reluctant commander must uncover the truth before devastation spreads. Through myth, warfare, and moral tension, the novel examines redemption, sacrifice, and the consequences of defying death when victory demands unbearable cost.'
  },
  {
    bookId: 4,
    title: 'Shadow Legacy',
    genre: 'Fantasy',
    priceInCents: 1899,
    imageSource: 'images/book-images/book-5.jpeg',
    description: 'In a kingdom ruled by secrets, a young heir uncovers a lineage tied to forbidden magic. As political tension rises, buried histories move in shadow. Betrayal and destiny intertwine as power shifts. The story explores how legacy shapes identity, how darkness tempts survival, and whether embracing it defines or destroys who we become.'
  },
  {
    bookId: 5,
    title: 'Truth Stays Buried',
    genre: 'Thriller',
    priceInCents: 1799,
    imageSource: 'images/book-images/book-6.jpg',
    description: 'A journalist investigates a decades-old crime hidden beneath a town’s polite surface. As secrets emerge, every discovery increases danger. Memories prove unreliable and trust collapses. This psychological thriller explores deception, guilt, and the destructive power of truth, questioning whether uncovering the past is worth the lives it threatens to ruin.'
  },
  {
    bookId: 6,
    title: 'I Know How This Story Ends',
    genre: 'Contemporary Fiction',
    priceInCents: 1599,
    imageSource: 'images/book-images/book-7.jpg',
    description: 'Convinced they already know their life’s ending, a reflective narrator moves through relationships with certainty. Unexpected moments disrupt that belief, forcing confrontation with chance and choice. As certainty fractures, the story explores fate, self-deception, and narrative control, revealing how people misunderstand their lives and futures.'
  },
  {
    bookId: 7,
    title: 'A Drying World',
    genre: 'Dark Fantasy',
    priceInCents: 1999,
    imageSource: 'images/book-images/book-8.jpg',
    description: 'In a land where water vanishes and hope fades, survivors battle over dwindling resources. Desperation reshapes morality as ancient curses awaken. Brutal choices define survival. This dark fantasy explores scarcity, sacrifice, and environmental collapse, showing how desperation transforms societies and forces decisions that blur necessity, cruelty, and extinction.'
  },
  {
    bookId: 8,
    title: 'The Silo',
    genre: 'Thriller',
    priceInCents: 1799,
    imageSource: 'images/book-images/book-9.jpg',
    description: 'After global catastrophe, survivors live confined inside an underground silo. Resources shrink, trust erodes, and paranoia spreads. Authority is questioned when forbidden truths emerge. With no escape, survival depends on courage and cooperation. This claustrophobic thriller explores power, secrecy, and the fragile balance between order and rebellion.'
  },
  {
    bookId: 9,
    title: 'Of Ash and Salt',
    genre: 'Fantasy',
    priceInCents: 2199,
    imageSource: 'images/book-images/book-10.jpg',
    description: 'In a world shaped by fire and sea, rival kingdoms battle for scarce resources. A reluctant heir and disgraced alchemist form an uneasy alliance to prevent annihilation. Political intrigue and elemental magic collide as loss and responsibility intertwine, exploring leadership, grief, and the fragile balance between destruction and renewal.'
  },
  {
    bookId: 10,
    title: 'Knot',
    genre: 'Self-Help',
    priceInCents: 1499,
    imageSource: 'images/book-images/book-11.jpg',
    description: 'This self-help book encourages untangling emotional struggles instead of forcing solutions. Through practical exercises and relatable examples, it teaches patience, awareness, and self-compassion. By understanding inner conflict rather than suppressing it, readers learn how meaningful change develops gradually, fostering resilience, clarity, and healthier relationships.'
  },
  {
    bookId: 11,
    title: "A Slayer's Reckoning",
    genre: 'Urban Fantasy',
    priceInCents: 1899,
    imageSource: 'images/book-images/book-12.jpg',
    description: 'In a modern city hiding supernatural threats, a seasoned monster slayer confronts consequences of past choices. Old enemies return alongside buried guilt. As danger escalates, action and emotion collide. This urban fantasy explores accountability, redemption, and the cost of survival in a world where monsters often wear familiar faces.'
  },
  {
    bookId: 12,
    title: 'Young Gun in New York',
    genre: 'Crime Noir',
    priceInCents: 1599,
    imageSource: 'images/book-images/book-13.jpeg',
    description: 'A young criminal rises through New York’s underworld, driven by ambition and hunger for power. Success comes fast, but loyalty fractures and paranoia grows. Told with sharp dialogue and bleak realism, this noir explores corruption and survival, showing how achievement rots into isolation when fear becomes currency.'
  },
  {
    bookId: 13,
    title: 'Dalia Does a Mitzvah',
    genre: "Children's",
    priceInCents: 999,
    imageSource: 'images/book-images/book-14.jpg',
    description: 'Dalia learns the importance of kindness through simple, everyday actions. Each choice becomes a lesson in empathy, gratitude, and responsibility. Told with warmth and gentle humor, this children’s story introduces meaningful values in an accessible way, helping young readers understand how small good deeds shape friendships and character.'
  },
  {
    bookId: 14,
    title: 'The Happiness Handbook',
    genre: 'Self-Help',
    priceInCents: 1199,
    imageSource: 'images/book-images/book-15.png',
    description: 'This practical guide focuses on building sustainable happiness through small, intentional habits. Emphasizing balance and resilience, it encourages self-awareness over forced positivity. Readers learn to manage stress, redefine success, and cultivate contentment, offering grounded strategies for developing a healthier, more realistic relationship with happiness.'
  },
  {
    bookId: 15,
    title: 'Manly Man of God',
    genre: 'Satire',
    priceInCents: 1599,
    imageSource: 'images/book-images/book-16.jpg',
    description: 'This sharp satire critiques exaggerated masculinity within modern religious culture. Using irony and humor, it exposes insecurity beneath performative faith. Power, belief, and image collide as characters wrestle with identity. The novel questions how rigid ideals distort spirituality and how fear hides behind declarations of strength.'
  },
  {
    bookId: 16,
    title: 'Out of the Night',
    genre: 'Mystery',
    priceInCents: 1699,
    imageSource: 'images/book-images/book-17.jpg',
    description: 'Years after her brother’s disappearance, a woman reopens a cold case that refuses rest. Each revelation challenges memory, truth, and grief. As the past resurfaces, wounds reopen. This slow-burning mystery blends suspense with introspection, exploring loss, uncertainty, and the lasting weight of unanswered questions.'
  },
  {
    bookId: 17,
    title: 'Dojo Dilemmas',
    genre: 'Fiction',
    priceInCents: 1499,
    imageSource: 'images/book-images/book-18.jpg',
    description: 'A struggling martial arts instructor fights to save his failing dojo while confronting regret. Humor and honesty shape this character-driven story about discipline and mentorship. As challenges mount, the novel explores rebuilding purpose beyond physical strength, showing growth through humility, perseverance, and redefining success.'
  },
  {
    bookId: 18,
    title: 'Dead Flowers',
    genre: 'Crime',
    priceInCents: 1599,
    imageSource: 'images/book-images/book-19.jpg',
    description: 'A detective investigates murders marked by strange floral symbols. Each clue reveals deeper corruption and personal loss. As violence escalates, justice grows complicated. This gritty crime novel explores grief, obsession, and moral compromise, revealing how brutality leaves lasting scars and how solving crimes demands confronting darkness.'
  },
  {
    bookId: 19,
    title: 'What Makes You Special?',
    genre: 'Self-Help',
    priceInCents: 1299,
    imageSource: 'images/book-images/book-20.jpg',
    description: 'This self-help book challenges readers to rethink uniqueness in a comparison-driven world. Through reflection and practical advice, it promotes authenticity and self-acceptance. Rather than seeking validation, readers ground confidence in personal values, building a healthier sense of worth, identity, and purpose.'
  },
  {
    bookId: 20,
    title: 'The Summers of Us',
    genre: 'Romance',
    priceInCents: 1599,
    imageSource: 'images/book-images/book-21.jpg',
    description: 'Spanning several summers, this nostalgic romance traces a relationship shaped by timing and missed chances. Tender moments linger as paths diverge. The novel explores love, memory, and impermanence, showing how some connections endure emotionally even when they never fully last.'
  },
  {
    bookId: 21,
    title: 'Chalice of Fortune',
    genre: 'Adventure',
    priceInCents: 1699,
    imageSource: 'images/book-images/book-22.jpg',
    description: 'A daring treasure hunter pursues a legendary artifact rumored to grant immense wealth. Danger rises as rivals and greed close in. This fast-paced adventure questions ambition and morality, asking whether fortune justifies sacrifice and revealing how the pursuit of riches can cost more than promised.'
  },
  {
    bookId: 22,
    title: 'The Honorable Con',
    genre: 'Fantasy',
    priceInCents: 1899,
    imageSource: 'images/book-images/book-23.jpg',
    description: 'A charming con artist lives by strict personal rules, balancing deception with honor. When a scheme collapses, unexpected alliances form. Humor and intrigue drive this fantasy, exploring identity, trust, and morality while questioning whether integrity survives in a world built entirely on lies.'
  },
  {
    bookId: 23,
    title: 'Shear Gifts',
    genre: 'Non-Fiction',
    priceInCents: 1399,
    imageSource: 'images/book-images/book-24.jpg',
    description: 'This non-fiction collection highlights overlooked talents and quiet contributions. Rejecting fame, it reframes success as usefulness and generosity. Thoughtful and accessible, the book honors everyday excellence, showing how meaningful impact often comes from steady effort, compassion, and skills that rarely seek recognition.'
  },
  {
    bookId: 24,
    title: 'The Little Blue Door',
    genre: 'Fiction',
    priceInCents: 1499,
    imageSource: 'images/book-images/book-25.jpg',
    description: 'A mysterious blue door appears at pivotal moments in people’s lives, offering quiet revelation. Each encounter exposes regret, curiosity, and possibility. This atmospheric novel explores how small choices reshape futures, suggesting transformation often arrives subtly, through moments easily ignored yet profoundly life-altering.'
  }
].map((book) => new Book(book) );

export const featuredBooks = shuffle([3, 7, 11, 14, 18, 22]);
