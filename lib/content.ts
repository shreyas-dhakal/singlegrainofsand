export const site = {
  name: "Single Grain of Sand",
  artist: "Kelly Ingerson",
  tagline: "Photography by Kelly Ingerson",
  phone: "0491 962 451",
  phoneHref: "tel:+61491962451",
  email: "singlegrainofsandaustralia@gmail.com",
  instagram: "https://www.instagram.com/singlegrainofsand/",
  instagramHandle: "@singlegrainofsand",
};

export const intro =
  "It begins with a single grain of sand; the dance between the ocean and the sand. Sand photography has become a treasure hunt, always in search of patterns that tell a story, uncovering hidden images or just getting lost in all the lines, swirls, and circles. It is a never-ending canvas that changes constantly. These unique one-of-a-kind designs are nature’s temporal gift to us, as the waves will soon erase the image and replace it with another.";

export const storm = {
  lead: "Nature leaves behind more than debris after a storm—sometimes, it sculpts fleeting masterpieces. In this collection, artist Kelly Ingerson captures the beauty of sand formations shaped by wild storms, transforming their aftermath into meditative visual poetry.",
  quote:
    "It’s in the quiet aftermath of chaos that striking compositions, patterns, textures, and abstract designs reveal themselves, scattered across the shoreline.",
  body: "The power of these storms sends wind and waves into a wild fury, crashing onto the beach and hurling sand particles in every direction. The resulting natural etchings—often erased within hours—are one-of-a-kind visions, frozen in time. They invite reflection on fragility, impermanence, and the raw artistry of nature.",
};

export const portfolioIntro =
  "This portfolio showcases my sand photography, capturing the ever-changing beauty of coastal landscapes across Australia and the United States through my artistic lens and love for nature.";

export type Photo = { src: string; thumb: string; width: number; height: number };

const img = (name: string, width: number, height: number): Photo => ({
  src: `/images/${name}.webp`,
  thumb: `/images/${name}-sm.webp`,
  width,
  height,
});

export type Collection = {
  slug: string;
  title: string;
  place: string;
  country: "USA" | "Australia";
  images: Photo[];
};

export const collections: Collection[] = [
  { slug: "big-sur", title: "Big Sur", place: "California", country: "USA", images: [img("big-sur-1", 1200, 1600), img("big-sur-2", 1067, 1600), img("big-sur-3", 1112, 1600)] },
  { slug: "honeymoon-island", title: "Honeymoon Island", place: "Florida", country: "USA", images: [img("honeymoon-1", 1600, 1067), img("honeymoon-2", 1067, 1600), img("honeymoon-3", 1600, 1067)] },
  { slug: "crescent-city", title: "Crescent City", place: "California", country: "USA", images: [img("crescent-city-1", 1200, 800), img("crescent-city-2", 1135, 1600), img("crescent-city-3", 800, 1200)] },
  { slug: "gold-beach", title: "Gold Beach", place: "Oregon", country: "USA", images: [img("gold-beach-1", 1600, 1067), img("gold-beach-2", 1600, 1067), img("gold-beach-3", 1600, 1067)] },
  { slug: "buckroe-beach", title: "Buckroe Beach", place: "Hampton, Virginia", country: "USA", images: [img("buckroe-1", 800, 1200), img("buckroe-2", 1066, 1600), img("buckroe-3", 1066, 1600)] },
  { slug: "seacliff-beach", title: "Seacliff Beach", place: "Adelaide, South Australia", country: "Australia", images: [img("seacliff-1", 1600, 1200), img("seacliff-2", 1600, 994), img("seacliff-3", 1600, 1066)] },
];

export const testimonials = [
  {
    quote:
      "Kelly’s sand photography really stands out. As someone who collects photography, I’m always drawn to work that feels different—and hers does. Each image captures a brief, beautiful moment shaped by the ocean, almost like nature’s own abstract artwork. There’s something peaceful and grounding about them. They’re the kind of pieces you keep coming back to, always noticing something new.",
    name: "Julie Riley",
    role: "Artist",
    href: "http://www.julierileyart.com/",
  },
  {
    quote:
      "We couldn’t be happier with the artwork we purchased from Kelly. Her work brings a refined, artistic touch to our showroom and office spaces, perfectly complimenting the style and design aesthetic we strive for in our business. As a flooring and design company, visual impact is everything — and Kelly’s artwork captures the same level of detail, craftsmanship, and creativity that we offer our clients. The pieces have not only elevated our interior but have also become a talking point for visitors. We highly recommend her work to anyone looking to enhance their space with thoughtful, beautifully composed photography.",
    name: "Matthew McGee",
    role: "Business Owner, Heber City, Utah",
  },
];

export const bio = [
  "Kelly Ingerson is a professional photographer and artist. Born and raised in Australia, she moved to the USA in the late 90’s. In 2015 Kelly found a unique niche with her photography: sand. Living in Hampton Roads, Virginia, the beaches along the East Coast were her canvases — never-ending and forever changing. It’s the dance between the ocean wave and the grains of sand that lie patiently in wait that creates these beautiful, one-of-a-kind masterpieces that will never be repeated.",
  "In 2017 Kelly was invited to her first juried exhibition at the Williamsburg Contemporary Art Center in Williamsburg, Virginia. This opportunity opened a door that has led to an amazing journey of travel, creativity, unique gallery opportunities and increased sales.",
  "In 2019 Kelly moved to Ohio to be with her son after he was diagnosed with Multiple Sclerosis. To find avenues to promote her art, Kelly found Front Street, an art and artisan district in Dayton, Ohio. In September of 2019 Kelly was invited to become a member of The ARTery Gallery at Front Street.",
  "Kelly has exhibited in many shows both locally and nationally, and has had numerous successful solo shows. In 2021 she was invited to exhibit at the Spectrum Art Show during Art Basel Week in Miami, Florida, where she sold her photography to an international collector.",
  "As Kelly has a heart some say is untamed, her audacious spirit and gypsy soul drive her to travel in search of incredible adventures. In 2020, during the pandemic, Kelly left Ohio to drive across the USA solo — crossing 19 states, visiting 12 National Parks, numerous State Parks and National Monuments, and racking up almost 10,000 miles in 28 days. The car rental company was humorously surprised at the number of miles on the odometer, taking the ‘unlimited mileage’ benefit to a whole new level.",
  "Kelly has stepped out of her comfort zone to find herself as a person and an artist. Her western tour through some of the most impressive vastness of the West allowed her to photograph a treasure trove of untamed animals, intriguing landscapes and emotionally stirring sunrises and sunsets.",
  "Kelly has returned to Australia to scour the coastlines of her sunburnt country for amazing sand, adding an Australian collection to her already successful American collection. In this past year Kelly has exhibited, made private and commercial art sales, and has been working with a publisher on a book, to be released in 2026.",
];

export const bioQuote = {
  quote:
    "Ingerson has been described as “the exuberant Aussie” because of her vivacious personality, unwavering optimism, and untamed spirit, all of which are expressed through her captivating art.",
  name: "Katie Clark Gabbard",
};

export const milestones = [
  { year: "2015", text: "Finds her niche: sand" },
  { year: "2017", text: "First juried exhibition, Williamsburg Contemporary Art Center" },
  { year: "2019", text: "Joins The ARTery Gallery at Front Street, Dayton" },
  { year: "2020", text: "Solo drive across the USA — 19 states, 12 national parks, 28 days" },
  { year: "2021", text: "Spectrum Art Show, Art Basel Week, Miami" },
  { year: "2026", text: "Book release" },
];
